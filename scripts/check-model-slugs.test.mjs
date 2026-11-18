// Run with: node --test scripts/*.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import {
  CheckError,
  checkModelSlugs,
  collectReferences,
  extractSlugs,
  fetchCatalog,
  getWithRetry,
} from './check-model-slugs.mjs';

const noWait = async () => {};
const json = (status, body) => new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

/** A fake API: `catalog` is the full list, served at most `serverPageCap` per page. */
function fakeApi({ catalog, serverPageCap = 200, details = {} }) {
  const calls = [];
  const fetchImpl = async (url) => {
    calls.push(url);
    const { pathname, searchParams } = new URL(url);
    if (pathname === '/v1/models') {
      const limit = Math.min(Number(searchParams.get('limit')), serverPageCap);
      const offset = Number(searchParams.get('offset'));
      return json(200, catalog.slice(offset, offset + limit).map((slug) => ({ slug })));
    }
    const slug = decodeURIComponent(pathname.replace('/v1/models/', ''));
    if (slug in details) return json(details[slug], {});
    return catalog.includes(slug) ? json(200, { slug }) : json(404, { error: 'Failed to fetch model: not found' });
  };
  return { fetchImpl, calls };
}

function makeSkills(files) {
  const root = mkdtempSync(join(tmpdir(), 'skills-'));
  for (const [path, content] of Object.entries(files)) {
    const full = join(root, path);
    mkdirSync(join(full, '..'), { recursive: true });
    writeFileSync(full, content);
  }
  return root;
}

const PREDICTION_SKILL = 'POST https://api.eachlabs.ai/v1/prediction\n';

// --- extractSlugs ---------------------------------------------------------

test('reads the slug column of a model table and ignores other columns', () => {
  const md = [
    '| Model | Slug | Best For |',
    '|-------|------|----------|',
    '| ElevenLabs TTS | `elevenlabs-text-to-speech` | `high-quality` TTS |',
    '| Kokoro 82M | `kokoro-82m` | Lightweight |',
  ].join('\n');
  assert.deepEqual(extractSlugs(md), [
    { slug: 'elevenlabs-text-to-speech', line: 3 },
    { slug: 'kokoro-82m', line: 4 },
  ]);
});

test('reads a "Model Slug" column that is not the second column', () => {
  const md = ['| Use Case | Model Slug | Speed |', '|---|---|---|', '| Images | `flux-2-pro` | Fast |'].join('\n');
  assert.deepEqual(extractSlugs(md), [{ slug: 'flux-2-pro', line: 3 }]);
});

test('ignores parameter tables, which have no slug column', () => {
  const md = [
    '| Parameter | Type | Required |',
    '|-----------|------|----------|',
    '| `prompt` | string | Yes |',
    '| `seed` | integer | No |',
  ].join('\n');
  assert.deepEqual(extractSlugs(md), []);
});

test('a parameter table right after a model table does not inherit its slug column', () => {
  const md = [
    '| Model | Slug |',
    '|---|---|',
    '| A | `model-a` |',
    '',
    '| Parameter | Slug-like |',
    '|---|---|',
    '| `prompt` | `not-a-model` |',
  ].join('\n');
  assert.deepEqual(extractSlugs(md), [{ slug: 'model-a', line: 3 }]);
});

test('reads **Slug:** lines', () => {
  assert.deepEqual(extractSlugs('## Some Model\n\n**Slug:** `xai-grok-imagine-image-edit`\n'), [
    { slug: 'xai-grok-imagine-image-edit', line: 3 },
  ]);
});

test('reads "model" fields only inside code blocks', () => {
  const md = [
    'The "model": "prose-mention" here is not a request.',
    '```json',
    '{ "model": "nano-banana-pro", "version": "0.0.1" }',
    '```',
  ].join('\n');
  assert.deepEqual(extractSlugs(md), [{ slug: 'nano-banana-pro', line: 3 }]);
});

test('skips placeholders and router-style names that are not catalog slugs', () => {
  const md = ['```', '"model": "<slug>"', '"model": "eachsense/beta"', '"model": "{model}"', '```'].join('\n');
  assert.deepEqual(extractSlugs(md), []);
});

test('handles CRLF line endings', () => {
  assert.deepEqual(extractSlugs('**Slug:** `kokoro-82m`\r\n'), [{ slug: 'kokoro-82m', line: 1 }]);
});

// --- collectReferences ----------------------------------------------------

