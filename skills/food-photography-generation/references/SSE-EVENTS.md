# SSE Events Reference

Server-Sent Events (SSE) reference for the each::sense API.

## Event Types

### thinking_delta

Streams AI reasoning process in real-time.

```json
{
  "type": "thinking_delta",
  "content": "Analyzing the food photography request..."
}
```

### status

Indicates current processing stage.

```json
{
  "type": "status",
  "status": "processing",
  "message": "Generating image..."
}
```

### text_response

Streams text content from the AI.

```json
{
  "type": "text_response",
  "content": "Here's your food photography result."
}
```

### generation_response

Returns generated content (images, videos, audio).

```json
{
  "type": "generation_response",
  "media_type": "image",
  "url": "https://cdn.example.com/generated/image.png",
  "metadata": {
    "width": 1024,
    "height": 1024,
    "model": "flux-pro"
  }
}
```

### clarification_needed

Requests additional information from user.

```json
{
  "type": "clarification_needed",
  "question": "What cuisine style would you prefer?",
  "options": ["Italian", "Japanese", "Mexican", "American"]
}
```

### workflow_started

Indicates a workflow has begun execution.

```json
{
  "type": "workflow_started",
  "workflow_id": "wf_abc123",
  "name": "food_photo_generation"
}
```

### workflow_step

Reports progress through workflow steps.

```json
{
  "type": "workflow_step",
  "step": 2,
  "total_steps": 5,
  "step_name": "image_generation",
  "status": "running"
}
```

### workflow_completed

Signals workflow has finished.

```json
{
  "type": "workflow_completed",
  "workflow_id": "wf_abc123",
  "duration_ms": 12500
}
```

### execution_started

Marks the start of a model execution.

```json
{
  "type": "execution_started",
  "execution_id": "exec_xyz789",
  "model": "flux-pro"
}
```

### execution_completed

Signals model execution has finished.

```json
{
  "type": "execution_completed",
  "execution_id": "exec_xyz789",
  "status": "success",
  "duration_ms": 8200
}
```

### tool_call

Indicates an external tool is being invoked.

```json
{
  "type": "tool_call",
  "tool": "image_generator",
  "parameters": {
    "prompt": "Professional food photography of pasta",
    "style": "commercial"
  }
}
```

### message

General informational messages.

```json
{
  "type": "message",
  "content": "Processing your request...",
  "level": "info"
}
```

### complete

Signals the entire request has finished.

```json
{
  "type": "complete",
  "request_id": "req_def456",
  "total_duration_ms": 15000
}
```

### error

Reports errors during processing.

```json
{
  "type": "error",
  "code": "GENERATION_FAILED",
  "message": "Image generation failed. Please try again.",
  "retryable": true
}
```

## Event Flow Examples

### Simple Generation Flow

```
thinking_delta -> status -> tool_call -> execution_started ->
execution_completed -> generation_response -> complete
```

### Workflow Execution Flow

```
thinking_delta -> workflow_started -> workflow_step (1/3) ->
execution_started -> execution_completed -> workflow_step (2/3) ->
execution_started -> execution_completed -> workflow_step (3/3) ->
generation_response -> workflow_completed -> complete
```

### Clarification Flow

```
thinking_delta -> clarification_needed -> [user responds] ->
thinking_delta -> status -> tool_call -> generation_response -> complete
```

### Error Flow

```
thinking_delta -> status -> execution_started -> error -> complete
```

## Connection Handling

- Events are sent as `text/event-stream`
- Each event is prefixed with `data: `
- Events are separated by double newlines
- Connection closes after `complete` or `error` event
