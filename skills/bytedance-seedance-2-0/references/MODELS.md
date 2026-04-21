# ByteDance Seedance 2.0 (Fast) — Parameter Reference

Both models use API version `0.0.1` and are served from `POST https://api.eachlabs.ai/v1/prediction`.

---

## ByteDance | Seedance 2.0 | Text to Video | Fast

**Slug:** `bytedance-seedance-2-0-text-to-video-fast`
**Category:** Text to Video
**Output:** video URL (string)
**Estimated processing time:** ~120 seconds

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt. Supports timeline prompting and quoted dialogue for native audio. |
| `resolution` | string | No | `720p` | `480p`, `720p` | 480p = faster/cheaper, 720p = balanced. |
| `duration` | string | No | `auto` | `auto`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15` | Clip length in seconds, or `auto`. |
| `aspect_ratio` | string | No | `auto` | `auto`, `21:9`, `16:9`, `4:3`, `1:1`, `3:4`, `9:16` | Landscape, portrait, square, ultrawide, or `auto`. |
| `generate_audio` | boolean | No | `true` | — | Synchronized SFX, ambience, and lip-synced speech. Cost is unchanged either way. |
| `seed` | string | No | — | — | Reproducibility hint — results may still drift slightly. |
| `end_user_id` | string | No | — | — | Your end-user identifier. |

### Example

```bash
curl -X POST https://api.eachlabs.ai/v1/prediction \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -d '{
    "model": "bytedance-seedance-2-0-text-to-video-fast",
    "version": "0.0.1",
    "input": {
      "prompt": "Ultra realistic cinematic reinterpretation of a 1920s gothic silent horror scene, tall thin vampire-like silhouette slowly climbing staircase, exaggerated shadow stretching along wall, high contrast lighting, slow cinematic push in, subtle film grain, eerie atmosphere",
      "resolution": "720p",
      "duration": "6",
      "aspect_ratio": "16:9",
      "generate_audio": true
    }
  }'
```

### Pricing

| Resolution | Rate |
|------------|------|
| 480p | $0.1129 / second |
| 720p (default) | $0.2419 / second |

---

## ByteDance | Seedance 2.0 | Image to Video | Fast

**Slug:** `bytedance-seedance-2-0-image-to-video-fast`
**Category:** Image to Video
**Output:** video URL (string)
**Estimated processing time:** ~150 seconds

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Motion / action the video should perform, plus optional quoted dialogue. |
| `image_url` | string | Yes | — | JPEG / PNG / WebP, max 30 MB, HTTPS | Starting frame. |
| `end_image_url` | string | No | — | JPEG / PNG / WebP, max 30 MB, HTTPS | Final frame; the model interpolates between `image_url` and this. |
| `resolution` | string | No | `720p` | `480p`, `720p` | 480p = faster/cheaper, 720p = balanced. |
| `duration` | string | No | `auto` | `auto`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15` | Clip length in seconds, or `auto`. |
| `aspect_ratio` | string | No | `auto` | `auto`, `21:9`, `16:9`, `4:3`, `1:1`, `3:4`, `9:16` | `auto` infers from the input image. |
| `generate_audio` | boolean | No | `true` | — | Synchronized SFX, ambience, and lip-synced speech. Cost is unchanged either way. |
| `seed` | string | No | — | — | Reproducibility hint — results may still drift slightly. |
| `end_user_id` | string | No | — | — | Your end-user identifier. |

### Example

```bash
curl -X POST https://api.eachlabs.ai/v1/prediction \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -d '{
    "model": "bytedance-seedance-2-0-image-to-video-fast",
    "version": "0.0.1",
    "input": {
      "prompt": "Ultra-realistic BBC nature documentary. Camera slowly pushes from wide to medium close-up as the lion roars at golden hour. Warm amber light rakes across his mane. Narrator (weathered British male, 50s, calm authoritative voice): \"He has ruled this land for seven years.\"",
      "image_url": "https://storage.googleapis.com/magicpoint/inputs/bytedance-seedance-2-0-image-to-video-fast-input.png",
      "resolution": "720p",
      "duration": "8",
      "aspect_ratio": "16:9",
      "generate_audio": true
    }
  }'
```

### Pricing

| Resolution | Rate |
|------------|------|
| 480p | $0.1129 / second |
| 720p (default) | $0.2419 / second |

Fallback: 720p rate when `resolution` is not specified.

---

## Rate Limits (both slugs)

- 100 create requests / minute per API key
- 10 concurrent predictions per API key
- File parameters (`image_url`, `end_image_url`) must be publicly reachable HTTPS URLs. Data-URIs and localhost are rejected.
