# Image Edit Models Reference

Complete parameter reference for all image editing models. All models use version `0.0.1`.

# Image To Image

---

## XAI | Grok | Imagine | Image Edit

**Slug:** `xai-grok-imagine-image-edit`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text description of the desired image. |
| `image_url` | string | Yes | — | — | URL of the image to edit. |
| `num_images` | integer | No | `"1"` | — | Number of images to generate. |
| `output_format` | string | No | `"jpeg"` | jpeg,png,webp | The format of the generated image. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |

---

## Flux 2 | Klein | 9B | Base | Edit

**Slug:** `flux-2-klein-9b-base-edit`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to edit the image. |
| `image_urls` | array | Yes | — | — | The URLs of the images for editing. A maximum of 4 images are allowed. |
| `negative_prompt` | string | No | — | — | Negative prompt for classifier-free guidance. Describes what to avoid in the image. |
| `guidance_scale` | number | No | `"5"` | — | Guidance scale for classifier-free guidance. |
| `num_inference_steps` | integer | No | `"28"` | — | The number of inference steps to perform. |
| `image_size` | string | No | `"landscape_4_3"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the generated image. If not provided, uses the input image size. |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `acceleration` | string | No | `"regular"` | none, regular, high | The acceleration level to use for image generation. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `output_format` | string | No | `"png"` | jpeg,png,webp | The format of the generated image. |
| `seed` | integer | No | — | — | The seed to use for the generation. If not provided, a random seed will be used. |

---

## Flux 2 | Klein | 4B | Edit

**Slug:** `flux-2-klein-4b-edit`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to edit the image. |
| `image_urls` | array | Yes | — | — | The URLs of the images for editing. A maximum of 4 images are allowed. |
| `num_inference_steps` | integer | No | `"4"` | — | The number of inference steps to perform. |
| `image_size` | string | No | `"landscape_16_9"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the generated image. If not provided, uses the input image size. |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `acceleration` | string | No | `"regular"` | none,regular,high | The acceleration level to use for image generation. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `output_format` | string | No | `"png"` | jpeg,png,webp | The format of the generated image. |
| `seed` | integer | No | — | — | The seed to use for the generation. If not provided, a random seed will be used. |

---

## Qwen |  Image Edit 2511 | Multiple Angles

**Slug:** `qwen-image-edit-2511-multiple-angles`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_urls` | array | Yes | — | — | The URL of the image to adjust camera angle for. |
| `horizontal_angle` | number | No | `"0"` | — | Horizontal rotation angle around the object in degrees. 0°=front view, 90°=right side, 180°=back view, 270°=left side... |
| `vertical_angle` | number | No | `"0"` | — | Vertical camera angle in degrees. -30°=low-angle shot (looking up), 0°=eye-level, 30°=elevated, 60°=high-angle, 90°=b... |
| `zoom` | number | No | `"5"` | — | Camera zoom/distance. 0=wide shot (far away), 5=medium shot (normal), 10=close-up (very close). |
| `lora_scale` | number | No | `"1"` | — | The scale factor for the LoRA model. Controls the strength of the camera control effect. |
| `image_size` | string | No | `"square_hd"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the generated image. If not provided, the size of the input image will be used. |
| `guidance_scale` | number | No | `"4.5"` | — | The CFG (Classifier Free Guidance) scale. |
| `num_inference_steps` | integer | No | `"28"` | — | The number of inference steps to perform. |
| `acceleration` | string | No | `"regular"` | none,regular | Acceleration level for image generation. |
| `negative_prompt` | string | No | — | — | The negative prompt for the generation |
| `seed` | string | No | — | — | Random seed for reproducibility. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI. |
| `enable_safety_checker` | boolean | No | `"True"` | — | Whether to enable the safety checker. |
| `output_format` | string | No | `"png"` | png,jpeg,webp | The format of the output image |
| `num_images` | integer | No | `"1"` | — | Number of images to generate |

---

## P Image | Edit

**Slug:** `p-image-edit`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for image generation. Make sure to describe your edit task clearly. You can refer to the images as 'image... |
| `images` | array | No | — | — | Images to use as a reference. For editing task, provide the main image as the first image. |
| `turbo` | boolean | No | `"True"` | — | If turned on, the model will run faster with additional optimizations. For complicated tasks, it is recommended to tu... |
| `aspect_ratio` | string | No | `"match_input_image"` | match_input_image,1:1,16:9,9:16,4:3,3:4,3:2,2:3 | An enumeration. |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation. |
| `disable_safety_checker` | boolean | No | — | — | Disable safety checker for generated images. |

---

## Wan | v2.6 | Image to Image

**Slug:** `wan-v2-6-image-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt describing the desired image. Supports Chinese and English. Max 2000 characters. Example: 'Generate an im... |
| `image_urls` | array | Yes | — | — | Reference images for editing (1-3 images required). Order matters: reference as 'image 1', 'image 2', 'image 3' in pr... |
| `negative_prompt` | string | No | — | — | Content to avoid in the generated image. Max 500 characters. |
| `image_size` | string | No | `"square_hd"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | Output image size. Use presets like 'square_hd', 'landscape_16_9', 'portrait_9_16', or specify exact dimensions with ... |
| `num_images` | integer | No | `"1"` | — | Number of images to generate (1-4). Directly affects billing cost. |
| `enable_prompt_expansion` | boolean | No | `"True"` | — | Enable LLM prompt optimization. Significantly improves results for simple prompts but adds 3-4 seconds processing time. |
| `seed` | integer | No | — | — | Random seed for reproducibility (0-2147483647). Same seed produces more consistent results. |
| `enable_safety_checker` | boolean | No | `"True"` | — | Enable content moderation for input and output. |

---

## Flux 2 | Turbo | Edit

**Slug:** `flux-2-turbo-edit`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to edit the image. |
| `image_urls` | array | Yes | — | — | The URLs of the images for editing. A maximum of 4 images are allowed, if more are provided, only the first 4 will be... |
| `guidance_scale` | number | No | `"2.5"` | — | Guidance Scale is a measure of how close you want the model to stick to your prompt when looking for a related image ... |
| `image_size` | string | No | `"square_hd"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the image to generate. The width and height must be between 512 and 2048 pixels. |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `enable_prompt_expansion` | boolean | No | `"False"` | — | If set to true, the prompt will be expanded for better results. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `output_format` | string | No | `"png"` | jpeg,png,webp | The format of the generated image. |
| `seed` | integer | No | — | — | The seed to use for the generation. If not provided, a random seed will be used. |

---

## Flux 2 | Flash | Edit

**Slug:** `flux-2-flash-edit`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to edit the image. |
| `image_urls` | array | Yes | — | — | The URLs of the images for editing. A maximum of 4 images are allowed |
| `guidance_scale` | number | No | `"2.5"` | — | Guidance Scale is a measure of how close you want the model to stick to your prompt when looking for a related image ... |
| `image_size` | string | No | `"square_hd"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the image to generate. The width and height must be between 512 and 2048 pixels. |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `enable_prompt_expansion` | boolean | No | `"False"` | — | If set to true, the prompt will be expanded for better results. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `output_format` | string | No | `"png"` | jpeg,png,webp | The format of the generated image. |
| `seed` | integer | No | — | — | The seed to use for the generation. If not provided, a random seed will be used. |

---

## GPT Image | v1.5 | Edit

**Slug:** `gpt-image-v1-5-edit`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt for image generation |
| `image_urls` | array | Yes | — | — | The URLs of the images to use as a reference for the generation. |
| `image_size` | string | No | `"1024x1024"` | 1024x1024,1536x1024,1024x1536 | Aspect ratio for the generated image |
| `background` | string | No | `"auto"` | auto,transparent,opaque | Background for the generated image |
| `quality` | string | No | `"high"` | low,medium,high | Quality for the generated image |
| `input_fidelity` | string | No | `"high"` | low,high | Input fidelity for the generated image |
| `num_images` | integer | No | `"1"` | — | Number of images to generate |
| `output_format` | string | No | `"png"` | jpeg,png,webp | Output format for the images |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |

---

## Flux 2 | Max | Edit

**Slug:** `flux-2-max-edit`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `image_urls` | array | Yes | — | — | List of URLs of input images for editing |
| `image_size` | string | No | `"square_hd"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the generated image. If `auto`, the size will be determined by the model. |
| `safety_tolerance` | string | No | `"2"` | 1,2,3,4,5 | The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. |
| `enable_safety_checker` | boolean | No | `"True"` | — | Whether to enable the safety checker. |
| `output_format` | string | No | `"jpeg"` | jpeg,png | The format of the generated image. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |
| `seed` | integer | No | — | — | The seed to use for the generation. |

---

## AI Face Swap V1

**Slug:** `aifaceswap-face-swap`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `source_image` | string | Yes | — | — | — |
| `face_image` | string | Yes | — | — | — |

---

## Z Image | Turbo | Image to Image | Lora

**Slug:** `z-image-turbo-image-to-image-lora`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `image_url` | string | Yes | — | — | URL of Image for Image-to-Image generation. |
| `strength` | number | No | `"0.6"` | — | The strength of the image-to-image conditioning |
| `loras` | array | No | — | — | List of LoRA weights to apply |
| `image_size` | string | No | `"auto"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9,auto | The size of the generated image. |
| `num_inference_steps` | integer | No | `"8"` | — | The number of inference steps to perform. |
| `seed` | integer | No | — | — | The same seed and the same prompt given to the same version of the model will output the same image every time. |
| `sync_mode` | boolean | No | `"false"` | — | If True, the media will be returned as a data URI and the output data won't be available in the request history. |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `enable_safety_checker` | boolean | No | `"true"` | — | If set to true, the safety checker will be enabled. |
| `enable_prompt_expansion` | boolean | No | `"false"` | — | Whether to enable prompt expansion. Note: this will increase the price by 0.0025 credits per request. |
| `output_format` | string | No | `"png"` | jpeg,png,webp | The format of the generated image. |
| `acceleration` | string | No | `"none"` | none,regular,high | The acceleration level to use. |

---

## Z Image | Turbo | Controlnet | Lora

**Slug:** `z-image-turbo-controlnet-lora`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `image_url` | string | Yes | — | — | URL of Image for ControlNet generation. |
| `control_scale` | number | No | `"0.9"` | — | The scale of the controlnet conditioning. |
| `control_start` | number | No | `"0"` | — | The start of the controlnet conditioning. |
| `control_end` | number | No | `"0.4"` | — | The end of the controlnet conditioning. |
| `preprocess` | string | No | `"none"` | none,canny,depth,pose | What kind of preprocessing to apply to the image, if any. Default value: "none" |
| `loras` | array | No | — | — | — |
| `image_size` | string | No | `"auto"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9,auto | The size of the generated image. |
| `num_inference_steps` | integer | No | `"8"` | — | The number of inference steps to perform. |
| `seed` | integer | No | — | — | The same seed and the same prompt given to the same version of the model will output the same image every time. |
| `sync_mode` | boolean | No | `"false"` | — | If True, the media will be returned as a data URI and the output data won't be available in the request history. |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `enable_safety_checker` | boolean | No | `"true"` | — | If set to true, the safety checker will be enabled. |
| `enable_prompt_expansion` | boolean | No | — | — | true |
| `output_format` | string | No | `"png"` | jpeg,png,webp | The format of the generated image. |
| `acceleration` | string | No | `"none"` | none,regular,high | The acceleration level to use. |

---

## Z Image | Turbo | Controlnet

**Slug:** `z-image-turbo-controlnet`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `image_url` | string | Yes | — | — | URL of Image for ControlNet generation. |
| `image_size` | string | No | `"auto"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9,auto | The size of the generated image. |
| `num_inference_steps` | integer | No | `"8"` | — | The number of inference steps to perform. |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `enable_prompt_expansion` | boolean | No | `"False"` | — | Whether to enable prompt expansion. Note: this will increase the price by 0.0025 credits per request. |
| `output_format` | string | No | `"png"` | jpeg,png,webp | The format of the generated image. |
| `acceleration` | string | No | `"none"` | none,regular,high | The acceleration level to use. |
| `control_scale` | number | No | `"0.9"` | — | The scale of the controlnet conditioning. |
| `control_start` | number | No | `"0"` | — | The start of the controlnet conditioning. |
| `control_end` | number | No | `"0.4"` | — | The end of the controlnet conditioning. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |
| `preprocess` | string | No | `"none"` | none,canny,depth,pose | What kind of preprocessing to apply to the image, if any. |
| `seed` | integer | No | — | — | The same seed and the same prompt given to the same version of the model will output the same image every time. |

---

## Z Image | Turbo | Image to Image

