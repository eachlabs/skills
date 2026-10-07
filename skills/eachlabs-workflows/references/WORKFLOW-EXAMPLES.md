# Workflow Examples

Eight complete workflows. Each one was created with `POST https://api.eachlabs.ai/v1/workflows` and run end to end.
Send a block below as the request body (see SKILL.md, Step 1), then trigger version `v1` with the listed inputs.
Replace the example input URLs with your own public files.

## 1. One-photo effect

Turn one photo into a finished clip. The prompt stays on Eachlabs, and a second model takes over if the first one fails.

```
photo ──▶ moonwalk (reference-to-video, fallback: image-to-video)
```

```json
{
  "name": "Moonwalk",
  "definition": {
    "input_schema": {
      "properties": {
        "photo": { "type": "image", "required": true }
      }
    },
    "steps": [
      {
        "id": "moonwalk",
        "type": "model",
        "model": "bytedance-seedance-2-0-reference-to-video-fast",
        "params": {
          "prompt": "The person from the reference image, in a white astronaut suit with the helmet visor up, takes slow bouncing steps on the Moon, plants a flag and waves at the camera. Earth rises behind them. Keep their face exactly as in the reference image.",
          "image_urls": ["$.inputs.photo"],
          "duration": "8",
          "resolution": "720p",
          "aspect_ratio": "9:16"
        },
        "fallback": {
          "enabled": true,
          "model": "kling-v3-pro-image-to-video",
          "params": {
            "prompt": "The person is now an astronaut on the Moon, helmet visor up. They wave at the camera as Earth rises behind them.",
            "start_image_url": "$.inputs.photo",
            "duration": "5"
          }
        }
      }
    ]
  }
}
```

Inputs: `{"photo": "https://example.com/selfie.jpg"}`

## 2. Restyle a photo, then animate it

Chain two models: edit the image, then pass the result to a video model.

```
photo ──▶ restyle (image edit) ──▶ animate (image-to-video)
```

```json
{
  "name": "Styled Photo to Video",
  "definition": {
    "input_schema": {
      "properties": {
        "photo": { "type": "image", "required": true },
        "style": { "type": "string", "required": false, "default_value": "a 1990s film photo with warm grain" }
      }
    },
    "steps": [
      {
        "id": "restyle",
        "type": "model",
        "model": "nano-banana-2-edit",
        "params": {
          "prompt": "Restyle this photo as $.inputs.style. Keep the person's face, identity and pose unchanged.",
          "image_urls": ["$.inputs.photo"],
          "aspect_ratio": "9:16"
        },
        "fallback": {
          "enabled": true,
          "model": "gpt-image-v2-edit",
          "params": {
            "prompt": "Restyle this photo as $.inputs.style. Keep the person's face, identity and pose unchanged.",
            "image_urls": ["$.inputs.photo"],
            "image_size": "1024x1536"
          }
        }
      },
      {
        "id": "animate",
        "type": "model",
        "model": "kling-v3-pro-image-to-video",
        "params": {
          "start_image_url": "$.restyle.primary",
          "prompt": "The person smiles and turns slightly toward the camera. Gentle handheld motion, natural light.",
          "duration": "5"
        }
      }
    ]
  }
}
```

Inputs: `{"photo": "https://example.com/portrait.jpg", "style": "a watercolor illustration"}`

`$.restyle.primary` is the edited image, from the fallback model if it ran. `style` is optional
because it has a default.

## 3. An LLM writes the prompt

A vision LLM looks at the product and writes the scene. The image and video models follow it.

```
person + product ──▶ write_scene (LLM) ──▶ photo (image edit) ──▶ video (image-to-video)
```

