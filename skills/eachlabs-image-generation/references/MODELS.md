# Image Generation Models Reference

Complete parameter reference for all image generation models. All models use version `0.0.1`.

---

## XAI | Grok | Imagine | Text to Image

**Slug:** `xai-grok-imagine-text-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text description of the desired image. |
| `num_images` | integer | No | `"1"` | — | Number of images to generate. |
| `aspect_ratio` | string | No | `"1:1"` | 1:1,3:4,4:3,9:16,16:9 | Aspect ratio of the generated image. |
| `output_format` | string | No | `"jpeg"` | jpeg, png, webp | The format of the generated image. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |

---

## Flux 2 | Klein | 9B | Base | Text to Image

**Slug:** `flux-2-klein-9b-base-text-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `negative_prompt` | string | No | — | — | Negative prompt for classifier-free guidance. Describes what to avoid in the image. |
| `guidance_scale` | number | No | `"5"` | — | Guidance scale for classifier-free guidance. |
| `seed` | integer | No | — | — | The seed to use for the generation. If not provided, a random seed will be used. |
| `num_inference_steps` | integer | No | `"28"` | — | The number of inference steps to perform. |
| `image_size` | string | No | `"landscape_4_3"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the image to generate. |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `acceleration` | string | No | `"regular"` | none,regular,high | The acceleration level to use for image generation. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `output_format` | string | No | `"png"` | jpeg,png,webp | The format of the generated image. |

---

## Flux 2 | Klein | 4B | Base | Text to Image

**Slug:** `flux-2-klein-4b-base-text-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `seed` | integer | No | — | — | The seed to use for the generation. If not provided, a random seed will be used. |
| `num_inference_steps` | integer | No | `"4"` | — | The number of inference steps to perform. |
| `image_size` | string | No | `"landscape_4_3"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the image to generate. |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `output_format` | string | No | `"png"` | jpeg,png,webp | The format of the generated image. |

---

## Flux 2 | Klein | 4B | Text to Image

**Slug:** `flux-2-klein-4b-text-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `negative_prompt` | string | No | — | — | Negative prompt for classifier-free guidance. Describes what to avoid in the image. |
| `guidance_scale` | number | No | `"5"` | — | Guidance scale for classifier-free guidance. |
| `seed` | integer | No | — | — | The seed to use for the generation. If not provided, a random seed will be used. |
| `num_inference_steps` | integer | No | `"4"` | — | The number of inference steps to perform. |
| `image_size` | string | No | `"landscape_4_3"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the image to generate. |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `acceleration` | string | No | `"regular"` | none,regular,high | The acceleration level to use for image generation. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `output_format` | string | No | `"png"` | jpeg,png,webp | The format of the generated image. |

---

## P image | Text to Image

**Slug:** `p-image-text-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for image generation. |
| `aspect_ratio` | string | No | `"16:9"` | 1:1,16:9,9:16,4:3,3:4,3:2,2:3,custom | An enumeration. |
| `width` | integer | No | — | — | Width of the generated image. Only used when aspect_ratio=custom. Must be a multiple of 16. |
| `height` | integer | No | — | — | Height of the generated image. Only used when aspect_ratio=custom. Must be a multiple of 16. |
| `prompt_upsampling` | boolean | No | — | — | upsample the prompt with an llm |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation. |
| `disable_safety_checker` | boolean | No | — | — | Disable safety checker for generated images. |

---

## Wan | v2.6 | Text to Image

**Slug:** `wan-v2-6-text-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt describing the desired image. Supports Chinese and English. Max 2000 characters. |
| `image_url` | string | No | — | — | Optional reference image (0 or 1). When provided, can be used for style guidance. Resolution: 384-5000px each dimensi... |
| `negative_prompt` | string | No | — | — | Content to avoid in the generated image. Max 500 characters. |
| `image_size` | string | No | `"square_hd"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | Output image size. If not set: matches input image size (up to 1280*1280). Use presets like 'square_hd', 'landscape_1... |
| `max_images` | integer | No | `"1"` | — | Maximum number of images to generate (1-5). Actual count may be less depending on model inference. |
| `seed` | integer | No | — | — | Random seed for reproducibility (0-2147483647). |
| `enable_safety_checker` | boolean | No | `"True"` | — | Enable content moderation for input and output. |

---

## Flux 2 | Turbo | Text to Image

**Slug:** `flux-2-turbo-text-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `guidance_scale` | number | No | `"2.5"` | — | Guidance Scale is a measure of how close you want the model to stick to your prompt when looking for a related image ... |
| `image_size` | string | No | `"landscape_4_3"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the image to generate. The width and height must be between 512 and 2048 pixels. |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `enable_prompt_expansion` | boolean | No | `"False"` | — | If set to true, the prompt will be expanded for better results. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `output_format` | string | No | `"png"` | jpeg,png,webp | The format of the generated image. |
| `seed` | integer | No | — | — | The seed to use for the generation. If not provided, a random seed will be used. |

---

## Flux 2 | Flash | Text to Image

**Slug:** `flux-2-flash-text-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `guidance_scale` | number | No | `"2.5"` | — | Guidance Scale is a measure of how close you want the model to stick to your prompt when looking for a related image ... |
| `image_size` | string | No | `"landscape_4_3"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the image to generate. The width and height must be between 512 and 2048 pixels. |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `enable_prompt_expansion` | boolean | No | `"False"` | — | If set to true, the prompt will be expanded for better results. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `output_format` | string | No | `"png"` | jpeg,png,webp | The format of the generated image. |
| `seed` | integer | No | — | — | The seed to use for the generation. If not provided, a random seed will be used. |

---

## GPT Image | v1.5 | Text to Image

**Slug:** `gpt-image-v1-5-text-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt for image generation |
| `image_size` | string | No | `"1024x1024"` | 1024x1024,1536x1024,1024x1536 | Aspect ratio for the generated image |
| `background` | string | No | `"auto"` | auto,transparent,opaque | Background for the generated image |
| `quality` | string | No | `"high"` | low,medium,high | Quality for the generated image |
| `num_images` | integer | No | `"1"` | — | Number of images to generate |
| `output_format` | string | No | `"png"` | jpeg,png,webp | Output format for the images |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |

---

## Flux 2 | Max | Text to Image

**Slug:** `flux-2-max-text-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `image_size` | string | No | `"landscape_4_3"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the generated image. |
| `enable_prompt_expansion` | boolean | No | `"True"` | — | Whether to expand the prompt using the model's own knowledge. |
| `seed` | integer | No | — | — | The seed to use for the generation. |
| `safety_tolerance` | string | No | `"2"` | 1,2,3,4,5 | The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. |
| `enable_safety_checker` | boolean | No | `"True"` | — | Whether to enable the safety checker. |
| `output_format` | string | No | `"jpeg"` | jpeg,png | The format of the generated image. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |

---

## Z Image | Turbo | Lora

**Slug:** `z-image-turbo-lora`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `loras` | array | No | — | — | List of LoRA weights to apply |
| `image_size` | string | No | `"landscape_4_3"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the generated image. |
| `num_inference_steps` | integer | No | `"8"` | — | The number of inference steps to perform. |
| `seed` | integer | No | — | — | The same seed and the same prompt given to the same version of the model will output the same image every time. |
| `sync_mode` | boolean | No | `"false"` | — | If True, the media will be returned as a data URI and the output data won't be available in the request history. |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `enable_safety_checker` | boolean | No | `"true"` | — | If set to true, the safety checker will be enabled. |
| `enable_prompt_expansion` | boolean | No | `"false"` | — | Whether to enable prompt expansion. |
| `output_format` | string | No | `"png"` | jpeg,png,webp | The format of the generated image. |
| `acceleration` | string | No | `"none"` | none,regular,high | The acceleration level to use. |

