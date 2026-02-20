# SSE Events Reference

Server-Sent Events (SSE) reference for the each::sense API streaming responses.

## Event Types

### thinking_delta
Incremental thinking/reasoning updates from the model.

```json
{
  "type": "thinking_delta",
  "content": "Analyzing the request parameters..."
}
```

### status
Current processing status updates.

```json
{
  "type": "status",
  "status": "processing",
  "message": "Generating creative assets"
}
```

### text_response
Text content streaming from the model.

```json
{
  "type": "text_response",
  "content": "Here is the generated ad copy...",
  "delta": "ad copy"
}
```

### generation_response
Media generation results (images, videos, audio).

```json
{
  "type": "generation_response",
  "media_type": "video",
  "url": "https://cdn.example.com/output.mp4",
  "metadata": {
    "duration": 15,
    "resolution": "1080x1920"
  }
}
```

### clarification_needed
Request for additional user input.

```json
{
  "type": "clarification_needed",
  "question": "What is the target audience for this ad?",
  "options": ["Gen Z", "Millennials", "General"]
}
```

### workflow_started
Workflow execution has begun.

```json
{
  "type": "workflow_started",
  "workflow_id": "wf_abc123",
  "workflow_name": "tiktok_ad_pipeline"
}
```

### workflow_step
Individual workflow step progress.

```json
{
  "type": "workflow_step",
  "step": 2,
  "total_steps": 5,
  "step_name": "generate_visuals",
  "status": "running"
}
```

### workflow_completed
Workflow execution finished.

```json
{
  "type": "workflow_completed",
  "workflow_id": "wf_abc123",
  "duration_ms": 12500
}
```

### execution_started
Task execution has begun.

```json
{
  "type": "execution_started",
  "execution_id": "exec_xyz789",
  "task": "video_generation"
}
```

### execution_progress
Task execution progress update.

```json
{
  "type": "execution_progress",
  "execution_id": "exec_xyz789",
  "progress": 65,
  "message": "Rendering frames..."
}
```

### execution_completed
Task execution finished.

```json
{
  "type": "execution_completed",
  "execution_id": "exec_xyz789",
  "result": {
    "output_url": "https://cdn.example.com/result.mp4"
  }
}
```

### tool_call
Model invoking an external tool.

```json
{
  "type": "tool_call",
  "tool_name": "image_generator",
  "tool_id": "call_001",
  "parameters": {
    "prompt": "Product showcase with dynamic lighting",
    "aspect_ratio": "9:16"
  }
}
```

### tool_result
Result from a tool invocation.

```json
{
  "type": "tool_result",
  "tool_id": "call_001",
  "result": {
    "image_url": "https://cdn.example.com/image.png"
  }
}
```

### message
General informational message.

```json
{
  "type": "message",
  "role": "assistant",
  "content": "Processing your TikTok ad creative request."
}
```

### complete
Stream finished successfully.

```json
{
  "type": "complete",
  "usage": {
    "input_tokens": 150,
    "output_tokens": 420
  }
}
```

### error
Error occurred during processing.

```json
{
  "type": "error",
  "code": "GENERATION_FAILED",
  "message": "Video generation timed out",
  "retry_after": 5
}
```

## Event Flow Examples

### Simple Text Generation
```
thinking_delta -> thinking_delta -> text_response -> text_response -> complete
```

### Media Generation with Tool Call
```
status (processing) -> tool_call -> execution_started -> execution_progress ->
execution_completed -> tool_result -> generation_response -> complete
```

### Workflow Execution
```
workflow_started -> workflow_step (1/3) -> tool_call -> tool_result ->
workflow_step (2/3) -> execution_started -> execution_progress -> execution_completed ->
workflow_step (3/3) -> generation_response -> workflow_completed -> complete
```

### Error Recovery Flow
```
status (processing) -> execution_started -> error -> status (retrying) ->
execution_started -> execution_completed -> complete
```

### Interactive Flow with Clarification
```
thinking_delta -> clarification_needed -> [user response] ->
thinking_delta -> tool_call -> tool_result -> generation_response -> complete
```
