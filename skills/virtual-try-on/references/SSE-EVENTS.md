# SSE Events Reference

Server-Sent Events (SSE) reference for the each::sense API streaming responses.

## Event Types

### thinking_delta

Streaming reasoning/thinking content from the model.

```json
{
  "type": "thinking_delta",
  "content": "Analyzing the user request..."
}
```

### status

Status updates during processing.

```json
{
  "type": "status",
  "status": "processing",
  "message": "Generating image..."
}
```

### text_response

Text content streamed from the model.

```json
{
  "type": "text_response",
  "content": "Here is your result..."
}
```

### generation_response

Generated content (images, videos, audio).

```json
{
  "type": "generation_response",
  "media_type": "image",
  "url": "https://cdn.example.com/output.png",
  "metadata": {
    "width": 1024,
    "height": 1024
  }
}
```

### clarification_needed

Request for additional user input.

```json
{
  "type": "clarification_needed",
  "question": "Which style would you prefer?",
  "options": ["casual", "formal", "sporty"]
}
```

### workflow_started

Workflow execution has begun.

```json
{
  "type": "workflow_started",
  "workflow_id": "wf_abc123",
  "name": "virtual-try-on"
}
```

### workflow_step

Progress through workflow steps.

```json
{
  "type": "workflow_step",
  "step": 2,
  "total_steps": 4,
  "name": "garment_segmentation"
}
```

### workflow_completed

Workflow finished successfully.

```json
{
  "type": "workflow_completed",
  "workflow_id": "wf_abc123",
  "duration_ms": 12500
}
```

### execution_started

Model execution has started.

```json
{
  "type": "execution_started",
  "model": "virtual-try-on-v2",
  "execution_id": "exec_xyz789"
}
```

### execution_progress

Progress updates during execution.

```json
{
  "type": "execution_progress",
  "progress": 0.65,
  "eta_seconds": 8
}
```

### execution_completed

Model execution finished.

```json
{
  "type": "execution_completed",
  "execution_id": "exec_xyz789",
  "duration_ms": 8500
}
```

### tool_call

Tool/function invocation by the model.

```json
{
  "type": "tool_call",
  "tool": "image_processor",
  "parameters": {
    "action": "resize",
    "width": 512
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

Stream completed successfully.

```json
{
  "type": "complete",
  "session_id": "sess_123abc",
  "total_tokens": 1250
}
```

### error

Error occurred during processing.

```json
{
  "type": "error",
  "code": "GENERATION_FAILED",
  "message": "Failed to generate output",
  "details": {
    "reason": "timeout"
  }
}
```

## Event Flow Examples

### Simple Generation Flow

```
thinking_delta -> status -> execution_started -> execution_progress ->
generation_response -> execution_completed -> complete
```

### Workflow Flow

```
thinking_delta -> workflow_started -> workflow_step (1/3) ->
execution_started -> execution_progress -> execution_completed ->
workflow_step (2/3) -> ... -> workflow_completed ->
generation_response -> complete
```

### Clarification Flow

```
thinking_delta -> clarification_needed -> [user response] ->
thinking_delta -> status -> generation_response -> complete
```

### Error Flow

```
thinking_delta -> status -> execution_started -> error
```

## Listening to Events

```javascript
const eventSource = new EventSource('/api/sense/stream');

eventSource.onmessage = (event) => {
  const data = JSON.parse(event.data);

  switch (data.type) {
    case 'generation_response':
      displayResult(data.url);
      break;
    case 'error':
      handleError(data);
      break;
    case 'complete':
      eventSource.close();
      break;
  }
};
```