---

## Z Image | Turbo | Text to Image

**Slug:** `z-image-turbo-text-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `image_size` | string | No | `"landscape_4_3"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the generated image. |
| `num_inference_steps` | integer | No | `"8"` | — | The number of inference steps to perform. |
| `seed` | integer | No | — | — | The same seed and the same prompt given to the same version of the model will output the same image every time. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `enable_prompt_expansion` | boolean | No | `"False"` | — | Whether to enable prompt expansion. Note: this will increase the price by 0.0025 credits per request. |
| `output_format` | string | No | `"png"` | jpeg,png,webp | The format of the generated image. |
| `acceleration` | string | No | `"none"` | none,regular,high | The acceleration level to use. |

---

## Bytedance | Seedream | v4.5 | Text to Image

**Slug:** `bytedance-seedream-v4-5-text-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt used to generate the image |
| `image_size` | string | No | `"square_hd"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9,auto... | — |
| `num_images` | integer | No | `"1"` | — | Number of separate model generations to be run with the prompt. |
| `max_images` | integer | No | `"1"` | — | If set to a number greater than one, enables multi-image generation. The model will potentially return up to max_imag... |
| `seed` | integer | No | — | — | Random seed to control the stochasticity of image generation. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |

---

## Vidu Q2 | Text to Image

**Slug:** `vidu-q2-text-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for video generation, max 1500 characters |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | The aspect ratio of the output video |
| `seed` | integer | No | — | — | Random seed for generation |

---

## Ovis Image

**Slug:** `ovis-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `negative_prompt` | string | No | — | — | The negative prompt to generate an image from. |
| `image_size` | string | No | `"landscape_4_3"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the generated image. |
| `num_inference_steps` | integer | No | `"28"` | — | The number of inference steps to perform. |
| `guidance_scale` | number | No | `"5"` | — | The guidance scale to use for the image generation. |
| `seed` | integer | No | — | — | The same seed and the same prompt given to the same version of the model will output the same image every time. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `output_format` | string | No | `"png"` | jpeg,png,webp | The format of the generated image. |
| `acceleration` | string | No | `"regular"` | none,regular,high | The acceleration level to use. |

---

## Flux 2 Pro

**Slug:** `flux-2-pro`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `image_size` | string | No | `"landscape_4_3"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the generated image. |
| `seed` | integer | No | — | — | The seed to use for the generation. |
| `safety_tolerance` | string | No | `"2"` | 1, 2, 3, 4, 5 | The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. |
| `enable_safety_checker` | boolean | No | `"True"` | — | Whether to enable the safety checker. |
| `output_format` | string | No | `"jpeg"` | jpeg,png | The format of the generated image. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |

---

## Flux 2 | Flex

**Slug:** `flux-2-flex`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `image_size` | string | No | `"landscape_4_3"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the generated image. |
| `guidance_scale` | number | No | `"3.5"` | — | The guidance scale to use for the generation. |
| `num_inference_steps` | integer | No | `"28"` | — | The number of inference steps to perform. |
| `safety_tolerance` | string | No | `"2"` | 1, 2, 3, 4, 5 | The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. |
| `enable_safety_checker` | boolean | No | `"True"` | — | Whether to enable the safety checker. |
| `output_format` | string | No | `"jpeg"` | jpeg,png | The format of the generated image. |
| `enable_prompt_expansion` | boolean | No | `"True"` | — | Whether to expand the prompt using the model's own knowledge. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |
| `seed` | integer | No | — | — | The seed to use for the generation. |

---

## Flux 2 |  Text to Image Lora

**Slug:** `flux-2-lora`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `loras` | array | No | — | — | List of LoRA weights to apply (maximum 3). Each LoRA should be a HuggingFace repo ID (e.g. user/model-name). |
| `guidance_scale` | number | No | `"2.5"` | — | — |
| `num_inference_steps` | integer | No | `"28"` | — | — |
| `image_size` | string | No | `"square_hd"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | — |
| `acceleration` | string | No | `"none"` | none,regular,high | The acceleration level to use for the image generation. |
| `enable_prompt_expansion` | boolean | No | `"false"` | — | If set to true, the prompt will be expanded for better results. |
| `sync_mode` | boolean | No | `"false"` | — | If True, the media will be returned as a data URI and the output data won't be available in the request history. |
| `enable_safety_checker boolean` | boolean | No | `"true"` | — | If set to true, the safety checker will be enabled. |
| `output_format` | string | No | `"png"` | jpeg,png,webp | The format of the generated image. |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. Default value: 1 |
| `seed` | integer | No | — | — | The seed to use for the generation. If not provided, a random seed will be used. |

---

## Flux 2

**Slug:** `flux-2`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `guidance_scale` | number | No | `"2.5"` | — | Guidance Scale is a measure of how close you want the model to stick to your prompt when looking for a related image ... |
| `seed` | integer | No | — | — | The seed to use for the generation. If not provided, a random seed will be used. |
| `num_inference_steps` | integer | No | `"28"` | — | The number of inference steps to perform. |
| `image_size` | string | No | `"landscape_4_3"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the image to generate. The width and height must be between 512 and 2048 pixels. |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `acceleration` | string | No | `"regular"` | none,regular,high | The acceleration level to use for the image generation. |
| `enable_prompt_expansion` | boolean | No | `"False"` | — | If set to true, the prompt will be expanded for better results. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `output_format` | string | No | `"png"` | jpeg,png,webp | The format of the generated image. |

---

## Gemini 3  | Pro | Image Preview

**Slug:** `gemini-3-pro-image-preview`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt to generate an image from. |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `aspect_ratio` | string | No | `"1:1"` | 21:9,16:9,3:2,4:3,5:4,1:1,4:5,3:4,2:3,9:16 | The aspect ratio of the generated image. |
| `output_format` | string | No | `"png"` | jpeg,png,webp | The format of the generated image. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |
| `resolution` | string | No | `"1K"` | 1K,2K,4K | The resolution of the image to generate. |

---

## Nano Banana Pro

**Slug:** `nano-banana-pro`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt to generate an image from. |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `aspect_ratio` | string | No | `"1:1"` | 21:9,16:9,3:2,4:3,5:4,1:1,4:5,3:4,2:3,9:16 | The aspect ratio of the generated image. |
| `resolution` | string | No | `"1K"` | 1K,2K,4K | The resolution of the image to generate. |
| `output_format` | string | No | `"png"` | jpeg,png,webp | The format of the generated image. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |
| `limit_generations` | boolean | No | `"False"` | — | Experimental parameter to limit the number of generations from each round of prompting to 1. Set to `True` to to disr... |

---

## Flux Lora

**Slug:** `bfl-flux-lora`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `image_size` | string | No | `"landscape_4_3"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the generated image. |
| `num_inference_steps` | integer | No | `"28"` | — | The number of inference steps to perform. |
| `seed` | integer | No | — | — | The same seed and the same prompt given to the same version of the model will output the same image every time. |
| `loras` | array | No | — | — | The LoRAs to use for the image generation. You can use any number of LoRAs and they will be merged together to genera... |
| `guidance_scale` | number | No | `"3.5"` | — | The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt when lo... |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. This is always set to 1 for streaming output. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `output_format` | string | No | `"jpeg"` | jpeg,png | The format of the generated image. |

