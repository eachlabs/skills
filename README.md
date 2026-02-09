# each::labs Agent Skills

**Give your AI coding agent creative superpowers.** Generate videos, images, music, voiceovers, and more — directly from your terminal.

445+ AI models and 130+ pre-built workflows. Works with Claude Code, Cursor, Copilot, and any agent that supports the [Agent Skills Spec](https://agentskills.io/specification).

## Install

```bash
npx skills add eachlabs/skills
```

Or install a single skill:

```bash
npx skills add eachlabs/skills/eachlabs-video-generation
npx skills add eachlabs/skills/eachlabs-image-generation
npx skills add eachlabs/skills/eachlabs-music
```

## What Can Your Agent Do?

Once installed, your coding agent can:

- **"Generate a 10-second product demo video from this screenshot"** — text-to-video, image-to-video with 54+ models
- **"Create a hero image for my landing page"** — text-to-image with Flux, GPT Image, Gemini, Imagen, and more
- **"Add a voiceover to this video in 6 languages"** — ElevenLabs TTS, lip sync, video translation
- **"Compose a 30-second jingle for my app"** — full songs, instrumentals, lyrics with Mureka AI
- **"Swap the model's face in these campaign photos"** — face swap across images and videos
- **"Generate product shots on white background"** — e-commerce photography, lifestyle scenes, 360-degree views
- **"Create a virtual try-on with this outfit"** — fashion AI for model imagery and runway content
- **"Build a pipeline that generates an image, upscales it, and adds a voiceover"** — multi-step workflows chaining any models together

No context switching. No browser tabs. Just ask your agent.

## Available Skills

| Skill | What it does | Models |
|-------|-------------|--------|
| [eachlabs-video-generation](skills/eachlabs-video-generation/) | Text-to-video, image-to-video, transitions, motion control, talking heads, avatars | 192 |
| [eachlabs-video-edit](skills/eachlabs-video-edit/) | Lip sync, video translation, subtitles, upscaling, style transfer, extension | 25+ |
| [eachlabs-image-generation](skills/eachlabs-image-generation/) | Text-to-image with Flux, GPT Image, Gemini, Imagen, Seedream, and more | 62 |
| [eachlabs-image-edit](skills/eachlabs-image-edit/) | Style transfer, background removal, upscaling, inpainting, 3D generation | 124 |
| [eachlabs-product-visuals](skills/eachlabs-product-visuals/) | E-commerce product shots, background replacement, lifestyle scenes, 360-degree views | 17 |
| [eachlabs-fashion-ai](skills/eachlabs-fashion-ai/) | Fashion model imagery, virtual try-on, runway videos, campaign visuals | 12 |
| [eachlabs-ugc-video](skills/eachlabs-ugc-video/) | Trending social media effects, dance clips, movie scene recreations | 130+ workflows |
| [eachlabs-music](skills/eachlabs-music/) | Songs, instrumentals, lyrics, podcasts, stem separation, song recognition | 13 |
| [eachlabs-voice-audio](skills/eachlabs-voice-audio/) | ElevenLabs TTS, Whisper transcription, RVC voice conversion | 35 |
| [eachlabs-face-swap](skills/eachlabs-face-swap/) | Face swap across images and videos | 3 |
| [eachlabs-workflows](skills/eachlabs-workflows/) | Chain multiple models into custom multi-step pipelines | -- |

## Quick Start

1. **Get your API key** at [eachlabs.ai](https://eachlabs.ai)

2. **Set your environment variable:**
   ```bash
   export EACHLABS_API_KEY="your-api-key"
   ```

3. **Install skills:**
   ```bash
   npx skills add eachlabs/skills
   ```

4. **Ask your agent to create something.** That's it.

## How It Works

Each skill follows the [Agent Skills Spec](https://agentskills.io/specification) — an open standard for giving AI agents new capabilities. A skill is a directory containing:

- `SKILL.md` — Instructions, API patterns, and examples the agent reads to learn the skill
- `references/` — Model catalogs and additional context loaded on demand

When your agent encounters a request it can handle with an installed skill (e.g. "generate a video"), it reads the skill file, understands the available models and API patterns, and executes the right API calls autonomously.

## APIs

each::labs exposes two APIs that skills interact with:

- **Predictions API** (`api.eachlabs.ai`) — Run individual AI models for image, video, audio, and music generation
- **Workflows API** (`workflows.eachlabs.run`) — Execute pre-built and custom multi-step workflows

All API calls are authenticated with your `EACHLABS_API_KEY` environment variable.

## License

MIT
