# Video Generation Models Reference

Complete parameter reference for all video generation models. All models use version `0.0.1`.

# Text To Video

---

## Pixverse v5.6 | Text to Video

**Slug:** `pixverse-v5-6-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,4:3,1:1,3:4,9:16 | The aspect ratio of the generated video |
| `resolution` | string | No | `"720p"` | 360p,540p,720p,1080p | The resolution of the generated video |
| `duration` | string | No | `"5"` | 5,8,10 | The duration of the generated video in seconds. 1080p videos are limited to 5 or 8 seconds |
| `negative_prompt` | string | No | — | — | Negative prompt to be used for the generation |
| `style` | string | No | — | anime,3d_animation,clay,comic,cyberpunk | The style of the generated video |
| `seed` | integer | No | — | — | The same seed and the same prompt given to the same version of the model will output the same video every time. |
| `generate_audio_switch` | boolean | No | `"False"` | — | Enable audio generation (BGM, SFX, dialogue) |
| `thinking_type` | string | No | — | enabled,disabled,auto | Prompt optimization mode: 'enabled' to optimize, 'disabled' to turn off, 'auto' for model decision |

---

## XAI | Grok Imagine | Text to Video

**Slug:** `xai-grok-imagine-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text description of the desired video. |
| `duration` | integer | No | `"6"` | — | Video duration in seconds. |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,4:3,3:2,1:1,2:3,3:4,9:16 | Aspect ratio of the generated video. |
| `resolution` | string | No | `"720p"` | 480p,720p | Resolution of the output video. |

---

## Kandinsky 5 | Pro | Text to Video

**Slug:** `kandinsky5-pro-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt to guide video generation. |
| `resolution` | string | No | `"512P"` | 512P,1024P | Video resolution: 512p or 1024p. |
| `aspect_ratio` | string | No | `"3:2"` | 3:2,1:1,2:3 | Aspect ratio of the generated video. One of (3:2, 1:1, 2:3). |
| `num_inference_steps` | integer | No | `"28"` | — | The number of inference steps. |
| `acceleration` | string | No | `"regular"` | none,regular | Acceleration level for faster generation. |

---

## Seedance V1.5 | Pro | Text to Video

**Slug:** `seedance-v1-5-pro-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt used to generate the video |
| `aspect_ratio` | string | No | `"16:9"` | 21:9,16:9,4:3,1:1,3:4,9:16 | The aspect ratio of the generated video |
| `resolution` | string | No | `"720p"` | 480p,720p,1080p | Video resolution - 480p for faster generation, 720p for balance |
| `duration` | integer | No | `"5"` | 4,5,6,7,8,9,10,11,12 | Duration of the video in seconds |
| `camera_fixed` | boolean | No | `"False"` | — | Whether to fix the camera position |
| `seed` | integer | No | — | — | Random seed to control video generation. Use -1 for random. |
| `generate_audio` | boolean | No | `"True"` | — | Whether to generate audio for the video |

---

## Wan | v2.6 | Text to Video

**Slug:** `wan-v2-6-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt for video generation. Supports Chinese and English, max 800 characters. For multi-shot videos, use fo... |
| `audio_url` | string | No | — | — | URL of the audio to use as the background music. Must be publicly accessible. Limit handling: If the audio duration e... |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1,4:3,3:4 | The aspect ratio of the generated video. Wan 2.6 supports additional ratios. |
| `resolution` | string | No | `"1080p"` | 720p,1080p | Video resolution tier. Wan 2.6 T2V only supports 720p and 1080p (no 480p). |
| `duration` | string | No | `"5"` | 5,10,15 | Duration of the generated video in seconds. Choose between 5, 10, or 15 seconds. |
| `negative_prompt` | string | No | — | — | Negative prompt to describe content to avoid. Max 500 characters. |
| `enable_prompt_expansion` | boolean | No | `"True"` | — | Whether to enable prompt rewriting using LLM. Improves results for short prompts but increases processing time. |
| `multi_shots` | boolean | No | `"True"` | — | When true, enables intelligent multi-shot segmentation for coherent narrative videos. Only active when enable_prompt_... |
| `seed` | integer | No | — | — | Random seed for reproducibility. If None, a random seed is chosen. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |

---

## Kling | v2.6 | Pro | Text to Video

**Slug:** `kling-v2-6-pro-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `duration` | string | No | `"10"` | 5,10 | The duration of the generated video in seconds |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | The aspect ratio of the generated video frame |
| `negative_prompt` | string | No | `"blur, distort, and low quality"` | — | — |
| `cfg_scale` | number | No | `"0.5"` | — | The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt. |
| `generate_audio` | boolean | No | `"True"` | — | Whether to generate native audio for the video. Supports Chinese and English voice output. Other languages are automa... |

---

## Pixverse v5.5 | Text to Video

**Slug:** `pixverse-v5-5-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,4:3,1:1,3:4,9:16 | The aspect ratio of the generated video |
| `resolution` | string | No | `"720p"` | 360p,540p,720p,1080p | The resolution of the generated video |
| `duration` | string | No | `"5"` | 5,8,10 | The duration of the generated video in seconds. Longer durations cost more. 1080p videos are limited to 5 or 8 seconds |
| `negative_prompt` | string | No | — | — | Negative prompt to be used for the generation |
| `style` | string | No | — | anime,3d_animation,clay,comic,cyberpunk | The style of the generated video |
| `seed` | integer | No | — | — | The same seed and the same prompt given to the same version of the model will output the same video every time. |
| `generate_audio_switch` | boolean | No | `"False"` | — | Enable audio generation (BGM, SFX, dialogue) |
| `generate_multi_clip_switch` | boolean | No | `"False"` | — | Enable multi-clip generation with dynamic camera changes |
| `thinking_type` | string | No | — | enabled,disabled | Prompt optimization mode: 'enabled' to optimize, 'disabled' to turn off, 'auto' for model decision |

---

## Pika | v2.2 | Text to Video

**Slug:** `pika-v2-2-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `seed` | integer | No | — | — | The seed for the random number generator |
| `negative_prompt` | string | No | `"ugly, bad, terrible"` | — | A negative prompt to guide the model |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1,4:5,5:4,3:2,2:3 | The aspect ratio of the generated video |
| `resolution` | string | No | `"720p"` | 1080p,720p | The resolution of the generated video |
| `duration` | integer | No | `"5"` | 5,10 | The duration of the generated video in seconds |

---

## Pika | v2.1 | Text to Video

**Slug:** `pika-v2-1-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `seed` | integer | No | — | — | The seed for the random number generator |
| `negative_prompt` | string | No | — | — | A negative prompt to guide the model |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1,4:5,5:4,3:2,2:3 | The aspect ratio of the generated video |
| `resolution` | string | No | `"720p"` | 720p,1080p | The resolution of the generated video |
| `duration` | integer | No | `"5"` | 5 | The duration of the generated video in seconds |

---

## Pika | v2 | Turbo | Text to Video

**Slug:** `pika-v2-turbo-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `seed` | integer | No | — | — | The seed for the random number generator |
| `negative_prompt` | string | No | — | — | A negative prompt to guide the model |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1,4:5,5:4,3:2,2:3 | The aspect ratio of the generated video |
| `resolution` | string | No | `"720p"` | 720p,1080p | The resolution of the generated video |
| `duration` | integer | No | `"5"` | 5 | The duration of the generated video in seconds |

---

## Minimax Hailuo V2.3 | Pro | Text to Video

**Slug:** `minimax-hailuo-v2-3-pro-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for video generation |
| `prompt_optimizer` | boolean | No | `"True"` | — | Whether to use the model's prompt optimizer |

---

## Minimax Hailuo V2.3 | Standard | Text to Video

**Slug:** `minimax-hailuo-v2-3-standard-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for video generation |
| `prompt_optimizer` | boolean | No | `"True"` | — | Whether to use the model's prompt optimizer |
| `duration` | string | No | `"6"` | 6,10 | The duration of the video in seconds. |

---

## Seedance V1 | Pro | Fast | Text to Video

**Slug:** `seedance-v1-pro-fast-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt used to generate the video |
| `resolution` | string | No | `"1080p"` | 480p,720p,1080p | Video resolution - 480p for faster generation, 1080p for higher quality |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,4:3,1:1,9:16,21:9 | The aspect ratio of the generated video Default value: "16:9" |
| `duration` | integer | No | `"5"` | 3,4,5,6,7,8,9,10,11,12 | Duration of the video in seconds Default value: "5" |
| `camera_fixed` | boolean | No | `"false"` | — | Whether to fix the camera position |
| `seed` | integer | No | — | — | Random seed to control video generation. |

---

## Ltx v2 | Text to Video | Fast

**Slug:** `ltx-v-2-text-to-video-fast`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate the video from |
| `duration` | integer | No | `"6"` | 6,8,10,12,14,16,18,20 | The duration of the generated video in seconds. The fast model supports 6-20 seconds. Note: Durations longer than 10 ... |
| `resolution` | string | No | `"1080p"` | 1080p,1440p,2160p | The resolution of the generated video |
| `aspect_ratio` | string | No | `"16:9"` | 16:9 | The aspect ratio of the generated video |
| `fps` | integer | No | `"25"` | 25,50 | The frames per second of the generated video |
| `generate_audio` | boolean | No | `"True"` | — | Whether to generate audio for the generated video |

---

## Ltx v2 | Text to Video

**Slug:** `ltx-v-2-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate the video from |
| `duration` | integer | No | `"6"` | 6,8,10 | The duration of the generated video in seconds |
| `resolution` | string | No | `"1080p"` | 1080p,1440p,2160p | The resolution of the generated video |
| `aspect_ratio` | string | No | `"16:9"` | 16:9 | The aspect ratio of the generated video |
| `fps` | integer | No | `"25"` | 25,50 | The frames per second of the generated video |
| `generate_audio` | boolean | No | `"True"` | — | Whether to generate audio for the generated video |

---

## Veo 3.1 | Text to Video | Fast

**Slug:** `veo3-1-text-to-video-fast`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt describing the video you want to generate |
| `aspect_ratio` | string | No | `"16:9"` | 9:16,16:9 | The aspect ratio of the generated video. If it is set to 1:1, the video will be outpainted. |
| `duration` | integer | No | `"8"` | 4,6,8 | The duration of the generated video in seconds |
| `negative_prompt` | string | No | — | — | A negative prompt to guide the video generation |
| `enhance_prompt` | boolean | No | `"True"` | — | Whether to enhance the video generation |
| `seed` | integer | No | — | — | A seed to use for the video generation |
| `auto_fix` | boolean | No | `"True"` | — | Whether to automatically attempt to fix prompts that fail content policy or other validation checks by rewriting them |
| `resolution` | string | No | `"720p"` | 720p,1080p | The resolution of the generated video |
| `generate_audio` | boolean | No | `"True"` | — | Whether to generate audio for the video. If false, %33 less credits will be used. |

---

## Veo 3.1 | Text to Video

**Slug:** `veo3-1-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt describing the video you want to generate |
| `aspect_ratio` | string | No | `"16:9"` | 9:16,16:9 | The aspect ratio of the generated video. If it is set to 1:1, the video will be outpainted. |
| `duration` | integer | No | `"8"` | 4,6,8 | The duration of the generated video in seconds |
| `negative_prompt` | string | No | — | — | A negative prompt to guide the video generation |
| `enhance_prompt` | boolean | No | `"True"` | — | Whether to enhance the video generation |
| `seed` | integer | No | — | — | A seed to use for the video generation |
| `auto_fix` | boolean | No | `"True"` | — | Whether to automatically attempt to fix prompts that fail content policy or other validation checks by rewriting them |
| `resolution` | string | No | `"720p"` | 720p,1080p | The resolution of the generated video |
| `generate_audio` | boolean | No | `"True"` | — | Whether to generate audio for the video. If false, %33 less credits will be used. |

---

## Ovi | Text to Video

**Slug:** `ovi-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt to guide video generation. |
| `negative_prompt` | string | No | `"jitter, bad hands, blur, distortion"` | — | Negative prompt for video generation. |
| `num_inference_steps` | integer | No | `"30"` | — | The number of inference steps. |
| `audio_negative_prompt` | string | No | `"robotic, muffled, echo, distorted"` | — | Negative prompt for audio generation. |
| `seed` | string | No | — | — | Random seed for reproducibility. If None, a random seed is chosen. |
| `resolution` | string | No | `"992x512"` | 512x992,992x512,960x512,512x960,720x720,448x1120,1120x448 | Resolution of the generated video in W:H format. One of (512x992, 992x512, 960x512, 512x960, 720x720, or 448x1120). |

---

## Sora 2 | Text to Video | Pro

**Slug:** `sora-2-text-to-video-pro`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt describing the video you want to generate |
| `resolution` | string | No | `"720p"` | 720p,1080p | The resolution of the generated video |
| `aspect_ratio` | string | No | `"16:9"` | 9:16,16:9 | The aspect ratio of the generated video |
| `duration` | integer | No | `"4"` | 4,8,12 | Duration of the generated video in seconds |

---

## Sora 2 | Text to Video