```json
{
  "name": "UGC Product Video",
  "definition": {
    "input_schema": {
      "properties": {
        "person": { "type": "image", "required": true },
        "product": { "type": "image", "required": true },
        "setting": { "type": "string", "required": false, "default_value": "a bright modern kitchen" }
      }
    },
    "steps": [
      {
        "id": "write_scene",
        "type": "model",
        "model": "eachlabs-llm-router",
        "params": {
          "model": "google/gemini-3.6-flash",
          "messages": [
            { "role": "system", "content": "You write prompts for photorealistic smartphone photos. Reply with one paragraph and nothing else." },
            {
              "role": "user",
              "content": [
                { "type": "text", "text": "Describe a natural photo of a person holding and using this product in $.inputs.setting. Describe the product by how it looks." },
                { "type": "image_url", "image_url": { "url": "$.inputs.product" } }
              ]
            }
          ]
        }
      },
      {
        "id": "photo",
        "type": "model",
        "model": "nano-banana-2-edit",
        "params": {
          "prompt": "Use the person from the first image and the product from the second image. $.write_scene.primary.choices[0].message.content",
          "image_urls": ["$.inputs.person", "$.inputs.product"],
          "aspect_ratio": "9:16"
        }
      },
      {
        "id": "video",
        "type": "model",
        "model": "kling-v3-pro-image-to-video",
        "params": {
          "start_image_url": "$.photo.primary",
          "prompt": "Handheld smartphone video. The person shows the product to the camera, smiles and uses it naturally.",
          "duration": "5",
          "generate_audio": true
        }
      }
    ]
  }
}
```

Inputs: `{"person": "https://example.com/creator.jpg", "product": "https://example.com/honey.png"}`

## 4. Two photos, one clip, with music

Prepare both photos at the same time, put both people in one video, then resize it and add music.

```
             ┌─ edit_a ─┐
photos ──▶ prepare      ├──▶ clip (reference-to-video) ──▶ resize ──▶ soundtrack
             └─ edit_b ─┘
```

```json
{
  "name": "Travel Buddies Clip",
  "definition": {
    "input_schema": {
      "properties": {
        "photo_a": { "type": "image", "required": true },
        "photo_b": { "type": "image", "required": true },
        "music": { "type": "voice", "required": true }
      }
    },
    "steps": [
      {
        "id": "prepare",
        "type": "parallel",
        "branches": [
          {
            "steps": [
              {
                "id": "edit_a",
                "type": "model",
                "model": "nano-banana-2-edit",
                "params": {
                  "prompt": "Full-body photo of this person as a traveler with a backpack in a sunny old-town street. Keep their face and identity.",
                  "image_urls": ["$.inputs.photo_a"],
                  "aspect_ratio": "9:16"
                }
              }
            ]
          },
          {
            "steps": [
              {
                "id": "edit_b",
                "type": "model",
                "model": "nano-banana-2-edit",
                "params": {
                  "prompt": "Full-body photo of this person as a traveler with a camera in a sunny old-town street. Keep their face and identity.",
                  "image_urls": ["$.inputs.photo_b"],
                  "aspect_ratio": "9:16"
                }
              }
            ]
          }
        ]
      },
      {
        "id": "clip",
        "type": "model",
        "model": "bytedance-seedance-2-0-reference-to-video-fast",
        "params": {
          "prompt": "The two people from the reference images walk side by side through a sunny old-town market, laughing and taking a selfie together.",
          "image_urls": ["$.edit_a.primary", "$.edit_b.primary"],
          "duration": "8",
          "resolution": "720p",
          "aspect_ratio": "9:16",
          "generate_audio": false
        }
      },
      {
        "id": "resize",
        "type": "model",
        "model": "scale-video",
        "params": { "video_url": "$.clip.primary", "width": 1080, "height": 1920, "mode": "crop" }
      },
      {
        "id": "soundtrack",
        "type": "model",
        "model": "ffmpeg-api-merge-audio-video",
        "params": { "video_url": "$.resize.primary", "audio_url": "$.inputs.music" }
      }
    ]
  }
}
```

Inputs: `{"photo_a": "https://example.com/a.jpg", "photo_b": "https://example.com/b.jpg", "music": "https://example.com/track.mp3"}`

Both edits run at the same time. To use the same music every time, replace `$.inputs.music` with a fixed URL.

## 5. A reliable vision call

Write alt text for a product photo. If the first provider fails, a second one answers.

```
image ──▶ describe (LLM, fallback: another provider) ──▶ alt_text
```

```json
{
  "name": "Product Alt Text",
  "definition": {
    "input_schema": {
      "properties": {
        "image": { "type": "image", "required": true }
      }
    },
    "steps": [
      {
        "id": "describe",
        "type": "model",
        "model": "eachlabs-llm-router",
        "params": {
          "model": "google/gemini-3.6-flash",
          "temperature": 0,
          "messages": [
            {
              "role": "user",
              "content": [
                { "type": "text", "text": "Write alt text for this product photo in one sentence of at most 20 words." },
                { "type": "image_url", "image_url": { "url": "$.inputs.image" } }
              ]
            }
          ]
        },
        "fallback": {
          "enabled": true,
          "model": "eachlabs-llm-router",
          "params": {
            "model": "openai/gpt-4.1-mini",
            "temperature": 0,
            "messages": [
              {
                "role": "user",
                "content": [
                  { "type": "text", "text": "Write alt text for this product photo in one sentence of at most 20 words." },
                  { "type": "image_url", "image_url": { "url": "$.inputs.image" } }
                ]
              }
            ]
          }
        }
      }
    ],
    "metadata": {
      "output_mapping": { "alt_text": "$.describe.primary.choices[0].message.content" }
    }
  }
}
```

