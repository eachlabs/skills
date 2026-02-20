# SSE Events Reference

Server-Sent Events (SSE) reference for the each::sense API.

## Event Types

### thinking_delta

Streaming thought process chunks.

```json
{
  "type": "thinking_delta",
  "data": {
    "delta": "Analyzing the request..."
  }
}
```

### status

Status updates during processing.

```json
{
  "type": "status",
  "data": {
    "status": "processing",
    "message": "Generating thumbnail..."
  }
}
```

### text_response

Text content from the AI response.

```json
{
  "type": "text_response",
  "data": {
    "text": "Here is your generated thumbnail.",
    "delta": "Here is"
  }
}
```

### generation_response

Media generation results (images, videos, audio).

```json
{
  "type": "generation_response",
  "data": {
    "media_type": "image",
    "url": "https://cdn.example.com/output.png",
    "metadata": {
      "width": 1280,
      "height": 720,
      "format": "png"
    }
  }
}
```

### clarification_needed

Request for additional user input.

```json
{
  "type": "clarification_needed",
  "data": {
    "question": "What style do you prefer for the thumbnail?",
    "options": ["minimalist", "bold", "photorealistic"]
  }
}
```

### workflow_started

Workflow execution initiated.

```json
{
  "type": "workflow_started",
  "data": {
    "workflow_id": "wf_abc123",
    "name": "thumbnail_generation"
  }
}
```

### workflow_step

Individual workflow step progress.

```json
{
  "type": "workflow_step",
  "data": {
    "step": 2,
    "total_steps": 4,
    "name": "image_generation",
    "status": "running"
  }
}
```

### workflow_completed

Workflow execution finished.

```json
{
  "type": "workflow_completed",
  "data": {
    "workflow_id": "wf_abc123",
    "duration_ms": 4500
  }
}
```

### execution_started

Task execution has begun.

```json
{
  "type": "execution_started",
  "data": {
    "execution_id": "exec_xyz789",
    "model": "flux-pro"
  }
}
```

### execution_progress

Progress updates during execution.

```json
{
  "type": "execution_progress",
  "data": {
    "execution_id": "exec_xyz789",
    "progress": 0.65,
    "eta_seconds": 12
  }
}
```

### tool_call

External tool invocation.

```json
{
  "type": "tool_call",
  "data": {
    "tool": "image_generator",
    "parameters": {
      "prompt": "YouTube thumbnail with bold text",
      "aspect_ratio": "16:9"
    }
  }
}
```

### message

General informational message.

```json
{
  "type": "message",
  "data": {
    "content": "Processing complete.",
    "level": "info"
  }
}
```

### complete

Successful completion of the request.

```json
{
  "type": "complete",
  "data": {
    "request_id": "req_123456",
    "total_duration_ms": 8200
  }
}
```

### error

Error during processing.

```json
{
  "type": "error",
  "data": {
    "code": "GENERATION_FAILED",
    "message": "Image generation timed out",
    "retryable": true
  }
}
```

## Event Flow Examples

### Standard Generation Flow

```
thinking_delta -> status -> execution_started -> execution_progress -> generation_response -> complete
```

### Workflow Execution Flow

```
thinking_delta -> workflow_started -> workflow_step (x N) -> generation_response -> workflow_completed -> complete
```

### Clarification Flow

```
thinking_delta -> clarification_needed -> [user responds] -> status -> generation_response -> complete
```

### Error Flow

```
thinking_delta -> status -> execution_started -> error
```

### Multi-Tool Flow

```
thinking_delta -> tool_call -> status -> tool_call -> generation_response -> text_response -> complete
```