---

## Black Forest Labs | Flux Dev Lora

**Slug:** `black-forest-labs-flux-dev-lora`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Prompt for generated image |
| `aspect_ratio` | string | No | `"1:1"` | 1:1,16:9,21:9,3:2,2:3,4:5,5:4,3:4,4:3,9:16,9:21 | An enumeration. |
| `image` | string | No | — | — | Input image for image to image mode. The aspect ratio of your output will match this image |
| `prompt_strength` | number | No | `"0.8"` | — | Prompt strength when using img2img. 1.0 corresponds to full destruction of information in image |
| `num_outputs` | integer | No | `"1"` | — | Number of outputs to generate |
| `num_inference_steps` | integer | No | `"28"` | — | Number of denoising steps. Recommended range is 28-50, and lower number of steps produce lower quality outputs, faster. |
| `guidance` | number | No | `"3"` | — | Guidance for generated image |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation |
| `output_format` | string | No | `"webp"` | webp,jpg,png | An enumeration. |
| `output_quality` | integer | No | `"80"` | — | Quality when saving the output images, from 0 to 100. 100 is best quality, 0 is lowest quality. Not relevant for .png... |
| `disable_safety_checker` | boolean | No | — | — | Disable safety checker for generated images. |
| `go_fast` | boolean | No | `"False"` | — | Run faster predictions with model optimized for speed (currently fp8 quantized); disable to run in original bf16. Not... |
| `lora_weights` | string | No | — | — | Load LoRA weights. Supports Replicate models in the format <owner>/<username> or <owner>/<username>/<version>, or Hug... |
| `lora_scale` | number | No | `"1"` | — | Determines how strongly the main LoRA should be applied. Sane results between 0 and 1 for base inference. For go_fast... |
| `extra_lora` | string | No | — | — | Load additional LoRA weights. Supports Replicate models in the format <owner>/<username> or <owner>/<username>/<versi... |
| `extra_lora_scale` | number | No | `"1"` | — | Determines how strongly the extra LoRA should be applied. Sane results between 0 and 1 for base inference. For go_fas... |
| `megapixels` | string | No | `"1"` | 1,0.25 | An enumeration. |

---

## Bria v1 | Text to Image | HD

**Slug:** `bria-v1-text-to-image-hd`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt you would like to use to generate images. Bria currently supports prompts in English only. |
| `model_version` | string | Yes | `"2.2"` | 2.2 | The model version you would like to use in the request. |
| `num_results` | integer | No | `"4"` | — | How many images you would like to generate. |
| `aspect_ratio` | string | No | `"1:1"` | 1:1,2:3,3:2,,3:4,4:3,4:5,5:4,9:16,16:9 | The aspect ratio of the image. |
| `seed` | integer | No | — | — | You can choose whether you want your generated result to be random or predictable. You can recreate the same result i... |
| `negative_prompt` | string | No | — | — | Specify here elements that you didn't ask in the prompt, but are being generated, and you would like to exclude. This... |
| `steps_num` | integer | No | `"30"` | — | The number of iterations the model goes through to refine the generated image. This parameter is optional. |
| `text_guidance_scale` | integer | No | `"5"` | — | Determines how closely the generated image should adhere to the input text description. This parameter is optional. |
| `medium` | string | No | — | photography,art | Which medium should be included in your generated images. This parameter is optional. |
| `prompt_enhancement` | boolean | No | `"false"` | — | When set to true, enhances the provided prompt by generating additional, more descriptive variations, resulting in mo... |
| `enhance_image` | boolean | No | `"false"` | — | When set to true, generates images with richer details, sharper textures, and enhanced clarity. Slightly increases ge... |
| `content_moderation` | boolean | No | `"false"` | — | When enabled, applies content moderation to generated outputs. If some images pass and others fail, returns a 200 res... |
| `ip_signal` | boolean | No | `"false"` | — | Flags prompts with potential IP content. If detected, a warning will be included in the response. |

---

## Bria v1 | Text to Image | Fast

**Slug:** `bria-v1-text-to-image-fast`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt you would like to use to generate images. Bria currently supports prompts in English only. |
| `model_version` | string | Yes | `"2.3"` | 2.3 | The model version you would like to use in the request. |
| `num_results` | integer | No | `"4"` | — | How many images you would like to generate. |
| `aspect_ratio` | string | No | `"1:1"` | 1:1,2:3,3:2,,3:4,4:3,4:5,5:4,9:16,16:9 | The aspect ratio of the image. |
| `seed` | integer | No | — | — | You can choose whether you want your generated result to be random or predictable. You can recreate the same result i... |
| `steps_num` | integer | No | `"8"` | — | The number of iterations the model goes through to refine the generated image. This parameter is optional. |
| `medium` | string | No | — | photography,art | Which medium should be included in your generated images. This parameter is optional. |
| `prompt_enhancement` | boolean | No | `"false"` | — | When set to true, enhances the provided prompt by generating additional, more descriptive variations, resulting in mo... |
| `enhance_image` | boolean | No | `"false"` | — | When set to true, generates images with richer details, sharper textures, and enhanced clarity. Slightly increases ge... |
| `prompt_content_moderation` | boolean | No | `"true"` | — | When enabled (default: true), the input prompt is scanned for NSFW or ethically restricted terms before image generat... |
| `content_moderation` | boolean | No | `"false"` | — | When enabled, applies content moderation to both input visuals and generated outputs. Processing stops at the first i... |
| `ip_signal` | boolean | No | `"false"` | — | Flags prompts with potential IP content. If detected, a warning will be included in the response. |
| `image_prompt_mode` | string | No | `"regular"` | regular,style_only | regular: Uses the image’s content, style elements, and color palette to guide generation. style_only: Uses the image’... |
| `image_prompt_urls` | array | No | — | — | A list of URLs of images that should be used as guidance. The images can be of different aspect ratios. Accepted form... |
| `image_prompt_scale` | number | No | `"1"` | — | The impact of the provided image on the generated results. A value between 0.0 (no impact) and 1.0 (full impact). |

---

## Bria v1 | Text to Image | Base

