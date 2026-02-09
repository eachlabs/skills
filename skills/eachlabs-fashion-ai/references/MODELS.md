# Fashion AI Models Reference

Complete parameter reference for fashion and virtual try-on models. All models use version `0.0.1`.

## Nano Banana Pro - Photoshoot

**Slug:** `nano-banana-pro-photoshoot`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `person` | string | Yes | — | — | — |

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

## Kling 1.5 | Kolors Virtual Try On

**Slug:** `kling-v1-5-kolors-virtual-try-on`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `human_image_url` | string | Yes | — | — | Url for the human image. |
| `garment_image_url` | string | Yes | — | — | Url to the garment image. |

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

## Z Image | Trainer

**Slug:** `z-image-trainer`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image_data_url` | string | Yes | — | — | URL to zip archive with images of a consistent style. Try to use at least 10 images, although more is better. The zip... |
| `steps` | integer | No | `"1000"` | — | Total number of training steps. |
| `learning_rate` | number | No | `"0.0001"` | — | Learning rate applied to trainable parameters. |
| `default_caption` | string | No | — | — | Default caption to use when caption files are missing. If None, missing captions will cause an error. |
| `training_type` | string | No | `"balanced"` | content,style,balanced | Type of training to perform. Use 'content' to focus on the content of the images, 'style' to focus on the style of th... |

---

## Flux Lora | Portrait Trainer

**Slug:** `flux-lora-portrait-trainer`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `images_data_url` | string | Yes | — | — | Only a ZIP archive URL is accepted. The ZIP must contain at least 10 images of a consistent style (more is recommende... |
| `trigger_phrase` | string | No | — | — | Trigger phrase to be used in the captions. If None, a trigger word will not be used. If no captions are provide the t... |
| `steps` | integer | No | `"1000"` | — | Number of steps to train the LoRA on. |
| `multiresolution_training` | boolean | No | `"True"` | — | If True, multiresolution training will be used. |
| `subject_crop` | boolean | No | `"True"` | — | If True, the subject will be cropped from the image. |
| `data_archive_format` | string | No | — | — | The format of the archive. If not specified, the format will be inferred from the URL. |
| `resume_from_checkpoint` | string | No | — | — | URL to a checkpoint to resume training from. |
| `create_masks` | boolean | No | `"False"` | — | If True, masks will be created for the subject. |
| `learning_rate` | number | No | `"0.00009"` | — | Learning rate to use for training. |

---