**Slug:** `z-image-turbo-image-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `image_url` | string | Yes | — | — | URL of Image for Image-to-Image generation. |
| `image_size` | string | No | `"auto"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9,auto | The size of the generated image. |
| `num_inference_steps` | integer | No | `"8"` | — | The number of inference steps to perform. |
| `strength` | number | No | `"0.6"` | — | The strength of the image-to-image conditioning. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `enable_prompt_expansion` | boolean | No | `"False"` | — | Whether to enable prompt expansion. Note: this will increase the price by 0.0025 credits per request. |
| `output_format` | string | No | `"png"` | jpeg,png,webp | The format of the generated image. |
| `acceleration` | string | No | `"none"` | none,regular,high | The acceleration level to use. |
| `seed` | integer | No | — | — | The same seed and the same prompt given to the same version of the model will output the same image every time. |

---

## Nano Banana Pro - Sketch

**Slug:** `nano-banana-pro-sketch`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `person` | string | Yes | — | — | — |

---

## Nano Banana Pro - Photoshoot

**Slug:** `nano-banana-pro-photoshoot`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `person` | string | Yes | — | — | — |

---

## Nano Banana Pro - Comic Art

**Slug:** `nano-banana-pro-comic-art`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `person` | string | Yes | — | — | — |

---

## Nano Banana Pro - Realism

**Slug:** `nano-banana-pro-realism`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `person` | string | Yes | — | — | — |

---

## Nano Banana Pro - Biometric Photo

**Slug:** `nano-banana-pro-biometric-photo`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `person` | string | Yes | — | — | — |

---

## Bytedance | Seedream | v4.5 | Edit

**Slug:** `bytedance-seedream-v4-5-edit`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt used to edit the image |
| `image_urls` | array | Yes | — | — | List of URLs of input images for editing. Presently, up to 10 image inputs are allowed. |
| `image_size` | string | No | `"square_hd"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9,auto... | — |
| `num_images` | integer | No | `"1"` | — | Number of separate model generations to be run with the prompt. |
| `max_images` | integer | No | `"1"` | — | If set to a number greater than one, enables multi-image generation. The model will potentially return up to max_imag... |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |
| `seed` | integer | No | — | — | Random seed to control the stochasticity of image generation. |
| `enable_safety_checker` | boolean | No | `"True"` | — | — |

---

## Vidu Q2 | Reference to Image

**Slug:** `vidu-q2-reference-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for video generation, max 1500 characters |
| `reference_image_urls` | array | Yes | — | — | URLs of the reference images to use for consistent subject appearance |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,1:1 | The aspect ratio of the output video |
| `seed` | integer | No | — | — | Random seed for generation |

---

## Kling O1

**Slug:** `kling-o1`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for image generation. Reference images using @Image1, @Image2, etc. (or @Image if only one image). Max 25... |
| `image_urls` | array | Yes | — | — | List of reference images. Reference images in prompt using @Image1, @Image2, etc. (1-indexed). Max 10 images. |
| `resolution` | string | No | `"1K"` | 1K,2K | Image generation resolution. 1K: standard, 2K: high-res. |
| `num_images` | integer | No | `"1"` | — | Number of images to generate (1-9). |
| `aspect_ratio` | string | No | `"auto"` | auto,16:9,9:16,1:1,4:3,3:4,3:2,2:3,21:9 | Aspect ratio of generated images. 'auto' intelligently determines based on input content. |
| `output_format` | string | No | `"png"` | jpeg,png,webp | The format of the generated image. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |

---

## Flux 2 | Flex | Edit

**Slug:** `flux-2-flex-edit`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `image_urls` | array | Yes | — | — | List of URLs of input images for editing |
| `image_size` | string | No | `"auto"` | auto,square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the generated image. If `auto`, the size will be determined by the model. |
| `num_inference_steps` | integer | No | `"28"` | — | The number of inference steps to perform. |
| `guidance_scale` | number | No | `"3.5"` | — | The guidance scale to use for the generation. |
| `output_format` | string | No | `"jpeg"` | jpeg,png | The format of the generated image. |
| `safety_tolerance` | string | No | `"2"` | 1,2,3,4,5 | The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. |
| `enable_safety_checker` | boolean | No | `"True"` | — | Whether to enable the safety checker. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |
| `enable_prompt_expansion` | boolean | No | `"True"` | — | Whether to expand the prompt using the model's own knowledge. |
| `seed` | integer | No | — | — | The seed to use for the generation. |

---

## Flux 2 Pro | Edit

**Slug:** `flux-2-pro-edit`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `image_urls` | array | Yes | — | — | List of URLs of input images for editing |
| `image_size` | string | No | `"auto"` | auto,square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the generated image. If `auto`, the size will be determined by the model. |
| `seed` | integer | No | — | — | The seed to use for the generation. |
| `safety_tolerance` | string | No | `"2"` | 1,2,3,4,5 | The safety tolerance level for the generated image. 1 being the most strict and 5 being the most permissive. |
| `enable_safety_checker` | boolean | No | `"True"` | — | Whether to enable the safety checker. |
| `output_format` | string | No | `"jpeg"` | jpeg,png | The format of the generated image. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |

---

## Flux 2 | Lora Edit

**Slug:** `flux-2-lora-edit`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `image_urls` | array | Yes | — | — | The URsL of the images for editing. |
| `loras` | array | No | — | — | List of LoRA weights to apply (maximum 3) |
| `guidance_scale` | number | No | `"2.5"` | — | Guidance Scale is a measure of how close you want the model to stick to your prompt when looking for a related image ... |
| `num_inference_steps` | integer | No | `"28"` | — | The number of inference steps to perform. |
| `image_size` | string | No | `"square_hd"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the image to generate. |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `acceleration` | string | No | `"regular"` | none,regular,high | The acceleration level to use for the image generation. |
| `enable_prompt_expansion` | boolean | No | `"false"` | — | If set to true, the prompt will be expanded for better results. |
| `sync_mode` | boolean | No | `"false"` | — | If True, the media will be returned as a data URI and the output data won't be available in the request history. |
| `enable_safety_checker` | boolean | No | `"true"` | — | If set to true, the safety checker will be enabled. |
| `output_format` | string | No | `"png"` | jpeg,png,webp | The format of the generated image. |
| `seed` | integer | No | — | — | The seed to use for the generation. If not provided, a random seed will be used |

---

## Flux 2 | Edit

**Slug:** `flux-2-edit`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to edit the image. |
| `image_urls` | array | Yes | — | — | The URsL of the images for editing. A maximum of 3 images are allowed, if more are provided, only the first 3 will be... |
| `guidance_scale` | number | No | `"2.5"` | — | Guidance Scale is a measure of how close you want the model to stick to your prompt when looking for a related image ... |
| `num_inference_steps` | integer | No | `"28"` | — | The number of inference steps to perform. |
| `image_size` | string | No | `"square_hd"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the image to generate. The width and height must be between 512 and 2048 pixels. |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `acceleration` | string | No | `"regular"` | none,regular,high | The acceleration level to use for the image generation. |
| `enable_prompt_expansion` | boolean | No | `"False"` | — | If set to true, the prompt will be expanded for better results. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `output_format` | string | No | `"png"` | jpeg,png,webp | The format of the generated image. |
| `seed` | integer | No | — | — | The seed to use for the generation. If not provided, a random seed will be used. |

---

## Gemini 3 Pro | Image Edit

**Slug:** `gemini-3-pro-image-preview-edit`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt for image editing. |
| `image_urls` | array | Yes | — | — | The URLs of the images to use for image-to-image generation or image editing. |
| `aspect_ratio` | string | No | `"1:1"` | 21:9,16:9,3:2,4:3,5:4,1:1,4:5,3:4,2:3,9:16 | The aspect ratio of the generated image. |
| `resolution` | string | No | `"1K"` | 1K,2K,4K | The resolution of the image to generate. |
| `output_format` | string | No | `"png"` | jpeg,png,webp | The format of the generated image. |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |

---

## Nano Banana Pro | Edit

**Slug:** `nano-banana-pro-edit`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt for image editing. |
| `image_urls` | array | Yes | — | — | The URLs of the images to use for image-to-image generation or image editing. |
| `aspect_ratio` | string | No | `"1:1"` | auto,21:9,16:9,3:2,4:3,5:4,1:1,4:5,3:4,2:3,9:16 | The aspect ratio of the generated image. |
| `resolution` | string | No | `"1K"` | 1K,2K,4K | The resolution of the image to generate. |
| `output_format` | string | No | `"png"` | jpeg,png,webp | The format of the generated image. |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |
| `limit_generations` | boolean | No | `"false"` | — | Experimental parameter to limit the number of generations from each round of prompting to 1. Set to True to to disreg... |

---

## Reve | Fast | Remix

**Slug:** `reve-fast-remix`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text description of the desired image. May include XML img tags like <img>0</img> to refer to specific images by ... |
| `image_urls` | array | Yes | — | — | List of URLs of reference images. Must provide between 1 and 4 images (inclusive). Each image must be less than 1.5 M... |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,3:2,2:3,4:3,3:4,1:1 | The desired aspect ratio of the generated image. If not provided, will be smartly chosen by the model. |
| `num_images` | integer | No | `"1"` | — | Number of images to generate |
| `output_format` | string | No | `"png"` | png,jpeg,webp | Output format for the generated image. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |

---

## Reve |  Fast | Edit

**Slug:** `reve-fast-edit`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text description of how to edit the provided image. |
| `image_url` | string | Yes | — | — | URL of the reference image to edit. Must be publicly accessible or base64 data URI. Supports PNG, JPEG, WebP, AVIF, a... |
| `num_images` | integer | No | `"1"` | — | Number of images to generate |
| `output_format` | string | No | `"png"` | png,jpeg,webp | Output format for the generated image. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |

---

## Flux Vision Upscaler

**Slug:** `flux-vision-upscaler`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | The URL of the image to upscale. |
| `upscale_factor` | number | No | `"2"` | — | The upscale factor (1-4x). |
| `seed` | string | No | — | — | The seed to use for the upscale. If not provided, a random seed will be used. |
| `creativity` | number | No | `"0.3"` | — | The creativity of the model. The higher the creativity, the more the model will deviate from the original. Refers to ... |
| `guidance` | number | No | `"1"` | — | CFG/guidance scale (0-20). Controls how closely the model follows the guidance. |
| `steps` | integer | No | `"20"` | — | Number of inference steps (4-50). |
| `enable_safety_checker` | boolean | No | `"True"` | — | Whether to enable the safety checker. |

---

## Chrono Edit

**Slug:** `chrono-edit`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | The image to edit. |
| `prompt` | string | Yes | — | — | The prompt to edit the image. |
| `enable_prompt_expansion` | boolean | No | `"True"` | — | Whether to enable prompt expansion. |
| `enable_temporal_reasoning` | boolean | No | `"False"` | — | Whether to enable temporal reasoning. |
| `enable_safety_checker` | boolean | No | `"True"` | — | Whether to enable the safety checker. |
| `num_inference_steps` | integer | No | `"8"` | — | The number of inference steps to perform. |
| `num_temporal_reasoning_steps` | integer | No | `"8"` | — | The number of temporal reasoning steps to perform. |
| `seed` | integer | No | — | — | The seed for the inference. |
| `output_format` | string | No | `"jpeg"` | jpeg,png,webp | The format of the output image. |
| `sync_mode` | boolean | No | `"False"` | — | Whether to return the image in sync mode. |

---

## Topaz | Image Upscale

