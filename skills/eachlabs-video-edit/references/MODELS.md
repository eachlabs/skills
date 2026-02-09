# Video Edit Models Reference

Complete parameter reference for all video editing models. All models use version `0.0.1`.

---

## Motion | Fast

**Slug:** `motion-fast`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `video_url` | string | Yes | — | — | URL of the input video. |
| `image_url` | string | Yes | — | — | URL of the input image. If the input image does not match the chosen aspect ratio, it is resized and center cropped. |
| `resolution` | string | No | `"480p"` | 480p,580p,720p | Resolution of the generated video (480p, 580p, or 720p). |
| `seed` | integer | No | — | — | Random seed for reproducibility. If None, a random seed is chosen. |
| `num_inference_steps` | integer | No | `"20"` | — | Number of inference steps for sampling. Higher values give better quality but take longer. |
| `enable_safety_checker` | boolean | No | `"False"` | — | If set to true, input data will be checked for safety before processing. |
| `shift` | number | No | `"5"` | — | Shift value for the video. Must be between 1.0 and 10.0. |
| `video_quality` | string | No | `"high"` | low,medium,high,maximum | The quality of the output video. Higher quality means better visual quality but larger file size. |
| `video_write_mode` | string | No | `"balanced"` | fast,balanced,small | The write mode of the output video. Faster write mode means faster results but larger file size, balanced write mode ... |
| `use_turbo` | boolean | No | `"false"` | — | If true, applies quality enhancement for faster generation with improved quality. When enabled, parameters are automa... |

---

## Infinitalk | Video to Video

**Slug:** `infinitalk-video-to-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `audio` | string | Yes | — | — | The URL of the audio file. |
| `video` | string | Yes | — | — | The video for generating the output. |
| `prompt` | string | No | — | — | The positive prompt for the generation. |
| `resolution` | string | No | `"720p"` | 480p,720p | Resolution of the video to generate. Must be either 480p or 720p. |
| `mask_image` | string | No | — | — | Optional mask image to specify the person in the video to animate. |
| `seed` | integer | No | `"-1"` | — | The random seed to use for the generation. -1 means a random seed will be used. |

---

## Ffmpeg Api | Merge Audio Video

**Slug:** `ffmpeg-api-merge-audio-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `video_url` | string | Yes | — | — | URL of the video file to use as the video track |
| `audio_url` | string | Yes | — | — | URL of the audio file to use as the audio track |
| `start_offset` | number | No | `"0"` | — | Offset in seconds for when the audio should start relative to the video |

---

## Veo 3.1 | Extend Video

**Slug:** `veo3-1-extend-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt describing how the video should be extended |
| `video_url` | string | Yes | — | — | URL of the video to extend. The video should be 720p or 1080p resolution in 16:9 or 9:16 aspect ratio. |
| `aspect_ratio` | string | No | `"auto"` | auto,16:9,9:16 | The aspect ratio of the generated video. |
| `duration` | string | No | `"7"` | 7 | The duration of the generated video. |
| `resolution` | string | No | `"720p"` | 720p | The resolution of the generated video. |
| `generate_audio` | boolean | No | `"True"` | — | Whether to generate audio for the video. |
| `auto_fix` | boolean | No | `"False"` | — | Whether to automatically attempt to fix prompts that fail content policy or other validation checks by rewriting them. |

---

## Veo 3.1 | Fast | Extend Video

**Slug:** `veo3-1-fast-extend-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt describing how the video should be extended |
| `video_url` | string | Yes | — | — | URL of the video to extend. The video should be 720p or 1080p resolution in 16:9 or 9:16 aspect ratio. |
| `aspect_ratio` | string | No | `"auto"` | auto,16:9,9:16 | The aspect ratio of the generated video. |
| `duration` | string | No | `"7"` | 7 | The duration of the generated video. |
| `resolution` | string | No | `"720p"` | 720p | The resolution of the generated video. |
| `generate_audio` | boolean | No | `"True"` | — | Whether to generate audio for the video. |
| `auto_fix` | boolean | No | `"False"` | — | Whether to automatically attempt to fix prompts that fail content policy or other validation checks by rewriting them. |

---

## Sync | Lipsync | v2 | Pro

**Slug:** `sync-lipsync-v2-pro`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `video_url` | string | Yes | — | — | URL of the input video |
| `audio_url` | string | Yes | — | — | URL of the input audio |
| `sync_mode` | string | No | `"cut_off"` | cut_off,loop,bounce,silence,remap | Lipsync mode when audio and video durations are out of sync. |

---

## Kling O1 | Video to Video Reference

