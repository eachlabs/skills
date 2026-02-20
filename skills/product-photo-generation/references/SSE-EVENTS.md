# SSE Events Reference

Server-Sent Events (SSE) reference for the each::sense API.

## Event Types

### thinking_delta

Streams AI reasoning process in real-time.

```json
{
  "type": "thinking_delta",
  "content": "Analyzing the product image..."
}
```

### status

Indicates current processing stage.

```json
{
  "type": "status",
  "status": "processing",
  "message": "Generating product photo"
}
```

### text_response

Streams text output from the AI.

```json
{
  "type": "text_response",
  "content": "Here is your enhanced product photo with the requested background."
}
```

### generation_response

Returns generated content (images, videos, audio).

```json
{
  "type": "generation_response",
  "content_type": "image",
  "url": "https://cdn.each.ai/generations/abc123.png",
  "metadata": {
    "width": 1024,
    "height": 1024,
    "format": "png"
  }
}
```

### clarification_needed

Requests additional information from the user.

```json
{
  "type": "clarification_needed",
  "question": "What background style would you prefer?",
  "options": ["studio white", "natural outdoor", "gradient"]
}
```

### workflow_started

Indicates a workflow has begun execution.

```json
{
  "type": "workflow_started",
  "workflow_id": "wf_abc123",
  "workflow_name": "Product Photo Enhancement"
}
```

### workflow_step

Reports progress within a workflow.

```json
{
  "type": "workflow_step",
  "step": 2,
  "total_steps": 4,
  "step_name": "Background Removal",
  "status": "completed"
}
```

### workflow_completed

Signals workflow completion.

```json
{
  "type": "workflow_completed",
  "workflow_id": "wf_abc123",
  "duration_ms": 5420
}
```

### execution_started

Marks the beginning of a task execution.

```json
{
  "type": "execution_started",
  "execution_id": "exec_xyz789",
  "task": "product_photo_generation"
}
```

### execution_progress

Reports execution progress percentage.

```json
{
  "type": "execution_progress",
  "execution_id": "exec_xyz789",
  "progress": 65,
  "eta_seconds": 12
}
```

### tool_call

Indicates an AI tool invocation.

```json
{
  "type": "tool_call",
  "tool": "image_generation",
  "parameters": {
    "prompt": "professional product photo",
    "style": "commercial"
  }
}
```

### message

General informational message.

```json
{
  "type": "message",
  "role": "assistant",
  "content": "Processing your request..."
}
```

### complete

Signals successful completion of the request.

```json
{
  "type": "complete",
  "session_id": "sess_abc123",
  "usage": {
    "tokens_used": 1250,
    "generations": 1
  }
}
```

### error

Reports an error during processing.

```json
{
  "type": "error",
  "code": "GENERATION_FAILED",
  "message": "Failed to generate image",
  "retry_after": 5
}
```

## Event Flow Examples

### Simple Generation Flow

```
thinking_delta -> status -> tool_call -> generation_response -> complete
```

### Workflow Execution Flow

```
execution_started -> workflow_started -> workflow_step (x N) ->
generation_response -> workflow_completed -> complete
```

### Flow with Clarification

```
thinking_delta -> clarification_needed -> [user response] ->
status -> tool_call -> generation_response -> complete
```

### Error Recovery Flow

```
execution_started -> status -> error -> [retry] ->
status -> generation_response -> complete
```