**Slug:** `topaz-upscale-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `model` | string | No | `"Standard V2"` | Low Resolution V2,Standard V2,CGI,High Fidelity V2,Text Refine,Recovery,Redef... | Model to use for image enhancement. |
| `upscale_factor` | number | No | `"2"` | — | Factor to upscale the video by (e.g. 2.0 doubles width and height) |
| `crop_to_fill` | boolean | No | `"False"` | — | — |
| `image_url` | string | Yes | — | — | Url of the image to be upscaled |
| `output_format` | string | No | `"jpeg"` | jpeg,png | Output format of the upscaled image. |
| `subject_detection` | string | No | `"All"` | All,Foreground,Background | Subject detection mode for the image enhancement. |
| `face_enhancement` | boolean | No | `"True"` | — | Whether to apply face enhancement to the image. |
| `face_enhancement_creativity` | number | No | `"0"` | — | Creativity level for face enhancement. 0.0 means no creativity, 1.0 means maximum creativity. Ignored if face ehnance... |
| `face_enhancement_strength` | number | No | `"0.8"` | — | Strength of the face enhancement. 0.0 means no enhancement, 1.0 means maximum enhancement. Ignored if face ehnancemen... |

---

## Qwen | Image Edit Plus

**Slug:** `qwen-image-edit-plus`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate the image with |
| `image_urls` | array | Yes | — | — | The URLs of the images to edit. |
| `num_inference_steps` | integer | No | `"50"` | — | The number of inference steps to perform. |
| `image_size` | string | No | `"square_hd"` | square_hd, square, portrait_4_3, portrait_16_9, landscape_4_3, landscape_16_9 | The size of the generated image. |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `seed` | integer | No | — | — | The same seed and the same prompt given to the same version of the model will output the same image every time. |
| `guidance_scale` | number | No | `"4"` | — | The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt when lo... |
| `sync_mode` | boolean | No | `"False"` | — | If set to true, the function will wait for the image to be generated and uploaded before returning the response. This... |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `output_format` | string | No | `"png"` | jpeg,png | The format of the generated image. |
| `negative_prompt` | string | No | ` ` | — | The negative prompt for the generation |
| `acceleration` | string | No | `"regular"` | none, regular | Acceleration level for image generation. Options: 'none', 'regular'. Higher acceleration increases speed. 'regular' b... |

---

## Reve | Remix

**Slug:** `reve-remix`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text description of the desired image. May include XML img tags like <img>0</img> to refer to specific images by ... |
| `aspect_ratio` | string | No | `"16:9"` | 16:9,9:16,3:2,2:3,4:3,3:4,1:1 | The desired aspect ratio of the generated image. If not provided, will be smartly chosen by the model. |
| `image_urls` | array | Yes | — | — | List of URLs of reference images. Must provide between 1 and 4 images (inclusive). Each image must be less than 1.5 M... |
| `num_images` | integer | No | `"1"` | — | Number of images to generate |
| `output_format` | string | No | `"png"` | png,jpeg,webp | Output format for the generated image. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |

---

## Reve | Edit

**Slug:** `reve-edit`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text description of how to edit the provided image. |
| `image_url` | string | Yes | — | — | URL of the reference image to edit. Must be publicly accessible or base64 data URI. Supports PNG, JPEG, WebP, AVIF, a... |
| `num_images` | integer | No | `"1"` | — | Number of images to generate |
| `output_format` | string | Yes | `"png"` | png,jpeg,webp | Output format for the generated image. |
| `sync_mode` | boolean | No | `"False"` | — | If `True`, the media will be returned as a data URI and the output data won't be available in the request history. |

---

## Dream Omni 2 | Edit

**Slug:** `dreamomni2-edit`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_urls` | array | Yes | — | — | You can use only with to 2 images. |
| `prompt` | string | Yes | — | — | The prompt to edit the image. |

---

## Luma Photon | Reframe Image

**Slug:** `luma-photon-reframe-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | URL of the input image to reframe |
| `aspect_ratio` | string | Yes | `"16:9"` | 1:1,16:9,9:16,4:3,3:4,21:9,9:21 | The aspect ratio of the reframed image |
| `prompt` | string | No | — | — | Optional prompt for reframing |
| `grid_position_x` | integer | No | — | — | X position of the grid for reframing |
| `grid_position_y` | integer | No | — | — | Y position of the grid for reframing |
| `x_end` | integer | No | — | — | End X coordinate for reframing |
| `x_start` | integer | No | — | — | Start X coordinate for reframing |
| `y_end` | integer | No | — | — | End Y coordinate for reframing |
| `y_start` | integer | No | — | — | Start Y coordinate for reframing |

---

## Luma Photon | Flash | Reframe Image

**Slug:** `luma-photon-flash-reframe-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | URL of the input image to reframe |
| `aspect_ratio` | string | Yes | `"16:9"` | 1:1,16:9,9:16,4:3,3:4,21:9,9:21 | The aspect ratio of the reframed image |
| `prompt` | string | No | — | — | Optional prompt for reframing |
| `grid_position_x` | integer | No | — | — | X position of the grid for reframing |
| `grid_position_y` | integer | No | — | — | Y position of the grid for reframing |
| `x_end` | integer | No | — | — | End X coordinate for reframing |
| `x_start` | integer | No | — | — | Start X coordinate for reframing |
| `y_end` | integer | No | — | — | End Y coordinate for reframing |
| `y_start` | integer | No | — | — | Start Y coordinate for reframing |

---

## Flux Kontext Dev

**Slug:** `flux-kontext-dev`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to edit the image. |
| `image_url` | string | Yes | — | — | The URL of the image to edit. |
| `num_inference_steps` | integer | No | `"28"` | — | The number of inference steps to perform. |
| `seed` | string | No | — | — | The same seed and the same prompt given to the same version of the model will output the same image every time. |
| `guidance_scale` | number | No | `"2.5"` | — | The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt when lo... |
| `sync_mode` | boolean | No | `"False"` | — | If set to true, the function will wait for the image to be generated and uploaded before returning the response. This... |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `output_format` | string | No | `"jpeg"` | jpeg,png | Output format |
| `acceleration` | string | No | `"none"` | none,regular,high | The speed of the generation. The higher the speed, the faster the generation. |
| `enhance_prompt` | boolean | No | `"False"` | — | Whether to enhance the prompt for better results. |
| `resolution_mode` | string | No | `"match_input"` | auto,match_input,1:1,16:9,21:9,3:2,2:3,4:5,5:4,3:4,4:3,9:16,9:21 | Determines how the output resolution is set for image editing. auto: The model selects an optimal resolution from a p... |

---

## Salih Girgin Fog Effect | Image to Image

**Slug:** `salih-girgin-fog-effect-image-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image` | string | Yes | — | — | — |

---

## Wan | 2.5 | Preview | Image to Image

**Slug:** `wan-2-5-preview-image-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt describing how to edit the image. Max 2000 characters. |
| `image_urls` | array | Yes | — | — | URLs of images to edit. For single-image editing, provide 1 URL. For multi-reference generation, provide up to 2 URLs... |
| `negative_prompt` | string | No | — | — | Negative prompt to describe content to avoid. Max 500 characters. |
| `image_size` | string | No | `"square_hd"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the generated image. Width and height must be between 384 and 5000 pixels. |
| `num_images` | integer | No | `"1"` | — | Number of images to generate. Values from 1 to 4. |
| `seed` | integer | No | — | — | Random seed for reproducibility. If None, a random seed is chosen. |

---

## Higgsfield AI Soul

