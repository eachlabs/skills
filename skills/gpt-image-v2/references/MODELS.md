# GPT Image v2 — Parameter Reference

Both models use API version `0.0.1` and are served from `POST https://api.eachlabs.ai/v1/prediction`.

> **Schema note:** The public `llms.txt` for both slugs lists only `prompt` (and `image_url` for edit) as documented, with the request body otherwise open. Fetch the live `request_schema` via `GET https://api.eachlabs.ai/v1/model?slug=<slug>` before building `input` — additional tunables (size, quality, background, output format, number of images) are available and follow the GPT Image family pattern (see v1.5 for the existing superset). Only pass parameters that appear in the live schema.

---

## GPT Image | v2 | Text to Image

**Slug:** `gpt-image-v2-text-to-image`
**Category:** Text to Image
**Output:** array of image URLs
**Estimated processing time:** ~40 seconds

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text description of the desired image. Supports long, detailed prompts including exact quoted text for rendering. |

Additional parameters commonly exposed across the GPT Image family (verify against the live schema before use): `image_size`, `background`, `quality`, `num_images`, `output_format`, `sync_mode`, `webhook_url`.

### Example

```bash
curl -X POST https://api.eachlabs.ai/v1/prediction \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -d '{
    "model": "gpt-image-v2-text-to-image",
    "version": "0.0.1",
    "input": {
      "prompt": "Editorial product photo of a matte-black espresso grinder on a travertine counter, soft 45-degree window light, shallow depth of field, the dial reading \"GRIND 7\" rendered sharply"
    }
  }'
```

---

## GPT Image | v2 | Edit

**Slug:** `gpt-image-v2-edit`
**Category:** Image to Image
**Output:** array of image URLs
**Estimated processing time:** ~100 seconds

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Natural-language edit instruction. Be explicit about what must change and what must be preserved. |
| `image_url` | string | Yes | — | Publicly reachable HTTPS URL | Reference image to edit. Data-URIs and localhost are rejected. |

Additional parameters commonly exposed across the GPT Image family (verify against the live schema before use): `image_size`, `background`, `quality`, `num_images`, `output_format`, `sync_mode`, `webhook_url`.

> Reference images are always processed at **high fidelity**, so image-input tokens (and cost) run noticeably higher than with `gpt-image-v1-5-edit`. Downscale references to 1024px on the long edge unless you need fine detail.

### Example

```bash
curl -X POST https://api.eachlabs.ai/v1/prediction \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -d '{
    "model": "gpt-image-v2-edit",
    "version": "0.0.1",
    "input": {
      "prompt": "Replace the background with a Scandinavian loft interior, morning light through linen curtains. Keep the bottle, label orientation, and reflections on the glass identical.",
      "image_url": "https://your-cdn.example.com/bottle.jpg"
    }
  }'
```

---

## Pricing (both slugs)

Dynamic, token-based:

- Text input: **$5 / 1M tokens**
- Image input: **$10 / 1M tokens**
- Text output: **$40 / 1M tokens**
- Image output: **$30 / 1M tokens**

Fallback: medium 1024×1024 equivalent when a token breakdown is unavailable.

## Rate Limits

- 100 create requests / minute per API key
- 10 concurrent predictions per API key