**Slug:** `bria-v1-text-to-image-base`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt you would like to use to generate images. Bria currently supports prompts in English only. |
| `model_version` | string | Yes | `"2.3"` | 2.3,3.2 | The model version you would like to use in the request. |
| `num_results` | integer | No | `"4"` | — | How many images you would like to generate. |
| `aspect_ratio` | string | No | `"1:1"` | 1:1,2:3,3:2,,3:4,4:3,4:5,5:4,9:16,16:9 | The aspect ratio of the image. |
| `seed` | integer | No | — | — | You can choose whether you want your generated result to be random or predictable. You can recreate the same result i... |
| `negative_prompt` | string | No | — | — | Specify here elements that you didn't ask in the prompt, but are being generated, and you would like to exclude. This... |
| `steps_num` | integer | No | `"30"` | — | The number of iterations the model goes through to refine the generated image. This parameter is optional. |
| `text_guidance_scale` | integer | No | `"5"` | — | Determines how closely the generated image should adhere to the input text description. This parameter is optional. |
| `medium` | string | No | — | photography,art | Which medium should be included in your generated images. This parameter is optional. |
| `enhance_image` | boolean | No | `"false"` | — | When set to true, generates images with richer details, sharper textures, and enhanced clarity. Slightly increases ge... |
| `prompt_content_moderation` | boolean | No | `"true"` | — | When enabled (default: true), the input prompt is scanned for NSFW or ethically restricted terms before image generat... |
| `content_moderation` | boolean | No | `"false"` | — | When enabled, applies content moderation to both input visuals and generated outputs. Processing stops at the first i... |
| `ip_signal` | boolean | No | `"false"` | — | Flags prompts with potential IP content. If detected, a warning will be included in the response. |
| `image_prompt_mode` | string | No | `"regular"` | regular,style_only | regular: Uses the image’s content, style elements, and color palette to guide generation. style_only: Uses the image’... |
| `image_prompt_urls` | array | No | — | — | A list of URLs of images that should be used as guidance. The images can be of different aspect ratios. Accepted form... |
| `image_prompt_scale` | number | No | `"1"` | — | The impact of the provided image on the generated results. A value between 0.0 (no impact) and 1.0 (full impact). |
| `prompt_enhancement` | boolean | No | `"false"` | — | When set to true, enhances the provided prompt by generating additional, more descriptive variations, resulting in mo... |

---

## Reve | Text to Image

**Slug:** `reve-text-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text description of the desired image. |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,3:2,2:3,4:3,3:4,1:1 | The desired aspect ratio of the generated image. |
| `num_images` | integer | No | `"1"` | — | Number of images to generate |
| `output_format` | string | No | `"png"` | png,jpeg,webp | Output format for the generated image. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |

---

## Hunyuan Image v3 | Text to Image

**Slug:** `hunyuan-image-v3-text-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt for image-to-image. |
| `negative_prompt` | string | No | — | — | The negative prompt to guide the image generation away from certain concepts. |
| `image_size` | string | No | `"square_hd"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The desired size of the generated image. |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `num_inference_steps` | integer | No | `"28"` | — | Number of denoising steps. |
| `guidance_scale` | number | No | `"3.5"` | — | Controls how much the model adheres to the prompt. Higher values mean stricter adherence. |
| `seed` | integer | No | — | — | Random seed for reproducible results. If None, a random seed is used. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |
| `output_format` | string | No | `"png"` | jpeg,png | The format of the generated image. |

---

## Wan | 2.5 | Preview | Text to Image

**Slug:** `wan-2-5-preview-text-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt for image generation. Supports Chinese and English, max 2000 characters. |
| `negative_prompt` | string | No | — | — | Negative prompt to describe content to avoid. Max 500 characters. |
| `num_images` | integer | No | `"1"` | — | Number of images to generate. Values from 1 to 4. |
| `image_size` | string | No | `"square_hd"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the generated image. Can use preset names like 'square', 'landscape_16_9', etc., or specific dimensions. ... |
| `enable_prompt_expansion` | boolean | No | `"True"` | — | Whether to enable prompt rewriting using LLM. Improves results for short prompts but increases processing time. |
| `seed` | integer | No | — | — | Random seed for reproducibility. If None, a random seed is chosen. |

---

## Tencent | Flux | Srpo | Text to Image

**Slug:** `tencent-flux-srpo-text-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `image_size` | string | No | `"landscape_4_3"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the generated image. |
| `num_inference_steps` | integer | No | `"28"` | — | The number of inference steps to perform. |
| `seed` | string | No | — | — | The same seed and the same prompt given to the same version of the model will output the same image every time. |
| `guidance_scale` | number | No | `"4.5"` | — | The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt when lo... |
| `sync_mode` | boolean | No | `"False"` | — | If set to true, the function will wait for the image to be generated and uploaded before returning the response. This... |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `output_format` | string | No | `"jpeg"` | jpeg,png | The format of the generated image. |
| `acceleration` | string | No | `"none"` | none,regular,high | The speed of the generation. The higher the speed, the faster the generation. |

---

## Tencent | Flux 1 | Srpo | Text to Image

**Slug:** `tencent-flux-1-srpo-text-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `image_size` | string | No | `"landscape_4_3"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the generated image. |
| `num_inference_steps` | integer | No | `"28"` | — | The number of inference steps to perform. |
| `seed` | string | No | — | — | The same seed and the same prompt given to the same version of the model will output the same image every time. |
| `guidance_scale` | number | No | `"4.5"` | — | The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt when lo... |
| `sync_mode` | boolean | No | `"False"` | — | If set to true, the function will wait for the image to be generated and uploaded before returning the response. This... |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `output_format` | string | No | `"jpeg"` | jpeg,png | The format of the generated image. |
| `acceleration` | string | No | `"regular"` | none,regular,high | The speed of the generation. The higher the speed, the faster the generation. |

---

## Seedream V4 | Text to Image

**Slug:** `seedream-v4-text-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt used to generate the image |
| `image_size` | string | No | `"square_hd"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the generated image. Width and height must be between 512 and 4096. |
| `num_images` | integer | No | `"1"` | — | Number of times to retry generation with the prompt. |
| `seed` | integer | No | — | — | Random seed to control the stochasticity of image generation. |
| `sync_mode` | boolean | No | `"False"` | — | If set to true, the function will wait for the image to be generated and uploaded before returning the response. This... |
| `enable_safety_checker` | boolean | No | `"true"` | — | If set to true, the safety checker will be enabled. |

---

## Juggernaut Flux Lora

**Slug:** `juggernaut-flux-lora`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `image_size` | string | No | `"landscape_4_3"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the generated image. |
| `num_inference_steps` | integer | No | `"28"` | — | The number of inference steps to perform. |
| `seed` | integer | No | — | — | The same seed and the same prompt given to the same version of the model will output the same image every time. |
| `loras` | array | No | — | — | The LoRAs to use for the image generation. You can use any number of LoRAs and they will be merged together to genera... |
| `guidance_scale` | number | No | `"3.5"` | — | The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt when lo... |
| `sync_mode` | boolean | No | `"False"` | — | If set to true, the function will wait for the image to be generated and uploaded before returning the response. This... |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `output_format` | string | No | `"jpeg"` | jpeg,png | The format of the generated image. |

---

## Flux Kontext Lora | Text to Image

