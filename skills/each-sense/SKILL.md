---
name: each-sense
description: each::sense is the intelligent layer for generative media. A unified AI agent that generates marketing assets, ads, product images, videos, and creative content. It knows all AI models and automatically selects the best one for your task. Use for any creative content generation request.
metadata:
  author: eachlabs
  version: "2.0"
---

# each::sense - Intelligent Layer for Generative Media

each::sense is an OpenAI-compatible AI agent that can generate images, videos, audio, 3D models, build workflows, search the web, and hold conversational interactions. It orchestrates 500+ AI models through a single unified interface.

each::sense itself is completely free. You only get charged for the models it uses.

**Use each::sense when the user needs:**
- Marketing assets and ad creatives
- Product images and e-commerce visuals
- Video content (ads, UGC, social media)
- Audio and music generation
- Any creative content generation
- Multi-step workflows combining multiple AI models

## Authentication

```
Header: X-API-Key: <your-api-key>
```

Also supports OpenAI SDK compatible authentication:
```
Header: Authorization: Bearer <your-api-key>
```

Get your API key at [eachlabs.ai](https://www.eachlabs.ai/api-keys).

Set the `EACHLABS_API_KEY` environment variable.

## Base URL

```
https://eachsense-agent.core.eachlabs.run
```

## Endpoints

| Method | Path | Purpose |
|--------|------|---------|
| POST | `/v1/chat/completions` | Primary chat endpoint |
| POST | `/workflow` | Workflow builder |
| GET | `/v1/models` | List available models |
| GET | `/memory?session_id={id}` | Retrieve session memory |
| DELETE | `/memory?session_id={id}` | Clear session memory |
| GET | `/sessions` | List all sessions |

## Quick Start

### Using curl

```bash
curl -X POST https://eachsense-agent.core.eachlabs.run/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -H "Accept: text/event-stream" \
  -d '{
    "messages": [{"role": "user", "content": "Generate a portrait of a woman with golden hour lighting"}],
    "model": "eachsense/beta",
    "stream": true,
    "mode": "max"
  }'
```

### Using Python (OpenAI SDK)

```python
from openai import OpenAI

client = OpenAI(
    api_key="YOUR_EACHLABS_API_KEY",
    base_url="https://eachsense-agent.core.eachlabs.run/v1"
)

# Non-streaming
response = client.chat.completions.create(
    model="eachsense/beta",
    messages=[{"role": "user", "content": "Generate a sunset landscape"}],
    stream=False
)
print(response.generations)  # List of media URLs

# Streaming
stream = client.chat.completions.create(
    model="eachsense/beta",
    messages=[{"role": "user", "content": "Generate a sunset landscape"}],
    stream=True
)
for chunk in stream:
    eachlabs_data = chunk.model_extra.get("eachlabs")
    if eachlabs_data:
        event_type = eachlabs_data.get("type")
        if event_type == "generation_response":
            print(eachlabs_data["generations"])
```

### Using JavaScript (OpenAI SDK)

```javascript
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: "YOUR_EACHLABS_API_KEY",
  baseURL: "https://eachsense-agent.core.eachlabs.run/v1"
});

// Non-streaming
const response = await client.chat.completions.create({
  model: "eachsense/beta",
  messages: [{ role: "user", content: "Generate a sunset landscape" }],
  stream: false
});
console.log(response.generations);

// Streaming
const stream = await client.chat.completions.create({
  model: "eachsense/beta",
  messages: [{ role: "user", content: "Generate a sunset landscape" }],
  stream: true
});
for await (const chunk of stream) {
  const eachlabs = chunk.eachlabs;
  if (eachlabs?.type === "generation_response") {
    console.log(eachlabs.generations);
  }
}
```

## Request Schema

```json
{
  "messages": [{"role": "user", "content": "string (required) - User's request"}],
  "model": "string (optional, default: 'eachsense/beta')",
  "stream": "boolean (optional, default: true) - Enable SSE streaming",
  "session_id": "string (optional) - Session ID for conversation history and multi-turn chats",
  "mode": "string (optional, default: 'max') - Quality mode: 'max' or 'eco'",
  "behavior": "string (optional, default: 'agent') - Behavior: 'agent', 'plan', or 'ask'",
  "image_urls": "array[string] (optional) - Image URLs for editing/processing (max 4)",
  "workflow_id": "string (optional) - Execute specific workflow",
  "version_id": "string (optional) - Workflow version",
  "web_search": "boolean (optional, default: true) - Enable/disable web search",
  "enable_safety_checker": "boolean (optional, default: true) - Set to false to allow NSFW content generation"
}
```

### Parameter Details

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `messages` | array | required | Chat messages with `role` and `content` |
| `model` | string | "eachsense/beta" | Model identifier |
| `stream` | boolean | true | Enable SSE streaming |
| `session_id` | string | null | Session ID for conversation history. Use to continue previous chats, handle clarifications, and iteratively refine outputs |
| `mode` | string | "max" | `max` = best quality (premium models), `eco` = fastest/cheapest |
| `behavior` | string | "agent" | `agent` = auto-execute, `plan` = show plan first, `ask` = clarify first |
| `image_urls` | array | null | URLs of images to process/edit (max 4) |
| `workflow_id` | string | null | Execute a specific workflow |
| `version_id` | string | null | Workflow version, used with workflow_id |
| `web_search` | boolean | true | Allow web search for information |
| `enable_safety_checker` | boolean | true | Set to false to allow NSFW content generation |

**OpenAI SDK extra parameters:** When using the OpenAI SDK, pass non-standard parameters via `extra_body`:

```python
response = client.chat.completions.create(
    model="eachsense/beta",
    messages=[{"role": "user", "content": "Generate a quick sketch"}],
    extra_body={"mode": "eco", "session_id": "my-session"},
    stream=False
)
```

## Non-Streaming Response

```json
{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "choices": [{"message": {"role": "assistant", "content": "Here's your image..."}}],
  "generations": ["https://cdn.example.com/image.png"],
  "task_id": "task-456",
  "session_id": "my-session"
}
```

## Modes

### MAX Mode (Default)
Uses premium quality models (flux-2-max, veo-3, etc.). Best for final outputs, client-facing work, and when quality matters most. Processing time: 10-300 seconds.

```bash
curl -X POST https://eachsense-agent.core.eachlabs.run/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -H "Accept: text/event-stream" \
  -d '{
    "messages": [{"role": "user", "content": "Create a product shot"}],
    "model": "eachsense/beta",
    "stream": true,
    "mode": "max"
  }'
```

### ECO Mode
Uses fast, cost-effective models (flux-2-pro, veo3-1-fast, etc.). Best for prototyping, drafts, and high-volume generation. Processing time: 5-180 seconds.

```bash
curl -X POST https://eachsense-agent.core.eachlabs.run/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -H "Accept: text/event-stream" \
  -d '{
    "messages": [{"role": "user", "content": "Create a product shot"}],
    "model": "eachsense/beta",
    "stream": true,
    "mode": "eco"
  }'
```

## Behaviors

### Agent (Default)
Automatically executes the request, selecting the best model and generating output immediately.

```json
{
  "messages": [{"role": "user", "content": "Generate a sunset video"}],
  "model": "eachsense/beta",
  "behavior": "agent"
}
```

### Plan
Shows execution plan with time/cost estimates before executing. Good for complex requests where you want to review the approach.

```json
{
  "messages": [{"role": "user", "content": "Create a marketing video for my bakery"}],
  "model": "eachsense/beta",
  "behavior": "plan"
}
```

### Ask
Always asks clarifying questions before proceeding. Good when you want maximum control.

```json
{
  "messages": [{"role": "user", "content": "Generate a portrait"}],
  "model": "eachsense/beta",
  "behavior": "ask"
}
```

## Session Management

Use `session_id` to maintain conversation history and context across multiple requests. This enables:

- **Multi-turn conversations**: Follow-up on previous requests without repeating context
- **Iterative refinement**: Ask for modifications to previously generated content
- **Clarification flows**: Respond to `clarification_needed` events and continue the conversation
- **Context awareness**: The AI remembers previous generations, preferences, and instructions

### Session Limits

| Metric | Limit |
|--------|-------|
| Idle timeout | 15 minutes |
| Session TTL | 30 days |
| Messages per session | 50 |

Sessions are scoped by API key + session_id combination. Different API keys cannot access each other's sessions.

### Session Management Endpoints

```bash
# Retrieve session memory
curl https://eachsense-agent.core.eachlabs.run/memory?session_id=my-session \
  -H "X-API-Key: $EACHLABS_API_KEY"

# Clear session memory
curl -X DELETE https://eachsense-agent.core.eachlabs.run/memory?session_id=my-session \
  -H "X-API-Key: $EACHLABS_API_KEY"

# List all sessions
curl https://eachsense-agent.core.eachlabs.run/sessions \
  -H "X-API-Key: $EACHLABS_API_KEY"
```

### Example: Iterative Generation

```bash
# First request - generate initial image
curl -X POST https://eachsense-agent.core.eachlabs.run/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -H "Accept: text/event-stream" \
  -d '{
    "messages": [{"role": "user", "content": "Generate a logo for a coffee shop called Brew Lab"}],
    "model": "eachsense/beta",
    "stream": true,
    "session_id": "logo-project-001"
  }'

# Follow-up - modify the result (same session_id)
curl -X POST https://eachsense-agent.core.eachlabs.run/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -H "Accept: text/event-stream" \
  -d '{
    "messages": [{"role": "user", "content": "Make it more minimalist and change the color to dark green"}],
    "model": "eachsense/beta",
    "stream": true,
    "session_id": "logo-project-001"
  }'

# Another follow-up - request variation (same session_id)
curl -X POST https://eachsense-agent.core.eachlabs.run/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -H "Accept: text/event-stream" \
  -d '{
    "messages": [{"role": "user", "content": "Create 3 variations of this logo"}],
    "model": "eachsense/beta",
    "stream": true,
    "session_id": "logo-project-001"
  }'
```

### Example: Handling Clarifications

```bash
# Ambiguous request - AI will ask for clarification
curl -X POST https://eachsense-agent.core.eachlabs.run/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -H "Accept: text/event-stream" \
  -d '{
    "messages": [{"role": "user", "content": "Edit this image"}],
    "model": "eachsense/beta",
    "stream": true,
    "session_id": "edit-task-001",
    "image_urls": ["https://example.com/photo.jpg"]
  }'
# Response: clarification_needed event asking what edit to make

# Respond to clarification (same session_id)
curl -X POST https://eachsense-agent.core.eachlabs.run/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -H "Accept: text/event-stream" \
  -d '{
    "messages": [{"role": "user", "content": "Remove the background and make it transparent"}],
    "model": "eachsense/beta",
    "stream": true,
    "session_id": "edit-task-001",
    "image_urls": ["https://example.com/photo.jpg"]
  }'
```

## Use Case Examples

### 1. Image Generation

```bash
curl -X POST https://eachsense-agent.core.eachlabs.run/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -H "Accept: text/event-stream" \
  -d '{
    "messages": [{"role": "user", "content": "Generate a professional headshot of a business executive, studio lighting"}],
    "model": "eachsense/beta",
    "stream": true,
    "mode": "max"
  }'
```

### 2. Video Generation

```bash
curl -X POST https://eachsense-agent.core.eachlabs.run/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -H "Accept: text/event-stream" \
  -d '{
    "messages": [{"role": "user", "content": "Create a 5 second video of a sunset over the ocean"}],
    "model": "eachsense/beta",
    "stream": true,
    "mode": "max"
  }'
```

### 3. Image Editing (with uploaded image)

```bash
curl -X POST https://eachsense-agent.core.eachlabs.run/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -H "Accept: text/event-stream" \
  -d '{
    "messages": [{"role": "user", "content": "Remove the background from this image"}],
    "model": "eachsense/beta",
    "stream": true,
    "image_urls": ["https://example.com/my-photo.jpg"]
  }'
```

### 4. Image-to-Video Animation

```bash
curl -X POST https://eachsense-agent.core.eachlabs.run/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -H "Accept: text/event-stream" \
  -d '{
    "messages": [{"role": "user", "content": "Animate this image with gentle camera movement"}],
    "model": "eachsense/beta",
    "stream": true,
    "image_urls": ["https://example.com/landscape.jpg"]
  }'
```

### 5. Product Photography

```bash
curl -X POST https://eachsense-agent.core.eachlabs.run/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -H "Accept: text/event-stream" \
  -d '{
    "messages": [{"role": "user", "content": "Generate a product shot of a coffee mug on a wooden table with morning light"}],
    "model": "eachsense/beta",
    "stream": true,
    "mode": "max"
  }'
```

### 6. Marketing Assets

```bash
curl -X POST https://eachsense-agent.core.eachlabs.run/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -H "Accept: text/event-stream" \
  -d '{
    "messages": [{"role": "user", "content": "Create a social media ad for a fitness app, show someone working out with energetic vibes"}],
    "model": "eachsense/beta",
    "stream": true,
    "mode": "max"
  }'
```

### 7. Complex Workflow (UGC Video)

```bash
curl -X POST https://eachsense-agent.core.eachlabs.run/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -H "Accept: text/event-stream" \
  -d '{
    "messages": [{"role": "user", "content": "Create a 30 second UGC video with a consistent presenter explaining why fitness is important. The presenter is a 30-year-old fit woman with brown hair in workout clothes, gym background."}],
    "model": "eachsense/beta",
    "stream": true,
    "mode": "max"
  }'
```

### 8. Workflow Builder

```bash
curl -X POST https://eachsense-agent.core.eachlabs.run/workflow \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -d '{
    "message": "Create a workflow that generates an image and then upscales it",
    "stream": true,
    "session_id": "my-session"
  }'
```

## SSE Response Format

The endpoint returns Server-Sent Events (SSE) wrapped in OpenAI `chat.completion.chunk` format with an `eachlabs` extension field.

Each event has the format:
```
data: {"id":"chatcmpl-123","object":"chat.completion.chunk","choices":[{"delta":{"content":""}}],"eachlabs":{"type":"event_type",...}}\n\n
```

Stream ends with:
```
data: [DONE]\n\n
```

### Event Types (18 Total)

**AI Reasoning:**
| Event | Description |
|-------|-------------|
| `thinking_delta` | AI reasoning in real-time |
| `text_response` | Text content (explanations, answers) |

**Tool Operations:**
| Event | Description |
|-------|-------------|
| `status` | Current operation being executed (includes `tool_name`, `parameters`) |
| `tool_call` | Details of tool being called |
| `message` | Informational message |
| `progress` | Progress update with `percent` |

**Generation:**
| Event | Description |
|-------|-------------|
| `generation_response` | Generated media URL (`url`, `generations[]`, `model`, `execution_time_ms`) |

**Interaction:**
| Event | Description |
|-------|-------------|
| `clarification_needed` | AI needs more information (`question`, `options[]`, `context`) |

**Web Search:**
| Event | Description |
|-------|-------------|
| `web_search_query` | Web search being executed |
| `web_search_citations` | Citations with `title`, `url`, `snippet` |

**Workflow:**
| Event | Description |
|-------|-------------|
| `workflow_created` | New workflow created |
| `workflow_fetched` | Existing workflow loaded |
| `workflow_built` | Workflow definition constructed |
| `workflow_updated` | Workflow pushed to API |

**Execution:**
| Event | Description |
|-------|-------------|
| `execution_started` | Workflow execution began |
| `execution_progress` | Step progress (`step_id`, `completed_steps`, `total_steps`) |
| `execution_completed` | Workflow done (`output`, `all_outputs`, `total_time_ms`) |

**Terminal:**
| Event | Description |
|-------|-------------|
| `complete` | Task finished (`status`: ok/error/clarification_needed, `generations[]`) |
| `error` | Error occurred (`message`, `error_code`) |

### Typical Event Flow

```
thinking_delta → status → status → text_response → generation_response → complete → [DONE]
```

### Key Event Examples

#### generation_response
```json
{
  "type": "generation_response",
  "url": "https://storage.eachlabs.ai/outputs/abc123.png",
  "generations": ["https://storage.eachlabs.ai/outputs/abc123.png"],
  "model": "flux-2-max",
  "execution_time_ms": 8500
}
```

#### clarification_needed
```json
{
  "type": "clarification_needed",
  "question": "What type of edit would you like to make to this image?",
  "options": ["Remove the background", "Apply a style transfer", "Upscale to higher resolution"],
  "context": "I can see your image but need to know the specific edit you want."
}
```

#### complete
```json
{
  "type": "complete",
  "task_id": "chat_1708345678901",
  "status": "ok",
  "generations": ["https://storage.eachlabs.ai/outputs/abc123.png"],
  "model": "flux-2-max"
}
```

## Agent Tools

| Tool | Type | Purpose |
|------|------|---------|
| `search_models` | Non-terminal | Find models by use case |
| `get_model_details` | Non-terminal | Get model input schema |
| `web_search` | Non-terminal | Web search |
| `vision_preprocessor` | Non-terminal | Analyze image content |
| `execute_model` | Terminal | Run model prediction |
| `generate_text` | Terminal | Generate text response |
| `create_workflow` | Non-terminal | Create workflow |
| `trigger_workflow` | Non-terminal | Execute workflow |
| `build_workflow` | Non-terminal | Build workflow definition |
| `check_execution` | Non-terminal | Check execution status |
| `ask_clarification` | Terminal | Request clarification |

## Model Quick Reference

| Use Case | Model Slug | Speed |
|----------|-----------|-------|
| Best image quality | `flux-2-max` | Medium |
| Fast image generation | `flux-2-pro` | Fast |
| Text/logos in images | `flux-kontext-pro` | Fast |
| Rapid prototyping | `nano-banana-pro` | Very Fast |
| Photorealistic images | `gemini-imagen-4` | Medium |
| Artistic/creative | `seedream-v4-5` | Medium |
| Best video (with audio) | `veo-3` | Slow |
| Fast video | `veo3-1-fast` | Fast |
| High-quality video | `kling-3-0` | Medium |
| Image to video | `kling-2-1-image-to-video` | Medium |
| Instruction editing | `flux-2-edit` | Fast |
| Background removal | `eachlabs-bg-remover-v1` | Very Fast |
| Image upscaling | `topaz-upscale-image` | Fast |
| Face swap | `kling-face-swap` | Fast |
| Text-to-speech | `elevenlabs-tts` | Very Fast |
| Music generation | `mureka-generate-music` | Medium |

## Model Aliases

Common shorthand names that are automatically resolved:

| Alias | Resolves To |
|-------|-------------|
| Flux Max | flux-2-max |
| Flux Pro | flux-2-pro |
| Flux Edit | flux-2-edit |
| Flux Fill | flux-fill-pro |
| Flux Kontext | flux-kontext-pro |
| Imagen 4 | gemini-imagen-4 |
| Veo 3 | veo-3 |
| Kling 3 | kling-3-0 |
| Sora | sora-2-pro |
| ElevenLabs | elevenlabs-tts |

## Error Handling

### HTTP Errors

| Code | Response | Cause |
|------|----------|-------|
| 401 | `{"error": "Invalid or missing API key"}` | Missing or invalid API key |
| 422 | `{"error": "..."}` | Missing required fields or invalid parameters |
| 429 | `{"error": "..."}` | Rate limited - implement exponential backoff |
| 500 | `{"error": "..."}` | Internal server error - retry with backoff |

### Streaming Errors

```json
{"type": "error", "message": "Failed to execute model: Invalid parameters", "error_code": "..."}
```

| Error Message | Cause | Solution |
|--------------|-------|----------|
| `Model execution failed` | Underlying model error | Check model parameters |
| `Session not found` | Invalid or expired session | Create new session |
| `Workflow execution timeout` | Exceeded 15 minute limit | Split into smaller workflows |

**Retry strategy:** Use exponential backoff for 429 and 500 errors. Wait `2^attempt` seconds, maximum 3 retries.

## Timeouts

**Client timeout recommendation:** Set your HTTP client timeout to **minimum 10 minutes**. Complex use cases may require running multiple AI models sequentially (e.g., 10+ model executions for UGC videos).

| Operation | Timeout |
|-----------|---------|
| HTTP request | 300 seconds |
| Streaming idle | 15 minutes |
| Image generation | 10-60 seconds |
| Video generation | 60-600 seconds |
| Workflow execution | 15 minutes |

```bash
# curl example with 10 minute timeout
curl --max-time 600 -X POST https://eachsense-agent.core.eachlabs.run/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -H "Accept: text/event-stream" \
  -d '{
    "messages": [{"role": "user", "content": "Create a complex UGC video..."}],
    "model": "eachsense/beta",
    "stream": true
  }'
```

## Rate Limits

| Plan | Requests/Minute | Concurrent |
|------|-----------------|------------|
| Free | 10 | 2 |
| Pro | 60 | 10 |
| Enterprise | 300 | 50 |

Rate limit headers: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`

## Input Validation Limits

| Input Type | Constraint |
|-----------|-----------|
| Images per request | Max 4 |
| Image formats | JPEG, PNG, WebP, GIF |
| Image size | Max 20MB, 64-8192px |
| Video formats | MP4, WebM, MOV |
| Video size | Max 500MB, 10 min |
| Audio formats | MP3, WAV, M4A, OGG |
| Audio size | Max 50MB, 5 min |
| Prompt length | Max 10,000 characters |
| Session memory | Max 50 messages |

## Best Practices

1. **Use session_id** for multi-turn conversations to maintain context
2. **Use ECO mode** for prototyping and cost-sensitive applications
3. **Handle clarification events** - respond with requested information in the same session
4. **Provide clear prompts** - be specific about style, mood, and composition
5. **Monitor SSE events** - use `thinking_delta` for progress, `generation_response` for output
6. **Use OpenAI SDK** for easier integration - just point to the each::sense base URL
7. **Implement retry logic** - use exponential backoff for transient errors
