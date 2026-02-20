# SSE Events Reference

Server-Sent Events (SSE) for the each::sense API streaming responses.

## Event Types

### thinking_delta

AI reasoning process (partial updates).

```json
{
  "type": "thinking_delta",
  "delta": "Analyzing the request for a product image..."
}
```

| Field | Type | Description |
|-------|------|-------------|
| type | string | Event type identifier |
| delta | string | Incremental reasoning text |

---

### status

Current operation being performed.

```json
{
  "type": "status",
  "status": "generating",
  "message": "Creating your image with Flux model"
}
```

| Field | Type | Description |
|-------|------|-------------|
| type | string | Event type identifier |
| status | string | Current status (e.g., "generating", "processing", "queued") |
| message | string | Human-readable status description |

---

### text_response

AI explanations and context.

```json
{
  "type": "text_response",
  "text": "I'll create a professional product shot with soft lighting and a minimalist background."
}
```

| Field | Type | Description |
|-------|------|-------------|
| type | string | Event type identifier |
| text | string | Explanatory text from the AI |

---

### generation_response

Generated media URL. This is the primary output event.

```json
{
  "type": "generation_response",
  "url": "https://cdn.each.ai/outputs/abc123/image.png",
  "media_type": "image",
  "model": "flux-1.1-pro",
  "prompt": "Professional product photography of a sleek headphone on white background"
}
```

| Field | Type | Description |
|-------|------|-------------|
| type | string | Event type identifier |
| url | string | CDN URL of the generated media |
| media_type | string | Type of media ("image", "video", "audio") |
| model | string | Model used for generation |
| prompt | string | Final prompt used for generation |

---

### clarification_needed

AI requires additional information.

```json
{
  "type": "clarification_needed",
  "question": "What style would you prefer for the ad creative?",
  "options": ["Modern minimalist", "Bold and colorful", "Professional corporate"]
}
```

| Field | Type | Description |
|-------|------|-------------|
| type | string | Event type identifier |
| question | string | Clarification question |
| options | array | Optional suggested answers (may be empty) |

---

### workflow_created

New workflow initialized.

```json
{
  "type": "workflow_created",
  "workflow_id": "wf_abc123",
  "name": "Ad Creative Pipeline"
}
```

| Field | Type | Description |
|-------|------|-------------|
| type | string | Event type identifier |
| workflow_id | string | Unique workflow identifier |
| name | string | Workflow name |

---

### workflow_built

Workflow structure completed.

```json
{
  "type": "workflow_built",
  "workflow_id": "wf_abc123",
  "steps": ["generate_image", "upscale", "add_text_overlay"]
}
```

| Field | Type | Description |
|-------|------|-------------|
| type | string | Event type identifier |
| workflow_id | string | Unique workflow identifier |
| steps | array | List of workflow step names |

---

### workflow_updated

Workflow modified during execution.

```json
{
  "type": "workflow_updated",
  "workflow_id": "wf_abc123",
  "changes": ["added_step: color_correction"]
}
```

| Field | Type | Description |
|-------|------|-------------|
| type | string | Event type identifier |
| workflow_id | string | Unique workflow identifier |
| changes | array | List of changes made |

---

### execution_started

Workflow execution begins.

```json
{
  "type": "execution_started",
  "execution_id": "exec_xyz789",
  "workflow_id": "wf_abc123"
}
```

| Field | Type | Description |
|-------|------|-------------|
| type | string | Event type identifier |
| execution_id | string | Unique execution identifier |
| workflow_id | string | Associated workflow identifier |

---

### execution_progress

Step-by-step progress updates.

```json
{
  "type": "execution_progress",
  "execution_id": "exec_xyz789",
  "step": "generate_image",
  "progress": 45,
  "message": "Rendering image..."
}
```

| Field | Type | Description |
|-------|------|-------------|
| type | string | Event type identifier |
| execution_id | string | Unique execution identifier |
| step | string | Current step name |
| progress | number | Progress percentage (0-100) |
| message | string | Progress description |

---

### execution_completed

Workflow execution finished.

```json
{
  "type": "execution_completed",
  "execution_id": "exec_xyz789",
  "workflow_id": "wf_abc123",
  "duration_ms": 12500
}
```

| Field | Type | Description |
|-------|------|-------------|
| type | string | Event type identifier |
| execution_id | string | Unique execution identifier |
| workflow_id | string | Associated workflow identifier |
| duration_ms | number | Total execution time in milliseconds |

---

### tool_call

Internal tool invocation.

```json
{
  "type": "tool_call",
  "tool": "flux_image_generator",
  "parameters": {
    "prompt": "Product shot with dramatic lighting",
    "aspect_ratio": "16:9"
  }
}
```

| Field | Type | Description |
|-------|------|-------------|
| type | string | Event type identifier |
| tool | string | Tool name being invoked |
| parameters | object | Tool input parameters |

---

### message

General system messages.

```json
{
  "type": "message",
  "role": "system",
  "content": "Processing your request..."
}
```

| Field | Type | Description |
|-------|------|-------------|
| type | string | Event type identifier |
| role | string | Message role ("system", "assistant") |
| content | string | Message content |

---

### complete