**Slug:** `flux-kontext-lora-text-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate the image with |
| `image_size` | string | No | `"landscape_4_3"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the generated image. |
| `num_inference_steps` | integer | No | `"30"` | — | The number of inference steps to perform. |
| `seed` | integer | No | — | — | The same seed and the same prompt given to the same version of the model will output the same image every time. |
| `guidance_scale` | number | No | `"2.5"` | — | The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt when lo... |
| `sync_mode` | boolean | No | `"False"` | — | If set to true, the function will wait for the image to be generated and uploaded before returning the response. This... |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `output_format` | string | No | `"png"` | jpeg,png | The format of the generated image. |
| `loras` | array | No | — | — | The LoRAs to use for the image generation. You can use any number of LoRAs and they will be merged together to genera... |
| `acceleration` | string | No | `"none"` | none,regular,high | The speed of the generation. The higher the speed, the faster the generation. |

---

## Imagen 4 | Preview

**Slug:** `imagen4-preview`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt describing what you want to see |
| `negative_prompt` | string | No | — | — | A description of what to discourage in the generated images |
| `aspect_ratio` | string | No | `"1:1"` | 1:1,16:9,9:16,3:4,4:3 | The aspect ratio of the generated image |
| `num_images` | integer | No | `"1"` | — | Number of images to generate (1-4) |
| `seed` | string | No | — | — | Random seed for reproducible generation |

---

## Nano Banana

**Slug:** `nano-banana`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `num_images` | integer | Yes | `"1"` | — | — |
| `aspect_ratio` | string | No | `"1:1"` | 21:9,1:1,4:3,3:2,2:3,5:4,4:5,3:4,16:9,9:16 | Output format for the images |
| `output_format` | string | No | `"png"` | jpeg,png | Output format for the images |
| `sync_mode` | boolean | No | `"false"` | — | If True, the media will be returned as a data URI and the output data won't be available in the request history. |
| `limit_generations` | boolean | No | `"True"` | — | Experimental parameter to limit the number of generations from each round of prompting to 1. Set to True to to disreg... |

---

## ByteDance Dreamina 3.1 | Text to Image

**Slug:** `dreamina-3-1`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | No | — | — | Text prompt for image generation |
| `enhance_prompt` | boolean | No | `"True"` | — | Enable text expansion for better results with short prompts |
| `aspect_ratio` | string | No | `"16:9"` | 1:1,4:3,3:4,3:2,2:3,16:9,9:16,21:9,9:21,custom | An enumeration. |
| `resolution` | string | No | `"2K"` | 1K,2K | An enumeration. |
| `width` | integer | No | `"1328"` | — | Image width (only used when aspect_ratio is 'custom') |
| `height` | integer | No | `"1328"` | — | Image height (only used when aspect_ratio is 'custom') |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation |

---

## Qwen Image

**Slug:** `qwen-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Prompt for generated image |
| `aspect_ratio` | string | No | `"16:9"` | 1:1,16:9,9:16,4:3,3:4 | An enumeration. |
| `go_fast` | boolean | No | `"True"` | — | Run faster predictions with additional optimizations. |
| `num_inference_steps` | integer | No | `"50"` | — | Number of denoising steps. Recommended range is 28-50, and lower number of steps produce lower quality outputs, faster. |
| `guidance` | number | No | `"4"` | — | Guidance for generated image. Lower values can give more realistic images. Good values to try are 2, 2.5, 3 and 3.5 |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation |
| `output_format` | string | No | `"webp"` | webp,jpg,png | An enumeration. |
| `output_quality` | integer | No | `"80"` | — | Quality when saving the output images, from 0 to 100. 100 is best quality, 0 is lowest quality. Not relevant for .png... |
| `disable_safety_checker` | boolean | No | — | — | Disable safety checker for generated images. |

---

## Logo Generator

**Slug:** `logo-generator`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `aspect_ratio` | string | No | `"1:1"` | 1:1,16:9,9:16,4:3,3:4,3:2,2:3,4:5,5:4,2:1,1:2 | An enumeration. |

---

## Seedream V3 | Text to Image

**Slug:** `seedream-v3-text-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt used to generate the image |
| `aspect_ratio` | string | No | `"1:1"` | 1:1,3:4,4:3,16:9,9:16,2:3,3:2,21:9 | The aspect ratio of the generated image |
| `guidance_scale` | number | No | `"2.5"` | — | Controls how closely the output image aligns with the input prompt. Higher values mean stronger prompt correlation. |
| `num_images` | integer | No | `"1"` | — | Number of images to generate |
| `seed` | integer | No | — | — | Random seed to control the stochasticity of image generation. |

---

## Imagen 4 | Fast

**Slug:** `imagen-4-fast`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for image generation |
| `aspect_ratio` | string | No | `"1:1"` | 1:1,9:16,16:9,3:4,4:3 | An enumeration. |
| `safety_filter_level` | string | No | `"block_only_high"` | block_low_and_above,block_medium_and_above,block_only_high | An enumeration. |
| `output_format` | string | No | `"jpg"` | jpg,png | An enumeration. |

---

## Ideogram V3 | Turbo

**Slug:** `ideogram-v3-turbo`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for image generation |
| `aspect_ratio` | string | No | `"1:1"` | 1:3,3:1,1:2,2:1,9:16,16:9,10:16,16:10,2:3,3:2,3:4,4:3,4:5,5:4,1:1 | An enumeration. |
| `resolution` | string | No | `"None"` | None,512x1536,576x1408,576x1472,576x1536,640x1344,640x1408,640x1472,640x1536,... | An enumeration. |
| `magic_prompt_option` | string | No | `"Auto"` | Auto,On,Off | An enumeration. |
| `image` | string | No | — | — | An image file to use for inpainting. You must also use a mask. |
| `mask` | string | No | — | — | A black and white image. Black pixels are inpainted, white pixels are preserved. The mask will be resized to match th... |
| `style_type` | string | No | `"None"` | None,Auto,General,Realistic,Design | An enumeration. |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation |

---

## GPT-1 | Image Generation

**Slug:** `openai-image-generation`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `output_format` | string | No | `"jpeg"` | png,jpeg,webp | — |
| `output_compression` | integer | No | — | — | — |
| `prompt` | string | Yes | — | — | — |
| `number_of_images` | integer | No | `"1"` | — | — |
| `quality` | string | No | `"auto"` | auto,high,medium,low | — |
| `background` | string | No | `"auto"` | auto,transparent,opaque | — |
| `image_size` | string | No | `"auto"` | auto,1024x1024,1536x1024,1024x1536 | — |

---

## Minimax | Text to Image

