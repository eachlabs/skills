#!/usr/bin/env node
// Checks that every model slug referenced by the each::api skills exists in
// the public each::labs model catalog.
//
// Usage:
//   node scripts/check-model-slugs.mjs [--json] [--skills-dir <dir>]
//
// Exit codes:
//   0  every referenced slug was found
//   1  at least one referenced slug was not found
//   2  the check could not run (network error, empty catalog, no skills found)
//
// Only public, unauthenticated endpoints are used, so no API key is needed and
// nothing is billed:
//   GET /v1/models          paged catalog
//   GET /v1/models/{slug}   second look for slugs the paged catalog does not list

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

export const API_BASE = 'https://api.eachlabs.ai';
const PAGE_SIZE = 200;
const MAX_PAGES = 100;
const REQUEST_TIMEOUT_MS = 30_000;
const MAX_ATTEMPTS = 4;
const DETAIL_CONCURRENCY = 4;

// Same shape as the catalog's own slugs: lowercase letters, digits, dots and
// hyphens. Anything else (placeholders such as <slug>, prose) is not a slug.
const SLUG_PATTERN = /^[a-z0-9][a-z0-9.-]*[a-z0-9]$/;

export class CheckError extends Error {}

// ---------------------------------------------------------------------------
// Finding the skills that call the predictions API
// ---------------------------------------------------------------------------

/** Skill folders whose SKILL.md sends requests to the predictions API. */
export function findPredictionSkills(skillsDir) {
  if (!existsSync(skillsDir)) throw new CheckError(`Skills folder not found: ${skillsDir}`);
  return readdirSync(skillsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => join(skillsDir, entry.name))
    .filter((dir) => {
      const skillFile = join(dir, 'SKILL.md');
      return existsSync(skillFile) && readFileSync(skillFile, 'utf8').includes('/v1/prediction');
    })
    .sort();
}

function listMarkdownFiles(dir) {
  return readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) return listMarkdownFiles(path);
      return entry.name.endsWith('.md') ? [path] : [];
    })
    .sort();
}

// ---------------------------------------------------------------------------
// Extracting slugs from markdown
// ---------------------------------------------------------------------------

function splitTableRow(line) {
  return line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((cell) => cell.trim());
}

const isTableRow = (line) => line.trim().startsWith('|');
const isSeparatorRow = (line) => /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)*\|?$/.test(line.trim());
const isSlugHeader = (cell) => /^(model\s+)?slug$/i.test(cell);
const backticked = (text) => [...text.matchAll(/`([^`]+)`/g)].map((match) => match[1].trim());

/**
 * Returns every model slug in one markdown document, with its line number.
 * Three places are read, all written in a fixed form across the skills:
 *   - `**Slug:** \`name\`` lines (references/MODELS.md)
 *   - the "Slug" or "Model Slug" column of a markdown table
 *   - `"model": "name"` inside fenced code blocks (request examples)
 */
