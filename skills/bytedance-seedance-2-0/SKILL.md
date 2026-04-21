---
name: bytedance-seedance-2-0
description: Generate cinematic videos with native synchronized audio using ByteDance Seedance 2.0 (Fast) via EachLabs. Supports text-to-video (bytedance-seedance-2-0-text-to-video-fast) and image-to-video (bytedance-seedance-2-0-image-to-video-fast). Use when the user specifically asks for Seedance 2.0, wants native audio with the video, realistic physics, director-level camera control, or 4–15 second clips up to 720p.
metadata:
  author: eachlabs
  version: "1.0"
---

# ByteDance Seedance 2.0 (Fast)

ByteDance Seedance 2.0 on the EachLabs Predictions API. Seedance 2.0 generates cinematic video with **native synchronized audio** (sound effects, ambient sound, lip-synced speech), realistic physics, and director-level camera control.

Two model slugs:

| Slug | Category | Use |
|------|----------|-----|
| `bytedance-seedance-2-0-text-to-video-fast` | Text to Video | Generate a video from a prompt |
| `bytedance-seedance-2-0-image-to-video-fast` | Image to Video | Animate a starting frame (optionally to an end frame) |

The "Fast" tier prioritizes rapid turnaround for high-throughput pipelines while keeping the family's character consistency and physics.

## When to use

- User asks for "Seedance 2.0", "ByteDance video", or wants a Seedance-style look.
- **Native audio required** in the same pass (dialogue, SFX, ambience) — no separate TTS/lipsync step.
- Cinematic motion, realistic physics, or director-level camera language ("slow push in", "rack focus").
- Durations of 4–15 seconds at 480p or 720p.
- Image-to-video with an **end frame** to control where the clip lands.

For a wider video-model comparison (Veo, Kling, Sora, Pixverse, Hailuo, etc.) see `eachlabs-video-generation`.

## Authentication

```
Header: X-API-Key: <your-api-key>
```