**Slug:** `minimax-text-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for generation |
| `aspect_ratio` | string | No | `"1:1"` | 1:1,16:9,4:3,3:2,2:3,3:4,9:16,21:9 | Image aspect ratio |
| `num_images` | integer | No | `"1"` | — | Number of images to generate |
| `prompt_optimizer` | boolean | No | `"false"` | — | Use prompt optimizer |

---

## FLUX HF LoRA

**Slug:** `flux-hf-lora`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Prompt for generated image |
| `aspect_ratio` | string | No | `"1:1"` | 1:1,16:9,21:9,3:2,2:3,4:5,5:4,3:4,4:3,9:16,9:21 | An enumeration. |
| `image` | string | No | — | — | Input image for image to image mode. The aspect ratio of your output will match this image |
| `prompt_strength` | number | No | `"0.8"` | — | Prompt strength (or denoising strength) when using image to image. 1.0 corresponds to full destruction of information... |
| `num_outputs` | integer | No | `"1"` | — | Number of images to output. |
| `num_inference_steps` | integer | No | `"28"` | — | Number of inference steps |
| `guidance_scale` | number | No | `"3.5"` | — | Guidance scale for the diffusion process |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation |
| `output_format` | string | No | `"webp"` | webp,jpg,png | An enumeration. |
| `output_quality` | integer | No | `"80"` | — | Quality when saving the output images, from 0 to 100. 100 is best quality, 0 is lowest quality. Not relevant for .png... |
| `hf_lora` | string | No | — | — | HuggingFace, Replicate, or CivitAI LoRA identifier. Ex: alvdansen/frosting_lane_flux |
| `lora_scale` | number | No | `"0.8"` | — | Scale for the LoRA weights |
| `disable_safety_checker` | boolean | No | `"true"` | — | Disable safety checker for generated images. This feature is only available through the API. See [https://replicate.c... |

---

## Imagen 3 | Fast

**Slug:** `imagen-3-fast`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for image generation |
| `negative_prompt` | string | No | — | — | Text prompt for what to discourage in the generated images |
| `aspect_ratio` | string | No | `"1:1"` | 1:1,9:16,16:9,3:4,4:3 | An enumeration. |
| `safety_filter_level` | string | No | `"block_medium_and_above"` | block_low_and_above,block_medium_and_above,block_only_high | An enumeration. |

---

## Imagen 3

**Slug:** `imagen-3`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for image generation |
| `negative_prompt` | string | No | — | — | Text prompt for what to discourage in the generated images |
| `aspect_ratio` | string | No | `"1:1"` | 1:1,9:16,16:9,3:4,4:3 | An enumeration. |
| `safety_filter_level` | string | No | `"block_medium_and_above"` | block_low_and_above,block_medium_and_above,block_only_high | An enumeration. |

---

## Photon

**Slug:** `photon`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for image generation |
| `aspect_ratio` | string | No | `"16:9"` | 1:1,3:4,4:3,9:16,16:9,9:21,21:9 | An enumeration. |
| `image_reference_url` | string | No | — | — | URL of a reference image to guide generation |
| `image_reference_weight` | number | No | `"0.85"` | — | Weight of the reference image. Larger values will make the reference image have a stronger influence on the generated... |
| `style_reference_url` | string | No | — | — | URL of a style reference image |
| `style_reference_weight` | number | No | `"0.85"` | — | Weight of the style reference image |
| `character_reference_url` | string | No | — | — | URL of a character reference image |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation |

---

## Sana by Nvidia

**Slug:** `sana`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | No | `"a cyberpunk cat with a neon sign that says "Sana""` | — | Input prompt |
| `negative_prompt` | string | No | — | — | Specify things to not see in the output |
| `width` | integer | No | `"1024"` | — | Width of output image |
| `height` | integer | No | `"1024"` | — | Height of output image |
| `num_inference_steps` | integer | No | `"18"` | — | Number of denoising steps |
| `guidance_scale` | number | No | `"5"` | — | Classifier-free guidance scale |
| `pag_guidance_scale` | number | No | `"2"` | — | PAG Guidance scale |
| `seed` | integer | No | — | — | Random seed. Leave blank to randomize the seed |

---

## Omni Zero Couple

**Slug:** `omni-zero-couples`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `base_image` | string | Yes | — | — | Base image for the model |
| `base_image_strength` | number | No | `"0.2"` | — | Base image strength for the model |
| `style_image` | string | Yes | — | — | Style image for the model |
| `style_image_strength` | number | No | `"1"` | — | Style image strength for the model |
| `identity_image_1` | string | Yes | — | — | First identity image for the model |
| `identity_image_strength_1` | number | No | `"1"` | — | First identity image strength for the model |
| `identity_image_2` | string | Yes | — | — | Second identity image for the model |
| `identity_image_strength_2` | number | No | `"1"` | — | Second identity image strength for the model |
| `seed` | integer | No | `"-1"` | — | Random seed for the model. Use -1 for random |
| `prompt` | string | No | `"Cinematic still photo of a couple. emotional, harmonious, vignette, 4k epic detailed, shot on kodak, 35mm photo, sharp focus, high budget, cinemascope, moody, epic, gorgeous, film grain, grainy"` | — | Prompt for the model |
| `negative_prompt` | string | No | `"anime, cartoon, graphic, (blur, blurry, bokeh), text, painting, crayon, graphite, abstract, glitch, deformed, mutated, ugly, disfigured"` | — | Negative prompt for the model |
| `guidance_scale` | number | No | `"3"` | — | Guidance scale for the model |
| `number_of_images` | integer | No | `"1"` | — | Number of images to generate |
| `number_of_steps` | integer | No | `"10"` | — | Number of steps for the model |
| `depth_image` | string | No | — | — | Depth image for the model |
| `depth_image_strength` | number | No | `"0.2"` | — | Depth image strength for the model |
| `mask_guidance_start` | number | No | `"0"` | — | Mask guidance start value |
| `mask_guidance_end` | number | No | `"1"` | — | Mask guidance end value |

---

## Flux 1.1 Pro Ultra

**Slug:** `flux-1-1-pro-ultra`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for image generation |
| `image_prompt` | string | No | — | — | Image to use with Flux Redux. This is used together with the text prompt to guide the generation towards the composit... |
| `image_prompt_strength` | number | No | `"0.1"` | — | Blend between the prompt and the image prompt. |
| `aspect_ratio` | string | No | `"1:1"` | 21:9,16:9,3:2,4:3,5:4,1:1,4:5,3:4,2:3,9:16,9:21 | An enumeration. |
| `safety_tolerance` | integer | No | `"2"` | — | Safety tolerance, 1 is most strict and 6 is most permissive |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation |
| `raw` | boolean | No | — | — | Generate less processed, more natural-looking images |
| `output_format` | string | No | `"jpg"` | jpg,png | An enumeration. |

---

## Stable Diffusion 3.5 Medium

**Slug:** `stable-diffusion-3-5-medium`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | No | — | — | Text prompt for image generation |
| `aspect_ratio` | string | No | `"1:1"` | 1:1,16:9,21:9,3:2,2:3,4:5,5:4,3:4,4:3,9:16,9:21 | An enumeration. |
| `cfg` | number | No | `"5"` | — | The guidance scale tells the model how similar the output should be to the prompt. |
| `image` | string | No | — | — | Input image for image to image mode. The aspect ratio of your output will match this image. |
| `prompt_strength` | number | No | `"0.85"` | — | Prompt strength (or denoising strength) when using image to image. 1.0 corresponds to full destruction of information... |
| `steps` | integer | No | `"40"` | — | Number of steps to run the sampler for. |
| `seed` | integer | No | — | — | Set a seed for reproducibility. Random by default. |
| `output_format` | string | No | `"webp"` | webp,jpg,png | An enumeration. |
| `output_quality` | integer | No | `"90"` | — | Quality of the output images, from 0 to 100. 100 is best quality, 0 is lowest quality. |

---

## Recraft V3

**Slug:** `recraft-v3`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for image generation |
| `size` | string | No | `"1024x1024"` | 1024x1024,1365x1024,1024x1365,1536x1024,1024x1536,1820x1024,1024x1820,1024x20... | An enumeration. |
| `style` | string | No | `"any"` | any,realistic_image,digital_illustration,digital_illustration/pixel_art,digit... | An enumeration. |

---

## Stable Diffusion 3.5 Large

**Slug:** `stable-diffusion-3-5-large`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | No | — | — | Text prompt for image generation |
| `aspect_ratio` | string | No | `"1:1"` | 1:1,16:9,21:9,3:2,2:3,4:5,5:4,3:4,4:3,9:16,9:21 | An enumeration. |
| `cfg` | number | No | `"3.5"` | — | The guidance scale tells the model how similar the output should be to the prompt. |
| `image` | string | No | — | — | Input image for image to image mode. The aspect ratio of your output will match this image. |
| `prompt_strength` | number | No | `"0.85"` | — | Prompt strength (or denoising strength) when using image to image. 1.0 corresponds to full destruction of information... |
| `steps` | integer | No | `"35"` | — | Number of steps to run the sampler for. |
| `seed` | integer | No | — | — | Set a seed for reproducibility. Random by default. |
| `output_format` | string | No | `"webp"` | webp,jpg,png | An enumeration. |
| `output_quality` | integer | No | `"90"` | — | Quality of the output images, from 0 to 100. 100 is best quality, 0 is lowest quality. |

---

## Flux 1.1 Pro

**Slug:** `flux-1-1-pro`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for image generation |
| `image_prompt` | string | No | — | — | Image to use with Flux Redux. This is used together with the text prompt to guide the generation towards the composit... |
| `aspect_ratio` | string | No | `"1:1"` | custom,1:1,16:9,2:3,3:2,4:5,5:4,9:16,3:4,4:3 | An enumeration. |
| `width` | integer | No | — | — | Width of the generated image in text-to-image mode. Only used when aspect_ratio=custom. Must be a multiple of 16 (if ... |
| `height` | integer | No | — | — | Height of the generated image in text-to-image mode. Only used when aspect_ratio=custom. Must be a multiple of 16 (if... |
| `safety_tolerance` | integer | No | `"2"` | — | Safety tolerance, 1 is most strict and 5 is most permissive |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation |
| `prompt_upsampling` | boolean | No | — | — | Automatically modify the prompt for more creative generation |
| `output_format` | string | No | `"jpg"` | jpg,png | An enumeration. |
| `output_quality` | integer | No | `"80"` | — | Quality when saving the output images, from 0 to 100. 100 is best quality, 0 is lowest quality. Not relevant for .png... |

---

## Fooocus

**Slug:** `fooocus-api`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | No | — | — | Prompt for image generation |
| `negative_prompt` | string | No | — | — | Negative prompt for image generation |
| `style_selections` | string | No | `"Fooocus V2,Fooocus Enhance,Fooocus Sharp"` | — | Fooocus styles applied for image generation, separated by comma |
| `performance_selection` | string | No | `"Speed"` | Speed,Quality,Extreme Speed | An enumeration. |
| `aspect_ratios_selection` | string | No | `"1152*896"` | 704*1408,704*1344,768*1344,768*1280,832*1216,832*1152,896*1152,896*1088,960*1... | An enumeration. |
| `image_number` | integer | No | `"1"` | — | How many image to generate |
| `image_seed` | integer | No | `"-1"` | — | Seed to generate image, -1 for random |
| `use_default_loras` | boolean | No | `"True"` | — | Use default LoRAs |
| `loras_custom_urls` | string | No | — | — | Custom LoRA identifiers with weights, separated by ; (example 'lora_id,0.3;lora_id2,0.1') |
| `sharpness` | number | No | `"2"` | — | — |
| `guidance_scale` | number | No | `"7"` | — | — |
| `refiner_switch` | number | No | `"0.5"` | — | — |
| `uov_input_image` | string | No | — | — | Input image for upscale or variation, keep None for not upscale or variation |
| `uov_method` | string | No | `"Disabled"` | Disabled, Vary (Subtle), Vary (Strong), Upscale (1.5x), Upscale (2x), Upscale... | An enumeration. |
| `uov_upscale_value` | number | No | `"0"` | — | Only when Upscale (Custom) |
| `inpaint_additional_prompt` | string | No | — | — | Prompt for image generation |
| `inpaint_input_image` | string | No | — | — | Input image for inpaint or outpaint, keep None for not inpaint or outpaint. Please noticed, `uov_input_image` has big... |
| `inpaint_input_mask` | string | No | — | — | Input mask for inpaint |
| `outpaint_selections` | string | No | — | — | Outpaint expansion selections, literal 'Left', 'Right', 'Top', 'Bottom' separated by comma |
| `outpaint_distance_left` | number | No | `"0"` | — | Outpaint expansion distance from Left of the image |
| `outpaint_distance_top` | number | No | `"0"` | — | Outpaint expansion distance from Top of the image |
| `outpaint_distance_right` | number | No | `"0"` | — | Outpaint expansion distance from Right of the image |
| `outpaint_distance_bottom` | number | No | `"0"` | — | Outpaint expansion distance from Bottom of the image |
| `cn_img1` | string | No | — | — | Input image for image prompt. If all cn_img[n] are None, image prompt will not applied. |
| `cn_stop1` | number | No | `"0.5"` | — | Stop at for image prompt, None for default value |
| `cn_weight1` | number | No | — | — | Weight for image prompt, None for default value |
| `cn_type1` | string | No | `"ImagePrompt"` | ImagePrompt,FaceSwap,PyraCanny,CPDS | An enumeration. |
| `cn_img2` | string | No | — | — | Input image for image prompt. If all cn_img[n] are None, image prompt will not applied. |
| `cn_stop2` | number | No | — | — | Stop at for image prompt, None for default value |
| `cn_weight2` | number | No | — | — | Weight for image prompt, None for default value |
| `cn_type2` | string | No | `"ImagePrompt"` | ImagePrompt,FaceSwap,PyraCanny,CPDS | An enumeration. |
| `cn_img3` | string | No | — | — | Input image for image prompt. If all cn_img[n] are None, image prompt will not applied. |
| `cn_stop3` | number | No | — | — | Stop at for image prompt, None for default value |
| `cn_weight3` | number | No | — | — | Weight for image prompt, None for default value |
| `cn_type3` | string | No | `"ImagePrompt"` | ImagePrompt,FaceSwap,PyraCanny,CPDS | An enumeration. |
| `cn_img4` | string | No | — | — | Input image for image prompt. If all cn_img[n] are None, image prompt will not applied. |
| `cn_stop4` | number | No | — | — | Stop at for image prompt, None for default value |
| `cn_weight4` | number | No | — | — | Weight for image prompt, None for default value |
| `cn_type4` | string | No | `"ImagePrompt"` | ImagePrompt,FaceSwap,PyraCanny,CPDS | An enumeration. |

---

## Flux Dev

**Slug:** `flux-dev`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Prompt for generated image |
| `aspect_ratio` | string | No | `"1:1"` | 1:1,16:9,21:9,2:3,3:2,4:5,5:4,9:16,9:21 | An enumeration. |
| `image` | string | No | — | — | Input image for image to image mode. The aspect ratio of your output will match this image |
| `prompt_strength` | number | No | `"0.8"` | — | Prompt strength when using img2img. 1.0 corresponds to full destruction of information in image |
| `num_outputs` | integer | No | `"1"` | — | Number of outputs to generate |
| `num_inference_steps` | integer | No | `"28"` | — | Number of denoising steps. Recommended range is 28-50 |
| `guidance` | number | No | `"3.5"` | — | Guidance for generated image. Ignored for flux-schnell |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation |
| `output_format` | string | No | `"webp"` | webp,png,jpg | An enumeration. |
| `output_quality` | integer | No | `"80"` | — | Quality when saving the output images, from 0 to 100. 100 is best quality, 0 is lowest quality. Not relevant for .png... |
| `disable_safety_checker` | boolean | No | — | — | Disable safety checker for generated images. This feature is only available through the API |

---

## Flux Realism

**Slug:** `flux-dev-realism`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | No | `"A photo of a woman, headshot, realistic"` | — | Prompt is the input text or question that the model uses to generate a response or output. |
| `aspect_ratio` | string | No | `"1:1"` | 1:1,16:9,21:9,2:3,3:2,4:5,5:4,9:16,9:21 | Aspect ratio specifies the proportion between the width and height of an image or visual output. |
| `num_outputs` | integer | No | `"1"` | — | Num outputs indicates the number of results or outputs generated by the model in response to a given prompt. |
| `num_inference_steps` | integer | No | `"30"` | — | Num inference steps are the number of steps the model takes to generate a result, affecting the detail and accuracy o... |
| `guidance` | number | No | `"3.5"` | — | Guidance refers to the additional information or instructions provided to the model to help shape its outputs. |
| `lora_strength` | number | No | `"0.8"` | — | LORA strength is a parameter that controls the intensity or influence of the LORA technique in the model's operation,... |
| `output_format` | string | No | `"webp"` | webp,jpg,png | Output format is the type or structure of the generated result, such as text, image, or audio. |
| `output_quality` | integer | No | `"80"` | — | Output quality refers to the clarity, detail, and overall standard of the generated output. |
| `seed` | integer | No | — | — | Seed is a number used to initialize the random number generator, ensuring consistent and repeatable results. |

---

## Flux Schnell

**Slug:** `flux-schnell`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Prompt for generated image |
| `aspect_ratio` | string | No | `"1:1"` | 1:1,16:9,21:9,3:2,2:3,4:5,5:4,3:4,4:3,9:16,9:21 | An enumeration. |
| `num_outputs` | integer | No | `"1"` | — | Number of images to generate. |
| `num_inference_steps` | integer | No | `"4"` | — | Number of denoising steps |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation |
| `output_format` | string | No | `"webp"` | webp,jpg,png | An enumeration. |
| `output_quality` | integer | No | `"80"` | — | Quality when saving the output images, from 0 to 100. 100 is best quality, 0 is lowest quality. Not relevant for .png... |
| `disable_safety_checker` | boolean | No | `"true"` | — | Disable safety checker for generated images |
| `go_fast` | boolean | No | `"true"` | — | Run faster predictions with model optimized for speed (currently fp8 quantized); disable to run in original bf16 |
| `megapixels` | string | No | `"1"` | 1,0.25 | An enumeration. |

---

## Realistic Vision

**Slug:** `realistic-vision-v6-0-b1`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | No | `"photo of offroad car, forest, sunset, clouds"` | — | Prompt is the text input describing what you want the image to look like. |
| `negative_prompt` | string | No | `"(deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime), text, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck"` | — | Negative_prompt involves specifying what should not be included in the generated image. |
| `image` | string | No | — | — | Image is the visual output generated by the model based on the prompt. |
| `mask` | string | No | — | — | Mask is used to specify which parts of the image to keep or alter during generation. |
| `width` | integer | No | `"512"` | — | Width determines the horizontal size of the generated image. |
| `height` | integer | No | `"728"` | — | Height determines the vertical size of the generated image. |
| `strength` | number | No | `"1"` | — | Strength determines the extent to which the original image is altered if a starting image is provided. |
| `num_inference_steps` | integer | No | `"20"` | — | Num_inference_steps defines how many steps the model should take to generate the image, affecting quality and speed. |
| `guidance_scale` | number | No | `"7.5"` | — | Guidance_scale adjusts how much the model should follow the prompt versus being creative. |
| `scheduler` | string | No | `"K_EULER_ANCESTRAL"` | DDIM,DPMSolverMultistep,HeunDiscrete,K_EULER_ANCESTRAL,K_EULER,PNDM | Scheduler controls the method and order in which the image generation process is carried out. |
| `use_karras_sigmas` | boolean | No | — | — | Use_karras_sigmas is an option to improve image quality by using a specialized technique. |
| `seed` | integer | No | — | — | Seed is a number used to initialize the random number generator, helping to reproduce the same output. |

---

## Kandinsky 2 Image Generation

**Slug:** `kandinsky-2-2`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | `"A moss covered astronaut with a black background"` | — | Input prompt |
| `negative_prompt` | string | No | — | — | Specify things to not see in the output |
| `width` | integer | No | `"512"` | 384,512,576,640,704,768,960,1024,1152,1280,1536,1792,2048 | An enumeration. |
| `height` | integer | No | `"512"` | 384,512,576,640,704,768,960,1024,1152,1280,1536,1792,2048 | An enumeration. |
| `num_inference_steps` | integer | No | `"75"` | — | Number of denoising steps |
| `num_inference_steps_prior` | integer | No | `"25"` | — | Number of denoising steps for priors |
| `num_outputs` | integer | No | `"1"` | — | Number of images to output. |
| `seed` | integer | No | — | — | Random seed. Leave blank to randomize the seed |
| `output_format` | string | No | `"webp"` | webp,jpeg,png | An enumeration. |

---

## Photomaker - Image Generation

**Slug:** `photomaker`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `input_image` | string | Yes | — | — | The input image, for example a photo of your face. |
| `input_image2` | string | No | — | — | Additional input image (optional) |
| `input_image3` | string | No | — | — | Additional input image (optional) |
| `input_image4` | string | No | — | — | Additional input image (optional) |
| `prompt` | string | No | `"A photo of a person img"` | — | Prompt. Example: 'a photo of a man/woman img'. The phrase 'img' is the trigger word. |
| `style_name` | string | No | `"Photographic (Default)"` | (No style),Cinematic,Disney Charactor,Digital Art,Photographic (Default),Fant... | An enumeration. |
| `negative_prompt` | string | No | `"nsfw, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry"` | — | Negative Prompt. The negative prompt should NOT contain the trigger word. |
| `num_steps` | integer | No | `"20"` | — | Number of sample steps |
| `style_strength_ratio` | number | No | `"20"` | — | Style strength (%) |
| `num_outputs` | integer | No | `"1"` | — | Number of output images |
| `guidance_scale` | number | No | `"5"` | — | Guidance scale. A guidance scale of 1 corresponds to doing no classifier free guidance. |
| `seed` | integer | No | — | — | Seed. Leave blank to use a random number |
| `disable_safety_checker` | boolean | No | — | — | Disable safety checker for generated images. |

---