**Slug:** `sora-2-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt describing the video you want to generate |
| `aspect_ratio` | string | No | `"16:9"` | 9:16,16:9 | The aspect ratio of the generated video |
| `duration` | integer | No | `"4"` | 4,8,12 | Duration of the generated video in seconds |

---

## Wan | 2.5 | Preview | Text to Video

**Slug:** `wan-2-5-preview-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt for video generation. Supports Chinese and English, max 800 characters. |
| `audio_url` | string | No | — | — | URL of the audio to use as the background music. Must be publicly accessible. Limit handling: If the audio duration e... |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | The aspect ratio of the generated video |
| `duration` | string | No | `"5"` | 5,10 | Duration of the generated video in seconds. Choose between 5 or 10 seconds. |
| `resolution` | string | No | `"1080p"` | 480p,720p,1080p | Video resolution tier |
| `negative_prompt` | string | No | — | — | Negative prompt to describe content to avoid. Max 500 characters. |
| `enable_prompt_expansion` | boolean | No | `"True"` | — | Whether to enable prompt rewriting using LLM. Improves results for short prompts but increases processing time. |
| `seed` | integer | No | — | — | Random seed for reproducibility. If None, a random seed is chosen. |

---

## Kling v2.5 | Turbo | Pro | Text to Video

