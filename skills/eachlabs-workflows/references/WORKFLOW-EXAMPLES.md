# Workflow Examples

Common multi-step workflow patterns using EachLabs models. Each example shows the two-phase approach: create the workflow first, then create a version with the steps.

## Product Photo Pipeline

Generate a studio-quality product photo and video from a raw product image.

**Step 1: Create workflow**

```bash
curl -X POST https://workflows.eachlabs.run/api/v1/workflows \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -d '{
    "name": "Product Photo Pipeline",
    "description": "Generate a studio-quality product photo and video from a raw product image"
  }'
```

**Step 2: Create version with steps**

```bash
curl -X POST https://workflows.eachlabs.run/api/v1/workflows/{workflowID}/versions \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -d '{
    "description": "Initial version",
    "steps": [
      {
        "name": "remove_bg",
        "model": "gpt-image-v1-5-edit",
        "version": "0.0.1",
        "input": {
          "prompt": "Remove the background from this product image",
          "image_urls": ["{{inputs.product_image}}"],
          "background": "transparent",
          "output_format": "png"
        }
      },
      {
        "name": "studio_shot",
        "model": "gpt-image-v1-5-edit",
        "version": "0.0.1",
        "input": {
          "prompt": "Place this product on a clean white background with professional studio lighting and soft shadows",
          "image_urls": ["{{steps.remove_bg.output}}"],
          "quality": "high"
        }
      },
      {
        "name": "product_video",
        "model": "pixverse-v5-6-image-to-video",
        "version": "0.0.1",
        "input": {
          "image_url": "{{steps.studio_shot.output}}",
          "prompt": "Slow cinematic rotation showcasing the product from all angles",
          "duration": "5",
          "resolution": "1080p"
        }
      }
    ]
  }'
```

## Text to Video with Voiceover

Generate a video from text and add a voiceover narration.

**Create workflow**, then **create version** with these steps:

```json
{
  "description": "Initial version",
  "steps": [
    {
      "name": "generate_video",
      "model": "pixverse-v5-6-text-to-video",
      "version": "0.0.1",
      "input": {
        "prompt": "{{inputs.video_prompt}}",
        "duration": "5",
        "resolution": "720p"
      }
    },
    {
      "name": "generate_voiceover",
      "model": "elevenlabs-text-to-speech",
      "version": "0.0.1",
      "input": {
        "text": "{{inputs.narration_text}}",
        "voice_id": "EXAVITQu4vr4xnSDxMaL",
        "model_id": "eleven_v3"
      }
    },
    {
      "name": "merge",
      "model": "ffmpeg-api-merge-audio-video",
      "version": "0.0.1",
      "input": {
        "video_url": "{{steps.generate_video.output}}",
        "audio_url": "{{steps.generate_voiceover.output}}"
      }
    }
  ]
}
```

## Music Video Generator

Create a song and pair it with a generated video.

**Create workflow**, then **create version** with these steps:

```json
{
  "description": "Initial version",
  "steps": [
    {
      "name": "generate_song",
      "model": "mureka-generate-song",
      "version": "0.0.1",
      "input": {
        "prompt": "{{inputs.song_prompt}}"
      }
    },
    {
      "name": "generate_visual",
      "model": "pixverse-v5-6-text-to-video",
      "version": "0.0.1",
      "input": {
        "prompt": "{{inputs.visual_prompt}}",
        "duration": "10",
        "resolution": "1080p",
        "style": "cyberpunk"
      }
    },
    {
      "name": "merge",
      "model": "ffmpeg-api-merge-audio-video",
      "version": "0.0.1",
      "input": {
        "video_url": "{{steps.generate_visual.output}}",
        "audio_url": "{{steps.generate_song.output}}"
      }
    }
  ]
}
```

## Talking Head Video

Generate a talking head video from text with a custom voice.

**Create workflow**, then **create version** with these steps:

```json
{
  "description": "Initial version",
  "steps": [
    {
      "name": "generate_speech",
      "model": "elevenlabs-text-to-speech",
      "version": "0.0.1",
      "input": {
        "text": "{{inputs.script}}",
        "voice_id": "{{inputs.voice_id}}",
        "model_id": "eleven_v3"
      }
    },
    {
      "name": "animate_face",
      "model": "bytedance-omnihuman-v1-5",
      "version": "0.0.1",
      "input": {
        "image_url": "{{inputs.portrait_image}}",
        "audio_url": "{{steps.generate_speech.output}}",
        "resolution": "1080p"
      }
    }
  ]
}
```

## Image Enhancement Pipeline

Enhance an image with style transfer and generate multiple angles.

**Create workflow**, then **create version** with these steps:

```json
{
  "description": "Initial version",
  "steps": [
    {
      "name": "enhance",
      "model": "flux-2-turbo-edit",
      "version": "0.0.1",
      "input": {
        "prompt": "Enhance this image with professional photography quality, improve lighting and colors",
        "image_urls": ["{{inputs.image_url}}"],
        "image_size": "square_hd"
      }
    },
    {
      "name": "angle_front",
      "model": "qwen-image-edit-2511-multiple-angles",
      "version": "0.0.1",
      "input": {
        "image_urls": ["{{steps.enhance.output}}"],
        "horizontal_angle": 0,
        "vertical_angle": 15,
        "zoom": 5
      }
    },
    {
      "name": "angle_side",
      "model": "qwen-image-edit-2511-multiple-angles",
      "version": "0.0.1",
      "input": {
        "image_urls": ["{{steps.enhance.output}}"],
        "horizontal_angle": 90,
        "vertical_angle": 15,
        "zoom": 5
      }
    }
  ]
}
```

## Podcast Generator

Generate a podcast discussion on any topic.

**Create workflow**, then **create version** with these steps:

```json
{
  "description": "Initial version",
  "steps": [
    {
      "name": "create_podcast",
      "model": "mureka-create-podcast",
      "version": "0.0.1",
      "input": {
        "prompt": "{{inputs.topic}}",
        "speakers": ["Luna", "Jake"]
      }
    }
  ]
}
```

## Triggering Workflows

After creating a workflow and its version, trigger it:

```bash
curl -X POST https://workflows.eachlabs.run/api/v1/{workflowID}/trigger \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -d '{
    "inputs": {
      "product_image": "https://example.com/product.jpg"
    }
  }'
```