Set the `EACHLABS_API_KEY` environment variable. Get your key at [eachlabs.ai/dashboard/api-keys](https://www.eachlabs.ai/dashboard/api-keys).

## Prediction Flow

1. **(Recommended) Check schema** — `GET https://api.eachlabs.ai/v1/model?slug=bytedance-seedance-2-0-text-to-video-fast` (or the i2v slug).
2. **POST** `https://api.eachlabs.ai/v1/prediction` with `model`, `version: "0.0.1"`, and `input`.
3. **Poll** `GET https://api.eachlabs.ai/v1/prediction/{id}` until `status` is `"success"` or `"error"`, or use a webhook.
4. **Extract** the video URL from `output` (string).

## Quick Start — Text to Video

```bash
curl -X POST https://api.eachlabs.ai/v1/prediction \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -d '{
    "model": "bytedance-seedance-2-0-text-to-video-fast",
    "version": "0.0.1",
    "input": {
      "prompt": "Cinematic slow push-in on a lone astronaut standing at the edge of a Martian canyon at dusk, dust drifting across their boots, distant wind, subtle helmet reflections",
      "resolution": "720p",
      "duration": "6",
      "aspect_ratio": "16:9",
      "generate_audio": true
    }
  }'
```

Typical processing time: **~120 seconds**.

## Quick Start — Image to Video

```bash
curl -X POST https://api.eachlabs.ai/v1/prediction \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -d '{
    "model": "bytedance-seedance-2-0-image-to-video-fast",
    "version": "0.0.1",
    "input": {
      "prompt": "Camera slowly pushes from wide to medium close-up as the lion roars at golden hour. Warm amber light rakes across the mane. Narrator (weathered British male, 50s): \"He has ruled this land for seven years.\"",
      "image_url": "https://your-cdn.example.com/lion.jpg",
      "resolution": "720p",
      "duration": "8",
      "aspect_ratio": "16:9",
      "generate_audio": true
    }
  }'
```

Typical processing time: **~150 seconds**.

### Start-to-end transition

Pass `end_image_url` to lock the final frame and let the model interpolate motion between the two:

```json
{
  "model": "bytedance-seedance-2-0-image-to-video-fast",
  "version": "0.0.1",
  "input": {
    "prompt": "Smooth parallax zoom through the scene, crossfading into the second look",
    "image_url": "https://your-cdn.example.com/frame-start.jpg",
    "end_image_url": "https://your-cdn.example.com/frame-end.jpg",
    "duration": "6",
    "resolution": "720p"
  }
}
```

## Polling

```bash
curl https://api.eachlabs.ai/v1/prediction/{PREDICTION_ID} \
  -H "X-API-Key: $EACHLABS_API_KEY"
```

| Status | Meaning |
|--------|---------|
| `processing` | Still running — poll again |
| `success` | Done — read `output` (video URL) |
| `error` | Failed — read `message` / `details` |

## Webhook (alternative to polling)

Pass `"webhook_url": "https://your.host/path"` in the create body. EachLabs POSTs:

```json
{
  "exec_id": "prediction-uuid",
  "status": "succeeded",
  "output": "https://...",
  "error": ""
}
```

`status` is `"succeeded"` or `"failed"`. Return 2xx within 30 seconds.

## Parameters (both slugs share most of these)

| Parameter | Type | Required | Default | Options | Description |
|-----------|------|----------|---------|---------|-------------|
| `prompt` | string | Yes | — | — | Text prompt. For i2v, describes the motion/action; supports timeline prompting and dialogue lines for native audio. |
| `image_url` | string | **Yes (i2v only)** | — | JPEG / PNG / WebP, max 30 MB | Starting frame. Publicly reachable HTTPS URL. |
| `end_image_url` | string | No (i2v only) | — | JPEG / PNG / WebP, max 30 MB | Final frame; model interpolates between `image_url` and this. |
| `resolution` | string | No | `720p` | `480p`, `720p` | 480p = faster/cheaper, 720p = balanced. |
| `duration` | string | No | `auto` | `auto`, `4`…`15` | Clip length in seconds. `auto` lets the model pick from the prompt. |
| `aspect_ratio` | string | No | `auto` | `auto`, `21:9`, `16:9`, `4:3`, `1:1`, `3:4`, `9:16` | For i2v, `auto` infers from the input image. |
| `generate_audio` | boolean | No | `true` | — | Synchronized SFX, ambience, and lip-synced speech. Cost is the same whether on or off. |
| `seed` | string | No | — | — | Reproducibility hint — results may still drift slightly. |
| `end_user_id` | string | No | — | — | Your end-user identifier. |

## Pricing

Dynamic, charged per **second of output video**:

| Resolution | Rate |
|------------|------|
| 480p | **$0.1129 / second** |
| 720p (default) | **$0.2419 / second** |

Audio generation does not change cost. A 6-second 720p clip ≈ $1.45; a 10-second 480p clip ≈ $1.13.

## Prompt Tips

- **Timeline prompting**: sequence beats with time or cut words — "Wide shot: … Cut to close-up: … Finally: …". Seedance 2.0 respects temporal structure better than single-sentence prompts.
- **Dialogue with native audio**: write the line in quotes and describe the speaker ("Weathered British male narrator, 50s, calm authoritative voice, says: …"). Lip-sync and ambience are generated in the same pass.
- **Camera language**: use real film vocabulary ("slow push-in", "rack focus", "dolly left", "handheld", "crane up"). The model follows director-level cues.
- **Physics cues**: mention weight, momentum, and material interactions ("dust scatters as boot lands", "fabric settles after the spin") to unlock the realistic-physics behavior.

## Rate Limits & Limits

| Limit | Value |
|-------|-------|
| Create requests | 100 / minute per key |
| Concurrent predictions | 10 per key |
| File inputs | Publicly reachable HTTPS URLs only (JPEG/PNG/WebP, max 30 MB). No data-URIs, no localhost. |

## Errors

Error body: `{ "status": "error", "message": "...", "details": "..." }`

| Code | Meaning |
|------|---------|
| 400 | Invalid input |
| 401 | Missing / invalid `X-API-Key` |
| 404 | Unknown model or prediction id |
| 429 | Rate limited — back off |
| 5xx | Retry with exponential backoff |

## Security Constraints

- **No arbitrary URL loading**: `image_url` / `end_image_url` must point to your own HTTPS-reachable storage (S3, GCS, CDN). Do not forward user-pasted URLs without validation.
- **No third-party API tokens**: never forward provider tokens through `input` — authentication is exclusively via the EachLabs API key.
- **Validate before calling**: resolve the live `request_schema` via `GET /v1/model?slug=<slug>` before constructing `input`.

## Parameter Reference

See [references/MODELS.md](references/MODELS.md) for the full per-slug table with defaults and options.