**Slug:** `kling-v2-5-turbo-pro-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `duration` | string | No | `"5"` | 5,10 | The duration of the generated video in seconds |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | The aspect ratio of the generated video frame |
| `negative_prompt` | string | No | `"blur, distort, and low quality"` | — | — |
| `cfg_scale` | number | No | `"0.5"` | — | The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt. |

---

## Pixverse v5 | Text to Video

**Slug:** `pixverse-v5-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text description of the scene or video you want to create. <= 2048 characters |
| `negative_prompt` | string | No | — | — | Text for things you don’t want to appear in the video. <= 2048 characters |
| `aspect_ratio` | string | Yes | `"16:9"` | 16:9,4:3,1:1,3:4,9:16 | The video’s width-to-height ratio |
| `duration` | integer | Yes | `"5"` | 5,8 | Length of the video in seconds. |
| `quality` | string | No | `"540p"` | 360p,540p,720p,1080p | The resolution quality of the video. |
| `motion_mode` | string | No | `"normal"` | normal | Controls animation speed |
| `style` | string | No | — | anime,3d_animation,clay,comic,cyberpunk | Visual style for the video |
| `seed` | integer | No | — | — | — |
| `sound_effect_content` | string | No | — | — | — |
| `sound_effect_switch` | boolean | No | `"true"` | — | — |
| `lip_sync_switch` | boolean | No | — | — | Set to true if you want to enable this feature. Default is false. |
| `lip_sync_tts_content` | string | No | — | — | ~140 (UTF-8) characters |
| `lip_sync_tts_speaker_id` | string | No | — | {
  "1": {
    "title": "Emily",
    "audio": "https://storage.googleapis.com... | — |

---

## Wan | v2.2 A14B | Text to Video | Turbo

**Slug:** `wan-v2-2-a14b-text-to-video-turbo`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt to guide video generation. |
| `resolution` | string | No | `"720p"` | 480p,580p,720p | Resolution of the generated video |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | Aspect ratio of the generated video |
| `enable_safety_checker` | boolean | No | `"false"` | — | If set to true, input data will be checked for safety before processing. |
| `enable_prompt_expansion` | boolean | No | `"false"` | — | Whether to enable prompt expansion. This will use a large language model to expand the prompt with additional details... |
| `acceleration` | string | No | `"none"` | none,regular | Acceleration level to use. The more acceleration, the faster the generation, but with lower quality. The recommended ... |
| `seed` | integer | No | — | — | Random seed for reproducibility. If None, a random seed is chosen. |

---

## Moonvalley | Marey | Text to Video

**Slug:** `moonvalley-marey-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate a video from |
| `dimensions` | string | No | `"1920x1080"` | 1920x1080,1152x1152,1536x1152,1152x1536 | The dimensions of the generated video in width x height format. |
| `duration` | string | No | `"5s"` | 5s,10s | The duration of the generated video. |
| `negative_prompt` | string | No | `"gopro, bright, contrast, static, overexposed, bright, vignette, artifacts, still, noise, texture, scanlines, videogame, 360 camera, VR, transition, flare, saturation, distorted, warped, wide angle, contrast, saturated, vibrant, glowing, cross dissolve, texture, videogame, saturation, cheesy, ugly hands, mutated hands, mutant, disfigured, extra fingers, blown out, horrible, blurry, worst quality, bad, transition, dissolve, cross-dissolve, melt, fade in, fade out, wobbly, weird, low quality, plastic, stock footage, video camera, boring, static"` | — | Negative prompt used to guide the model away from undesirable features. |
| `seed` | integer | No | — | — | Seed |

---

## Google Veo 3 | Fast

**Slug:** `veo-3-fast`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `duration` | string | No | `"8s"` | 4s,6s,8s | — |
| `negative_prompt` | string | No | — | — | — |
| `enhance_prompt` | boolean | No | `"true"` | — | — |
| `seed` | integer | No | — | — | — |
| `resolution` | string | No | `"720p"` | 720p,1080p | — |
| `generate_audio` | boolean | No | `"true"` | — | — |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16 | — |
| `auto_fix` | boolean | No | `"false"` | — | Whether to automatically attempt to fix prompts that fail content policy or other validation checks by rewriting them. |

---

## Cartoonify V2

**Slug:** `cartoonify-v2`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `input_image` | string | Yes | — | — | Image to convert to cartoon art style. Must be jpeg, png or webp. |
| `aspect_ratio` | string | No | `"1:1"` | 1:1,16:9,9:16,4:3,3:4,3:2,2:3,4:5,5:4,21:9,9:21,2:1,1:2 | An enumeration. |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation |
| `output_format` | string | No | `"png"` | jpg,png | An enumeration. |
| `safety_tolerance` | integer | No | `"2"` | — | Safety tolerance, 0 is most strict and 2 is most permissive. 2 is currently the maximum allowed. |

---

## Minimax Hailuo V2 | Standard | Text to Video

**Slug:** `minimax-hailuo-v2-standard-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `duration` | integer | No | `"6"` | 6,10 | The duration of the video in seconds. 10 seconds videos are not supported for 1080p resolution. |
| `prompt_optimizer` | boolean | No | `"true"` | — | Whether to use the model's prompt optimizer |

---

## Minimax Hailuo V2 | Pro | Text to Video

**Slug:** `minimax-hailuo-v2-pro-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `prompt_optimizer` | boolean | No | `"true"` | — | Whether to use the model's prompt optimizer |

---

## Seedance V1 | Pro | Text to Video

**Slug:** `seedance-v1-pro-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt used to generate the video |
| `resolution` | string | No | `"1080p"` | 480p,720p,1080p | Video resolution - 480p for faster generation, 1080p for higher quality |
| `aspect_ratio` | string | No | `"16:9"` | 21:9,16:9,4:3,1:1,9:16 | The aspect ratio of the generated video Default value: "16:9" |
| `duration` | integer | No | `"5"` | 3,4,5,6,7,8,9,10,11,12 | Duration of the video in seconds Default value: "5" |
| `camera_fixed` | boolean | No | `"false"` | — | Whether to fix the camera position |
| `seed` | integer | No | — | — | Random seed to control video generation. |

---

## Google Veo 2

**Slug:** `veo-2`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for video generation |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16 | The aspect ratio of the generated video Default value: 16:9 |
| `duration` | string | No | `"5s"` | 5s,6s,7s,8s | Duration of the generated video, Default value: 5s |

---

## Seedance V1 | Lite | Text to Video

**Slug:** `seedance-v1-lite-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt used to generate the video |
| `aspect_ratio` | string | No | `"16:9"` | 21:9,16:9,4:3,1:1,9:16 | The aspect ratio of the generated video |
| `resolution` | string | No | `"720p"` | 480p,720p,1080p | Video resolution - 480p for faster generation, 720p for higher quality |
| `duration` | integer | No | `"5"` | 3,4,5,6,7,8,9,10,11,12 | Duration of the video in seconds |
| `camera_fixed` | boolean | No | — | — | — |
| `seed` | integer | No | — | — | Random seed to control video generation. Use -1 for random. |

---

## Google Veo 3

**Slug:** `veo-3`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for video generation |
| `duration` | string | No | `"8s"` | 4s,6s,8s | — |
| `negative_prompt` | string | No | — | — | — |
| `enhance_prompt` | boolean | No | `"false"` | — | — |
| `seed` | integer | No | — | — | — |
| `resolution` | string | No | `"720p"` | 720p,1080p | — |
| `generate_audio` | boolean | No | `"true"` | — | — |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16 | — |

---

## Kling v2.1 | Master | Text to Video

**Slug:** `kling-v2-1-master-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `duration` | integer | Yes | `"5"` | 5,10 | — |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | — |
| `negative_prompt` | string | No | — | — | — |
| `cfg_scale` | number | No | `"0.5"` | — | — |

---

## Kling v1 | Standard | Text to Video

**Slug:** `kling-v1-standard-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `camera_control_config_value` | number | No | — | — | — |
| `prompt` | string | Yes | — | — | — |
| `duration` | integer | Yes | `"5"` | 5,10 | The duration of the generated video in seconds |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | The aspect ratio of the generated video frame |
| `negative_prompt` | string | No | `"blur, distort, and low quality"` | — | — |
| `cfg_scale` | number | No | `"0.5"` | — | The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt. |
| `camera_control` | string | No | — | down_back,forward_up,right_turn_forward,left_turn_forward | Camera control parameters |
| `camera_control_config_type` | string | No | — | horizontal,vertical,pan,tilt,roll,zoom | Advanced Camera control parameters |

---

## Kling v1 | Pro | Text to Video

**Slug:** `kling-v1-pro-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text Prompt |
| `duration` | integer | Yes | `"5"` | 5,10 | The duration of the generated video in seconds |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | The aspect ratio of the generated video frame |
| `negative_prompt` | string | No | `"blur, distort, and low quality"` | — | — |
| `cfg_scale` | number | No | `"0.5"` | — | The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt. |

---

## Vidu 1.5 | Text to Video

**Slug:** `vidu-1-5-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt,A textual description for video generation, with a maximum length of 1500 characters |
| `duration` | integer | No | `"4"` | 4,8 | Optional Video duration. |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | The aspect ratio of the output video |
| `movement_amplitude` | string | No | `"auto"` | auto,small,medium,large | — |
| `resolution` | string | No | `"720p"` | 1080p,720p,360p | — |
| `bgm` | boolean | No | `"false"` | — | Whether to add background music to the generated video. Default: false. Acceptable values: true, false. When true, th... |
| `seed` | integer | No | — | — | Seed |
| `style` | string | No | `"general"` | general,anime | The style of output video |

---

## Vidu Q1 | Text to Video

**Slug:** `vidu-q-1-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `resolution` | string | No | `"1080p"` | 1080p | Resolution |
| `prompt` | string | Yes | — | — | — |
| `duration` | integer | No | `"5"` | 5 | Video duration. |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | — |
| `seed` | integer | No | — | — | Seed |
| `bgm` | boolean | No | `"false"` | — | Whether to add background music to the generated video. Default: false. Acceptable values: true, false. When true, th... |
| `movement_amplitude` | string | No | `"auto"` | auto,small,medium,large | — |
| `style` | string | No | `"general"` | general,anime | The style of output video |

---

## PixVerse v4.5 | Text to Video

**Slug:** `pixverse-v4-5-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text description of the scene or video you want to create. <= 2048 characters |
| `negative_prompt` | string | No | — | — | Text for things you don’t want to appear in the video. <= 2048 characters |
| `aspect_ratio` | string | Yes | `"16:9"` | 16:9,4:3,1:1,3:4,9:16 | The video’s width-to-height ratio |
| `duration` | string | Yes | `"5"` | 5,8 | Length of the video in seconds. |
| `quality` | string | Yes | `"540p"` | 360p,540p,720p,1080p | The resolution quality of the video. |
| `motion_mode` | string | No | `"normal"` | normal,fast | Controls animation speed |
| `style` | string | No | — | anime,3d_animation,clay,comic,cyberpunk | Visual style for the video |
| `seed` | integer | No | — | — | — |
| `sound_effect_switch` | boolean | No | `"true"` | — | — |
| `sound_effect_content` | string | No | — | — | — |
| `lip_sync_switch` | boolean | No | `"false"` | — | Set to true if you want to enable this feature. Default is false. |
| `lip_sync_tts_content` | string | No | — | — | ~140 (UTF-8) characters |
| `lip_sync_tts_speaker_id` | string | No | — | {
  "1": {
    "title": "Emily",
    "audio": "https://storage.googleapis.com... | — |

---

## PixVerse v4 | Text to Video

**Slug:** `pixverse-v4-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text description of the scene or video you want to create. <= 2048 characters |
| `negative_prompt` | string | No | — | — | Text for things you don’t want to appear in the video. <= 2048 characters |
| `aspect_ratio` | string | Yes | `"16:9"` | 16:9,4:3,1:1,3:4,9:16 | The video’s width-to-height ratio |
| `duration` | string | Yes | `"5"` | 5,8 | Length of the video in seconds. |
| `quality` | string | Yes | `"540p"` | 360p,540p,720p,1080p | The resolution quality of the video. |
| `motion_mode` | string | No | `"normal"` | normal,fast | Controls animation speed |
| `style` | string | No | — | anime,3d_animation,clay,comic,cyberpunk | Visual style for the video |
| `seed` | integer | No | — | — | — |

---

## Minimax Hailuo V1 | Text to Video

**Slug:** `minimax-t2v-01`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Prompt |
| `prompt_optimizer` | boolean | No | `"true"` | — | Prompt Optimizer |

---

## Kling v1.6 | Pro | Text to Video

**Slug:** `kling-v1-6-pro-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Prompt |
| `duration` | string | No | `"5"` | 5,10 | The duration of the generated video in seconds |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | The aspect ratio of the generated video frame |
| `negative_prompt` | string | No | — | — | Negative Prompt |
| `cfg_scale` | number | No | `"0.5"` | — | The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt. |

---

## Kling v1.6 | Standard | Text to Video

**Slug:** `kling-v1-6-standard-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Prompt |
| `duration` | string | No | `"5"` | 5,10 | The duration of the generated video in seconds |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | The aspect ratio of the generated video frame |
| `negative_prompt` | string | No | `"blur, distort, and low quality"` | — | Negative Prompt |
| `cfg_scale` | number | No | `"0.5"` | — | The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt. |

---

## Kling v1.5 | Pro | Text-to-Video

**Slug:** `kling-v1-5-pro-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Prompt |
| `duration` | string | No | `"5"` | 5,10 | The duration of the generated video in seconds |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | The aspect ratio of the generated video frame |
| `negative_prompt` | string | No | `"blur, distort, and low quality"` | — | Negative Prompt |
| `cfg_scale` | number | No | `"0.5"` | — | The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt. |

---

## Kling v2 | Text to Video

**Slug:** `kling-v2-text-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `duration` | integer | No | `"5"` | 5,10 | — |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | — |
| `negative_prompt` | string | No | — | — | — |
| `cfg_scale` | number | No | `"0.5"` | — | — |

---

## Wan 2.1 | 1.3B

**Slug:** `wan-2-1-1-3b`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt describing what you want to generate |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16 | An enumeration. |
| `frame_num` | integer | No | `"81"` | 17,33,49,65,81 | An enumeration. |
| `resolution` | string | No | `"480p"` | 480p | An enumeration. |
| `sample_steps` | integer | No | `"30"` | — | Number of sampling steps (higher = better quality but slower) |
| `sample_guide_scale` | number | No | `"6"` | — | Classifier free guidance scale (higher values strengthen prompt adherence) |
| `sample_shift` | number | No | `"8"` | — | Sampling shift factor for flow matching (recommended range: 8-12) |
| `seed` | integer | No | — | — | Random seed for reproducible results (leave blank for random) |

---

## Minimax Hailuo V1 Director | Text to Video

**Slug:** `minimax-t2v-01-director`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Prompt |
| `prompt_optimizer` | boolean | No | `"true"` | — | Prompt Optimizer |

---

## Luma | Ray2 | 540p

**Slug:** `ray-2-540p`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for video generation |
| `duration` | integer | No | `"5"` | 5,9 | An enumeration. |
| `aspect_ratio` | string | No | `"16:9"` | 1:1,3:4,4:3,9:16,16:9,9:21,21:9 | An enumeration. |
| `loop` | boolean | No | — | — | Whether the video should loop, with the last frame matching the first frame for smooth, continuous playback. |
| `start_image_url` | string | No | — | — | image to use as the starting frame |
| `end_image_url` | string | No | — | — | Image to use as the ending frame |

---

## Luma | Ray2 | 720p

**Slug:** `ray-2-720p`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for video generation |
| `duration` | integer | No | `"5"` | 5,9 | An enumeration. |
| `aspect_ratio` | string | No | `"16:9"` | 1:1,3:4,4:3,9:16,16:9,9:21,21:9 | An enumeration. |
| `loop` | boolean | No | — | — | Whether the video should loop, with the last frame matching the first frame for smooth, continuous playback. |
| `start_image_url` | string | No | — | — | image to use as the starting frame |
| `end_image_url` | string | No | — | — | Image to use as the ending frame |

---

## Ray

**Slug:** `ray`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for video generation |
| `aspect_ratio` | string | No | `"16:9"` | 1:1,3:4,4:3,9:16,16:9,9:21,21:9 | An enumeration. |
| `loop` | boolean | No | — | — | Whether the video should loop |
| `start_image_url` | string | No | — | — | URL of an image to use as the starting frame |
| `end_image_url` | string | No | — | — | URL of an image to use as the ending frame |
| `start_video_id` | string | No | — | — | Continue or extend a video generation with a new generation. You can combine this with end_image_url, or end_video_id. |
| `end_video_id` | string | No | — | — | Prepend a new video generation to the beginning of an existing one (Also called 'reverse extend'). You can combine th... |

---

## Mochi-1

**Slug:** `mochi-1`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | No | `"Close-up of a chameleon's eye, with its scaly skin changing color. Ultra high resolution 4k."` | — | Focus on a single, central subject. Structure the prompt from coarse to fine details. Start with 'a close shot' or 'a... |
| `num_frames` | integer | No | `"163"` | — | Number of frames to generate |
| `image_prompt_strength` | number | No | `"0.1"` | — | Blend between the prompt and the image prompt. |
| `guidance_scale` | number | No | `"6"` | — | The guidance scale for the model |
| `fps` | integer | No | `"30"` | — | Frames per second |
| `seed` | integer | No | — | — | Random seed |

---

## LTX-Video

**Slug:** `ltx-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | No | `"best quality, 4k, HDR, a tracking shot of a beautiful scene"` | — | Text prompt for the video. This model needs long descriptive prompts, if the prompt is too short the quality won't be... |
| `negative_prompt` | string | No | `"low quality, worst quality, deformed, distorted"` | — | Things you do not want to see in your video |
| `image` | string | No | — | — | Optional input image to use as the starting frame |
| `target_size` | integer | No | `"640"` | 512,576,640,704,768,832,896,960,1024 | An enumeration. |
| `aspect_ratio` | string | No | `"3:2"` | 1:1,1:2,2:1,2:3,3:2,3:4,4:3,4:5,5:4,9:16,16:9,9:21,21:9 | An enumeration. |
| `cfg` | number | No | `"3"` | — | How strongly the video follows the prompt |
| `steps` | integer | No | `"30"` | — | Number of steps |
| `length` | integer | No | `"97"` | 97,129,161,193,225,257 | An enumeration. |
| `seed` | integer | No | — | — | Set a seed for reproducibility. Random by default. |

---

## Video Crafter

**Slug:** `video-crafter`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Input Prompt |
| `width` | integer | No | `"1024"` | — | Width of the output video |
| `height` | integer | No | `"576"` | — | Height of the output video |
| `steps` | integer | No | `"50"` | — | Number of steps to take in the video |
| `fps` | integer | No | `"28"` | — | Frames per second of the output video |
| `seed` | integer | No | — | — | Random seed. Leave blank to randomize the seed |

---

## Pyramid Flow

**Slug:** `pyramid-flow`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for video generation |
| `image` | string | No | — | — | Optional input image for image-to-video generation |
| `duration` | integer | No | `"5"` | — | Duration of the video in seconds (1-3 for canonical mode, 1-10 for non-canonical mode) |
| `guidance_scale` | number | No | `"9"` | — | Guidance Scale for text-to-video generation |
| `video_guidance_scale` | number | No | `"5"` | — | Video Guidance Scale |
| `frames_per_second` | integer | No | `"8"` | 8,24 | An enumeration. |

---

# Image To Video

---

## Pixverse v5.6 | Transition

**Slug:** `pixverse-v5-6-transition`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt for the transition |
| `first_image_url` | string | Yes | — | — | URL of the image to use as the first frame |
| `end_image_url` | string | No | — | — | URL of the image to use as the last frame |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,4:3,1:1,3:4,9:16 | The aspect ratio of the generated video |
| `duration` | string | No | `"5"` | 5,8,10 | The duration of the generated video in seconds. 1080p videos are limited to 5 or 8 seconds |
| `resolution` | string | No | `"720p"` | 360p,540p,720p,1080p | The resolution of the generated video |
| `negative_prompt` | string | No | — | — | Negative prompt to be used for the generation |
| `style` | string | No | — | anime,3d_animation,clay,comic,cyberpunk | The style of the generated video |
| `seed` | integer | No | — | — | The same seed and the same prompt given to the same version of the model will output the same video every time. |

---

## Pixverse v5.6 | Image to Video

**Slug:** `pixverse-v5-6-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `image_url` | string | Yes | — | — | URL of the image to use as the first frame |
| `resolution` | string | No | `"720p"` | 360p,540p,720p,1080p | The resolution of the generated video |
| `duration` | string | No | `"5"` | 5,8,10 | The duration of the generated video in seconds. 1080p videos are limited to 5 or 8 seconds |
| `negative_prompt` | string | No | — | — | Negative prompt to be used for the generation |
| `style` | string | No | — | anime,3d_animation,clay,comic,cyberpunk | The style of the generated video |
| `generate_audio_switch` | boolean | No | `"False"` | — | Enable audio generation (BGM, SFX, dialogue) |
| `thinking_type` | string | No | — | enabled,disabled,auto | Prompt optimization mode: 'enabled' to optimize, 'disabled' to turn off, 'auto' for model decision |
| `seed` | integer | No | — | — | The same seed and the same prompt given to the same version of the model will output the same video every time. |

---

## XAI | Grok Imagine | Edit Video

**Slug:** `xai-grok-imagine-edit-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text description of the desired edit. |
| `video_url` | string | Yes | — | — | URL of the input video to edit. The video will be resized to a maximum area of 854x480 pixels and truncated to 8 seco... |
| `resolution` | string | No | `"720p"` | 480p,720p | Resolution of the output video. |

---

## XAI | Grok Imagine | Image to Video

**Slug:** `xai-grok-imagine-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text description of desired changes or motion in the video. |
| `image_url` | string | Yes | — | — | URL of the input image for video generation. |
| `duration` | integer | No | `"6"` | — | Video duration in seconds. |
| `resolution` | string | No | `"720p"` | 480p,720p | Resolution of the output video. |
| `aspect_ratio` | string | No | `"1:1"` | 16:9,4:3,3:2,1:1,2:3,3:4,9:16 | Aspect ratio of the generated video. |

---

## Wan | v2.6 | Image to Video | Flash

**Slug:** `wan-v2-6-image-to-video-flash`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt describing the desired video motion. Max 800 characters. |
| `image_url` | string | Yes | — | — | URL of the image to use as the first frame. Must be publicly accessible or base64 data URI. Image dimensions must be ... |
| `audio_url` | string | No | — | — | URL of the audio to use as the background music. Must be publicly accessible. Limit handling: If the audio duration e... |
| `resolution` | string | No | `"1080p"` | 720p,1080p | Video resolution. Valid values: 720p, 1080p |
| `duration` | string | No | `"15"` | 5,10,15 | Duration of the generated video in seconds. Choose between 5, 10 or 15 seconds. |
| `negative_prompt` | string | No | — | — | Negative prompt to describe content to avoid. Max 500 characters. |
| `enable_prompt_expansion` | boolean | No | `"True"` | — | Whether to enable prompt rewriting using LLM. |
| `multi_shots` | boolean | No | `"False"` | — | When true, enables intelligent multi-shot segmentation. Only active when enable_prompt_expansion is True. Set to fals... |
| `seed` | integer | No | — | — | Random seed for reproducibility. If None, a random seed is chosen. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |

---

## Motion Video | 14B

**Slug:** `motion-video-14b`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate the video from. |
| `negative_prompt` | string | Yes | — | — | The negative prompt to generate the video from. |
| `image_url` | string | Yes | — | — | The URL of the image to use as a reference for the video generation. |
| `video_url` | string | Yes | — | — | The URL of the video to use as a reference for the video generation. |
| `resolution` | string | No | `"480p"` | 480p,580p,720p | The resolution of the video to generate. |
| `num_inference_steps` | integer | No | `"30"` | — | The number of inference steps to use for the video generation. |
| `image_guidance_scale` | number | No | `"2"` | — | The image guidance scale to use for the video generation. |
| `pose_guidance_scale` | number | No | `"1.5"` | — | The pose guidance scale to use for the video generation. |

---

## Motion Video | 1.3B

**Slug:** `motion-video-1-3b`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate the video from. |
| `negative_prompt` | string | Yes | — | — | The negative prompt to generate the video from. |
| `image_url` | string | Yes | — | — | The URL of the image to use as a reference for the video generation. |
| `video_url` | string | Yes | — | — | The URL of the video to use as a reference for the video generation. |
| `resolution` | string | No | `"480p"` | 480p,580p,720p | The resolution of the video to generate. |
| `num_inference_steps` | integer | No | `"30"` | — | The number of inference steps to use for the video generation. |
| `image_guidance_scale` | number | No | `"2"` | — | The image guidance scale to use for the video generation. |
| `pose_guidance_scale` | number | No | `"1.5"` | — | The pose guidance scale to use for the video generation. |

---

## Bytedance | Omnihuman v1.5

**Slug:** `bytedance-omnihuman-v1-5`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | No | — | — | The text prompt used to guide the video generation. |
| `image_url` | string | Yes | — | — | The URL of the image used to generate the video |
| `audio_url` | string | Yes | — | — | The URL of the audio file to generate the video. Audio must be under 30s long for 1080p generation and under 60s long... |
| `turbo_mode` | boolean | No | `"False"` | — | Generate a video at a faster rate with a slight quality trade-off. |
| `resolution` | string | No | `"1080p"` | 720p,1080p | The resolution of the generated video. Defaults to 1080p. 720p generation is faster and higher in quality. 1080p gene... |

---

## Infinitalk | Image to Video

**Slug:** `infinitalk-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | URL of the input image. If the input image does not match the chosen aspect ratio, it is resized and center cropped. |
| `audio_url` | string | Yes | — | — | The URL of the audio file. |
| `prompt` | string | Yes | — | — | The text prompt to guide video generation. |
| `mask_image` | string | No | — | — | Optional mask image to specify the person in the image to animate. |
| `resolution` | string | No | `"720p"` | 480p,720p | Resolution of the video to generate. Must be either 480p or 720p. |
| `seed` | integer | No | — | — | Random seed for reproducibility. If None, a random seed is chosen. |

---

## Kandinsky 5 | Pro | Image to Video

**Slug:** `kandinsky5-pro-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate the video from. |
| `image_url` | string | Yes | — | — | The URL of the image to use as a reference for the video generation. |
| `resolution` | string | No | `"512P"` | 512P,1024P | Video resolution: 512p or 1024p. |
| `num_inference_steps` | integer | No | `"28"` | — | — |
| `acceleration` | string | No | `"regular"` | none,regular | Acceleration level for faster generation. |

---

## Seedance V1.5 | Pro | Image to Video

**Slug:** `seedance-v1-5-pro-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt used to generate the video |
| `image_url` | string | Yes | — | — | The URL of the image used to generate video |
| `end_image_url` | string | No | — | — | The URL of the image the video ends with. Defaults to None. |
| `duration` | integer | No | `"5"` | 4,5,6,7,8,9,10,11,12 | Duration of the video in seconds |
| `aspect_ratio` | string | No | `"16:9"` | 21:9,16:9,4:3,1:1,3:4,9:16 | The aspect ratio of the generated video |
| `resolution` | string | No | `"720p"` | 480p,720p,1080p | Video resolution - 480p for faster generation, 720p for balance |
| `generate_audio` | boolean | No | `"True"` | — | Whether to generate audio for the video |
| `camera_fixed` | boolean | No | `"False"` | — | Whether to fix the camera position |
| `seed` | integer | No | — | — | Random seed to control video generation. Use -1 for random. |

---

## Kling | v2.6 | Pro | Motion Control

**Slug:** `kling-v2-6-pro-motion-control`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | No | — | — | — |
| `image_url` | string | Yes | — | — | Reference image URL. The characters, backgrounds, and other elements in the generated video are based on this referen... |
| `video_url` | string | Yes | — | — | Reference video URL. The character actions in the generated video will be consistent with this reference video. Shoul... |
| `keep_original_sound` | boolean | No | `"True"` | — | Whether to keep the original sound from the reference video. |
| `character_orientation` | string | Yes | — | image,video | Controls whether the output character's orientation matches the reference image or video. 'video': orientation matche... |

---

## Kling | v2.6 | Standard | Motion Control

**Slug:** `kling-v2-6-standard-motion-control`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | No | — | — | — |
| `image_url` | string | Yes | — | — | Reference image URL. The characters, backgrounds, and other elements in the generated video are based on this referen... |
| `video_url` | string | Yes | — | — | Reference video URL. The character actions in the generated video will be consistent with this reference video. Shoul... |
| `keep_original_sound` | boolean | No | `"True"` | — | Whether to keep the original sound from the reference video. |
| `character_orientation` | string | Yes | — | image,video | Controls whether the output character's orientation matches the reference image or video. 'video': orientation matche... |

---

## Wan | v2.6 | Image to Video

**Slug:** `wan-v2-6-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt describing the desired video motion. Max 800 characters. |
| `image_url` | string | Yes | — | — | URL of the image to use as the first frame. Must be publicly accessible or base64 data URI. Max file size: 50.0MB, Mi... |
| `audio_url` | string | No | — | — | URL of the audio to use as the background music. Must be publicly accessible. Limit handling: If the audio duration e... |
| `resolution` | string | No | `"1080p"` | 720p,1080p | Video resolution. Valid values:720p, 1080p |
| `duration` | string | No | `"5"` | 5,10,15 | Duration of the generated video in seconds. Choose between 5, 10 or 15 seconds. |
| `negative_prompt` | string | No | — | — | Negative prompt to describe content to avoid. Max 500 characters. |
| `enable_prompt_expansion` | boolean | No | `"True"` | — | Whether to enable prompt rewriting using LLM. |
| `multi_shots` | boolean | No | `"False"` | — | When true, enables intelligent multi-shot segmentation. Only active when enable_prompt_expansion is True. Set to fals... |
| `seed` | integer | No | — | — | Random seed for reproducibility. If None, a random seed is chosen. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |

---

## Wan | v2.6 | Reference to Video

**Slug:** `wan-v2-6-reference-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Use @Video1, @Video2, @Video3 to reference subjects from your videos. Works for people, animals, or objects. For mult... |
| `video_urls` | array | Yes | — | — | Reference videos for subject consistency (1-3 videos). Reference in prompt as @Video1, @Video2, @Video3. Works for pe... |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1,4:3,3:4 | The aspect ratio of the generated video. |
| `resolution` | string | No | `"1080p"` | 720p,1080p | Video resolution tier. R2V only supports 720p and 1080p (no 480p). |
| `duration` | string | No | `"5"` | 5,10 | Duration of the generated video in seconds. R2V supports only 5 or 10 seconds (no 15s). |
| `negative_prompt` | string | No | — | — | Negative prompt to describe content to avoid. Max 500 characters. |
| `enable_prompt_expansion` | boolean | No | `"True"` | — | Whether to enable prompt rewriting using LLM. |
| `multi_shots` | boolean | No | `"True"` | — | When true (default), enables intelligent multi-shot segmentation for coherent narrative videos with multiple shots. W... |
| `seed` | integer | No | — | — | Random seed for reproducibility. If None, a random seed is chosen. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |

---

## Creatify | Aurora

**Slug:** `creatify-aurora`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | The URL of the image file to be used for video generation. |
| `audio_url` | string | Yes | — | — | The URL of the audio file to be used for video generation. |
| `prompt` | string | No | — | — | A text prompt to guide the video generation process. |
| `guidance_scale` | number | No | `"1"` | — | Guidance scale to be used for text prompt adherence. |
| `audio_guidance_scale` | number | No | `"2"` | — | Guidance scale to be used for audio adherence. |
| `resolution` | string | No | `"720p"` | 480p,720p | The resolution of the generated video. |

---

## Kling | Avatar | v2 | Standard

**Slug:** `kling-avatar-v2-standard`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | The URL of the image to use as your avatar |
| `audio_url` | string | Yes | — | — | The URL of the audio file. |
| `prompt` | string | No | `"."` | — | The prompt to use for the video generation. |

---

## Kling | Avatar | v2 | Pro

**Slug:** `kling-avatar-v2-pro`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | The URL of the image to use as your avatar |
| `audio_url` | string | Yes | — | — | The URL of the audio file. |
| `prompt` | string | No | `"."` | — | The prompt to use for the video generation. |

---

## Kling | v2.6 | Pro | Image to Video

**Slug:** `kling-v2-6-pro-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `image_url` | string | Yes | — | — | URL of the image to be used for the video |
| `duration` | string | No | `"5"` | 5,10 | The duration of the generated video in seconds |
| `end_image_url` | string | No | — | — | URL of the image to be used for the end of the video |
| `generate_audio` | boolean | No | `"True"` | — | Whether to generate native audio for the video. Supports Chinese and English voice output. Other languages are automa... |
| `negative_prompt` | string | No | `"blur, distort, and low quality"` | — | — |

---

## Pixverse v5.5 | Transition

**Slug:** `pixverse-v5-5-transition`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt for the transition |
| `first_image_url` | string | Yes | — | — | URL of the image to use as the first frame |
| `end_image_url` | string | No | — | — | URL of the image to use as the last frame |
| `generate_audio_switch` | boolean | No | `"False"` | — | Enable audio generation (BGM, SFX, dialogue) |
| `resolution` | string | No | `"720p"` | 360p,540p,720p,1080p | The resolution of the generated video |
| `duration` | string | No | `"5"` | 5,8,10 | The duration of the generated video in seconds. Longer durations cost more. 1080p videos are limited to 5 or 8 seconds |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,4:3,1:1,3:4,9:16 | The aspect ratio of the generated video |
| `negative_prompt` | string | No | — | — | Negative prompt to be used for the generation |
| `style` | string | No | — | anime,3d_animation,clay,comic,cyberpunk | The style of the generated video |
| `thinking_type` | string | No | — | enabled,disabled | Prompt optimization mode: 'enabled' to optimize, 'disabled' to turn off, 'auto' for model decision |
| `seed` | integer | No | — | — | The same seed and the same prompt given to the same version of the model will output the same video every time. |

---

## Pixverse v5.5 | Image to Video

**Slug:** `pixverse-v5-5-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `image_url` | string | Yes | — | — | URL of the image to use as the first frame |
| `generate_audio_switch` | boolean | No | `"False"` | — | Enable audio generation (BGM, SFX, dialogue) |
| `resolution` | string | No | `"720p"` | 360p,540p,720p,1080p | The resolution of the generated video |
| `generate_multi_clip_switch` | boolean | No | `"False"` | — | Enable multi-clip generation with dynamic camera changes |
| `duration` | string | No | `"5"` | 5,8,10 | The duration of the generated video in seconds. Longer durations cost more. 1080p videos are limited to 5 or 8 seconds |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,4:3,1:1,3:4,9:16 | The aspect ratio of the generated video |
| `thinking_type` | string | No | — | enabled,disabled | Prompt optimization mode: 'enabled' to optimize, 'disabled' to turn off, 'auto' for model decision |
| `negative_prompt` | string | No | — | — | Negative prompt to be used for the generation |
| `style` | string | No | — | anime,3d_animation,clay,comic,cyberpunk | The style of the generated video |
| `seed` | integer | No | — | — | The same seed and the same prompt given to the same version of the model will output the same video every time. |

---

## Kling O1 | Reference Image to Video

**Slug:** `kling-o1-reference-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Take @Element1, @Element2 to reference elements and @Image1, @Image2 to reference images in order. |
| `image_urls` | array | No | — | — | — |
| `elements` | array | No | — | — | — |
| `duration` | integer | No | `"5"` | 5,10 | — |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | The aspect ratio of the generated video frame. |

---

## Kling O1 | Image to Video

**Slug:** `kling-o1-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Use @Image1 to reference the start frame, @Image2 to reference the end frame. |
| `start_image_url` | string | Yes | — | — | Image to use as the first frame of the video. Max file size: 10.0MB, Min width: 300px, Min height: 300px, Min aspect ... |
| `end_image_url` | string | No | — | — | Image to use as the last frame of the video. Max file size: 10.0MB, Min width: 300px, Min height: 300px, Min aspect r... |
| `duration` | string | Yes | `"5"` | 5,10 | — |

---

## Pika | v2.2 | PikaScenes

**Slug:** `pika-v2-2-pikascenes`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_urls` | array | Yes | — | — | URLs of images to combine into a video |
| `prompt` | string | Yes | — | — | Text prompt describing the desired video |
| `negative_prompt` | string | No | `"ugly, bad, terrible"` | — | A negative prompt to guide the model |
| `seed` | integer | No | — | — | The seed for the random number generator |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1,4:5,5:4,3:2,2:3 | The aspect ratio of the generated video |
| `resolution` | string | No | `"1080p"` | 720p,1080p | The resolution of the generated video |
| `duration` | integer | No | `"5"` | 5,10 | The duration of the generated video in seconds |
| `ingredients_mode` | string | No | `"precise"` | precise,creative | Mode for integrating multiple images. Precise mode is more accurate, creative mode is more creative. |

---

## Pika |  v2.2 | Image to Video

**Slug:** `pika-v2-2-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | URL of the image to use as the first frame |
| `prompt` | string | Yes | — | — | — |
| `seed` | integer | No | — | — | The seed for the random number generator |
| `negative_prompt` | string | No | — | — | A negative prompt to guide the model |
| `resolution` | string | No | `"720p"` | 720p,1080p | The resolution of the generated video |
| `duration` | integer | No | `"5"` | 5,10 | The duration of the generated video in seconds |

---

## Pika | v2.1 | Image to Video

**Slug:** `pika-v2-1-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | URL of the image to use as the first frame |
| `prompt` | string | Yes | — | — | — |
| `seed` | integer | No | — | — | The seed for the random number generator |
| `negative_prompt` | string | No | — | — | A negative prompt to guide the model |
| `resolution` | string | No | `"720p"` | 720p,1080p | The resolution of the generated video |
| `duration` | integer | No | `"5"` | 5 | The duration of the generated video in seconds |

---

## Pika | v2 |  Turbo | Image to Video

**Slug:** `pika-v2-turbo-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | URL of the image to use as the first frame |
| `prompt` | string | Yes | — | — | — |
| `seed` | integer | No | — | — | The seed for the random number generator |
| `negative_prompt` | string | No | — | — | A negative prompt to guide the model |
| `resolution` | string | No | `"720p"` | 720p,1080p | The resolution of the generated video |
| `duration` | integer | No | `"5"` | 5 | The duration of the generated video in seconds |

---

## Minimax Hailuo V2.3 | Fast |  Pro | Image to Video

**Slug:** `minimax-hailuo-v2-3-fast-pro-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for video generation |
| `image_url` | string | Yes | — | — | URL of the image to use as the first frame |
| `prompt_optimizer` | boolean | No | `"True"` | — | Whether to use the model's prompt optimizer |

---

## Minimax Hailuo V2.3 | Fast | Standard | Image to Video

**Slug:** `minimax-hailuo-v2-3-fast-standard-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for video generation |
| `image_url` | string | Yes | — | — | URL of the image to use as the first frame |
| `duration` | string | No | `"6"` | 6,10 | The duration of the video in seconds. |
| `prompt_optimizer` | boolean | No | `"True"` | — | Whether to use the model's prompt optimizer |

---

## Minimax Hailuo V2.3 | Pro | Image to Video

**Slug:** `minimax-hailuo-v2-3-pro-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for video generation |
| `image_url` | string | Yes | — | — | URL of the image to use as the first frame |
| `prompt_optimizer` | boolean | No | `"True"` | — | Whether to use the model's prompt optimizer |

---

## Minimax Hailuo V2.3 | Standard | Image to Video

**Slug:** `minimax-hailuo-v2-3-standard-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for video generation |
| `image_url` | string | Yes | — | — | URL of the image to use as the first frame |
| `duration` | string | No | `"6"` | 6,10 | The duration of the video in seconds. |
| `prompt_optimizer` | boolean | No | `"True"` | — | Whether to use the model's prompt optimizer |

---

## Seedance V1 | Pro | Fast | Image to Video

**Slug:** `seedance-v1-pro-fast-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt used to generate the video |
| `image_url` | string | Yes | — | — | The URL of the image used to generate video |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,4:3,1:1,9:16,21:9 | The aspect ratio of the generated video Default value: "16:9" |
| `resolution` | string | No | `"1080p"` | 480p,720p,1080p | Video resolution - 480p for faster generation, 1080p for higher quality |
| `duration` | integer | No | `"5"` | 3,4,5,6,7,8,9,10,11,12 | Duration of the video in seconds |
| `camera_fixed` | boolean | No | `"false"` | — | Whether to fix the camera position |
| `seed` | integer | No | — | — | Random seed to control video generation. |

---

## Ltx v2 | Image to Video | Fast

**Slug:** `ltx-v-2-image-to-video-fast`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | URL of the image to generate the video from. Must be publicly accessible or base64 data URI. Supports PNG, JPEG, WebP... |
| `prompt` | string | Yes | — | — | The prompt to generate the video from |
| `duration` | integer | No | `"6"` | 6,8,10,12,14,16,18,20 | The duration of the generated video in seconds. The fast model supports 6-20 seconds. Note: Durations longer than 10 ... |
| `resolution` | string | No | `"1080p"` | 1080p,1440p,2160p | The resolution of the generated video |
| `aspect_ratio` | string | No | `"16:9"` | 16:9 | The aspect ratio of the generated video |
| `fps` | integer | No | `"25"` | 25,50 | The frames per second of the generated video |
| `generate_audio` | boolean | No | `"True"` | — | Whether to generate audio for the generated video |

---

## Ltx v2 | Image to Video

**Slug:** `ltx-v-2-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | URL of the image to generate the video from. Must be publicly accessible or base64 data URI. Supports PNG, JPEG, WebP... |
| `prompt` | string | Yes | — | — | The prompt to generate the video from |
| `duration` | integer | No | `"6"` | 6,8,10 | The duration of the generated video in seconds |
| `resolution` | string | No | `"1080p"` | 1080p,1440p,2160p | The resolution of the generated video |
| `aspect_ratio` | string | No | `"16:9"` | 16:9 | The aspect ratio of the generated video |
| `fps` | integer | No | `"25"` | 25,50 | The frames per second of the generated video |
| `generate_audio` | boolean | No | `"True"` | — | Whether to generate audio for the generated video |

---

## Kling v2.5 | Turbo | Standard | Image to Video

**Slug:** `kling-v2-5-turbo-standard-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `image_url` | string | Yes | — | — | URL of the image to be used for the video |
| `duration` | string | No | `"5"` | 5,10 | The duration of the generated video in seconds |
| `negative_prompt` | string | No | `"blur, distort, and low quality"` | — | — |
| `cfg_scale` | number | No | `"0.5"` | — | The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt. |

---

## Veo 3.1 | Reference to Video

**Slug:** `veo3-1-reference-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_urls` | array | Yes | — | — | URLs of the reference images to use for consistent subject appearance |
| `prompt` | string | Yes | — | — | The text prompt describing the video you want to generate |
| `duration` | integer | No | `"8"` | 8 | The duration of the generated video in seconds |
| `resolution` | string | No | `"720p"` | 720p,1080p | Resolution of the generated video |
| `aspect_ratio` | string | No | `"16:9"` | 16:9 | Aspect ratio of the generated video |
| `generate_audio` | boolean | No | `"True"` | — | Whether to generate audio for the video. If false, %33 less credits will be used. |
| `auto_fix` | boolean | No | `"False"` | — | Whether to automatically attempt to fix prompts that fail content policy or other validation checks by rewriting them. |

---

## Veo 3.1 | Image to Video

**Slug:** `veo3-1-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt describing the video you want to generate |
| `image_url` | string | Yes | — | — | URL of the input image to animate. Should be 720p or higher resolution in 16:9 or 9:16 aspect ratio. If the image is ... |
| `aspect_ratio` | string | No | `"16:9"` | 9:16,16:9 | The aspect ratio of the generated video |
| `duration` | integer | No | `"8"` | 4,6,8 | The duration of the generated video in seconds |
| `generate_audio` | boolean | No | `"True"` | — | Whether to generate audio for the video. If false, %33 less credits will be used. |
| `resolution` | string | No | `"720p"` | 720p,1080p | Resolution of the generated video |
| `auto_fix` | boolean | No | `"False"` | — | Whether to automatically attempt to fix prompts that fail content policy or other validation checks by rewriting them. |

---

## Veo 3.1 | First Last Frame to Video

**Slug:** `veo3-1-first-last-frame-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `first_frame_url` | string | Yes | — | — | URL of the first frame of the video |
| `last_frame_url` | string | Yes | — | — | URL of the last frame of the video |
| `prompt` | string | Yes | — | — | The text prompt describing the video you want to generate |
| `duration` | integer | No | `"8"` | 4,6,8 | The duration of the generated video in seconds |
| `aspect_ratio` | string | No | `"16:9"` | 9:16,16:9 | Aspect ratio of the generated video |
| `resolution` | string | No | `"720p"` | 720p,1080p | Resolution of the generated video |
| `generate_audio` | boolean | No | `"True"` | — | Whether to generate audio for the video. If false, %33 less credits will be used. |
| `auto_fix` | boolean | No | `"false"` | — | Whether to automatically attempt to fix prompts that fail content policy or other validation checks by rewriting them. |

---

## Veo 3.1 | Image to video | Fast

**Slug:** `veo3-1-image-to-video-fast`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt describing the video you want to generate |
| `image_url` | string | Yes | — | — | URL of the input image to animate. Should be 720p or higher resolution in 16:9 or 9:16 aspect ratio. If the image is ... |
| `aspect_ratio` | string | No | `"16:9"` | 9:16,16:9 | The aspect ratio of the generated video |
| `duration` | integer | No | `"8"` | 4,6,8 | The duration of the generated video in seconds |
| `generate_audio` | boolean | No | `"True"` | — | Whether to generate audio for the video. If false, %33 less credits will be used. |
| `resolution` | string | No | `"720p"` | 720p,1080p | Resolution of the generated video |
| `auto_fix` | boolean | No | `"false"` | — | Whether to automatically attempt to fix prompts that fail content policy or other validation checks by rewriting them. |

---

## Veo 3.1 | First Last Frame to Video | Fast

**Slug:** `veo3-1-first-last-frame-to-video-fast`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `first_frame_url` | string | Yes | — | — | URL of the first frame of the video |
| `last_frame_url` | string | Yes | — | — | URL of the last frame of the video |
| `prompt` | string | Yes | — | — | The text prompt describing the video you want to generate |
| `duration` | string | No | `"8"` | 4,6,8 | The duration of the generated video in seconds |
| `aspect_ratio` | string | No | `"16:9"` | 9:16,16:9 | Aspect ratio of the generated video |
| `resolution` | string | No | `"720p"` | 720p,1080p | Resolution of the generated video |
| `generate_audio` | boolean | No | `"True"` | — | Whether to generate audio for the video. If false, %33 less credits will be used. |
| `auto_fix` | boolean | No | `"false"` | — | Whether to automatically attempt to fix prompts that fail content policy or other validation checks by rewriting them. |

---

## Ovi | Image to Video

**Slug:** `ovi-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt to guide video generation. |
| `image_url` | string | Yes | — | — | The image URL to guide video generation. |
| `negative_prompt` | string | No | `"jitter, bad hands, blur, distortion"` | — | Negative prompt for video generation. |
| `audio_negative_prompt` | string | No | `"robotic, muffled, echo, distorted"` | — | Negative prompt for audio generation. |
| `num_inference_steps` | integer | No | `"30"` | — | The number of inference steps. |
| `seed` | string | No | — | — | Random seed for reproducibility. If None, a random seed is chosen. |

---

## Sora 2 | Image to Video | Pro

**Slug:** `sora-2-image-to-video-pro`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt describing the video you want to generate |
| `resolution` | string | No | `"720p"` | 720p,1080p | The resolution of the generated video |
| `aspect_ratio` | string | No | `"16:9"` | 9:16,16:9 | The aspect ratio of the generated video |
| `duration` | integer | No | `"4"` | 4,8,12 | Duration of the generated video in seconds |
| `image_url` | string | Yes | — | — | The URL of the image to use as the first frame |

---

## Sora 2 | Image to Video

**Slug:** `sora-2-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt describing the video you want to generate |
| `image_url` | string | Yes | — | — | The URL of the image to use as the first frame |
| `aspect_ratio` | string | No | `"16:9"` | 9:16,16:9 | The aspect ratio of the generated video |
| `duration` | integer | No | `"4"` | 4,8,12 | Duration of the generated video in seconds |

---

## Wan | 2.5 | Preview | Image to Video

**Slug:** `wan-2-5-preview-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt describing the desired video motion. Max 800 characters. |
| `image_url` | string | Yes | — | — | URL of the image to use as the first frame. Must be publicly accessible. |
| `duration` | string | No | `"5"` | 5,10 | Duration of the generated video in seconds. Choose between 5 or 10 seconds. Default value: "5" |
| `audio_url` | string | No | — | — | URL of the audio to use as the background music. Must be publicly accessible. Limit handling: If the audio duration e... |
| `resolution` | string | No | `"720p"` | 480p,720p,1080p | Video resolution. Valid values: 480p, 720p, 1080p |
| `negative_prompt` | string | No | — | — | Negative prompt to describe content to avoid. Max 500 characters. |
| `enable_prompt_expansion` | boolean | No | `"true"` | — | Whether to enable prompt rewriting using LLM. |
| `seed` | integer | No | — | — | Random seed for reproducibility. If None, a random seed is chosen. |

---

## Kling v2.5 | Turbo | Pro | Image to Video

**Slug:** `kling-v2-5-turbo-pro-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `image_url` | string | Yes | — | — | URL of the image to be used for the video |
| `tail_image_url` | string | No | — | — | URL of the image to be used for the end of the video |
| `duration` | string | No | `"5"` | 5,10 | The duration of the generated video in seconds |
| `negative_prompt` | string | No | `"blur, distort, and low quality"` | — | — |
| `cfg_scale` | number | No | `"0.5"` | — | The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt. |

---

## Veed |  Fabric 1.0

**Slug:** `veed-fabric-1-0`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | — |
| `audio_url` | string | Yes | — | — | — |
| `resolution` | string | Yes | `"720p"` | 480p,720p | Resolution |

---

## Higgsfield AI Visual Effects

**Slug:** `higgsfield-ai-visual-effects`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `model` | string | Yes | — | dop-lite,dop-preview,dop-turbo | — |
| `prompt` | string | Yes | — | — | — |
| `seed` | integer | Yes | — | — | — |
| `motions` | array | Yes | — | — | — |
| `image_url` | string | Yes | — | — | — |
| `enhance_prompt` | boolean | No | — | — | — |
| `end_input_images` | array | No | — | — | — |

---

## Kling  V1 | Pro | AI Avatar

**Slug:** `kling-v1-pro-ai-avatar`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | The URL of the image to use as your avatar |
| `audio_url` | string | Yes | — | — | The URL of the audio file. |
| `prompt` | string | No | — | — | The prompt to use for the video generation. |

---

## Kling V1 | Standard | AI Avatar

**Slug:** `kling-v1-standard-ai-avatar`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | The URL of the image to use as your avatar |
| `audio_url` | string | Yes | — | — | The URL of the audio file. |
| `prompt` | string | No | — | — | The prompt to use for the video generation. |

---

## Decart | Lucy 14B | Image to Video

**Slug:** `decart-lucy-14b-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text description of the desired video content |
| `image_url` | string | Yes | — | — | URL of the image to use as the first frame |
| `resolution` | string | No | `"720p"` | 720p | Resolution of the generated video |
| `aspect_ratio` | string | No | `"16:9"` | 9:16,16:9 | Aspect ratio of the generated video. |
| `sync_mode` | boolean | No | `"True"` | — | If set to true, the function will wait for the image to be generated and uploaded before returning the response. This... |

---

## Echomimic V3

**Slug:** `echomimic-v3`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | The URL of the image to use as a reference for the video generation. |
| `audio_url` | string | Yes | — | — | The URL of the audio to use as a reference for the video generation. |
| `prompt` | string | Yes | — | — | The prompt to use for the video generation. |
| `negative_prompt` | string | No | — | — | The negative prompt to use for the video generation. |
| `num_frames_per_generation` | integer | No | `"121"` | — | The number of frames to generate at once. |
| `guidance_scale` | number | No | `"4.5"` | — | The guidance scale to use for the video generation. |
| `audio_guidance_scale` | number | No | `"2.5"` | — | The audio guidance scale to use for the video generation. |
| `seed` | integer | No | — | — | The seed to use for the video generation. |

---

## Wan | v2.2 A14B | Image to Video

**Slug:** `wan-v2-2-a14b-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | URL of the input image. If the input image does not match the chosen aspect ratio, it is resized and center cropped. |
| `prompt` | string | Yes | — | — | The text prompt to guide video generation. |
| `end_image_url` | string | No | — | — | URL of the end image. |
| `negative_prompt` | string | No | — | — | Negative prompt for video generation. |
| `seed` | integer | No | — | — | Random seed for reproducibility. If None, a random seed is chosen. |
| `resolution` | string | No | `"720p"` | 480p,580p,720p | Resolution of the generated video (480p, 580p, or 720p). |
| `aspect_ratio` | string | No | `"auto"` | auto,16:9,9:16,1:1 | Aspect ratio of the generated video. If 'auto', the aspect ratio will be determined automatically based on the input ... |
| `num_inference_steps` | integer | No | `"27"` | — | Number of inference steps for sampling. Higher values give better quality but take longer. |
| `enable_safety_checker` | boolean | No | `"False"` | — | If set to true, input data will be checked for safety before processing. |
| `enable_prompt_expansion` | boolean | No | `"False"` | — | Whether to enable prompt expansion. This will use a large language model to expand the prompt with additional details... |
| `acceleration` | string | No | `"regular"` | none,regular | Acceleration level to use. The more acceleration, the faster the generation, but with lower quality. The recommended ... |
| `guidance_scale` | number | No | `"3.5"` | — | Classifier-free guidance scale. Higher values give better adherence to the prompt but may decrease quality. |
| `guidance_scale_2` | number | No | `"3.5"` | — | Guidance scale for the second stage of the model. This is used to control the adherence to the prompt in the second s... |
| `shift` | number | No | `"5"` | — | Shift value for the video. Must be between 1.0 and 10.0. |
| `interpolator_model` | string | No | `"film"` | none,film,rife | The model to use for frame interpolation. If None, no interpolation is applied. |
| `num_interpolated_frames` | integer | No | `"1"` | — | Number of frames to interpolate between each pair of generated frames. Must be between 0 and 4. |
| `adjust_fps_for_interpolation` | boolean | No | `"True"` | — | If true, the number of frames per second will be multiplied by the number of interpolated frames plus one. For exampl... |
| `frames_per_second` | integer | No | `"16"` | — | — |
| `num_frames` | integer | No | `"81"` | — | Number of frames to generate. |

---

## Stable Avatar

**Slug:** `stable-avatar`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image` | string | Yes | — | — | Reference image for avatar generation |
| `audio` | string | Yes | — | — | Audio file to drive the avatar animation |
| `prompt` | string | No | — | — | Text prompt describing the scene |
| `negative_prompt` | string | No | — | — | Negative prompt to avoid unwanted elements |
| `aspect_ratio` | string | No | `"auto"` | auto,square,portrait,landscape | An enumeration. |
| `gpu_memory_mode` | string | No | `"model_cpu_offload"` | model_full_load,model_cpu_offload,model_cpu_offload_and_qfloat8,sequential_cp... | An enumeration. |
| `guidance_scale` | number | No | `"6"` | — | Guidance scale for generation |
| `num_inference_steps` | integer | No | `"50"` | — | Number of inference steps |
| `text_guide_scale` | number | No | `"3"` | — | Text guidance scale |
| `audio_guide_scale` | number | No | `"5"` | — | Audio guidance scale |
| `motion_frame` | integer | No | `"24"` | — | Motion frame parameter |
| `fps` | integer | No | `"24"` | — | Frames per second for output video |
| `overlap_window_length` | integer | No | `"5"` | — | Overlap window length for long video generation |
| `go_fast` | boolean | No | `"false"` | — | Enable fast mode with optimizations (TeaCache acceleration) |
| `seed` | integer | No | — | — | Random seed for reproducibility |

---

## Wan | v2.2 A14B | Image to Video | Turbo

**Slug:** `wan-v2-2-a14b-image-to-video-turbo`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | URL of the input image. If the input image does not match the chosen aspect ratio, it is resized and center cropped. |
| `prompt` | string | Yes | — | — | The text prompt to guide video generation. |
| `end_image_url` | string | No | — | — | — |
| `resolution` | string | No | `"720p"` | 480p,580p,720p | Resolution of the generated video (480p, 580p, or 720p). |
| `aspect_ratio` | string | No | `"auto"` | auto,16:9,9:16,1:1 | Aspect ratio of the generated video. If 'auto', the aspect ratio will be determined automatically based on the input ... |
| `enable_safety_checker` | boolean | No | `"False"` | — | If set to true, input data will be checked for safety before processing. |
| `enable_prompt_expansion` | boolean | No | `"False"` | — | Whether to enable prompt expansion. This will use a large language model to expand the prompt with additional details... |
| `acceleration` | string | No | `"regular"` | none,regular | Acceleration level to use. The more acceleration, the faster the generation, but with lower quality. The recommended ... |
| `seed` | integer | No | — | — | Random seed for reproducibility. If None, a random seed is chosen. |

---

## Runway | Act-Two

**Slug:** `runway-act-two`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `character_type` | string | Yes | `"image"` | video,image | — |
| `character_uri` | string | Yes | — | — | — |
| `reference_uri` | string | No | — | — | — |
| `aspect_ratio` | string | Yes | — | 1280:720,720:1280,960:960,1104:832,832:1104,1584:672 | — |
| `body_control` | boolean | No | `"true"` | — | — |
| `expression_intensity` | integer | No | `"3"` | — | — |
| `seed` | integer | No | — | — | — |
| `public_figure_moderation` | string | No | `"low"` | auto,low | — |

---

## PixVerse v5 | Transition

**Slug:** `pixverse-v5-transition`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `first_frame_url` | string | Yes | — | — | — |
| `last_frame_url` | string | Yes | — | — | — |
| `duration` | integer | Yes | `"5"` | 5,8 | — |
| `quality` | string | No | `"540p"` | 360p,540p,720p,1080p | The resolution quality of the video. |
| `motion_mode` | string | No | `"normal"` | normal | Controls animation speed |
| `seed` | integer | No | — | — | — |
| `sound_effect_content` | string | No | — | — | — |
| `sound_effect_switch` | boolean | No | `"true"` | — | — |
| `lip_sync_switch` | boolean | No | `"false"` | — | Set to true if you want to enable this feature |
| `lip_sync_tts_content` | string | No | — | — | ~140 (UTF-8) characters |
| `lip_sync_tts_speaker_id` | string | No | — | {
  "1": {
    "title": "Emily",
    "audio": "https://storage.googleapis.com... | — |

---

## PixVerse v5 | Image to Video

**Slug:** `pixverse-v5-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | — |
| `prompt` | string | Yes | — | — | — |
| `quality` | string | Yes | `"540p"` | 360p,540p,720p,1080p | — |
| `motion_mode` | string | No | `"normal"` | normal | — |
| `duration` | integer | No | `"5"` | 5,8 | — |
| `seed` | integer | No | — | — | — |
| `negative_prompt` | string | No | — | — | — |
| `style` | string | No | — | anime,3d_animation,clay,comic,cyberpunk | — |
| `sound_effect_content` | string | No | — | — | — |
| `sound_effect_switch` | boolean | No | `"true"` | — | — |
| `lip_sync_switch` | boolean | No | `"false"` | — | Set to true if you want to enable this feature. Default is false. |
| `lip_sync_tts_content` | string | No | — | — | ~140 (UTF-8) characters |
| `lip_sync_tts_speaker_id` | string | No | — | {
  "1": {
    "title": "Emily",
    "audio": "https://storage.googleapis.com... | — |

---

## PixVerse v4.5 | Fusion

**Slug:** `pixverse-v4-5-fusion`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_references` | array | Yes | — | — | — |
| `prompt` | string | Yes | — | — | — |
| `duration` | integer | No | `"5"` | 5,8 | — |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,4:3,1:1,3:4,9:16 | — |
| `quality` | string | No | `"540p"` | 360p,540p,720p,1080p | — |
| `seed` | integer | No | — | — | — |

---

## Character 3

**Slug:** `character-3`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | The URL of the image used to generate the video |
| `audio_url` | string | Yes | — | — | The URL of the audio file to generate the video. Audio must be under 30s long. |

---

## Bytedance | Omnihuman

**Slug:** `bytedance-omnihuman`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | The URL of the image used to generate the video |
| `audio_url` | string | Yes | — | — | The URL of the audio file to generate the video. Audio must be under 30s long. |

---

## Moonvalley | Marey | Image to Video

**Slug:** `moonvalley-marey-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate a video from |
| `image_url` | string | Yes | — | — | The URL of the image to use as the first frame of the video. |
| `dimensions` | string | No | `"1920x1080"` | 1920x1080,1080x1920,1152x1152,1536x1152,1152x1536 | The dimensions of the generated video in width x height format. |
| `duration` | string | No | `"5s"` | 5s,10s | The duration of the generated video. |
| `negative_prompt` | string | No | `"gopro, bright, contrast, static, overexposed, bright, vignette, artifacts, still, noise, texture, scanlines, videogame, 360 camera, VR, transition, flare, saturation, distorted, warped, wide angle, contrast, saturated, vibrant, glowing, cross dissolve, texture, videogame, saturation, cheesy, ugly hands, mutated hands, mutant, disfigured, extra fingers, blown out, horrible, blurry, worst quality, bad, transition, dissolve, cross-dissolve, melt, fade in, fade out, wobbly, weird, low quality, plastic, stock footage, video camera, boring, static"` | — | Negative prompt used to guide the model away from undesirable features |
| `seed` | integer | No | `"9"` | — | Seed for random number generation. |

---

## ByteDance | Video Stylize

**Slug:** `bytedance-video-stylize`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `style` | string | Yes | — | — | The style for your character in the video. Please use a short description.maximum 100 characters |
| `image_url` | string | Yes | — | — | URL of the image to make the stylized video from. |

---

## Pika v1.5 | Effects

**Slug:** `pika-v-1-5-effects`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | URL of the input imagE |
| `pikaffect` | string | No | `"Squish"` | Cake-ify,Crumble,Crush,Decapitate,Deflate,Dissolve,Explode,Eye-pop,Inflate,Le... | — |
| `prompt` | string | No | — | — | Text prompt to guide the effect |
| `negative_prompt` | string | No | — | — | — |
| `seed` | integer | No | — | — | — |

---

## Pico Motion | Transition

**Slug:** `pico-motion-transition`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `start_image_url` | string | Yes | — | — | — |
| `end_image_url` | string | Yes | — | — | — |

---

## Wan 2.2 | Image to Video

**Slug:** `wan-2-2-i2v`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `image_url` | string | Yes | — | — | — |
| `resolution` | string | No | `"720p"` | 480p,720p | — |
| `aspect_ratio` | string | No | `"auto"` | auto,16:9,9:16,1:1 | — |
| `negative_prompt` | string | No | — | — | — |
| `enable_safety_checker` | boolean | No | `"false"` | — | — |

---

## Runway | Gen4 | Turbo

**Slug:** `gen4-turbo`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for video generation |
| `image` | string | Yes | — | — | Initial image for video generation (first frame) |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,4:3,3:4,1:1,21:9 | An enumeration. |
| `duration` | integer | No | `"5"` | 5,10 | An enumeration. |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation |

---

## Google Veo 3 Fast | Image to Video

**Slug:** `veo-3-fast-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | The URL of the image used to generate video |
| `prompt` | string | Yes | — | — | Text prompt for video generation |
| `generate_audio` | boolean | No | `"true"` | — | — |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16 | The aspect ratio of the generated video |
| `resolution` | string | No | `"720p"` | 720p,1080p | Resolution of the generated video |

---

## Google Veo 3 | Image to Video

**Slug:** `veo-3-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | The URL of the image used to generate video |
| `prompt` | string | Yes | — | — | Text prompt for video generation |
| `generate_audio` | boolean | No | `"true"` | — | — |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16 | The aspect ratio of the generated video |
| `resolution` | string | No | `"720p"` | 720p,1080p | — |

---

## Vidu Q1 | Reference to Video

**Slug:** `vidu-q-1-reference-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt,A textual description for video generation, with a maximum length of 1500 characters |
| `image_url` | string | Yes | — | png,jpeg,jpg,webp | Image Url |
| `image_url2` | string | No | — | — | — |
| `image_url3` | string | No | — | — | — |
| `image_url4` | string | No | — | — | — |
| `duration` | integer | No | `"5"` | 5 | The number of seconds of duration for the output video |
| `bgm` | boolean | No | `"false"` | — | — |
| `resolution` | string | No | — | 1080p | — |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | The aspect ratio of the output video |
| `seed` | integer | No | — | — | Seed |
| `movement_amplitude` | string | No | `"auto"` | auto,small,medium,large | The movement amplitude of objects in the frame |

---

## Pico Motion | Image to Video

**Slug:** `pico-motion-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `image_url` | string | Yes | — | — | — |
| `resolution` | string | Yes | `"720p"` | 720p | — |
| `duration` | string | Yes | `"4"` | 4 | — |

---

## Minimax Hailuo V2 | Standard | Image to Video

**Slug:** `minimax-hailuo-v2-standard-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `image_url` | string | Yes | — | — | — |
| `duration` | integer | No | `"6"` | 6,10 | The duration of the video in seconds. 10 seconds videos are not supported for 1080p resolution. |
| `resolution` | string | No | `"768P"` | 768P,512P | The resolution of the generated video. |
| `prompt_optimizer` | boolean | No | `"true"` | — | Whether to use the model's prompt optimizer |

---

## Minimax Hailuo V2 | Pro | Image to Video

**Slug:** `minimax-hailuo-v2-pro-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `image_url` | string | Yes | — | — | — |
| `prompt_optimizer` | boolean | No | `"true"` | — | Whether to use the model's prompt optimizer |

---

## Seedance V1 | Pro | Image to Video

**Slug:** `seedance-v1-pro-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt used to generate the video |
| `image_url` | string | Yes | — | — | The URL of the image used to generate video |
| `resolution` | string | No | `"1080p"` | 480p,720p,1080p | Video resolution - 480p for faster generation, 1080p for higher quality |
| `aspect_ratio` | string | No | `"9:16"` | 21:9,16:9,4:3,1:1,9:16 | — |
| `duration` | integer | No | `"5"` | 3,4,5,6,7,8,9,10,11,12 | Duration of the video in seconds |
| `last_frame_image` | string | No | — | — | — |
| `camera_fixed` | boolean | No | `"false"` | — | Whether to fix the camera position |
| `seed` | integer | No | — | — | Random seed to control video generation. |

---

## Google Veo 2 | Image to Video

**Slug:** `veo-2-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for video generation |
| `image_url` | string | Yes | — | — | The URL of the image used to generate video |
| `aspect_ratio` | string | No | `"auto"` | auto,auto_prefer_portrait,16:9,9:16 | The aspect ratio of the generated video Default value: auto |
| `duration` | string | No | `"5s"` | 5s,6s,7s,8s | Duration of the generated video, Default value: 5s |

---

## Seedance V1 | Lite | Image to Video

**Slug:** `seedance-v1-lite-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt used to generate the video |
| `image_url` | string | Yes | — | — | The URL of the image used to generate video |
| `resolution` | string | No | `"720p"` | 480p,720p,1080p | Video resolution - 480p for faster generation, 720p for higher quality |
| `aspect_ratio` | string | No | `"9:16"` | 21:9,16:9,4:3,1:1,9:16 | — |
| `duration` | integer | No | `"5"` | 3,4,5,6,7,8,9,10,11,12 | Duration of the video in seconds |
| `last_frame_image` | string | No | — | — | — |
| `camera_fixed` | boolean | No | — | — | Whether to fix the camera position |
| `seed` | integer | No | — | — | Random seed to control video generation. |

---

## Kling v2.1 | Master | Image to Video

**Slug:** `kling-v2-1-master-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `image_url` | string | Yes | — | — | — |
| `duration` | integer | No | `"5"` | 5,10 | — |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | — |
| `negative_prompt` | string | No | — | — | — |
| `cfg_scale` | number | No | `"0.5"` | — | — |

---

## Kling v2.1 | Pro | Image to Video

**Slug:** `kling-v2-1-pro-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `image_url` | string | Yes | — | — | — |
| `duration` | integer | No | `"5"` | 5,10 | — |
| `negative_prompt` | string | No | — | — | — |
| `cfg_scale` | number | No | `"0.5"` | — | — |
| `tail_image_url` | string | No | — | — | URL of the image to be used for the end of the video |

---

## Kling v2.1 | Standard | Image to Video

**Slug:** `kling-v2-1-standard-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `image_url` | string | Yes | — | — | — |
| `duration` | integer | No | `"5"` | 5,10 | — |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | — |
| `negative_prompt` | string | No | — | — | — |
| `cfg_scale` | number | No | `"0.5"` | — | — |

---

## Eachlabs Product Arc Shot | v1

**Slug:** `eachlabs-product-arc-shot-v1`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | — |

---

## Eachlabs Product Zoom In v1

**Slug:** `eachlabs-product-zoom-in-v1`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | — |

---

## Kling v1 |  Standard | Image to Video

**Slug:** `kling-v1-standard-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt for the video |
| `image_url` | string | Yes | — | — | URL of the image to be used for the video |
| `duration` | integer | No | `"5"` | 5,10 | The duration of the generated video in seconds |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | The aspect ratio of the generated video frame |
| `negative_prompt` | string | No | `"blur, distort, and low quality"` | — | — |
| `cfg_scale` | number | No | `"0.5"` | — | The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt |
| `tail_image_url` | string | No | — | — | URL of the image to be used for the end of the video |
| `static_mask_url` | string | No | — | — | URL of the image for Static Brush Application Area (Mask image created by users using the motion brush) |

---

## Kling v1 | Pro | Image to Video

**Slug:** `kling-v1-pro-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt for the video |
| `image_url` | string | Yes | — | — | URL of the image to be used for the video |
| `duration` | integer | No | `"5"` | 5,10 | The duration of the generated video in seconds |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | The aspect ratio of the generated video frame |
| `negative_prompt` | string | No | `"blur, distort, and low quality"` | — | Default value: "blur, distort, and low quality" |
| `cfg_scale` | number | No | `"0.5"` | — | The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt. |
| `tail_image_url` | string | No | — | — | URL of the image to be used for the end of the video |
| `static_mask_url` | string | No | — | — | URL of the image for Static Brush Application Area (Mask image created by users using the motion brush) |

---

## Kling v1.6 | Pro | Elements

**Slug:** `kling-v1-6-pro-elements`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `duration` | integer | Yes | `"5"` | 5,10 | — |
| `input_image_urls` | array | No | — | — | List of image URLs to use for video generation. Supports up to 4 images. |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | — |
| `negative_prompt` | string | No | — | — | — |

---

## Kling v1.6 | Standard | Elements

**Slug:** `kling-v1-6-standard-elements`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `input_image_urls` | array | No | — | — | List of image URLs to use for video generation. Supports up to 4 images. |
| `duration` | integer | Yes | `"5"` | 5,10 | — |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | — |
| `negative_prompt` | string | No | — | — | — |

---

## Kling v1.6 | Standard | Effects

**Slug:** `kling-v1-6-standart-effects`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url_1` | string | Yes | — | — | — |
| `template_slug` | string | Yes | `"hug"` | {"hug":{"title":"hug","image":"https://storage.googleapis.com/magicpoint/thum... | — |
| `duration` | integer | Yes | `"5"` | 5,10 | — |
| `image_url_2` | string | No | — | — | This input is required when the template slug is one of the following: hug, kiss, heart_gesture. |

---

## Kling v1.6 | Pro | Effects

**Slug:** `kling-v1-6-pro-effects`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url_1` | string | Yes | — | — | — |
| `image_url_2` | string | No | — | — | This input is required when the template slug is one of the following: hug, kiss, heart_gesture. |
| `template_slug` | string | Yes | `"kiss"` | {"hug":{"title":"hug","image":"https://storage.googleapis.com/magicpoint/thum... | — |
| `duration` | integer | Yes | `"5"` | 5,10 | — |

---

## Vidu Q1 | Start End to Video

**Slug:** `vidu-q-1-start-end-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `start_image_url` | string | Yes | — | — | Start Image Url |
| `end_image_url` | string | Yes | — | — | End Image Url |
| `prompt` | string | No | — | — | Prompt description, max 1500 characters. |
| `duration` | integer | No | `"5"` | 5 | Video duration. |
| `seed` | integer | No | — | — | Seed |
| `bgm` | boolean | No | `"false"` | — | Whether to add background music to the generated video. Default: false. Acceptable values: true, false. When true, th... |
| `resolution` | string | No | `"1080p"` | 1080p | Resolution |
| `movement_amplitude` | string | No | `"auto"` | auto,small,medium,large | The movement amplitude of objects in the frame |

---

## Vidu Q1 | Image to Video

**Slug:** `vidu-q-1-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | No | — | — | Text prompt,A textual description for video generation, with a maximum length of 1500 characters |
| `image_url` | string | Yes | — | — | Image Url |
| `duration` | integer | No | `"5"` | 5 | Video duration |
| `resolution` | string | No | `"1080p"` | 1080p | Resolution |
| `movement_amplitude` | string | No | `"auto"` | auto,small,medium,large | The movement amplitude of objects in the frame |
| `bgm` | boolean | No | `"false"` | — | Whether to add background music to the generated video. Default: false. Acceptable values: true, false. When true, th... |
| `seed` | integer | No | — | — | Seed |

---

## Vidu 1.5 | Image to Video

**Slug:** `vidu-1-5-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | No | — | — | Text prompt, A textual description for video generation, with a maximum length of 1500 characters |
| `image_url` | string | Yes | — | — | Image Url |
| `duration` | integer | No | `"4"` | 4,8 | Video duration. |
| `seed` | integer | No | — | — | Seed |
| `resolution` | string | No | `"360p"` | 1080p,720p,360p | — |
| `movement_amplitude` | string | No | `"auto"` | auto,small,medium,large | The movement amplitude of objects in the frame |
| `bgm` | boolean | No | `"false"` | — | Whether to add background music to the generated video. Default: false. Acceptable values: true, false. When true, th... |

---

## Vidu 1.5 | Reference to Video

**Slug:** `vidu-1-5-reference-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `resolution` | string | No | `"720p"` | 1080p,720p,360p | — |
| `prompt` | string | Yes | — | — | Text prompt,A textual description for video generation, with a maximum length of 1500 characters |
| `image_url` | string | Yes | — | png,jpeg,jpg,webp | Image Url |
| `image_url2` | string | No | — | — | — |
| `image_url3` | string | No | — | — | — |
| `image_url4` | string | No | — | — | — |
| `bgm` | boolean | No | `"false"` | — | Whether to add background music to the generated video. Default: false. Acceptable values: true, false. When true, th... |
| `duration` | integer | No | `"4"` | 4,8 | The number of seconds of duration for the output video |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | The aspect ratio of the output video |
| `movement_amplitude` | string | No | `"auto"` | auto,small,medium,large | The movement amplitude of objects in the frame |
| `seed` | integer | No | — | — | Seed |

---

## Vidu 1.5 | Start End to Video

**Slug:** `vidu-1-5-start-end-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `start_image_url` | string | Yes | — | png,jpeg,jpg,webp | Start Image Url |
| `end_image_url` | string | Yes | — | png,jpeg,jpg,webp | End Image Url |
| `prompt` | string | No | — | — | Prompt description, max 1500 characters. |
| `duration` | integer | No | `"4"` | 4,8 | Video duration. |
| `seed` | integer | No | — | — | Seed |
| `resolution` | string | No | `"720p"` | 1080p,720p,360p | — |
| `bgm` | boolean | No | `"false"` | — | Whether to add background music to the generated video. Default: false. Acceptable values: true, false. When true, th... |
| `movement_amplitude` | string | No | `"auto"` | auto,small,medium,large | The movement amplitude of objects in the frame |

---

## Vidu 2.0 | Start End to Video

**Slug:** `vidu-2-0-start-end-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `bgm` | boolean | No | `"false"` | — | Whether to add background music to the generated video. - Default: false. Acceptable values: true, false. - When true... |
| `start_image_url` | string | Yes | — | — | — |
| `end_image_url` | string | Yes | — | — | End Image |
| `prompt` | string | No | — | — | Prompt description, max 1500 characters. |
| `duration` | integer | No | `"4"` | 4,8 | Video duration. |
| `resolution` | string | No | `"720p"` | 1080p,720p | — |
| `movement_amplitude` | string | No | `"auto"` | auto,small,medium,large | The movement amplitude of objects in the frame |
| `seed` | integer | No | — | — | — |

---

## Vidu 2.0 | Reference to Video

**Slug:** `vidu-2-0-reference-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt, A textual description for video generation, with a maximum length of 1500 characters |
| `image_url` | string | Yes | — | — | The model will use the provided images as references to generate a video with consistent subjects |
| `image_url2` | string | No | — | — | — |
| `duration` | integer | No | `"4"` | 4 | The number of seconds of duration for the output video |
| `image_url3` | string | No | — | — | — |
| `image_url4` | string | No | — | — | — |
| `resolution` | string | No | `"720p"` | 720p | — |
| `movement_amplitude` | string | No | `"auto"` | auto,small,medium,large | The movement amplitude of objects in the frame |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | — |
| `seed` | integer | No | — | — | Seed |

---

## PixVerse v4.5 | Effect

**Slug:** `pixverse-v4-5-effect`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | No | — | — | — |
| `duration` | integer | Yes | `"5"` | 5,8 | — |
| `quality` | string | Yes | `"720p"` | 360p,540p,720p,1080p | — |
| `image_urls` | array | No | — | — | — |
| `template_slug` | string | Yes | `"jellycat-everything"` | {
  "dragon-evoker": {
    "title": "dragon-evoker",
    "image": "https://st... | Pixverse Effect |
| `sound_effect_switch` | boolean | No | `"true"` | — | — |
| `motion_mode` | string | No | `"normal"` | normal,fast | Controls animation speed |
| `sound_effect_content` | string | No | — | — | — |

---

## PixVerse v4.5 | Transition

**Slug:** `pixverse-v4-5-transition`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `first_frame_url` | string | Yes | — | — | — |
| `last_frame_url` | string | Yes | — | — | — |
| `duration` | integer | Yes | `"5"` | 5,8 | — |
| `quality` | string | Yes | `"540p"` | 360p,540p,720p,1080p | The resolution quality of the video. |
| `motion_mode` | string | No | `"normal"` | normal,fast | Controls animation speed |
| `seed` | integer | No | — | — | — |

---

## PixVerse v4.5 | Image to Video

**Slug:** `pixverse-v4-5-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | — |
| `quality` | string | Yes | `"540p"` | 360p,540p,720p,1080p | — |
| `prompt` | string | Yes | — | — | — |
| `motion_mode` | string | No | `"normal"` | normal,fast | — |
| `duration` | integer | Yes | `"5"` | 5,8 | — |
| `seed` | integer | No | — | — | Set a seed for reproducibility. Random by default. |
| `negative_prompt` | string | No | — | — | — |
| `style` | string | No | — | anime,3d_animation,clay,comic,cyberpunk | — |
| `sound_effect_switch` | boolean | No | `"true"` | — | — |
| `sound_effect_content` | string | No | — | — | — |
| `lip_sync_switch` | boolean | No | `"false"` | — | Set to true if you want to enable this feature. Default is false. |
| `lip_sync_tts_content` | string | No | — | — | ~140 (UTF-8) characters |
| `lip_sync_tts_speaker_id` | string | No | — | {
  "1": {
    "title": "Emily",
    "audio": "https://storage.googleapis.com... | — |

---

## PixVerse v4 | Effect

**Slug:** `pixverse-v4-effect`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `quality` | string | Yes | `"540p"` | 360p,540p,720p,1080p | — |
| `duration` | integer | Yes | `"5"` | 5,8 | — |
| `image_url` | string | No | — | — | — |
| `image_urls` | array | No | — | — | — |
| `template_id` | string | Yes | `"30523675191680"` | {"330523675191680":{"title":"Ghibli Live!","image":"https://storage.googleapi... | Pixverse Effect |
| `motion_mode` | string | No | `"normal"` | normal,fast | Controls animation speed |

---

## PixVerse v4 | Transition

**Slug:** `pixverse-v4-transition`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `first_frame_url` | string | Yes | — | — | — |
| `last_frame_url` | string | Yes | — | — | — |
| `duration` | integer | Yes | `"5"` | 5,8 | — |
| `quality` | string | Yes | `"540p"` | 360p,540p,720p,1080p | The resolution quality of the video. |
| `motion_mode` | string | No | `"normal"` | normal,fast | Controls animation speed |
| `seed` | integer | No | — | — | — |

---

## Vidu 2.0 | Image to Video

**Slug:** `vidu-2-0-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `resolution` | string | No | `"720p"` | 360p,720p,1080p | — |
| `bgm` | boolean | No | `"false"` | — | Whether to add background music to the generated video. - Default: false. Acceptable values: true, false. - When true... |
| `image_url` | string | Yes | — | — | An image to be used as the start frame of the generated video |
| `prompt` | string | No | — | — | A textual description for video generation, with a maximum length of 1500 characters |
| `duration` | integer | No | `"4"` | 4,8 | Video duration. |
| `movement_amplitude` | string | No | `"auto"` | auto,small,medium,large | The movement amplitude of objects in the frame |
| `seed` | integer | No | — | — | Seed |

---

## PixVerse v4 | Image to Video

**Slug:** `pixverse-v4-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | `"https://storage.googleapis.com/magicpoint/inputs/lion.png"` | — | — |
| `quality` | string | Yes | `"540p"` | 360p,540p,720p,1080p | — |
| `prompt` | string | Yes | `"lion runs towards camera"` | — | — |
| `motion_mode` | string | No | `"normal"` | normal,fast | — |
| `duration` | integer | Yes | `"5"` | 5,8 | — |
| `seed` | integer | No | — | — | Set a seed for reproducibility. Random by default. |
| `negative_prompt` | string | No | — | — | — |
| `style` | string | No | — | anime,3d_animation,clay,comic,cyberpunk | — |

---

## Minimax Hailuo V1 Live | Image to Video

**Slug:** `minimax-i2v-01-live`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Prompt |
| `first_frame_image` | string | Yes | — | — | First frame image for video generation. The output video will have the same aspect ratio as this image. |
| `prompt_optimizer` | boolean | No | `"true"` | — | The model will automatically optimize prompts to improve generation quality. To maintain stricter adherence to instru... |

---

## Minimax Hailuo V1 | Image to Video

**Slug:** `minimax-i2v-01`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Prompt |
| `first_frame_image` | string | Yes | — | — | URL of the image to use as the first frame |
| `prompt_optimizer` | boolean | No | `"true"` | — | — |

---

## Minimax Hailuo V1 | Subject to Video

**Slug:** `minimax-s2v-01`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `subject_image` | string | Yes | — | — | URL of the subject reference image to use for consistent subject appearance |
| `prompt` | string | Yes | — | — | — |
| `prompt_optimizer` | boolean | No | — | — | — |

---

## Kling v2 | Image to Video

**Slug:** `kling-v2-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Prompt |
| `image_url` | string | Yes | — | — | Image Url |
| `duration` | string | No | `"5"` | 5,10 | The duration of the generated video in seconds |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | The aspect ratio of the generated video frame |
| `negative_prompt` | string | No | — | — | Negative Prompt |
| `cfg_scale` | number | No | `"0.5"` | — | The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt. |

---

## Kling v1.6 | Pro | Image to Video

**Slug:** `kling-v1-6-pro-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Prompt |
| `image_url` | string | Yes | — | — | Image Url |
| `duration` | string | No | `"5"` | 5,10 | The duration of the generated video in seconds |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | The aspect ratio of the generated video frame |
| `tail_image_url` | string | No | — | — | URL of the image to be used for the end of the video |
| `negative_prompt` | string | No | — | — | Negative Prompt |
| `cfg_scale` | number | No | `"0.5"` | — | The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt. |

---

## Kling v1.6 | Standard | Image to Video

**Slug:** `kling-v1-6-standard-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `cfg_scale` | number | No | `"0.5"` | — | The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt. |
| `prompt` | string | Yes | — | — | Prompt |
| `image_url` | string | Yes | — | — | Image Url |
| `duration` | string | No | `"5"` | 5,10 | The duration of the generated video in seconds |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | The aspect ratio of the generated video frame |
| `negative_prompt` | string | No | — | — | Negative Prompt |

---

## Kling v1.5 | Pro | Image to Video

**Slug:** `kling-v1-5-pro-image-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Prompt |
| `image_url` | string | Yes | — | — | Image |
| `duration` | string | No | `"5"` | 5,10 | The duration of the generated video in seconds |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | The aspect ratio of the generated video frame |
| `tail_image_url` | string | No | — | — | URL of the image to be used for the end of the video |
| `negative_prompt` | string | No | `"blur, distort, and low quality"` | — | Negative Prompt |
| `cfg_scale` | number | No | `"0.5"` | — | The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt. |

---

## Vidu Template

**Slug:** `vidu-template`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | — |
| `template_name` | string | Yes | `"minecraft"` | {
  "pole_dance": {
    "title": "pole_dance",
    "image": "https://storage.... | — |
| `image_url_2` | string | No | — | — | — |
| `image_url_3` | string | No | — | — | — |
| `aspect_ratio` | string | No | — | 16:9,1:1,9:16 | — |
| `bgm` | boolean | No | `"false"` | — | Whether to add background music to the generated video. Default: false. Acceptable values: true, false. When true, th... |
| `beast` | string | No | `"auto"` | auto,bear,tiger,elk,snake,lion,wolf | The beast of the generated video Default value: auto |
| `area` | string | No | `"auto"` | auto,denmark,uk,africa,china,mexico,switzerland,russia,italy,korea,thailand,i... | The area of the generated video Default value: auto |
| `seed` | integer | No | — | — | — |

---

## Wan 2.1 | Image to Video | 720P

**Slug:** `wan-2-1-i2v-720p`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Prompt for video generation |
| `image` | string | Yes | — | — | Input image to start generating from |
| `num_frames` | integer | No | `"81"` | — | Number of video frames |
| `max_area` | string | No | `"1280x720"` | 1280x720,720x1280 | An enumeration. |
| `frames_per_second` | integer | No | `"16"` | — | Frames per second. Note that the pricing of this model is based on the video duration at 16 fps |
| `fast_mode` | string | No | `"Off"` | Off,Balanced,Fast,Ultra-fast | An enumeration. |
| `sample_steps` | integer | No | `"30"` | — | Number of generation steps. Fewer steps means faster generation, at the expensive of output quality. 30 steps is suff... |
| `sample_guide_scale` | number | No | `"5"` | — | Higher guide scale makes prompt adherence better, but can reduce variation |
| `sample_shift` | number | No | `"5"` | — | Sample shift factor |
| `seed` | integer | No | — | — | Random seed. Leave blank for random |

---

## Wan 2.1 | Image to Video | 480P

**Slug:** `wan-2-1-i2v-480p`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Prompt for video generation |
| `image` | string | Yes | — | — | Input image to start generating from |
| `num_frames` | integer | No | `"81"` | — | Number of video frames |
| `max_area` | string | No | `"832x480"` | 832x480,480x832 | An enumeration. |
| `frames_per_second` | integer | No | `"16"` | — | Frames per second. Note that the pricing of this model is based on the video duration at 16 fps |
| `fast_mode` | string | No | `"Off"` | Off,Balanced,Fast | An enumeration. |
| `sample_steps` | integer | No | `"30"` | — | Number of generation steps. Fewer steps means faster generation, at the expensive of output quality. 30 steps is suff... |
| `sample_guide_scale` | number | No | `"5"` | — | Higher guide scale makes prompt adherence better, but can reduce variation |
| `sample_shift` | number | No | `"3"` | — | Sample shift factor |
| `seed` | integer | No | — | — | Random seed. Leave blank for random |

---

## Minimax Hailuo V1 Director | Image to Video

**Slug:** `minimax-i2v-01-director`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for video generation. Camera movement instructions can be added using square brackets (e.g. [Pan left] or... |
| `prompt_optimizer` | boolean | No | `"true"` | — | — |
| `first_frame_image` | string | Yes | — | — | First frame image for video generation. The output video will have the same aspect ratio as this image. |

---

## Hailuo Live | Image to Video

**Slug:** `hailuo-i2v-live`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Enter your prompt to generate video |
| `prompt_optimizer` | boolean | No | `"true"` | — | The model will automatically optimize prompts to improve generation quality. To maintain stricter adherence to instru... |
| `first_frame_image` | string | Yes | — | — | First frame image for video generation. The output video will have the same aspect ratio as this image. |

---

## Magic Animate

**Slug:** `magic-animate`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image` | string | Yes | — | — | Input image |
| `video` | string | Yes | — | — | Input motion video |
| `num_inference_steps` | integer | No | `"25"` | — | Number of denoising steps |
| `guidance_scale` | number | No | `"7.5"` | — | Scale for classifier-free guidance |
| `seed` | integer | No | — | — | Random seed. Leave blank to randomize the seed |

---
