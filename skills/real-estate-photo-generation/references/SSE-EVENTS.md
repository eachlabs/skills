# SSE Events Reference

Server-Sent Events (SSE) for the each::sense API streaming responses.

## Event Types

### thinking_delta

Streams AI reasoning process in real-time.

```json
{
  "type": "thinking_delta",
  "delta": "Analyzing the property image..."
}
```

### status

Indicates current processing stage.

```json
{
  "type": "status",
  "status": "processing",
  "message": "Generating enhanced property visuals"
}
```

### text_response

Streams text content progressively.

```json
{
  "type": "text_response",
  "delta": "The generated image shows",
  "full_text": "The generated image shows a modern kitchen with..."
}
```

### generation_response

Returns generated content (images, videos, audio).

```json
{
  "type": "generation_response",
  "content_type": "image",
  "url": "https://cdn.eachlabs.ai/generations/abc123.png",
  "metadata": {
    "width": 1024,
    "height": 1024,
    "model": "flux-pro"
  }
}
```

### clarification_needed

Requests additional user input.

```json
{
  "type": "clarification_needed",
  "question": "What style would you prefer for the renovation?",
  "options": ["Modern", "Traditional", "Minimalist"]
}
```

### workflow_started

Indicates a multi-step workflow has begun.

```json
{
  "type": "workflow_started",
  "workflow_id": "wf_abc123",
  "steps": ["analyze", "generate", "enhance"]
}
```

### workflow_step

Reports progress within a workflow.

```json
{
  "type": "workflow_step",
  "workflow_id": "wf_abc123",
  "step": "generate",
  "step_index": 1,
  "total_steps": 3,
  "status": "in_progress"
}
```

### workflow_completed

Signals workflow completion.

```json
{
  "type": "workflow_completed",
  "workflow_id": "wf_abc123",
  "results": [...]
}
```

### execution_started

Marks the beginning of task execution.

```json
{
  "type": "execution_started",
  "execution_id": "exec_xyz789",
  "task": "real_estate_photo_enhancement"
}
```

### execution_progress

Reports execution progress percentage.

```json
{
  "type": "execution_progress",
  "execution_id": "exec_xyz789",
  "progress": 65,
  "message": "Applying lighting adjustments"
}
```

### tool_call

Indicates an internal tool invocation.

```json
{
  "type": "tool_call",
  "tool": "image_generation",
  "parameters": {
    "prompt": "Modern kitchen renovation",
    "style": "photorealistic"
  }
}
```

### message

General informational message.

```json
{
  "type": "message",
  "content": "Processing your request",
  "level": "info"
}
```

### complete

Signals successful completion.

```json
{
  "type": "complete",
  "session_id": "sess_abc123",
  "total_tokens": 1250,
  "duration_ms": 4500
}
```

### error

Reports an error condition.

```json
{
  "type": "error",
  "code": "GENERATION_FAILED",
  "message": "Failed to generate image",
  "recoverable": true
}
```

## Event Flow Examples

### Simple Generation Flow

```
event: status
data: {"type": "status", "status": "processing", "message": "Starting generation"}

event: thinking_delta
data: {"type": "thinking_delta", "delta": "Analyzing request..."}

event: tool_call
data: {"type": "tool_call", "tool": "image_generation", "parameters": {...}}

event: generation_response
data: {"type": "generation_response", "content_type": "image", "url": "..."}

event: complete
data: {"type": "complete", "session_id": "sess_123", "duration_ms": 3200}
```

### Workflow Execution Flow

```
event: workflow_started
data: {"type": "workflow_started", "workflow_id": "wf_001", "steps": ["analyze", "generate", "enhance"]}

event: workflow_step
data: {"type": "workflow_step", "workflow_id": "wf_001", "step": "analyze", "step_index": 0, "status": "in_progress"}

event: thinking_delta
data: {"type": "thinking_delta", "delta": "Examining property features..."}

event: workflow_step
data: {"type": "workflow_step", "workflow_id": "wf_001", "step": "analyze", "step_index": 0, "status": "completed"}

event: workflow_step
data: {"type": "workflow_step", "workflow_id": "wf_001", "step": "generate", "step_index": 1, "status": "in_progress"}

event: generation_response
data: {"type": "generation_response", "content_type": "image", "url": "..."}

event: workflow_step
data: {"type": "workflow_step", "workflow_id": "wf_001", "step": "generate", "step_index": 1, "status": "completed"}

event: workflow_completed
data: {"type": "workflow_completed", "workflow_id": "wf_001", "results": [...]}

event: complete
data: {"type": "complete", "session_id": "sess_456", "duration_ms": 8500}
```

### Clarification Flow

```
event: thinking_delta
data: {"type": "thinking_delta", "delta": "Need more details..."}

event: clarification_needed
data: {"type": "clarification_needed", "question": "What room type?", "options": ["Kitchen", "Bedroom", "Living Room"]}
```

### Error Flow

```
event: status
data: {"type": "status", "status": "processing", "message": "Starting..."}

event: error
data: {"type": "error", "code": "RATE_LIMIT_EXCEEDED", "message": "Too many requests", "recoverable": true}
```

## Connection Handling

- Reconnect on connection drops with exponential backoff
- Use `Last-Event-ID` header for resumption when supported
- Handle `complete` or `error` events to close connections gracefully
