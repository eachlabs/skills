# SSE Events Reference

Server-Sent Events (SSE) reference for the each::sense API streaming responses.

## Event Types

### thinking_delta
Incremental thinking/reasoning updates from the AI.

```json
{
  "type": "thinking_delta",
  "content": "Analyzing the book cover requirements..."
}
```

### status
Status updates during processing.

```json
{
  "type": "status",
  "status": "processing",
  "message": "Generating book cover design"
}
```

### text_response
Text content streamed incrementally.

```json
{
  "type": "text_response",
  "content": "Here is your book cover design",
  "delta": " design"
}
```

### generation_response
Generated content (images, audio, video).

```json
{
  "type": "generation_response",
  "media_type": "image",
  "url": "https://cdn.example.com/generated/cover.png",
  "metadata": {
    "width": 1600,
    "height": 2400,
    "format": "png"
  }
}
```

### clarification_needed
Request for additional user input.

```json
{
  "type": "clarification_needed",
  "question": "What genre is this book?",
  "options": ["Fiction", "Non-Fiction", "Fantasy", "Romance"]
}
```

### workflow_started
Workflow execution initiated.

```json
{
  "type": "workflow_started",
  "workflow_id": "wf_abc123",
  "workflow_name": "book_cover_generation"
}
```

### workflow_step
Individual workflow step progress.

```json
{
  "type": "workflow_step",
  "step": 2,
  "total_steps": 5,
  "step_name": "style_application",
  "status": "running"
}
```

### workflow_completed
Workflow finished successfully.

```json
{
  "type": "workflow_completed",
  "workflow_id": "wf_abc123",
  "duration_ms": 4500
}
```

### execution_started
Task execution begun.

```json
{
  "type": "execution_started",
  "execution_id": "exec_xyz789",
  "task": "image_generation"
}
```

### execution_progress
Execution progress updates.

```json
{
  "type": "execution_progress",
  "execution_id": "exec_xyz789",
  "progress": 65,
  "eta_seconds": 12
}
```

### execution_completed
Task execution finished.

```json
{
  "type": "execution_completed",
  "execution_id": "exec_xyz789",
  "result": {
    "success": true,
    "output_url": "https://cdn.example.com/output.png"
  }
}
```

### tool_call
External tool invocation.

```json
{
  "type": "tool_call",
  "tool": "image_generator",
  "parameters": {
    "prompt": "Fantasy book cover with dragon",
    "style": "digital_art"
  },
  "call_id": "tc_001"
}
```

### tool_result
Tool execution result.

```json
{
  "type": "tool_result",
  "call_id": "tc_001",
  "result": {
    "url": "https://cdn.example.com/dragon_cover.png"
  }
}
```

### message
General informational message.

```json
{
  "type": "message",
  "role": "assistant",
  "content": "Your book cover is ready for download."
}
```

### complete
Stream completion signal.

```json
{
  "type": "complete",
  "finish_reason": "stop",
  "usage": {
    "prompt_tokens": 150,
    "completion_tokens": 45
  }
}
```

### error
Error during processing.

```json
{
  "type": "error",
  "code": "GENERATION_FAILED",
  "message": "Failed to generate image",
  "details": {
    "retry_after": 5
  }
}
```

## Event Flow Examples

### Simple Generation Flow

```
thinking_delta -> status -> execution_started -> execution_progress ->
generation_response -> complete
```

### Workflow Execution Flow

```
thinking_delta -> workflow_started -> workflow_step (1) -> workflow_step (2) ->
tool_call -> tool_result -> workflow_step (3) -> generation_response ->
workflow_completed -> complete
```

### Error Recovery Flow

```
thinking_delta -> status -> execution_started -> error ->
status (retrying) -> execution_started -> generation_response -> complete
```

### Interactive Flow with Clarification

```
thinking_delta -> clarification_needed -> [user response] ->
thinking_delta -> status -> generation_response -> complete
```