**Slug:** `kling-o1-video-to-video-reference`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Use @Element1, @Element2 to reference elements and @Image1, @Image2 to reference images in order. |
| `video_url` | string | Yes | — | — | Reference video URL. Only .mp4/.mov formats supported, 3-10 seconds duration, 720-2160px resolution, max 50MB. |
| `image_urls` | array | No | — | — | Reference images for style/appearance. Reference in prompt as @Image1, @Image2, etc. Maximum 4 total (elements + refe... |
| `elements` | array | No | — | — | Elements (characters/objects) to include. Reference in prompt as @Element1, @Element2, etc. Maximum 4 total (elements... |
| `aspect_ratio` | string | No | `"auto"` | auto,16:9,9:16,1:1 | The aspect ratio of the generated video frame. If 'auto', the aspect ratio will be determined automatically based on ... |
| `duration` | string | No | `"5"` | 5,10 | Video duration in seconds. |
| `keep_audio` | boolean | No | `"false"` | — | Whether to keep the original audio from the video. |

---

## Kling O1 | Video to Video | Edit

**Slug:** `kling-o1-video-to-video-edit`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Use @Element1, @Element2 to reference elements and @Image1, @Image2 to reference images in order. |
| `video_url` | string | Yes | — | — | Reference video URL. Only .mp4/.mov formats supported, 3-10 seconds duration, 720-2160px resolution, max 200MB. |
| `image_urls` | array | No | — | — | Reference images for style/appearance. Reference in prompt as @Image1, @Image2, etc. Maximum 4 total (elements + refe... |
| `elements` | array | No | — | — | Elements (characters/objects) to include. Reference in prompt as @Element1, @Element2, etc. Maximum 4 total (elements... |
| `keep_audio` | boolean | No | `"false"` | — | Whether to keep the original audio from the video. |

---

## Topaz Upscale Video

**Slug:** `topaz-upscale-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `video_url` | string | Yes | — | — | URL of the video to upscale |
| `upscale_factor` | number | No | `"2"` | — | Factor to upscale the video by (e.g. 2.0 doubles width and height) |
| `target_fps` | integer | No | — | — | Target FPS for frame interpolation. If set, frame interpolation will be enabled. |
| `H264_output` | boolean | No | `"False"` | — | Whether to use H264 codec for output video. Default is H265. |

---

## Auto Subtitle

**Slug:** `auto-subtitle`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `video_url` | string | Yes | — | — | URL of the video file to add automatic subtitles to |
| `language` | string | No | `"en"` | — | Language code for transcription (e.g., 'en', 'es', 'fr', 'de', 'it', 'pt', 'nl', 'ja', 'zh', 'ko') or 3-letter ISO co... |
| `font_name` | string | No | `"Montserrat"` | — | Any Google Font name from fonts.google.com (e.g., 'Montserrat', 'Poppins', 'BBH Sans Hegarty') |
| `font_size` | integer | No | `"100"` | — | Font size for subtitles (TikTok style uses larger text) |
| `font_weight` | string | No | `"bold"` | normal,bold,black | Font weight (TikTok style typically uses bold or black) |
| `font_color` | string | No | `"white"` | white,black,red,green,blue,yellow,orange,purple,pink,brown,gray,cyan,magenta | Subtitle text color for non-active words |
| `highlight_color` | string | No | `"purple"` | white,black,red,green,blue,yellow,orange,purple,pink,brown,gray,cyan,magenta | Color for the currently speaking word (karaoke-style highlight) |
| `stroke_width` | integer | No | `"3"` | — | Text stroke/outline width in pixels (0 for no stroke) |
| `stroke_color` | string | No | `"black"` | black,white,red,green,blue,yellow,orange,purple,pink,brown,gray,cyan,magenta | Text stroke/outline color |
| `background_color` | string | No | `"none"` | black,white,red,green,blue,yellow,orange,purple,pink,brown,gray,cyan,magenta,... | Background color behind text ('none' or 'transparent' for no background) |
| `background_opacity` | number | No | `"0"` | — | Background opacity (0.0 = fully transparent, 1.0 = fully opaque) |
| `position` | string | No | `"bottom"` | top,center,bottom | Vertical position of subtitles |
| `y_offset` | integer | No | `"75"` | — | Vertical offset in pixels (positive = move down, negative = move up) |
| `words_per_subtitle` | integer | No | `"3"` | — | Maximum number of words per subtitle segment. Use 1 for single-word display, 2-3 for short phrases, or 8-12 for full ... |
| `enable_animation` | boolean | No | `"True"` | — | Enable animation effects for subtitles (bounce style entrance) |

---

## Merge Videos

**Slug:** `merge-videos`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `video_urls` | array | Yes | — | — | List of video URLs to merge in order |
| `target_fps` | integer | No | — | — | Target FPS for the output video. If not provided, uses the lowest FPS from input videos. |
| `resolution` | string | No | — | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | Resolution of the final video |

---

## Wan | v2.2 14B | Animate | Move

**Slug:** `wan-v2-2-14b-animate-move`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `video_url` | string | Yes | — | — | URL of the input video. |
| `image_url` | string | Yes | — | — | URL of the input image. If the input image does not match the chosen aspect ratio, it is resized and center cropped. |
| `resolution` | string | No | `"480p"` | 480p,580p,720p | Resolution of the generated video (480p, 580p, or 720p). |
| `seed` | integer | No | — | — | Random seed for reproducibility. If None, a random seed is chosen. |
| `num_inference_steps` | integer | No | `"20"` | — | Number of inference steps for sampling. Higher values give better quality but take longer. |
| `enable_safety_checker` | boolean | No | `"False"` | — | If set to true, input data will be checked for safety before processing. |
| `shift` | number | No | `"5"` | — | Shift value for the video. Must be between 1.0 and 10.0. |
| `video_quality` | string | No | `"high"` | low,medium,high,maximum | The quality of the output video. Higher quality means better visual quality but larger file size. |
| `video_write_mode` | string | No | `"balanced"` | fast,balanced,small | The write mode of the output video. Faster write mode means faster results but larger file size, balanced write mode ... |

---

## Wan | v2.2 14B | Animate | Replace

**Slug:** `wan-v2-2-14b-animate-replace`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `video_url` | string | Yes | — | — | URL of the input video. |
| `image_url` | string | Yes | — | — | URL of the input image. If the input image does not match the chosen aspect ratio, it is resized and center cropped. |
| `resolution` | string | No | `"480p"` | 480p,580p,720p | Resolution of the generated video (480p, 580p, or 720p). |
| `seed` | integer | No | — | — | Random seed for reproducibility. If None, a random seed is chosen. |
| `num_inference_steps` | integer | No | `"20"` | — | Number of inference steps for sampling. Higher values give better quality but take longer. |
| `enable_safety_checker` | boolean | No | `"False"` | — | If set to true, input data will be checked for safety before processing. |
| `shift` | number | No | `"5"` | — | Shift value for the video. Must be between 1.0 and 10.0. |
| `video_quality` | string | No | `"high"` | low,medium,high,maximum | The quality of the output video. Higher quality means better visual quality but larger file size. |
| `video_write_mode` | string | No | `"balanced"` | fast,balanced,small | The write mode of the output video. Faster write mode means faster results but larger file size, balanced write mode ... |

---

## Heygen | Video Translate

**Slug:** `heygen-video-translate`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `video` | string | No | — | — | Input video file (.mp4) |
| `output_language` | string | No | `"English"` | English,Spanish,French,Hindi,Italian,German,Polish,Portuguese,Chinese,Japanes... | An enumeration. |

---

## Runway Gen4 | Aleph

**Slug:** `runway-gen4-aleph`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `public_figure_moderation` | string | No | `"auto"` | auto,low | — |
| `prompt` | string | Yes | — | — | Text prompt for video generation Max lenght 1000 |
| `video_url` | string | Yes | — | — | Input video to generate from. Videos must be less than 16MB. Only 5s of the input video will be used. |
| `aspect_ratio` | string | Yes | `"1280:720"` | 1280:720,720:1280,1104:832,832:1104,960:960,1584:672 | An enumeration. |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation |
| `reference_images` | array | No | — | — | Reference image to influence the style or content of the output. |

---

## LatentSync

**Slug:** `latentsync`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `video_url` | string | Yes | — | — | The URL of the video to generate the lip sync for. |
| `audio_url` | string | Yes | — | — | The URL of the audio to generate the lip sync for. |
| `guidance_scale` | number | No | `"1"` | — | Guidance scale for the model inference |
| `seed` | integer | No | — | — | Random seed for generation. If None, a random seed will be used. |
| `loop_mode` | string | No | — | pingpong,loop | Video loop mode when audio is longer than video. Options: pingpong, loop |

---

## PixVerse v5 | Extend

**Slug:** `pixverse-v5-extend`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `video_url` | string | Yes | — | — | — |
| `prompt` | string | Yes | — | — | — |
| `quality` | string | No | `"720p"` | 360p,540p,720p,1080p | — |
| `duration` | integer | No | `"8"` | 5,8 | — |
| `seed` | integer | No | — | — | — |
| `style` | string | No | — | anime,3d_animation,clay,comic,cyberpunk | — |
| `negative_prompt` | string | No | — | — | — |
| `motion_mode` | string | No | `"normal"` | normal | — |

---

## Luma Dream Machine | Ray 2 | Video Reframe

**Slug:** `luma-dream-machine-ray-2-video-reframe`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `video_url` | string | Yes | — | — | URL of the input video to reframe |
| `aspect_ratio` | string | No | `"9:16"` | 1:1,16:9,9:16,4:3,3:4,21:9,9:21 | The aspect ratio of the reframed video |
| `image_url` | string | No | — | — | Optional URL of the first frame image for reframing |
| `grid_position_x` | integer | No | — | — | X position of the grid for reframing |
| `grid_position_y` | integer | No | — | — | Y position of the grid for reframing |
| `prompt` | string | No | — | — | Optional prompt for reframing |
| `x_end` | integer | No | — | — | End X coordinate for reframing |
| `x_start` | integer | No | — | — | Start X coordinate for reframing |
| `y_end` | integer | No | — | — | End Y coordinate for reframing |
| `y_start` | integer | No | — | — | Start Y coordinate for reframing |

---

## Luma Dream Machine | Ray 2 Flash | Video Reframe

**Slug:** `luma-dream-machine-ray-2-flash-video-reframe`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `y_start` | integer | No | — | — | Start Y coordinate for reframing |
| `video_url` | string | Yes | — | — | URL of the input video to reframe |
| `aspect_ratio` | string | No | `"9:16"` | 1:1,16:9,9:16,4:3,3:4,21:9,9:21 | Possible enum values |
| `image_url` | string | No | — | — | Optional URL of the first frame image for reframing |
| `grid_position_x` | integer | No | — | — | X position of the grid for reframing |
| `grid_position_y` | integer | No | — | — | Y position of the grid for reframing |
| `prompt` | string | No | — | — | Optional prompt for reframing |
| `x_end` | integer | No | — | — | End X coordinate for reframing |
| `x_start` | integer | No | — | — | Start X coordinate for reframing |
| `y_end` | integer | No | — | — | End Y coordinate for reframing |

---

## Faceswap | Video

**Slug:** `faceswap-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `face_image_url` | string | Yes | — | — | — |
| `target_video_url` | string | Yes | — | — | — |

---

## MMAudio | V2

**Slug:** `mm-audio-v-2`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `video_url` | string | Yes | — | — | The URL of the video to generate the audio for. |
| `prompt` | string | Yes | — | — | The prompt to generate the audio for. |
| `negative_prompt` | string | No | — | — | The negative prompt to generate the audio for |
| `seed` | integer | No | — | — | — |
| `num_steps` | integer | No | `"25"` | — | The number of steps to generate the audio for. |
| `duration` | integer | No | `"8"` | — | — |
| `cfg_strength` | number | No | `"4.5"` | — | The strength of Classifier Free Guidance. |
| `mask_away_clip` | boolean | No | — | — | Whether to mask away the clip. |

---

## PixVerse | Lip Sync

**Slug:** `pixverse-lip-sync`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `video_url` | string | Yes | — | — | Video Url . Max 30 second |
| `audio_url` | string | No | — | — | Audio Url . Max 30 second |
| `speaker` | string | No | — | {"auto":{"title":"auto","audio":""},"1":{"title":"Emily","audio":"https://sto... | — |
| `speaker_content` | string | No | — | — | — |

---

## PixVerse v4.5 | Extend

**Slug:** `pixverse-v4-5-extend`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `video_url` | string | Yes | — | — | — |
| `prompt` | string | Yes | — | — | — |
| `quality` | string | Yes | `"720p"` | 360p,540p,720p,1080p | — |
| `duration` | integer | Yes | `"5"` | 5,8 | — |
| `seed` | integer | No | — | — | — |
| `style` | string | No | — | anime,3d_animation,clay,comic,cyberpunk | — |
| `negative_prompt` | string | No | — | — | — |
| `motion_mode` | string | No | `"normal"` | normal,fast | — |

---

## MM Audio

**Slug:** `mmaudio`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | No | — | — | Text prompt for generated audio |
| `negative_prompt` | string | No | `"music"` | — | Negative prompt to avoid certain sounds |
| `video` | string | Yes | — | — | Optional video file for video-to-audio generation |
| `duration` | number | No | `"8"` | — | Duration of output in seconds |
| `num_steps` | integer | No | `"25"` | — | Number of inference steps |
| `cfg_strength` | number | No | `"4.5"` | — | Guidance strength (CFG) |
| `seed` | integer | No | — | — | Seed |

---

## Audio Based Lip Synchronization

**Slug:** `video-retalking`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `face` | string | Yes | — | — | An image with a face |
| `input_audio` | string | Yes | — | — | Input audio file. |
| `audio_duration` | number | Yes | `"30"` | — | The total length of the audio file to be processed or analyzed. |

---