export function extractSlugs(markdown) {
  const lines = markdown.split(/\r?\n/);
  const found = [];
  const add = (slug, index) => {
    if (SLUG_PATTERN.test(slug)) found.push({ slug, line: index + 1 });
  };

  let inCode = false;
  let slugColumn = -1;

  lines.forEach((line, index) => {
    if (/^\s*(```|~~~)/.test(line)) {
      inCode = !inCode;
      return;
    }

    if (inCode) {
      for (const match of line.matchAll(/"model"\s*:\s*"([^"]+)"/g)) add(match[1], index);
      return;
    }

    const slugLine = line.match(/^\s*\*\*Slug:\*\*\s*(.*)$/);
    if (slugLine) {
      backticked(slugLine[1]).forEach((slug) => add(slug, index));
      return;
    }

    if (!isTableRow(line)) {
      slugColumn = -1;
      return;
    }

    const next = lines[index + 1] ?? '';
    if (slugColumn === -1 && isSeparatorRow(next)) {
      // Header row: remember which column holds the slug, if any.
      slugColumn = splitTableRow(line).findIndex(isSlugHeader);
      if (slugColumn === -1) slugColumn = -2; // a table without a slug column
      return;
    }
    if (slugColumn < 0 || isSeparatorRow(line)) return;

    const cell = splitTableRow(line)[slugColumn];
    if (cell) backticked(cell).forEach((slug) => add(slug, index));
  });

  return found;
}

/** Map of slug -> [{ file, line }] across every prediction skill. */
export function collectReferences(skillsDir) {
  const skills = findPredictionSkills(skillsDir);
  if (skills.length === 0) {
    throw new CheckError(`No skill under ${skillsDir} calls /v1/prediction; nothing to check.`);
  }

  const references = new Map();
  for (const skill of skills) {
    for (const file of listMarkdownFiles(skill)) {
      for (const { slug, line } of extractSlugs(readFileSync(file, 'utf8'))) {
        if (!references.has(slug)) references.set(slug, []);
        references.get(slug).push({ file: relative(skillsDir, file).replaceAll('\\', '/'), line });
      }
    }
  }
  if (references.size === 0) {
    throw new CheckError('The prediction skills were found but no model slug could be read from them.');
  }
  return { skills, references };
}

// ---------------------------------------------------------------------------
// Reading the catalog
// ---------------------------------------------------------------------------

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const isRetryable = (status) => status === 429 || status >= 500;

/** GET with a timeout, retrying network errors, 429 and 5xx with backoff. */
export async function getWithRetry(url, { fetchImpl = fetch, wait = sleep } = {}) {
  let lastProblem;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const response = await fetchImpl(url, { signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS) });
      if (!isRetryable(response.status)) return response;
      lastProblem = `HTTP ${response.status}`;
    } catch (error) {
      lastProblem = error?.message ?? String(error);
    }
    if (attempt < MAX_ATTEMPTS) await wait(1000 * 2 ** (attempt - 1));
  }
  throw new CheckError(`GET ${url} failed after ${MAX_ATTEMPTS} attempts: ${lastProblem}`);
}

/**
 * Every slug in the paged catalog. The server may return fewer items than
 * requested per page, so paging continues until an empty page, never on a
 * short one.
 */
export async function fetchCatalog({ fetchImpl = fetch, wait = sleep, base = API_BASE } = {}) {
  const slugs = new Set();
  let offset = 0;

  for (let page = 0; page < MAX_PAGES; page++) {
    const url = `${base}/v1/models?limit=${PAGE_SIZE}&offset=${offset}`;
    const response = await getWithRetry(url, { fetchImpl, wait });
    if (!response.ok) throw new CheckError(`GET ${url} returned HTTP ${response.status}`);

    const items = await response.json().catch(() => null);
    if (!Array.isArray(items)) throw new CheckError(`GET ${url} did not return a JSON array`);
    if (items.length === 0) {
      if (slugs.size === 0) throw new CheckError('The model catalog is empty; refusing to report every slug as missing.');
      return slugs;
    }

    for (const item of items) {
      if (typeof item?.slug !== 'string' || item.slug === '') {
        throw new CheckError(`GET ${url} returned an item without a slug`);
      }
      slugs.add(item.slug);
    }
    offset += items.length;
  }
  throw new CheckError(`The catalog did not end within ${MAX_PAGES} pages; stopping.`);
}

/** Second look at one slug through GET /v1/models/{slug}: true, false or a CheckError. */
export async function slugExists(slug, { fetchImpl = fetch, wait = sleep, base = API_BASE } = {}) {
  const url = `${base}/v1/models/${encodeURIComponent(slug)}`;
  const response = await getWithRetry(url, { fetchImpl, wait });
  if (response.ok) return true;
  if (response.status === 404) return false;
  throw new CheckError(`GET ${url} returned HTTP ${response.status}`);
}

async function mapWithConcurrency(items, limit, worker) {
  const results = new Array(items.length);
  let next = 0;
  const run = async () => {
    while (next < items.length) {
      const index = next++;
      results[index] = await worker(items[index]);
    }
  };
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
  return results;
}

// ---------------------------------------------------------------------------
// The check
// ---------------------------------------------------------------------------

export async function checkModelSlugs({ skillsDir, fetchImpl = fetch, wait = sleep, base = API_BASE }) {
  const { skills, references } = collectReferences(skillsDir);
  const catalog = await fetchCatalog({ fetchImpl, wait, base });

  const notListed = [...references.keys()].filter((slug) => !catalog.has(slug)).sort();
  const exists = await mapWithConcurrency(notListed, DETAIL_CONCURRENCY, (slug) =>
    slugExists(slug, { fetchImpl, wait, base }),
  );

  const missing = notListed.filter((_, i) => !exists[i]).map((slug) => ({ slug, references: references.get(slug) }));
  const unlisted = notListed.filter((_, i) => exists[i]);

  return {
    skillsChecked: skills.length,
    slugsChecked: references.size,
    catalogSize: catalog.size,
    missing,
    unlisted,
  };
}

function formatReport(result) {
  const lines = [
    `Checked ${result.slugsChecked} model slugs in ${result.skillsChecked} skills against ${result.catalogSize} catalog models.`,
  ];
  if (result.unlisted.length > 0) {
    lines.push(
      '',
      `${result.unlisted.length} slug(s) exist but are not in the paged catalog (GET /v1/models/{slug} answers 200):`,
      ...result.unlisted.map((slug) => `  ${slug}`),
    );
  }
  if (result.missing.length === 0) {
    lines.push('', 'Every referenced slug exists.');
    return lines.join('\n');
  }
  lines.push('', `${result.missing.length} slug(s) not found (GET /v1/models/{slug} answers 404):`);
  for (const { slug, references } of result.missing) {
    lines.push(`  ${slug}`);
    for (const { file, line } of references) lines.push(`    ${file}:${line}`);
  }
  return lines.join('\n');
}

function parseArgs(argv) {
  const options = { json: false, skillsDir: fileURLToPath(new URL('../skills', import.meta.url)) };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--json') options.json = true;
    else if (argv[i] === '--skills-dir' && argv[i + 1]) options.skillsDir = argv[++i];
    else throw new CheckError(`Unknown argument: ${argv[i]}`);
  }
  return options;
}

async function main() {
  try {
    const options = parseArgs(process.argv.slice(2));
    const result = await checkModelSlugs({ skillsDir: options.skillsDir });
    console.log(options.json ? JSON.stringify(result, null, 2) : formatReport(result));
    process.exitCode = result.missing.length === 0 ? 0 : 1;
  } catch (error) {
    console.error(error instanceof CheckError ? error.message : error);
    process.exitCode = 2;
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  await main();
}