Inputs: `{"image": "https://cdn.dummyjson.com/product-images/groceries/honey-jar/1.webp"}`

The run's `workflow_output.alt_text` holds the sentence, whichever provider answered.

## 6. Call an API, then use its data

Fetch a product from an API and turn it into an ad image. This example calls the public [DummyJSON](https://dummyjson.com) test API; point `url` at your own API.

```
product_id ──▶ product (HTTP GET) ──▶ ad (image edit)
```

```json
{
  "name": "Product Ad From API",
  "definition": {
    "input_schema": {
      "properties": {
        "product_id": { "type": "string", "required": true }
      }
    },
    "steps": [
      {
        "id": "product",
        "type": "model",
        "model": "eachlabs-http-step",
        "params": {
          "url": "https://dummyjson.com/products/$.inputs.product_id",
          "method": "GET",
          "timeout_seconds": 20,
          "fail_on_status": "non_2xx"
        }
      },
      {
        "id": "ad",
        "type": "model",
        "model": "nano-banana-2-edit",
        "params": {
          "prompt": "Studio advertising photo of this $.product.primary.output.title on a clean pastel background with soft shadows. Leave empty space at the top for a headline.",
          "image_urls": ["$.product.primary.output.images[0]"],
          "aspect_ratio": "4:5"
        }
      }
    ]
  }
}
```

Inputs: `{"product_id": "27"}`

- `eachlabs-http-step` takes `url`, `method`, `headers`, `query_params`, `body` (a JSON object for
  `POST`, `PUT` or `PATCH`), `timeout_seconds` (up to 30 recommended) and `fail_on_status`.
- Set `fail_on_status` to `"non_2xx"` so an error response stops the run.
- To run your own code, deploy it as an HTTPS endpoint (a serverless function is enough), `POST`
  the inputs to it, and read its JSON reply in the next step. Organizations in the private beta can
  use the `eachlabs-python-step` model instead.
- Only public URLs are reachable. Definitions are stored, so use scoped, read-only tokens in `headers`.

## 7. Let AI choose the path

Ask a vision model what the photo shows, then pick the matching recipe. The next step continues from whichever branch ran.

```
photo ──▶ subject (LLM) ──▶ portrait (choice) ─┬─ pet_portrait ────┐
                                               └─ person_portrait ─┴──▶ animate
```

```json
{
  "name": "Pet or Person Portrait",
  "definition": {
    "input_schema": {
      "properties": {
        "photo": { "type": "image", "required": true }
      }
    },
    "steps": [
      {
        "id": "subject",
        "type": "model",
        "model": "eachlabs-llm-router",
        "params": {
          "model": "google/gemini-3.6-flash",
          "temperature": 0,
          "messages": [
            {
              "role": "user",
              "content": [
                { "type": "text", "text": "Is the main subject of this photo an animal or a person? Answer with one word in capitals: PET or PERSON." },
                { "type": "image_url", "image_url": { "url": "$.inputs.photo" } }
              ]
            }
          ]
        }
      },
      {
        "id": "portrait",
        "type": "choice",
        "condition": {
          "expression": "$.subject.primary.choices[0].message.content",
          "operator": "string_matches",
          "value": "*PET*"
        },
        "condition_met_branch": {
          "name": "pet",
          "steps": [
            {
              "id": "pet_portrait",
              "type": "model",
              "model": "nano-banana-2-edit",
              "params": {
                "prompt": "A royal oil-painting portrait of this animal wearing a small crown and a velvet cape, in a gilded frame.",
                "image_urls": ["$.inputs.photo"],
                "aspect_ratio": "4:5"
              }
            }
          ]
        },
        "default_branch": {
          "name": "person",
          "steps": [
            {
              "id": "person_portrait",
              "type": "model",
              "model": "nano-banana-2-edit",
              "params": {
                "prompt": "A royal oil-painting portrait of this person wearing a crown and a velvet cape, in a gilded frame. Keep their face unchanged.",
                "image_urls": ["$.inputs.photo"],
                "aspect_ratio": "4:5"
              }
            }
          ]
        }
      },
      {
        "id": "animate",
        "type": "model",
        "model": "kling-v3-pro-image-to-video",
        "params": {
          "start_image_url": "$.portrait.primary",
          "prompt": "The painting comes to life: the subject blinks, looks around and the cape moves slightly.",
          "duration": "5"
        }
      }
    ]
  }
}
```

Inputs: `{"photo": "https://example.com/dog.jpg"}`

`string_matches` uses `*` wildcards, so `*PET*` also matches `PET.`. Use `and`, `or` and `not` to
combine conditions.

## 8. Several scenes in parallel, joined with music

Each branch builds one scene (image, then video). All scenes render at the same time, then the clips are joined and music is added.

```
                     ┌─ scene1_image ─▶ scene1_video ─┐
product ──▶ scenes ──┼─ scene2_image ─▶ scene2_video ─┼──▶ merge ──▶ soundtrack
                     └─ scene3_image ─▶ scene3_video ─┘
```

```json
{
  "name": "Three-Scene Product Story",
  "definition": {
    "input_schema": {
      "properties": {
        "product": { "type": "image", "required": true },
        "product_name": { "type": "string", "required": true },
        "music": { "type": "voice", "required": true }
      }
    },
    "steps": [
      {
        "id": "scenes",
        "type": "parallel",
        "branches": [
          {
            "steps": [
              {
                "id": "scene1_image",
                "type": "model",
                "model": "nano-banana-2-edit",
                "params": {
                  "prompt": "Morning: the $.inputs.product_name on a sunny breakfast table next to fresh bread. Keep the product exactly as in the photo.",
                  "image_urls": ["$.inputs.product"],
                  "aspect_ratio": "9:16"
                }
              },
              {
                "id": "scene1_video",
                "type": "model",
                "model": "kling-v3-standard-image-to-video",
                "params": { "start_image_url": "$.scene1_image.primary", "prompt": "Slow push-in on the product.", "duration": "5" }
              }
            ]
          },
          {
            "steps": [
              {
                "id": "scene2_image",
                "type": "model",
                "model": "nano-banana-2-edit",
                "params": {
                  "prompt": "Afternoon: the $.inputs.product_name on a picnic blanket in a park. Keep the product exactly as in the photo.",
                  "image_urls": ["$.inputs.product"],
                  "aspect_ratio": "9:16"
                }
              },
              {
                "id": "scene2_video",
                "type": "model",
                "model": "kling-v3-standard-image-to-video",
                "params": { "start_image_url": "$.scene2_image.primary", "prompt": "Leaves move in the wind, slow orbit around the product.", "duration": "5" }
              }
            ]
          },
          {
            "steps": [
              {
                "id": "scene3_image",
                "type": "model",
                "model": "nano-banana-2-edit",
                "params": {
                  "prompt": "Evening: the $.inputs.product_name on a kitchen counter lit by a warm lamp. Keep the product exactly as in the photo.",
                  "image_urls": ["$.inputs.product"],
                  "aspect_ratio": "9:16"
                }
              },
              {
                "id": "scene3_video",
                "type": "model",
                "model": "kling-v3-standard-image-to-video",
                "params": { "start_image_url": "$.scene3_image.primary", "prompt": "Slow pull-back as the lamp glows.", "duration": "5" }
              }
            ]
          }
        ]
      },
      {
        "id": "merge",
        "type": "model",
        "model": "merge-videos",
        "params": {
          "video_urls": ["$.scene1_video.primary", "$.scene2_video.primary", "$.scene3_video.primary"]
        }
      },
      {
        "id": "soundtrack",
        "type": "model",
        "model": "ffmpeg-api-merge-audio-video",
        "params": { "video_url": "$.merge.primary", "audio_url": "$.inputs.music" }
      }
    ]
  }
}
```

Inputs: `{"product": "https://cdn.dummyjson.com/product-images/groceries/honey-jar/1.webp", "product_name": "honey jar", "music": "https://example.com/track.mp3"}`

Steps inside a branch run in order; the branches run at the same time, so three scenes take about
as long as one. `merge-videos` joins the clips in the listed order.