test('only reads skills whose SKILL.md calls /v1/prediction', () => {
  const dir = makeSkills({
    'api-skill/SKILL.md': PREDICTION_SKILL + '**Slug:** `model-a`\n',
    'api-skill/references/MODELS.md': '**Slug:** `model-b`\n',
    'sense-skill/SKILL.md': 'Uses each::sense.\n**Slug:** `should-be-ignored`\n',
  });
  try {
    const { skills, references } = collectReferences(dir);
    assert.equal(skills.length, 1);
    assert.deepEqual([...references.keys()].sort(), ['model-a', 'model-b']);
    assert.deepEqual(references.get('model-b'), [{ file: 'api-skill/references/MODELS.md', line: 1 }]);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('fails instead of passing when no prediction skill is found', () => {
  const dir = makeSkills({ 'sense-skill/SKILL.md': 'nothing here\n' });
  try {
    assert.throws(() => collectReferences(dir), CheckError);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('fails instead of passing when prediction skills contain no slug', () => {
  const dir = makeSkills({ 'api-skill/SKILL.md': PREDICTION_SKILL });
  try {
    assert.throws(() => collectReferences(dir), /no model slug/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

// --- fetchCatalog ---------------------------------------------------------

test('keeps paging when the server returns fewer items than requested', async () => {
  // The live API caps pages at 200 even when more are requested. A short page
  // must not be taken as the last one.
  const catalog = Array.from({ length: 450 }, (_, i) => `model-${i}`);
  const { fetchImpl, calls } = fakeApi({ catalog, serverPageCap: 150 });
  const slugs = await fetchCatalog({ fetchImpl, wait: noWait });
  assert.equal(slugs.size, 450);
  assert.equal(calls.length, 4); // 150 + 150 + 150 + empty page
});

test('refuses an empty catalog instead of reporting every slug as missing', async () => {
  const { fetchImpl } = fakeApi({ catalog: [] });
  await assert.rejects(fetchCatalog({ fetchImpl, wait: noWait }), /catalog is empty/);
});

test('refuses a catalog response that is not an array', async () => {
  const fetchImpl = async () => json(200, { error: 'unexpected' });
  await assert.rejects(fetchCatalog({ fetchImpl, wait: noWait }), /did not return a JSON array/);
});

test('refuses catalog items without a slug', async () => {
  const fetchImpl = async () => json(200, [{ title: 'No slug' }]);
  await assert.rejects(fetchCatalog({ fetchImpl, wait: noWait }), /without a slug/);
});

// --- getWithRetry ---------------------------------------------------------

test('retries 5xx, 429 and network errors, then succeeds', async () => {
  const answers = [() => json(503, {}), () => json(429, {}), () => Promise.reject(new Error('socket hang up')), () => json(200, [])];
  const waits = [];
  const fetchImpl = async () => answers.shift()();
  const response = await getWithRetry('https://example.test', { fetchImpl, wait: async (ms) => waits.push(ms) });
  assert.equal(response.status, 200);
  assert.deepEqual(waits, [1000, 2000, 4000]);
});

test('does not retry a 404', async () => {
  let calls = 0;
  const fetchImpl = async () => {
    calls++;
    return json(404, {});
  };
  const response = await getWithRetry('https://example.test', { fetchImpl, wait: noWait });
  assert.equal(response.status, 404);
  assert.equal(calls, 1);
});

test('gives up after the last attempt with a clear error', async () => {
  const fetchImpl = async () => json(500, {});
  await assert.rejects(getWithRetry('https://example.test', { fetchImpl, wait: noWait }), /failed after 4 attempts: HTTP 500/);
});

// --- checkModelSlugs ------------------------------------------------------

test('reports missing slugs with every place they are used', async () => {
  const dir = makeSkills({
    'api-skill/SKILL.md': PREDICTION_SKILL + '**Slug:** `live-model`\n**Slug:** `gone-model`\n',
    'api-skill/references/MODELS.md': '```\n"model": "gone-model"\n```\n',
  });
  try {
    const { fetchImpl } = fakeApi({ catalog: ['live-model'] });
    const result = await checkModelSlugs({ skillsDir: dir, fetchImpl, wait: noWait });
    assert.equal(result.slugsChecked, 2);
    assert.deepEqual(result.missing, [
      {
        slug: 'gone-model',
        references: [
          { file: 'api-skill/SKILL.md', line: 3 },
          { file: 'api-skill/references/MODELS.md', line: 2 },
        ],
      },
    ]);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('a slug missing from the paged list but found by its own URL is not reported as missing', async () => {
  const dir = makeSkills({ 'api-skill/SKILL.md': PREDICTION_SKILL + '**Slug:** `hidden-model`\n' });
  try {
    const { fetchImpl } = fakeApi({ catalog: ['other-model'], details: { 'hidden-model': 200 } });
    const result = await checkModelSlugs({ skillsDir: dir, fetchImpl, wait: noWait });
    assert.deepEqual(result.missing, []);
    assert.deepEqual(result.unlisted, ['hidden-model']);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('an unexpected status on the second look stops the check instead of guessing', async () => {
  const dir = makeSkills({ 'api-skill/SKILL.md': PREDICTION_SKILL + '**Slug:** `odd-model`\n' });
  try {
    const { fetchImpl } = fakeApi({ catalog: ['other-model'], details: { 'odd-model': 401 } });
    await assert.rejects(checkModelSlugs({ skillsDir: dir, fetchImpl, wait: noWait }), /HTTP 401/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