Final summary with all generations.

```json
{
  "type": "complete",
  "summary": "Successfully created 2 ad creatives",
  "generations": [
    {
      "url": "https://cdn.each.ai/outputs/abc123/ad1.png",
      "media_type": "image",
      "model": "flux-1.1-pro"
    },
    {
      "url": "https://cdn.each.ai/outputs/abc123/ad2.png",
      "media_type": "image",
      "model": "flux-1.1-pro"
    }
  ],
  "tokens_used": 1250,
  "duration_ms": 8500
}
```

| Field | Type | Description |
|-------|------|-------------|
| type | string | Event type identifier |
| summary | string | Human-readable summary |
| generations | array | All generated media items |
| tokens_used | number | Total tokens consumed |
| duration_ms | number | Total request duration |

---

### error

Error during processing.

```json
{
  "type": "error",
  "code": "GENERATION_FAILED",
  "message": "Failed to generate image: content policy violation",
  "recoverable": false
}
```

| Field | Type | Description |
|-------|------|-------------|
| type | string | Event type identifier |
| code | string | Error code |
| message | string | Error description |
| recoverable | boolean | Whether the error can be retried |

---

## Event Flow Examples

### Simple Image Generation

```json
{"type": "thinking_delta", "delta": "Creating a product ad image..."}
{"type": "status", "status": "generating", "message": "Generating with Flux"}
{"type": "tool_call", "tool": "flux_image_generator", "parameters": {"prompt": "..."}}
{"type": "execution_progress", "step": "generate", "progress": 50}
{"type": "generation_response", "url": "https://cdn.each.ai/...", "media_type": "image"}
{"type": "text_response", "text": "Here's your ad creative with the requested style."}
{"type": "complete", "summary": "Created 1 image", "generations": [...]}
```

### Video Generation

```json
{"type": "thinking_delta", "delta": "Planning video ad sequence..."}
{"type": "workflow_created", "workflow_id": "wf_123", "name": "Video Ad"}
{"type": "workflow_built", "workflow_id": "wf_123", "steps": ["generate_keyframe", "animate"]}
{"type": "execution_started", "execution_id": "exec_456", "workflow_id": "wf_123"}
{"type": "status", "status": "generating", "message": "Creating keyframe"}
{"type": "execution_progress", "step": "generate_keyframe", "progress": 100}
{"type": "status", "status": "generating", "message": "Animating to video"}
{"type": "execution_progress", "step": "animate", "progress": 75}
{"type": "generation_response", "url": "https://cdn.each.ai/.../video.mp4", "media_type": "video"}
{"type": "execution_completed", "execution_id": "exec_456", "duration_ms": 45000}
{"type": "complete", "summary": "Created 1 video", "generations": [...]}
```

### Clarification Flow

```json
{"type": "thinking_delta", "delta": "Need more details about the ad format..."}
{"type": "clarification_needed", "question": "What platform is this ad for?", "options": ["Instagram Story", "Facebook Feed", "YouTube Pre-roll"]}
```

After user responds:

```json
{"type": "thinking_delta", "delta": "Creating Instagram Story ad with 9:16 aspect..."}
{"type": "status", "status": "generating", "message": "Generating vertical ad"}
{"type": "generation_response", "url": "https://cdn.each.ai/...", "media_type": "image"}
{"type": "complete", "summary": "Created Instagram Story ad", "generations": [...]}
```

### Multi-step Workflow

```json
{"type": "thinking_delta", "delta": "Planning multi-variant ad campaign..."}
{"type": "workflow_created", "workflow_id": "wf_789", "name": "Ad Campaign"}
{"type": "workflow_built", "workflow_id": "wf_789", "steps": ["generate_base", "create_variants", "add_overlays"]}
{"type": "execution_started", "execution_id": "exec_001", "workflow_id": "wf_789"}
{"type": "status", "status": "generating", "message": "Creating base creative"}
{"type": "execution_progress", "step": "generate_base", "progress": 100}
{"type": "generation_response", "url": "https://cdn.each.ai/.../base.png", "media_type": "image"}
{"type": "status", "status": "processing", "message": "Creating color variants"}
{"type": "execution_progress", "step": "create_variants", "progress": 50}
{"type": "execution_progress", "step": "create_variants", "progress": 100}
{"type": "generation_response", "url": "https://cdn.each.ai/.../variant1.png", "media_type": "image"}
{"type": "generation_response", "url": "https://cdn.each.ai/.../variant2.png", "media_type": "image"}
{"type": "workflow_updated", "workflow_id": "wf_789", "changes": ["added_step: optimize_for_platform"]}
{"type": "execution_progress", "step": "add_overlays", "progress": 100}
{"type": "generation_response", "url": "https://cdn.each.ai/.../final1.png", "media_type": "image"}
{"type": "generation_response", "url": "https://cdn.each.ai/.../final2.png", "media_type": "image"}
{"type": "execution_completed", "execution_id": "exec_001", "duration_ms": 32000}
{"type": "text_response", "text": "Created 5 ad variants optimized for your campaign."}
{"type": "complete", "summary": "Created 5 images", "generations": [...], "tokens_used": 2100, "duration_ms": 32000}
```