**Slug:** `higgsfield-ai-soul`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `aspect_ratio` | string | Yes | — | 1152x2048,2048x1152,2048x1536,1536x2048,1344x2016,2016x1344,960x1696,1536x153... | — |
| `style_id` | string | No | — | {"b3c8075a-cb4c-42de-b8b3-7099dd2df672":{"title":"Creatures","image":"https:/... | — |
| `style_strength` | number | No | — | — | — |
| `quality` | string | No | `"720p"` | 720p,1080p | — |
| `seed` | integer | No | — | — | — |
| `custom_reference_id` | string | No | — | — | — |
| `image_url` | string | No | — | — | — |
| `custom_reference_strength` | number | No | — | — | — |
| `batch_size` | integer | No | `"1"` | 1,4 | — |

---

## Qwen Image Edit

**Slug:** `qwen-ai-image-edit`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate the image with |
| `image_url` | string | Yes | — | — | The URL of the image to edit. |
| `num_inference_steps` | integer | No | `"30"` | — | The number of inference steps to perform. |
| `image_size` | string | No | — | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the generated image. |
| `seed` | integer | No | — | — | The same seed and the same prompt given to the same version of the model will output the same image every time. |
| `guidance_scale` | number | No | `"4"` | — | The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt when lo... |
| `sync_mode` | boolean | No | `"False"` | — | If set to true, the function will wait for the image to be generated and uploaded before returning the response. This... |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `output_format` | string | No | `"png"` | jpeg,png | The format of the generated image. |
| `negative_prompt` | string | No | ` ` | — | The negative prompt for the generation |
| `acceleration` | string | No | `"regular"` | none,regular,high | Acceleration level for image generation. Options: 'none', 'regular'. Higher acceleration increases speed. 'regular' b... |

---

## Tencent | Flux | Srpo | Image to Image

**Slug:** `tencent-flux-srpo-image-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | The URL of the image to generate an image from. |
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `num_inference_steps` | integer | No | `"40"` | — | The number of inference steps to perform. |
| `strength` | number | No | `"0.95"` | — | The strength of the initial image. Higher strength values are better for this model. |
| `seed` | string | No | — | — | The same seed and the same prompt given to the same version of the model will output the same image every time. |
| `guidance_scale` | number | No | `"4.5"` | — | The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt when lo... |
| `sync_mode` | boolean | No | `"False"` | — | If set to true, the function will wait for the image to be generated and uploaded before returning the response. This... |
| `num_images` | integer | No | — | — | The number of images to generate. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `output_format` | string | No | `"jpeg"` | jpeg,png | The format of the generated image. |
| `acceleration` | string | No | `"none"` | none,regular,high | The speed of the generation. The higher the speed, the faster the generation. |

---

## Tencent | Flux 1 | Srpo | Image to Image

**Slug:** `tencent-flux-1-srpo-image-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | The URL of the image to generate an image from. |
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `num_inference_steps` | integer | No | `"40"` | — | The number of inference steps to perform. |
| `strength` | number | No | `"0.95"` | — | The strength of the initial image. Higher strength values are better for this model. |
| `seed` | string | No | — | — | The same seed and the same prompt given to the same version of the model will output the same image every time. |
| `guidance_scale` | number | No | `"4.5"` | — | The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt when lo... |
| `sync_mode` | boolean | No | `"False"` | — | If set to true, the function will wait for the image to be generated and uploaded before returning the response. This... |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `output_format` | string | No | `"jpeg"` | jpeg,png | The format of the generated image. |
| `acceleration` | string | No | `"regular"` | none,regular,high | The speed of the generation. The higher the speed, the faster the generation. |

---

## Seedream V4 | Edit

**Slug:** `seedream-v4-edit`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The text prompt used to edit the image |
| `image_size` | string | No | `"square_hd"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9,auto... | The size of the generated image. Width and height must be between 512 and 4096. |
| `num_images` | integer | No | `"1"` | — | Number of times to retry generation with the prompt. |
| `seed` | integer | No | — | — | Random seed to control the stochasticity of image generation. |
| `sync_mode` | boolean | No | `"False"` | — | If set to true, the function will wait for the image to be generated and uploaded before returning the response. This... |
| `image_urls` | array | Yes | — | — | List of URLs of input images for editing. |
| `enable_safety_checker` | boolean | No | `"true"` | — | If set to true, the safety checker will be enabled. |

---

## Flux Krea | Image to Image

**Slug:** `flux-krea-image-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | The URL of the image to generate an image from. |
| `strength` | number | No | `"0.95"` | — | The strength of the initial image. Higher strength values are better for this model. |
| `num_inference_steps` | integer | No | `"40"` | — | The number of inference steps to perform. |
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `seed` | string | No | — | — | The same seed and the same prompt given to the same version of the model will output the same image every time. |
| `guidance_scale` | number | No | `"4.5"` | — | The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt when lo... |
| `sync_mode` | boolean | No | `"False"` | — | If set to true, the function will wait for the image to be generated and uploaded before returning the response. This... |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `output_format` | string | No | `"jpeg"` | jpeg,png | The format of the generated image. |
| `acceleration` | string | No | `"none"` | none,regular,high | The speed of the generation. The higher the speed, the faster the generation. |

---

## Flux Krea | Lora | Image to Image

**Slug:** `flux-krea-lora-image-to-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate an image from. |
| `image_url` | string | Yes | — | — | URL of image to use for inpainting. or img2img |
| `loras` | array | No | — | — | The LoRAs to use for the image generation. You can use any number of LoRAs and they will be merged together to genera... |
| `image_size` | string | No | `"square"` | square_hd,square,portrait_4_3,portrait_16_9,landscape_4_3,landscape_16_9 | The size of the generated image. |
| `num_inference_steps` | integer | No | `"28"` | — | The number of inference steps to perform. |
| `guidance_scale` | number | No | `"3.5"` | — | The CFG (Classifier Free Guidance) scale is a measure of how close you want the model to stick to your prompt when lo... |
| `sync_mode` | boolean | No | `"False"` | — | If set to true, the function will wait for the image to be generated and uploaded before returning the response. This... |
| `num_images` | integer | No | `"1"` | — | The number of images to generate. This is always set to 1 for streaming output. |
| `enable_safety_checker` | boolean | No | `"True"` | — | If set to true, the safety checker will be enabled. |
| `output_format` | string | No | `"jpeg"` | jpeg,png | The format of the generated image. |
| `strength` | number | No | `"0.85"` | — | The strength to use for inpainting/image-to-image. Only used if the image_url is provided. 1.0 is completely remakes ... |
| `seed` | integer | No | — | — | The same seed and the same prompt given to the same version of the model will output the same image every time. |

---

## Bria | Product Shot

**Slug:** `bria-product-shot`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | The URL of the product shot to be placed in a lifestyle shot. If both image_url and image_file are provided, image_ur... |
| `scene_description` | string | No | — | — | Text description of the new scene or background for the provided product shot. Bria currently supports prompts in Eng... |
| `ref_image_url` | string | No | — | — | The URL of the reference image to be used for generating the new scene or background for the product shot. Use "" to ... |
| `optimize_description` | boolean | No | `"True"` | — | Whether to optimize the scene description |
| `num_results` | integer | No | `"1"` | — | The number of lifestyle product shots you would like to generate. You will get num_results x 10 results when placemen... |
| `fast` | boolean | No | `"True"` | — | Whether to use the fast model |
| `placement_type` | string | No | `"manual_placement"` | original, automatic, manual_placement, manual_padding | This parameter allows you to control the positioning of the product in the image. Choosing 'original' will preserve t... |
| `original_quality` | boolean | No | `"False"` | — | This flag is only relevant when placement_type=original. If true, the output image retains the original input image's... |
| `shot_size` | array | No | `"[1000, 1000]"` | — | The desired size of the final product shot. For optimal results, the total number of pixels should be around 1,000,00... |
| `manual_placement_selection` | string | No | `"bottom_center"` | upper_left,upper_right,bottom_left,bottom_right,right_center,left_center,uppe... | If you've selected placement_type=manual_placement, you should use this parameter to specify which placements/positio... |
| `padding_values` | string | No | — | — | The desired padding in pixels around the product, when using placement_type=manual_padding. The order of the values i... |
| `sync_mode` | boolean | No | `"False"` | — | If set to true, the function will wait for the image to be generated and uploaded before returning the response. This... |

---

## Kling 1.5 | Kolors Virtual Try On

**Slug:** `kling-v1-5-kolors-virtual-try-on`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `human_image_url` | string | Yes | — | — | Url for the human image. |
| `garment_image_url` | string | Yes | — | — | Url to the garment image. |

---

## Remove Background Enhance

**Slug:** `rembg-enhance`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image` | string | No | — | — | Input image |

---

## Ideogram | Character

**Slug:** `ideogram-character`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for image generation |
| `rendering_speed` | string | No | `"Default"` | Default,Turbo,Quality | An enumeration. |
| `character_reference_image` | string | Yes | — | — | An image to use as a character reference. |
| `style_type` | string | No | `"Auto"` | Auto,Fiction,Realistic | An enumeration. |
| `aspect_ratio` | string | No | `"1:1"` | 1:3,3:1,1:2,2:1,9:16,16:9,10:16,16:10,2:3,3:2,3:4,4:3,4:5,5:4,1:1 | An enumeration. |
| `resolution` | string | No | `"None"` | None,512x1536,576x1408,576x1472,576x1536,640x1344,640x1408,640x1472,640x1536,... | An enumeration. |
| `magic_prompt_option` | string | No | `"Auto"` | Auto,On,Off | An enumeration. |
| `image` | string | No | — | — | An image file to use for inpainting. You must also use a mask. |
| `mask` | string | No | — | — | A black and white image. Black pixels are inpainted, white pixels are preserved. The mask will be resized to match th... |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation |

---

## Post Proccessing | Vignette

**Slug:** `post-processing-vignette`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | URL of image to process |
| `vignette_strength` | number | No | `"0.5"` | — | Vignette strength |

---

## Post Proccessing | Solarize

**Slug:** `post-processing-solarize`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | URL of image to process |
| `solarize_threshold` | number | No | `"0.5"` | — | Solarize threshold |

---

## Post Proccessing | Sharpen

**Slug:** `post-processing-sharpen`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | URL of image to process |
| `sharpen_mode` | string | No | `"basic"` | basic,smart,cas | Type of sharpening to apply |
| `sharpen_radius` | integer | No | `"1"` | — | Sharpen radius (for basic mode) |
| `sharpen_alpha` | number | No | `"1"` | — | Sharpen strength (for basic mode) |
| `noise_radius` | integer | No | `"7"` | — | Noise radius for smart sharpen |
| `preserve_edges` | number | No | `"0.75"` | — | Edge preservation factor |
| `smart_sharpen_strength` | number | No | `"5"` | — | Smart sharpen strength |
| `smart_sharpen_ratio` | number | No | `"0.5"` | — | Smart sharpen blend ratio |
| `cas_amount` | number | No | `"0.8"` | — | CAS sharpening amount |

---

## Post Proccessing | Parabolize

**Slug:** `post-processing-parabolize`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | URL of image to process |
| `parabolize_coeff` | number | No | `"1"` | — | Parabolize coefficient |
| `vertex_x` | number | No | `"0.5"` | — | Vertex X position |
| `vertex_y` | number | No | `"0.5"` | — | Vertex Y position |

---

## Post Proccessing | Grain

**Slug:** `post-processing-grain`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | URL of image to process |
| `grain_intensity` | number | No | `"0.4"` | — | Film grain intensity |
| `grain_scale` | number | No | `"10"` | — | Film grain scale |
| `grain_style` | string | No | `"modern"` | modern,analog,kodak,fuji,cinematic,newspaper | Style of film grain to apply |

---

## Post Proccessing | Dodge Burn

**Slug:** `post-processing-dodge-burn`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | URL of image to process |
| `dodge_burn_intensity` | number | No | `"0.5"` | — | Dodge and burn intensity |
| `dodge_burn_mode` | string | No | `"dodge"` | dodge,burn,dodge_and_burn,burn_and_dodge,linear_dodge,linear_burn | Dodge and burn mode |

---

## Post Proccessing | Desaturate

**Slug:** `post-processing-desaturate`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | URL of image to process |
| `desaturate_factor` | number | No | `"1"` | — | Desaturation factor |
| `desaturate_method` | string | No | `"luminance (Rec.709)"` | luminance (Rec.709),luminance (Rec.601),average,lightness | Desaturation method |

---

## Post Proccessing | Color Tint

**Slug:** `post-processing-color-tint`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | URL of image to process |
| `tint_strength` | number | No | `"1"` | — | Tint strength |
| `tint_mode` | string | No | `"vintage"` | sepia,red,green,blue,cyan,magenta,yellow,purple,orange,warm,cool,lime,navy,vi... | Tint color mode |

---

## Post Proccessing | Color Correction

**Slug:** `post-processing-color-correction`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | URL of image to process |
| `temperature` | number | No | `"0"` | — | Color temperature adjustment |
| `brightness` | number | No | `"0"` | — | Brightness adjustment |
| `contrast` | number | No | `"0"` | — | Contrast adjustment |
| `saturation` | number | No | `"0"` | — | Saturation adjustment |
| `gamma` | number | No | `"1"` | — | Gamma adjustment |

---

## Post Processing | Chromatic Abberation

**Slug:** `post-processing-chromatic-aberration`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | URL of image to process |
| `red_shift` | integer | No | `"0"` | — | Red channel shift amount |
| `red_direction` | string | No | `"horizontal"` | horizontal,vertical | Red channel shift direction |
| `green_shift` | integer | No | `"0"` | — | Green channel shift amount |
| `green_direction` | string | No | `"horizontal"` | horizontal,vertical | Green channel shift direction |
| `blue_shift` | integer | No | `"0"` | — | Blue channel shift amount |
| `blue_direction` | string | No | `"horizontal"` | horizontal,vertical | Blue channel shift direction |

---

## Post Processing | Blur

**Slug:** `post-processing-blur`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | URL of image to process |
| `blur_type` | string | No | `"gaussian"` | gaussian,kuwahara | Type of blur to apply |
| `blur_radius` | integer | No | `"3"` | — | Blur radius |
| `blur_sigma` | number | No | `"1"` | — | Sigma for Gaussian blur |

---

## AI Face Aesthetics

**Slug:** `ai-face-aesthetics`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | Upload your face image |
| `shape_type` | string | Yes | `"slim_face"` | cheekbone,cut_face,slim_face,long_face,chin_shortening,chin_lengthening,slim_... | Select the shape type |
| `strength` | number | Yes | `"0.5"` | — | Choose the strength that you want to apply to the face. |

---

## Post Proccessing | Combine

**Slug:** `post-processing`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | URL of image to process |
| `enable_grain` | boolean | No | `"False"` | — | Enable film grain effect |
| `grain_intensity` | number | No | `"0.4"` | — | Film grain intensity (when enabled) |
| `grain_scale` | number | No | `"10"` | — | Film grain scale (when enabled) |
| `grain_style` | string | No | `"modern"` | modern,analog,kodak,fuji,cinematic,newspaper | Style of film grain to apply |
| `enable_color_correction` | boolean | No | `"False"` | — | Enable color correction |
| `temperature` | number | No | `"0"` | — | Color temperature adjustment |
| `brightness` | number | No | `"0"` | — | Brightness adjustment |
| `contrast` | number | No | `"0"` | — | Contrast adjustment |
| `saturation` | number | No | `"0"` | — | Saturation adjustment |
| `gamma` | number | No | `"1"` | — | Gamma adjustment |
| `enable_chromatic` | boolean | No | `"False"` | — | Enable chromatic aberration |
| `red_shift` | integer | No | `"0"` | — | Red channel shift amount |
| `red_direction` | string | No | `"horizontal"` | horizontal,vertical | Red channel shift direction |
| `green_shift` | integer | No | `"0"` | — | Green channel shift amount |
| `green_direction` | string | No | `"horizontal"` | horizontal,vertical | Green channel shift direction |
| `blue_shift` | integer | No | `"0"` | — | Blue channel shift amount |
| `blue_direction` | string | No | `"horizontal"` | horizontal,vertical | Blue channel shift direction |
| `enable_blur` | boolean | No | `"False"` | — | Enable blur effect |
| `blur_type` | string | No | `"gaussian"` | gaussian,kuwahara | Type of blur to apply |
| `blur_radius` | integer | No | `"3"` | — | Blur radius |
| `blur_sigma` | number | No | `"1"` | — | Sigma for Gaussian blur |
| `enable_vignette` | boolean | No | `"False"` | — | Enable vignette effect |
| `vignette_strength` | number | No | `"0.5"` | — | Vignette strength (when enabled) |
| `enable_parabolize` | boolean | No | `"False"` | — | Enable parabolize effect |
| `parabolize_coeff` | number | No | `"1"` | — | Parabolize coefficient |
| `vertex_x` | number | No | `"0.5"` | — | Vertex X position |
| `vertex_y` | number | No | `"0.5"` | — | Vertex Y position |
| `enable_tint` | boolean | No | `"False"` | — | Enable color tint effect |
| `tint_strength` | number | No | `"1"` | — | Tint strength |
| `tint_mode` | string | No | `"sepia"` | sepia,red,green,blue,cyan,magenta,yellow,purple,orange,warm,cool,lime,navy,vi... | Tint color mode |
| `enable_dissolve` | boolean | No | `"False"` | — | Enable dissolve effect |
| `dissolve_image_url` | string | No | — | — | URL of second image for dissolve |
| `dissolve_factor` | number | No | `"0.5"` | — | Dissolve blend factor |
| `enable_dodge_burn` | boolean | No | `"False"` | — | Enable dodge and burn effect |
| `dodge_burn_intensity` | number | No | `"0.5"` | — | Dodge and burn intensity |
| `dodge_burn_mode` | string | No | `"dodge"` | dodge,burn,dodge_and_burn,burn_and_dodge,color_dodge,color_burn,linear_dodge,... | Dodge and burn mode |
| `enable_glow` | boolean | No | `"False"` | — | Enable glow effect |
| `glow_intensity` | number | No | `"1"` | — | Glow intensity |
| `glow_radius` | integer | No | `"5"` | — | Glow blur radius |
| `enable_sharpen` | boolean | No | `"False"` | — | Enable sharpen effect |
| `sharpen_mode` | string | No | `"basic"` | basic,smart,cas | Type of sharpening to apply |
| `sharpen_radius` | integer | No | `"1"` | — | Sharpen radius (for basic mode) |
| `sharpen_alpha` | number | No | `"1"` | — | Sharpen strength (for basic mode) |
| `noise_radius` | integer | No | `"7"` | — | Noise radius for smart sharpen |
| `preserve_edges` | number | No | `"0.75"` | — | Edge preservation factor |
| `smart_sharpen_strength` | number | No | `"5"` | — | Smart sharpen strength |
| `smart_sharpen_ratio` | number | No | `"0.5"` | — | Smart sharpen blend ratio |
| `cas_amount` | number | No | `"0.8"` | — | CAS sharpening amount |
| `enable_solarize` | boolean | No | `"False"` | — | Enable solarize effect |
| `solarize_threshold` | number | No | `"0.5"` | — | Solarize threshold |
| `enable_desaturate` | boolean | No | `"False"` | — | Enable desaturation effect |
| `desaturate_factor` | number | No | `"1"` | — | Desaturation factor |
| `desaturate_method` | string | No | `"luminance (Rec.709)"` | luminance (Rec.709),luminance (Rec.601),average,lightness | Desaturation method |

---

## Nano Banana | Edit

**Slug:** `nano-banana-edit`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `image_urls` | array | Yes | — | — | — |
| `num_images` | integer | No | `"1"` | — | — |
| `aspect_ratio` | string | No | `"1:1"` | 21:9,1:1,4:3,3:2,2:3,5:4,4:5,3:4,16:9,9:16,auto | Aspect ratio for generated images. |
| `sync_mode` | boolean | No | — | — | If True, the media will be returned as a data URI and the output data won't be available in the request history. |
| `output_format` | string | No | `"jpeg"` | jpeg,png | Output format for the images |
| `limit_generations` | boolean | No | `"True"` | — | Experimental parameter to limit the number of generations from each round of prompting to 1. Set to True to to disreg... |

---

## Minimax | Subject Reference

**Slug:** `minimax-subject-reference`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Prompt |
| `image_url` | string | Yes | — | — | URL of the subject reference image to use for consistent character appearance |
| `aspect_ratio` | string | No | `"1:1"` | 1:1,16:9,4:3,3:2,2:3,3:4,9:16,21:9 | — |
| `prompt_optimizer` | boolean | No | `"false"` | — | Controls whether to enable automatic prompt optimization. |
| `num_images` | integer | No | `"1"` | — | Controls the number of images generated per single request. |

---

## Luma Dream Machine | Reframe Image

**Slug:** `reframe-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image` | string | Yes | — | — | The image to reframe |
| `aspect_ratio` | string | No | `"16:9"` | 1:1,3:4,4:3,9:16,16:9,9:21,21:9 | An enumeration. |
| `prompt` | string | No | — | — | A prompt to guide the reframing generation |
| `model` | string | No | `"photon-flash-1"` | photon-flash-1,photon-1 | An enumeration. |
| `grid_position_x` | integer | No | — | — | The x position of the input in the grid, in pixels. Controls horizontal positioning of the source within the target o... |
| `grid_position_y` | integer | No | — | — | The y position of the input in the grid, in pixels. Controls vertical positioning of the source within the target out... |
| `x_start` | integer | No | — | — | The x start of the crop bounds, in pixels. Defines the left boundary where your source will be placed in the output f... |
| `x_end` | integer | No | — | — | The x end of the crop bounds, in pixels. Defines the right boundary where your source will be placed in the output fr... |
| `y_start` | integer | No | — | — | The y start of the crop bounds, in pixels. Defines the top boundary where your source will be placed in the output fr... |
| `y_end` | integer | No | — | — | The y end of the crop bounds, in pixels. Defines the bottom boundary where your source will be placed in the output f... |
| `image_url` | string | No | — | — | URL of the image to reframe |

---

## CCSR Upscaler

**Slug:** `ccsr`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | — |
| `scale` | number | No | `"2"` | — | — |
| `tile_diffusion` | string | No | `"none"` | none,mix,gaussian | — |
| `tile_diffusion_size` | integer | No | `"1024"` | — | — |
| `tile_diffusion_stride` | integer | No | — | — | — |
| `tile_vae` | boolean | No | — | — | — |
| `tile_vae_decoder_size` | integer | No | `"226"` | — | — |
| `tile_vae_encoder_size` | integer | No | `"1024"` | — | — |
| `steps` | integer | No | `"50"` | — | Higher the number the better the quality and longer it will take to generate |
| `t_max` | number | No | `"0.6667"` | — | — |
| `t_min` | number | No | `"0.3333"` | — | — |
| `color_fix_type` | string | No | `"adain"` | none,wavelet,adain | — |
| `seed` | integer | No | — | — | — |

---

## Image Generation

**Slug:** `image-generation`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Image prompt |
| `image_url_1` | string | Yes | — | — | Image Url |
| `image_size` | string | No | `"1024x1024"` | 1024x1024,1536x1024,1024x1536 | — |
| `image_url_2` | string | No | — | — | — |
| `image_url_3` | string | No | — | — | — |
| `image_url_4` | string | No | — | — | — |

---

## SeedEdit 3.0 | Image Edit

**Slug:** `seededit-3-0`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for image generation |
| `image` | string | Yes | — | — | Input image to edit |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation |
| `guidance_scale` | number | No | `"5.5"` | — | Prompt adherence. Higher = more literal. |

---

## Couple Image Generation V2

**Slug:** `couple-image-generation-v2`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `image_1` | string | Yes | — | — | Person 1 Image |
| `image_2` | string | Yes | — | — | Person 2 Image |
| `aspect_ratio` | string | No | `"1:1"` | 1:1,16:9,9:16,4:3,3:4,3:2,2:3,4:5,5:4,21:9,9:21,2:1,1:2 | — |

---

## Hairstyle Changer

**Slug:** `change-haircut`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `input_image` | string | Yes | — | — | Image of the person's haircut you want to edit. Must be jpeg, png or webp. |
| `haircut` | string | No | `"No change"` | No change,Random,Straight,Wavy,Curly,Bob,Pixie Cut,Layered,Messy Bun,High Pon... | An enumeration. |
| `hair_color` | string | No | `"No change"` | No change,Random,Blonde,Brunette,Black,Dark Brown,Medium Brown,Light Brown,Au... | An enumeration. |
| `gender` | string | No | `"none"` | none,male,female | An enumeration. |
| `aspect_ratio` | string | No | `"1:1"` | 1:1,16:9,9:16,4:3,3:4,3:2,2:3,4:5,5:4,21:9,9:21,2:1,1:2 | An enumeration. |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation |
| `output_format` | string | No | `"png"` | jpg,png | An enumeration. |
| `safety_tolerance` | integer | No | `"2"` | — | Safety tolerance, 0 is most strict and 2 is most permissive. 2 is currently the maximum allowed. |

---

## Flux.1 Kontext Dev Lora

**Slug:** `flux-kontext-dev-lora`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `lora_weight` | number | No | `"1"` | — | — |
| `lora_path` | string | No | — | — | HuggingFace repo ID or platform identifier for the LoRA weights. |
| `enable_safety_checker` | boolean | No | `"false"` | — | — |
| `seed` | integer | No | — | — | — |
| `prompt` | string | Yes | — | — | — |
| `image_url` | string | Yes | — | — | — |

---

## Baby Generator

**Slug:** `baby-generator`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `mother_image` | string | Yes | — | — | Mother Image |
| `father_image` | string | Yes | — | — | Father Image |
| `gender` | string | Yes | `"girl"` | girl,boy | Gender |
| `aspect_ratio` | string | No | `"1:1"` | 1:1,16:9,9:16,4:3,3:4,3:2,2:3,4:5,5:4,21:9,9:21,2:1,1:2 | An enumeration. |

---

## Runway | Gen4 | Image

**Slug:** `runway-gen4-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `reference_image_1` | string | No | — | — | — |
| `reference_image_2` | string | No | — | — | — |
| `reference_image_3` | string | No | — | — | — |
| `aspect_ratio` | string | Yes | `"1024:1024"` | 1920:1080,1080:1920,1024:1024,1360:768,1080:1080,1168:880,1440:1080,1080:1440... | — |
| `public_figure_moderation` | string | No | `"auto"` | auto,low | — |
| `seed` | integer | No | — | — | — |

---

## Product Shoot

**Slug:** `product-shoot`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `input_image_1` | string | Yes | — | — | First input image. Must be jpeg, png, gif, or webp. |
| `input_image_2` | string | Yes | — | — | Second input image. Must be jpeg, png, gif, or webp. |
| `aspect_ratio` | string | No | `"match_input_image"` | match_input_image,1:1,16:9,9:16,4:3,3:4,3:2,2:3,4:5,5:4,21:9,9:21,2:1,1:2 | — |

---

## Flux Kontext | Max | Multi Image

**Slug:** `multi-image-kontext-max`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text description of how to combine or transform the two input images |
| `input_image_1` | string | Yes | — | — | First input image. Must be jpeg, png, gif, or webp. |
| `input_image_2` | string | Yes | — | — | Second input image. Must be jpeg, png, gif, or webp. |
| `aspect_ratio` | string | No | `"match_input_image"` | match_input_image,1:1,16:9,9:16,4:3,3:4,3:2,2:3,4:5,5:4,21:9,9:21,2:1,1:2 | An enumeration. |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation |
| `output_format` | string | No | `"png"` | jpg,png | An enumeration. |
| `safety_tolerance` | integer | No | `"2"` | — | Safety tolerance, 0 is most strict and 2 is most permissive. 2 is currently the maximum allowed. |

---

## Flux Kontext | Pro | Multi Image

**Slug:** `multi-image-kontext-pro`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text description of how to combine or transform the two input images |
| `input_image_1` | string | Yes | — | — | First input image. Must be jpeg, png, gif, or webp. |
| `input_image_2` | string | Yes | — | — | Second input image. Must be jpeg, png, gif, or webp. |
| `aspect_ratio` | string | No | `"match_input_image"` | match_input_image,1:1,16:9,9:16,4:3,3:4,3:2,2:3,4:5,5:4,21:9,9:21,2:1,1:2 | An enumeration. |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation |
| `output_format` | string | No | `"png"` | jpg,png | An enumeration. |
| `safety_tolerance` | integer | No | `"2"` | — | Safety tolerance, 0 is most strict and 2 is most permissive. 2 is currently the maximum allowed. |

---

## Flux Multi Image Kontext

**Slug:** `multi-image-kontext`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text description of how to combine or transform the two input images |
| `input_image_1` | string | Yes | — | — | First input image. Must be jpeg, png, gif, or webp. |
| `input_image_2` | string | Yes | — | — | Second input image. Must be jpeg, png, gif, or webp. |
| `input_image_3` | string | No | — | — | — |
| `input_image_4` | string | No | — | — | — |
| `aspect_ratio` | string | No | `"match_input_image"` | match_input_image,1:1,16:9,9:16,4:3,3:4,3:2,2:3,4:5,5:4,21:9,9:21,2:1,1:2 | An enumeration. |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation |
| `safety_tolerance` | integer | No | `"6"` | — | — |

---

## Flux.1 Kontext | Max

**Slug:** `flux-kontext-max`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `safety_tolerance` | integer | No | `"6"` | — | — |
| `prompt` | string | Yes | — | — | Text description of what you want to generate, or the instruction on how to edit the given image. |
| `input_image` | string | No | — | — | Image to use as reference. Must be jpeg, png, gif, or webp. |
| `aspect_ratio` | string | No | `"match_input_image"` | match_input_image,1:1,16:9,9:16,4:3,3:4,3:2,2:3,4:5,5:4,21:9,9:21,2:1,1:2 | An enumeration. |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation |

---

## Flux.1 Kontext | Pro

**Slug:** `flux-kontext-pro`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `safety_tolerance` | integer | No | `"6"` | — | — |
| `prompt` | string | Yes | — | — | Text description of what you want to generate, or the instruction on how to edit the given image. |
| `input_image` | string | No | — | — | Image to use as reference. Must be jpeg, png, gif, or webp. |
| `aspect_ratio` | string | No | `"match_input_image"` | match_input_image,1:1,16:9,9:16,4:3,3:4,3:2,2:3,4:5,5:4,21:9,9:21,2:1,1:2 | An enumeration. |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation min:1 max:1000000000000000000 |

---

## Eachlabs Image Upscaler | Pro | v1

**Slug:** `eachlabs-image-upscaler-pro-v1`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | — |
| `upscale_factor` | integer | Yes | `"2"` | — | — |
| `output_format` | string | Yes | `"PNG"` | JPG,PNG,WEBP | — |

---

## Eachlabs Background Remover v1

**Slug:** `eachlabs-bg-remover-v1`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | — |

---

## Eachlabs Garden Design v1

**Slug:** `eachlabs-garden-design-v1`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | — |
| `garden_style` | string | Yes | `"modern"` | modern,city,contemporary,luxury,apartment,small,vegetable,low_budget,beach,we... | — |
| `garden_type` | string | Yes | `"backyard"` | backyard,patio,terrace,front_yard,garden,courtyard,pool_area,porch,playground | — |
| `mode` | string | Yes | `"beautiful_design"` | beautiful_design,creative_design | — |

---

## GPT-1 | Image Edit

**Slug:** `openai-image-edit`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `image_url_1` | string | Yes | — | — | — |
| `mask_url` | string | No | — | — | — |
| `image_url_2` | string | No | — | — | — |
| `image_url_3` | string | No | — | — | — |
| `number_of_images` | integer | No | `"1"` | — | — |
| `quality` | string | No | `"auto"` | auto,high,medium,low | — |
| `background` | string | No | `"auto"` | auto,transparent,opaque | — |
| `image_size` | string | No | `"auto"` | auto,1024x1024,1536x1024,1024x1536 | — |
| `image_url_4` | string | No | — | — | — |
| `image_url_5` | string | No | — | — | — |
| `image_url_6` | string | No | — | — | — |
| `image_url_7` | string | No | — | — | — |
| `image_url_8` | string | No | — | — | — |
| `image_url_9` | string | No | — | — | — |
| `image_url_10` | string | No | — | — | — |
| `image_url_11` | string | No | — | — | — |
| `image_url_12` | string | No | — | — | — |
| `image_url_13` | string | No | — | — | — |
| `image_url_14` | string | No | — | — | — |
| `image_url_15` | string | No | — | — | — |
| `image_url_16` | string | No | — | — | — |

---

## Eachlabs Image Generation

**Slug:** `eachlabs-image-generation`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | — |
| `image_url_1` | string | No | — | — | — |
| `aspect_ratio` | string | No | — | 1:1,2:3,3:2 | — |
| `image_url_2` | string | No | — | — | — |
| `image_url_3` | string | No | — | — | — |
| `image_url_4` | string | No | — | — | — |
| `image_url_5` | string | No | — | — | — |
| `image_url_6` | string | No | — | — | — |
| `image_url_7` | string | No | — | — | — |
| `image_url_8` | string | No | — | — | — |
| `image_url_9` | string | No | — | — | — |
| `image_url_10` | string | No | — | — | — |

---

## Action Figure Generator

**Slug:** `action-figure-generator`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `style_slug` | string | Yes | `"digital-nomad"` | doom-scroller,airport-nomad,main-character-energy,therapy-warrior,digital-nom... | — |
| `image_url_1` | string | Yes | — | — | — |
| `aspect_ratio` | string | No | — | 1:1,2:3,3:2 | — |

---

## Custom Image Generation v2

**Slug:** `custom-image-generation-v2`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `aspect_ratio` | string | No | — | 1:1,2:3,3:2 | — |
| `image_url_2` | string | No | — | — | — |
| `image_url_1` | string | Yes | — | — | — |
| `style_slug` | string | Yes | `"ghibli-anime"` | ghibli-anime,vintage-cartoon,simpsons,disney-animation,chibi-art,pixar-3d,fun... | — |
| `image_url_3` | string | No | — | — | — |
| `image_url_4` | string | No | — | — | — |
| `image_url_5` | string | No | — | — | — |
| `image_url_6` | string | No | — | — | — |
| `image_url_7` | string | No | — | — | — |
| `image_url_8` | string | No | — | — | — |
| `image_url_9` | string | No | — | — | — |
| `image_url_10` | string | No | — | — | — |
| `prompt` | string | No | — | — | Text prompt for image generation |

---

## Style Changer by ByteDance

**Slug:** `bytedance`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `style` | string | Yes | `"anime_style"` | 3d,realistic_style,angel,anime_style,japanese_comics,princess_style,dreamy,in... | — |
| `image_url` | string | Yes | — | — | — |

---

## Recraft Clarity Upscale

**Slug:** `recraft-clarity-upscale`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image` | string | Yes | — | — | Image to upscale |

---

## Eachlabs Face Swap

**Slug:** `each-faceswap-v1`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `source_image` | string | Yes | — | — | The image containing the face to be swapped. |
| `target_image_gif_or_video` | string | Yes | — | — | The image where the swapped face will be placed. |

---

## Flux Depth Pro

**Slug:** `flux-depth-pro`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for image generation |
| `control_image` | string | Yes | — | — | Image to use as control input. Must be jpeg, png, gif, or webp. |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation |
| `steps` | integer | No | `"50"` | — | Number of diffusion steps. Higher values yield finer details but increase processing time. |
| `prompt_upsampling` | boolean | No | — | — | Automatically modify the prompt for more creative generation |
| `guidance` | number | No | `"10"` | — | Controls the balance between adherence to the text as well as image prompt and image quality/diversity. Higher values... |
| `safety_tolerance` | integer | No | `"2"` | — | Safety tolerance, 1 is most strict and 6 is most permissive |
| `output_format` | string | No | `"jpg"` | jpg,png | An enumeration. |

---

## Flux Depth Dev

**Slug:** `flux-depth-dev`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Prompt for generated image |
| `control_image` | string | Yes | — | — | Image used to control the generation. The depth map will be automatically generated. |
| `num_outputs` | integer | No | `"1"` | — | Number of outputs to generate |
| `num_inference_steps` | integer | No | `"28"` | — | Number of denoising steps. Recommended range is 28-50, and lower number of steps produce lower quality outputs, faster. |
| `guidance` | number | No | `"10"` | — | Guidance for generated image |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation |
| `output_format` | string | No | `"webp"` | webp,jpg,png | An enumeration. |
| `output_quality` | integer | No | `"80"` | — | Quality when saving the output images, from 0 to 100. 100 is best quality, 0 is lowest quality. Not relevant for .png... |
| `disable_safety_checker` | boolean | No | — | — | Disable safety checker for generated images. |
| `megapixels` | string | No | `"1"` | 1,0.25 | An enumeration. |

---

## Flux Redux Schnell

**Slug:** `flux-redux-schnell`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `redux_image` | string | Yes | — | — | Input image to condition your output on. This replaces prompt for FLUX.1 Redux models |
| `aspect_ratio` | string | No | `"1:1"` | 1:1,16:9,21:9,3:2,2:3,4:5,5:4,3:4,4:3,9:16,9:21 | An enumeration. |
| `num_outputs` | integer | No | `"1"` | — | Number of outputs to generate |
| `num_inference_steps` | integer | No | `"4"` | — | Number of denoising steps. 4 is recommended, and lower number of steps produce lower quality outputs, faster. |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation |
| `output_format` | string | No | `"webp"` | webp,jpg,png | An enumeration. |
| `output_quality` | integer | No | `"80"` | — | Quality when saving the output images, from 0 to 100. 100 is best quality, 0 is lowest quality. Not relevant for .png... |
| `disable_safety_checker` | boolean | No | — | — | Disable safety checker for generated images. |
| `megapixels` | string | No | `"1"` | 1,0.25 | An enumeration. |

---

## Flux Canny Pro

**Slug:** `flux-canny-pro`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for image generation |
| `control_image` | string | Yes | — | — | Image to use as control input. Must be jpeg, png, or webp. |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation |
| `steps` | integer | No | `"50"` | — | Number of diffusion steps. Higher values yield finer details but increase processing time. |
| `prompt_upsampling` | boolean | No | — | — | Automatically modify the prompt for more creative generation |
| `guidance` | number | No | `"30"` | — | Controls the balance between adherence to the text as well as image prompt and image quality/diversity. Higher values... |
| `safety_tolerance` | integer | No | `"2"` | — | Safety tolerance, 1 is most strict and 6 is most permissive |
| `output_format` | string | No | `"jpg"` | jpg,png | An enumeration. |

---

## Flux Redux Dev

**Slug:** `flux-redux-dev`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `redux_image` | string | Yes | — | — | Input image to condition your output on. This replaces prompt for FLUX.1 Redux models |
| `aspect_ratio` | string | No | `"1:1"` | 1:1,16:9,21:9,3:2,2:3,4:5,5:4,3:4,4:3,9:16,9:21 | An enumeration. |
| `num_outputs` | integer | No | `"1"` | — | Number of outputs to generate |
| `num_inference_steps` | integer | No | `"28"` | — | Number of denoising steps. Recommended range is 28-50 |
| `guidance` | number | No | `"3"` | — | Guidance for generated image |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation |
| `output_format` | string | No | `"webp"` | webp,jpg,png | An enumeration. |
| `output_quality` | integer | No | `"80"` | — | Quality when saving the output images, from 0 to 100. 100 is best quality, 0 is lowest quality. Not relevant for .png... |
| `disable_safety_checker` | boolean | No | — | — | Disable safety checker for generated images. |
| `megapixels` | string | No | `"1"` | 1,0.25 | An enumeration. |

---

## Flux Fill Pro

**Slug:** `flux-fill-pro`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Text prompt for image generation |
| `image` | string | Yes | — | — | The image to inpaint. Can contain an alpha mask. |
| `mask` | string | Yes | — | — | A black-and-white image that describes the part of the image to inpaint. Black areas will be preserved while white ar... |
| `seed` | integer | No | — | — | Random seed. Set for reproducible generation |
| `steps` | integer | No | `"50"` | — | Number of diffusion steps. Higher values yield finer details but increase processing time. |
| `prompt_upsampling` | boolean | No | — | — | Automatically modify the prompt for more creative generation |
| `guidance` | number | No | `"3"` | — | Controls the balance between adherence to the text prompt and image quality/diversity. Higher values make the output ... |
| `safety_tolerance` | integer | No | `"2"` | — | Safety tolerance, 1 is most strict and 6 is most permissive |
| `output_format` | string | No | `"jpg"` | jpg,png | An enumeration. |

---

## Omni Zero

**Slug:** `omni-zero`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `seed` | integer | No | `"42"` | — | Random seed for the model |
| `model` | string | No | `"omni-zero"` | omni-zero,omni-zero-realism | An enumeration. |
| `prompt` | string | No | `"A person"` | — | Prompt for the model |
| `negative_prompt` | string | No | `"blurry, out of focus"` | — | Negative prompt for the model |
| `guidance_scale` | number | No | `"3"` | — | Guidance scale for the model |
| `number_of_images` | integer | No | `"1"` | — | Number of images to generate |
| `number_of_steps` | integer | No | `"10"` | — | Number of steps for the model |
| `image` | string | No | — | — | Base image for the model |
| `image_strength` | number | No | `"0.15"` | — | Base image strength for the model |
| `composition_image` | string | No | — | — | Composition image for the model |
| `composition_strength` | number | No | `"1"` | — | Composition image strength for the model |
| `style_image` | string | Yes | — | — | Style image for the model |
| `style_strength` | number | No | `"1"` | — | Style image strength for the model |
| `identity_image` | string | Yes | — | — | Identity image for the model |
| `identity_strength` | number | No | `"1"` | — | Identity image strength for the model |
| `depth_image` | string | No | — | — | Depth image for the model |
| `depth_strength` | number | No | `"0.5"` | — | Depth image strength for the model, if not supplied the composition image will be used for depth |

---

## Stable Diffusion Inpainting

**Slug:** `stable-diffusion-inpainting`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | No | `"a vision of paradise. unreal engine"` | — | Input prompt |
| `image` | string | Yes | — | — | Initial image to generate variations of. Will be resized to height x width |
| `mask` | string | Yes | — | — | Black and white image to use as mask for inpainting over the image provided. White pixels are inpainted and black pix... |
| `num_outputs` | integer | No | `"1"` | — | Number of images to generate. |
| `height` | integer | No | `"512"` | 64,128,192,256,320,384,448,512,576,640,704,768,832,896,960,1024 | An enumeration. |
| `width` | integer | No | `"512"` | 64,128,192,256,320,384,448,512,576,640,704,768,832,896,960,1024 | An enumeration. |
| `negative_prompt` | string | No | — | — | Specify things to not see in the output |
| `num_inference_steps` | integer | No | `"50"` | — | Number of denoising steps |
| `guidance_scale` | number | No | `"7.5"` | — | Scale for classifier-free guidance |
| `scheduler` | string | No | `"DPMSolverMultistep"` | DDIM,K_EULER,DPMSolverMultistep,K_EULER_ANCESTRAL,PNDM,KLMS | An enumeration. |
| `seed` | integer | No | — | — | Random seed. Leave blank to randomize the seed |
| `disable_safety_checker` | boolean | No | — | — | Disable safety checker for generated images. This feature is only available through the API. See [https://replicate.c... |

---

## SDXL Controlnet

**Slug:** `sdxl-controlnet`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image` | string | Yes | — | — | Input image for img2img or inpaint mode |
| `prompt` | string | Yes | `"aerial view, a futuristic research complex in a bright foggy jungle, hard lighting"` | — | Input prompt |
| `negative_prompt` | string | No | `"low quality, bad quality, sketches"` | — | Input Negative Prompt |
| `num_inference_steps` | integer | No | `"50"` | — | Number of denoising steps |
| `condition_scale` | number | No | `"0.5"` | — | controlnet conditioning scale for generalization |
| `seed` | integer | No | `"0"` | — | Random seed. Set to 0 to randomize the seed |

---

## Illusion Diffusion

**Slug:** `illusion-diffusion-hq`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to guide QR Code generation. |
| `qr_code_content` | string | No | — | — | The website/content your QR Code will point to. |
| `negative_prompt` | string | No | `"ugly, disfigured, low quality, blurry, nsfw"` | — | The negative prompt to guide image generation. |
| `num_inference_steps` | integer | No | `"40"` | — | Number of diffusion steps |
| `guidance_scale` | number | No | `"7.5"` | — | Scale for classifier-free guidance |
| `seed` | integer | No | `"-1"` | — | Seed |
| `width` | integer | No | `"768"` | — | Width out the output image |
| `height` | integer | No | `"768"` | — | Height out the output image |
| `num_outputs` | integer | No | `"1"` | — | Number of outputs |
| `image` | string | No | — | — | Input image. If none is provided, a QR code will be generated |
| `controlnet_conditioning_scale` | number | No | `"1"` | — | The outputs of the controlnet are multiplied by `controlnet_conditioning_scale` before they are added to the residual... |
| `border` | integer | No | `"1"` | — | QR code border size |
| `qrcode_background` | string | No | `"gray"` | gray,white | An enumeration. |

---

## Image Upscaler by Each AI

**Slug:** `each-upscaler`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image` | string | Yes | — | — | input image |
| `prompt` | string | No | `"masterpiece, best quality, highres, <lora:more_details:0.5> <lora:SDXLrender_v2.0:1>"` | — | Prompt |
| `negative_prompt` | string | No | `"(worst quality, low quality, normal quality:2) JuggernautNegative-neg"` | — | Negative Prompt |
| `scale_factor` | number | No | `"2"` | — | Scale factor |
| `dynamic` | number | No | `"6"` | — | HDR, try from 3 - 9 |
| `creativity` | number | No | `"0.35"` | — | Creativity, try from 0.3 - 0.9 |
| `resemblance` | number | No | `"0.6"` | — | Resemblance, try from 0.3 - 1.6 |
| `tiling_width` | integer | No | `"112"` | 16,32,48,64,80,96,112,128,144,160,176,192,208,224,240,256 | An enumeration. |
| `tiling_height` | integer | No | `"144"` | 16,32,48,64,80,96,112,128,144,160,176,192,208,224,240,256 | An enumeration. |
| `sd_model` | string | No | `"juggernaut_reborn.safetensors [338b85bc4f]"` | epicrealism_naturalSinRC1VAE.safetensors [84d76a0328],juggernaut_reborn.safet... | An enumeration. |
| `scheduler` | string | No | `"DPM++ 3M SDE Karras"` | DPM++ 2M Karras,DPM++ SDE Karras,DPM++ 2M SDE Exponential,DPM++ 2M SDE Karras... | An enumeration. |
| `num_inference_steps` | integer | No | `"18"` | — | Number of denoising steps |
| `seed` | integer | No | `"1337"` | — | Random seed. Leave blank to randomize the seed |
| `downscaling` | boolean | No | — | — | Downscale the image before upscaling. Can improve quality and speed for images with high resolution but lower quality |
| `downscaling_resolution` | integer | No | `"768"` | — | Downscaling resolution |
| `lora_links` | string | No | — | — | Link to a lora file you want to use in your upscaling. Multiple links possible, seperated by comma |
| `custom_sd_model` | string | No | — | — | — |
| `sharpen` | number | No | `"0"` | — | Sharpen the image after upscaling. The higher the value, the more sharpening is applied. 0 for no sharpening |
| `mask` | string | No | — | — | Mask image to mark areas that should be preserved during upscaling |
| `handfix` | string | No | `"disabled"` | disabled,hands_only,image_and_hands | An enumeration. |
| `pattern` | boolean | No | — | — | Upscale a pattern with seamless tiling |
| `output_format` | string | No | `"png"` | webp,jpg,png | An enumeration. |

---

## Flux Controlnet

**Slug:** `flux-dev-controlnet`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | No | — | — | — |
| `negative_prompt` | string | No | — | — | Things you do not want to see in your image |
| `guidance_scale` | number | No | `"3.5"` | — | Guidance scale |
| `steps` | integer | No | `"28"` | — | Number of steps |
| `control_type` | string | No | `"depth"` | canny,soft_edge,depth | An enumeration. |
| `control_strength` | number | No | `"0.5"` | — | Strength of control net. Different controls work better with different strengths. Canny works best with 0.5, soft edg... |
| `control_image` | string | Yes | — | — | Image to use with control net |
| `image_to_image_strength` | number | No | `"0"` | — | Strength of image to image control. 0 means none of the control image is used. 1 means the control image is returned ... |
| `depth_preprocessor` | string | No | `"DepthAnything"` | Midas,Zoe,DepthAnything,Zoe-DepthAnything | An enumeration. |
| `soft_edge_preprocessor` | string | No | `"HED"` | HED,TEED,PiDiNet | An enumeration. |
| `lora_url` | string | No | — | — | Optional LoRA model to use. Provide a HuggingFace, Replicate, or CivitAI model identifier. |
| `lora_strength` | number | No | `"1"` | — | Strength of LoRA model |
| `return_preprocessed_image` | boolean | No | — | — | Return the preprocessed image used to control the generation process. Useful for debugging. |
| `output_format` | string | No | `"webp"` | webp,jpg,png | An enumeration. |
| `output_quality` | integer | No | `"80"` | — | Quality of the output images, from 0 to 100. 100 is best quality, 0 is lowest quality. |
| `seed` | integer | No | — | — | Set a seed for reproducibility. Random by default. |

---

## Realisitic Vision V3 Inpainting

**Slug:** `realisitic-vision-v3-inpainting`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image` | string | Yes | — | — | Input image |
| `prompt` | string | No | `"RAW photo, a portrait photo of Katie Read in casual clothes, natural skin, 8k uhd, high quality, film grain, Fujifilm XT3"` | — | — |
| `mask` | string | Yes | — | — | Mask image |
| `negative_prompt` | string | No | `"(deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime:1.4), text, close up, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck"` | — | — |
| `strength` | number | No | `"0.8"` | — | strength/weight |
| `steps` | integer | No | `"20"` | — | num_inference_steps |
| `num_outputs` | integer | No | `"1"` | — | Number of images to create |
| `guaidance_scale` | number | No | `"7.5"` | — | Higher guidance scale encourages to generate images that are closely linked to the text prompt |

---

## Cartoonify Cartoon Generator

**Slug:** `cartoonify`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image` | string | Yes | — | — | Input image |
| `seed` | integer | No | — | — | Random seed. Leave blank to randomize |

---

## Flux Img-to-Img

**Slug:** `flux-trained`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `main_face_image` | string | Yes | — | — | Upload an ID image for face generation |
| `prompt` | string | No | `"portrait, color, cinematic"` | — | Enter a text prompt to guide image generation |
| `negative_prompt` | string | No | `"bad quality, worst quality, text, signature, watermark, extra limbs, low resolution, partially rendered objects, deformed or partially rendered eyes, deformed, deformed eyeballs, cross-eyed, blurry"` | — | Enter a negative prompt to specify what to avoid in the image |
| `width` | integer | No | `"896"` | — | Set the width of the generated image (256-1536 pixels) |
| `height` | integer | No | `"1152"` | — | Set the height of the generated image (256-1536 pixels) |
| `num_steps` | integer | No | `"20"` | — | Set the number of denoising steps (1-20) |
| `start_step` | integer | No | `"1"` | — | Set the timestep to start inserting ID (0-4 recommended, 0 for highest fidelity, 4 for more editability) |
| `guidance_scale` | number | No | `"4"` | — | Set the guidance scale for text prompt influence (1.0-10.0) |
| `id_weight` | number | No | `"1"` | — | Set the weight of the ID image influence (0.0-3.0) |
| `seed` | integer | No | — | — | Set a random seed for generation (leave blank or -1 for random) |
| `true_cfg` | number | No | `"1"` | — | Set the Classifier-Free Guidance (CFG) scale. 1.0 uses standard CFG, while values >1.0 enable True CFG for more preci... |
| `max_sequence_length` | integer | No | `"128"` | — | Set the max sequence length for prompt (T5), smaller is faster (128-512) |
| `output_format` | string | No | `"webp"` | png,webp | An enumeration. |
| `output_quality` | integer | No | `"80"` | — | Set the quality of the output image for jpg and webp (1-100) |
| `num_outputs` | integer | No | `"1"` | — | Set the number of images to generate (1-4) |

---

## Real Esrgan - Face Enhancer

**Slug:** `real-esrgan`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image` | string | Yes | — | — | Input image |
| `scale` | number | No | `"4"` | — | Factor to scale image by |
| `face_enhance` | boolean | No | — | — | Run GFPGAN face enhancement along with upscaling |

---

## Face Enhancer Fast

**Slug:** `real-esrgan-a100`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image` | string | Yes | — | — | Input image |
| `scale` | number | No | `"4"` | — | Factor to scale image by |
| `face_enhance` | boolean | No | — | — | Run GFPGAN face enhancement along with upscaling |

---

## Image Merger

**Slug:** `image-merger`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_1` | string | Yes | — | — | — |
| `image_1_strength` | number | No | `"1"` | — | The strength of the first image |
| `image_2` | string | Yes | — | — | — |
| `image_2_strength` | number | No | `"1"` | — | The strength of the second image |
| `merge_mode` | string | No | `"full"` | full,left_right,top_bottom | An enumeration. |
| `prompt` | string | No | `"a photo"` | — | A prompt to guide the image merging |
| `negative_prompt` | string | No | `"ugly, broken, distorted"` | — | Things you do not want in the merged image |
| `width` | integer | No | `"768"` | — | — |
| `height` | integer | No | `"768"` | — | — |
| `steps` | integer | No | `"20"` | — | — |
| `control_image` | string | No | — | — | An optional image to use with control net to influence the merging |
| `seed` | integer | No | — | — | Fix the random seed for reproducibility |
| `upscale_2x` | boolean | No | — | — | — |
| `upscale_steps` | integer | No | `"20"` | — | The number of steps per controlnet tile |
| `animate` | boolean | No | — | — | Animate merging from one image to the other. Only the video is returned. |
| `animate_frames` | integer | No | `"24"` | — | The number of frames to generate for the animation |
| `return_temp_files` | boolean | No | — | — | Return any temporary files, such as preprocessed controlnet images. Useful for debugging. |

---

## Image to Become

**Slug:** `become-image`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image` | string | Yes | — | — | An image of a person to be converted |
| `image_to_become` | string | Yes | — | — | Any image to convert the person to |
| `prompt` | string | No | `"a person"` | — | — |
| `negative_prompt` | string | No | — | — | Things you do not want in the image |
| `number_of_images` | integer | No | `"2"` | — | Number of images to generate |
| `denoising_strength` | number | No | `"1"` | — | How much of the original image of the person to keep. 1 is the complete destruction of the original image, 0 is the o... |
| `prompt_strength` | number | No | `"2"` | — | Strength of the prompt. This is the CFG scale, higher numbers lead to stronger prompt, lower numbers will keep more o... |
| `disable_safety_checker` | boolean | No | `"true"` | — | Disable safety checker for generated images |
| `control_depth_strength` | number | No | `"0.8"` | — | Strength of depth controlnet. The bigger this is, the more controlnet affects the output. |
| `instant_id_strength` | number | No | `"1"` | — | How strong the InstantID will be. |
| `image_to_become_strength` | number | No | `"0.75"` | — | How strong the style will be applied |
| `image_to_become_noise` | number | No | `"0.3"` | — | How much noise to add to the style image before processing. An alternative way of controlling stength. |
| `seed` | integer | No | — | — | Fix the random seed for reproducibility |

---

## Face Swap

**Slug:** `face-swap-new`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `input_image` | string | Yes | — | — | Target image |
| `swap_image` | string | Yes | — | — | Swap image |

---

## IDM VTON

**Slug:** `idm-vton`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `garm_img` | string | Yes | `"https://storage.googleapis.com/magicpoint/inputs/clothes-change-input-2.webp"` | — | Garment, should match the category, can be a product image or even a photo of someone |
| `garment_des` | string | No | — | — | Description of garment e.g. Short Sleeve Round Neck T-shirt |
| `human_img` | string | Yes | — | — | Model, if this is not 3:4 check crop |
| `mask_img` | string | No | — | — | Mask image, optional (but faster) |
| `category` | string | No | `"upper_body"` | upper_body,lover_body,dresses | An enumeration. |
| `crop` | boolean | No | `"true"` | — | A 'crop' is a trimming technique where unwanted outer areas of an image are removed, focusing on the most important p... |
| `force_dc` | boolean | No | — | — | Use the DressCode version of IDM-VTON (this is default false, except if category=dresses) |
| `mask_only` | boolean | No | — | — | Return only the mask |
| `steps` | integer | No | `"30"` | — | — |
| `seed` | integer | No | `"42"` | — | — |

---

## Editing Image Background

**Slug:** `realistic-background`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image` | string | Yes | — | — | Image to replace background |
| `prompt` | string | No | `"RAW photo, 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3"` | — | prompt en |
| `negative_prompt` | string | No | `"(deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime, mutated hands and fingers:1.4), (deformed, distorted, disfigured:1.3), poorly drawn, bad anatomy, wrong anatomy, extra limb, missing limb, floating limbs, disconnected limbs, mutation, mutated, ugly, disgusting, amputation"` | — | negative prompt |
| `sampler_name` | string | No | `"DPM++ SDE Karras"` | DPM++ 2M,DPM++ SDE,DPM++ 2M SDE,DPM++ 2M SDE Heun,DPM++ 2S a,DPM++ 3M SDE,Eul... | An enumeration. |
| `steps` | integer | No | `"20"` | — | steps |
| `cfg_scale` | integer | No | `"7"` | — | CFG scale, or classifier-free guidance scale, adjusts the strength of the guidance given to the model to generate hig... |
| `denoising_strength` | number | No | `"0.75"` | — | denoising strength |
| `max_width` | integer | No | `"1024"` | — | max width |
| `max_height` | integer | No | `"1024"` | — | max height |
| `only_masked_padding_pixels` | integer | No | `"4"` | — | only masked padding,pixels |
| `seed` | integer | No | `"1"` | — | seed |

---

## SDXL Ad Inpaint

**Slug:** `sdxl-ad-inpaint`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image` | string | Yes | — | — | An image can be used as input to influence or guide the model's output alongside text descriptions. |
| `product_fill` | string | No | `"Original"` | Original,80,70,60,50,40,30,20 | Product fill is about populating a product with relevant information or features based on AI input. |
| `prompt` | string | Yes | — | — | A prompt is the initial text or instruction given to the model to start generating a response. |
| `negative_prompt` | string | No | `"low quality, out of frame, illustration, 3d, sepia, painting, cartoons, sketch, watermark, text, Logo, advertisement"` | — | Negative prompts are used to specify what the AI should avoid including when generating text or images. |
| `img_size` | string | No | `"1024, 1024"` | [,',5,1,2,,, ,2,0,4,8,',,, ,',5,1,2,,, ,1,9,8,4,',,, ,',5,1,2,,, ,1,9,2,0,',,... | Image size determines the dimensions of the resulting generated images. |
| `scheduler` | string | No | `"K_EULER"` | DDIM,DPMSolverMultistep,HeunDiscrete,KarrasDPM,K_EULER_ANCESTRAL,K_EULER,PNDM | A scheduler manages the sequence and timing of tasks or steps in the model's processing. |
| `num_inference_steps` | integer | No | `"40"` | — | The number of inference steps refers to how many steps the model takes to generate a result, affecting quality and co... |
| `guidance_scale` | number | No | `"7.5"` | — | Guidance scale sets the influence of guidance on the AI's generation process to steer the output towards desired crit... |
| `condition_scale` | number | No | `"0.9"` | — | Condition scale adjusts the strength of conditions applied to the model's output to better match specific requirements. |
| `num_refine_steps` | integer | No | `"10"` | — | The number of refine steps represents additional passes the model makes to improve the result. |
| `apply_img` | boolean | No | `"True"` | — | Apply img refers to the process of using an image as part of the input to guide or influence the model's output. |
| `seed` | integer | No | — | — | A seed is a starting point for random number generation, ensuring repeatability of the AI's output if the same seed i... |

---

## GFPGAN

**Slug:** `gfpgan`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `img` | string | Yes | `"https://storage.googleapis.com/magicpoint/inputs/photo-enhancer-input.jpeg"` | — | Input |
| `version` | string | No | `"v1.4"` | v1.2,v1.3,v1.4,RestoreFormer | The version usually refers to the specific release or iteration of the GFPGAN model, indicating updates or improvemen... |
| `scale` | number | No | `"2"` | — | Rescaling factor |

---

## Photomaker

**Slug:** `photomaker-style`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `input_image` | string | Yes | — | — | The input image, for example a photo of your face. |
| `input_image2` | string | No | — | — | Additional input image (optional) |
| `input_image3` | string | No | — | — | Additional input image (optional) |
| `input_image4` | string | No | — | — | Additional input image (optional) |
| `prompt` | string | No | `"A photo of a person img"` | — | Prompt. Example: 'a photo of a man/woman img'. The phrase 'img' is the trigger word. |
| `style_name` | string | No | `"(No style)"` | (No style),Cinematic,Disney Charactor,Digital Art,Photographic (Default),Fant... | An enumeration. |
| `negative_prompt` | string | No | `"nsfw, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry"` | — | Negative Prompt. The negative prompt should NOT contain the trigger word. |
| `num_steps` | integer | No | `"20"` | — | Number of sample steps |
| `style_strength_ratio` | number | No | `"20"` | — | Style strength (%) |
| `num_outputs` | integer | No | `"1"` | — | Number of output images |
| `guidance_scale` | number | No | `"5"` | — | Guidance scale. A guidance scale of 1 corresponds to doing no classifier free guidance. |
| `seed` | integer | No | — | — | Seed. Leave blank to use a random number |
| `disable_safety_checker` | boolean | No | — | — | Disable safety checker for generated images. |

---

## Rembg - Remove Background

**Slug:** `rembg`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image` | string | Yes | — | — | The software is licensed under the Apache License 2.0, which allows users to freely use, distribute, and modify the s... |

---

## Face to Sticker

**Slug:** `face-to-sticker`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image` | string | Yes | — | — | The initial image provided for processing or transformation. |
| `prompt` | string | No | `"a person"` | — | The text input that guides the content or style of the generated image. |
| `negative_prompt` | string | No | — | — | Specifies aspects that should be avoided or minimized in the output. |
| `width` | integer | No | `"1024"` | — | Sets the width of the created image. |
| `height` | integer | No | `"1024"` | — | Sets the height of the created image. |
| `steps` | integer | No | `"20"` | — | Defines the number of processing steps for generating or transforming an image. |
| `seed` | integer | No | — | — | Sets the starting point for the generation process to ensure reproducible results. |
| `prompt_strength` | number | No | `"7"` | — | Adjusts how strongly the text prompt influences the final output. |
| `instant_id_strength` | number | No | `"1"` | — | Controls the intensity of instant adaptations to generate identity or style-specific features. |
| `ip_adapter_weight` | number | No | `"0.2"` | — | Affects how much influence an image-to-image transformation parameter has. |
| `ip_adapter_noise` | number | No | `"0.5"` | — | Controls the amount of noise added when adapting an image to another style or form. |
| `upscale` | boolean | No | — | — | Increases the resolution or size of an image. |
| `upscale_steps` | integer | No | `"10"` | — | Determines the number of steps taken to increase the resolution of an image. |

---

## SDXL-Lightning by ByteDance

**Slug:** `sdxl-lightning-4step`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | No | `"A superhero smiling"` | — | Initial text or instructions provided to guide the generation process. |
| `negative_prompt` | string | No | `"worst quality, low quality"` | — | Specifies words or phrases to exclude from generated content. |
| `width` | integer | No | `"1024"` | — | Sets the width of the generated image or content. |
| `height` | integer | No | `"1024"` | — | Sets the height of the generated image or content. |
| `num_outputs` | integer | No | `"1"` | — | Determines how many different outputs are generated. |
| `scheduler` | string | No | `"K_EULER"` | DDIM,DPMSolverMultistep,HeunDiscrete,KarrasDPM,K_EULER_ANCESTRAL,K_EULER,PNDM... | Manages the order and timing of processing tasks to improve efficiency. |
| `num_inference_steps` | integer | No | `"4"` | — | Specifies the number of processing steps taken to generate a more accurate output. |
| `guidance_scale` | number | No | `"0"` | — | Controls how much to follow the prompt versus generating creatively. |
| `seed` | integer | No | — | — | A starting point for random number generation, ensuring reproducible results. |
| `disable_safety_checker` | boolean | No | `"true"` | — | The disable_safety_checker input allows users to turn off the built-in safety mechanisms for potentially generating c... |

---

## Instant ID - Anime Generator

**Slug:** `instant-id-ip-adapter`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image` | string | Yes | — | — | An image of a person to be converted |
| `style` | string | No | `"3D"` | 3D,Emoji,Video game,Pixels,Clay,Toy | An enumeration. |
| `prompt` | string | No | `"a person"` | — | Text prompt for image generation |
| `negative_prompt` | string | No | — | — | Things you do not want in the image |
| `denoising_strength` | number | No | `"0.65"` | — | How much of the original image to keep. 1 is the complete destruction of the original image, 0 is the original image |
| `prompt_strength` | number | No | `"4.5"` | — | Strength of the prompt. This is the CFG scale, higher numbers lead to stronger prompt, lower numbers will keep more o... |
| `control_depth_strength` | number | No | `"0.8"` | — | Strength of depth controlnet. The bigger this is, the more controlnet affects the output. |
| `instant_id_strength` | number | No | `"1"` | — | How strong the InstantID will be. |
| `seed` | integer | No | — | — | Fix the random seed for reproducibility |
| `custom_lora_url` | string | No | — | — | — |
| `lora_scale` | number | No | `"1"` | — | How strong the LoRA will be |

---

## Instant ID Generate Avatar

**Slug:** `instant-id`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image` | string | Yes | — | — | Input face image |
| `pose_image` | string | No | — | — | (Optional) reference pose image |
| `prompt` | string | No | `"a person"` | — | Input prompt |
| `negative_prompt` | string | No | — | — | Input Negative Prompt |
| `num_inference_steps` | integer | No | `"4"` | — | Number of denoising steps |
| `sdxl_weights` | string | No | `"stable-diffusion-xl-base-1.0"` | stable-diffusion-xl-base-1.0,juggernaut-xl-v8,afrodite-xl-v2,albedobase-xl-20... | An enumeration. |
| `width` | integer | No | `"640"` | — | Width of output image |
| `height` | integer | No | `"640"` | — | Height of output image |
| `scheduler` | string | No | `"EulerDiscreteScheduler"` | DEISMultistepScheduler,HeunDiscreteScheduler,EulerDiscreteScheduler,DPMSolver... | An enumeration. |
| `guidance_scale` | number | No | `"7.5"` | — | Scale for classifier-free guidance |
| `ip_adapter_scale` | number | No | `"0.8"` | — | Scale for image adapter strength (for detail) |
| `controlnet_conditioning_scale` | number | No | `"0.8"` | — | Scale for IdentityNet strength (for fidelity) |
| `enable_pose_controlnet` | boolean | No | `"True"` | — | Enable Openpose ControlNet, overrides strength if set to false |
| `pose_strength` | number | No | `"0.4"` | — | Openpose ControlNet strength, effective only if `enable_pose_controlnet` is true |
| `enable_canny_controlnet` | boolean | No | — | — | Activates a specific control mechanism that uses edge detection to guide image generation. |
| `canny_strength` | number | No | `"0.3"` | — | Canny ControlNet strength, effective only if `enable_canny_controlnet` is true |
| `enable_depth_controlnet` | boolean | No | — | — | Enable Depth ControlNet, overrides strength if set to false |
| `depth_strength` | number | No | `"0.5"` | — | Depth ControlNet strength, effective only if `enable_depth_controlnet` is true |
| `enable_lcm` | boolean | No | — | — | Enable Fast Inference with LCM (Latent Consistency Models) - speeds up inference steps, trade-off is the quality of t... |
| `lcm_num_inference_steps` | integer | No | `"5"` | — | Only used when `enable_lcm` is set to True, Number of denoising steps when using LCM |
| `lcm_guidance_scale` | number | No | `"1.5"` | — | Only used when `enable_lcm` is set to True, Scale for classifier-free guidance when using LCM |
| `enhance_nonface_region` | boolean | No | `"True"` | — | Enhance non-face region |
| `seed` | integer | No | — | — | Random seed. Leave blank to randomize the seed |
| `disable_safety_checker` | boolean | No | — | — | Disable safety checker for generated images |

---

# Image To 3D

---

## Hunyuan 3D V2.1

**Slug:** `hunyuan-3d-v2-1`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `input_image_url` | string | Yes | — | — | URL of image to use while generating the 3D model. |
| `seed` | integer | No | — | — | The same seed and the same prompt given to the same version of the model will output the same image every time. |
| `num_inference_steps` | integer | No | `"50"` | — | Number of inference steps to perform. |
| `guidance_scale` | number | No | `"7.5"` | — | Guidance scale for the model. |
| `octree_resolution` | integer | No | `"256"` | — | Octree resolution for the model. |
| `textured_mesh` | boolean | No | `"false"` | — | If set true, textured mesh will be generated and the price charged would be 3 times that of white mesh. |

---

## Hunyuan 3D V2

**Slug:** `hunyuan-3d-v2`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `input_image_url` | string | Yes | — | — | URL of image to use while generating the 3D model. |
| `seed` | integer | No | — | — | The same seed and the same prompt given to the same version of the model will output the same image every time. |
| `num_inference_steps` | integer | No | `"50"` | — | Number of inference steps to perform |
| `guidance_scale` | number | No | `"7.5"` | — | Guidance scale for the model. |
| `octree_resolution` | integer | No | `"256"` | — | — |
| `textured_mesh` | boolean | No | `"false"` | — | If set true, textured mesh will be generated and the price charged would be 3 times that of white mesh. |

---

# Image To Text

---

## Gemini | 2.0 | Flash Lite

**Slug:** `gemini-2-0-flash-lite`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_urls` | array | Yes | — | — | — |
| `prompt` | string | Yes | — | — | — |

---

## NSFW Image Detection

**Slug:** `nsfw-image-detection`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image` | string | Yes | — | — | Input image |

---

## Face Analyzer by Eachlabs

**Slug:** `1019-face-analyzer`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_url` | string | Yes | — | — | It works with a photo of your face and provides information on age, race, and gender. To use a specific output, you c... |

---

## Blip 2

**Slug:** `blip-2`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image` | string | Yes | — | — | An image is a visual representation that the model can analyze to produce descriptive or contextual insights. |
| `caption` | boolean | No | — | — | Caption refers to a descriptive title or sentence that explains the content of an image. |
| `question` | string | No | — | — | A question seeks specific information, which the model aims to answer. |
| `context` | string | No | — | — | Context is the background information provided to help the model generate a more accurate response. |
| `use_nucleus_sampling` | boolean | No | — | — | Use_nucleus_sampling, or top-p sampling, is a method that selects words based on their combined probability, ensuring... |
| `temperature` | number | No | `"0.5"` | — | Temperature is a setting that influences how creative or conservative the model's output is; higher values make the o... |

---
