# Product Visuals Models Reference

Complete parameter reference for e-commerce and product photography models. All models use version `0.0.1`.

## Product Colors

**Slug:** `product-colors`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `product_image` | string | Yes | — | — | — |
| `aspect_ratio` | string | No | `"1:1"` | 21:9,1:1,4:3,3:2,2:3,5:4,4:5,3:4,16:9,9:16 | Aspect ratio for generated images. |

---

## Food Photos

**Slug:** `food-photos`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `food_image` | string | Yes | — | — | — |
| `aspect_ratio` | string | No | `"1:1"` | 21:9,1:1,4:3,3:2,2:3,5:4,4:5,3:4,16:9,9:16 | Aspect ratio for generated images. |

---

## Product Backround Remover

**Slug:** `product-backround-remover`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `product_image` | string | Yes | — | — | — |

---

## Product to Photoshoot

**Slug:** `product-to-photoshoot`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `product_photo` | string | Yes | — | — | — |
| `aspect_ratio` | string | No | `"1:1"` | 21:9,1:1,4:3,3:2,2:3,5:4,4:5,3:4,16:9,9:16 | — |

---

## Product Photo Upscaler

**Slug:** `product-photo-upscaler`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `product_image` | string | Yes | — | — | — |

---

## Product Home View

**Slug:** `product-home-view`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `home_product` | string | Yes | — | — | Home Product Image |
| `aspect_ratio` | string | No | `"1:1"` | 21:9,1:1,4:3,3:2,2:3,5:4,4:5,3:4,16:9,9:16 | — |

---

## Product Photo to Modelshoot

**Slug:** `product-photo-to-modelshoot`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `product` | string | Yes | — | — | Product image |
| `product_name` | string | Yes | — | — | Product name |
| `aspect_ratio` | string | No | `"1:1"` | 21:9,1:1,4:3,3:2,2:3,5:4,4:5,3:4,16:9,9:16 | — |
| `model_gender` | string | Yes | `"female"` | male,female | — |

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

## Remove Background Enhance

**Slug:** `rembg-enhance`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image` | string | No | — | — | Input image |

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

## Rembg - Remove Background

**Slug:** `rembg`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `image` | string | Yes | — | — | The software is licensed under the Apache License 2.0, which allows users to freely use, distribute, and modify the s... |

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
