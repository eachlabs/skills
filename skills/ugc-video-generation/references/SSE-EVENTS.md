# SSE Events Reference

Server-Sent Events (SSE) types for the each::sense API streaming responses.

## Event Types

### thinking_delta
Streams AI reasoning process in real-time.
```json
{
  "type": "thinking_delta",
  "content": "Analyzing the user request..."
}
```

### status
Reports current processing state.
```json
{
  "type": "status",
  "status": "processing",
  "message": "Generating video content"
}
```

### text_response
Streams text content incrementally.
```json
{
  "type": "text_response",
  "content": "Here is your generated content",
  "delta": "content"
}
```

### generation_response
Returns generated media assets.
```json
{
  "type": "generation_response",
  "media_type": "video",
  "url": "https://cdn.each.ai/outputs/video_abc123.mp4",
  "metadata": {
    "duration": 15,
    "resolution": "1080p"
  }
}
```

### clarification_needed
Requests additional user input.
```json
{
  "type": "clarification_needed",
  "question": "What style would you prefer for the video?",
  "options": ["cinematic", "casual", "professional"]
}
```

### workflow_started
Indicates workflow execution has begun.
```json
{
  "type": "workflow_started",
  "workflow_id": "wf_xyz789",
  "steps": ["script", "avatar", "voice", "render"]
}
```

### workflow_progress
Reports workflow step completion.
```json
{
  "type": "workflow_progress",
  "workflow_id": "wf_xyz789",
  "current_step": "avatar",
  "step_index": 2,
  "total_steps": 4,
  "progress": 50
}
```

### execution_started
Marks the start of a generation task.
```json
{
  "type": "execution_started",
  "execution_id": "exec_001",
  "model": "ugc-video-v1"
}
```

### execution_complete
Indicates task completion with results.
```json
{
  "type": "execution_complete",
  "execution_id": "exec_001",
  "result": {
    "url": "https://cdn.each.ai/outputs/final.mp4",
    "duration": 30
  }
}
```

### tool_call
Reports when AI invokes an internal tool.
```json
{
  "type": "tool_call",
  "tool": "video_generator",
  "parameters": {
    "script": "Welcome to our product demo",
    "avatar": "avatar_professional_01"
  }
}
```

### message
General informational messages.
```json
{
  "type": "message",
  "role": "assistant",
  "content": "Your video is being processed"
}
```

### complete
Signals successful stream completion.
```json
{
  "type": "complete",
  "session_id": "sess_abc123",
  "total_tokens": 1250
}
```

### error
Reports errors during processing.
```json
{
  "type": "error",
  "code": "GENERATION_FAILED",
  "message": "Failed to generate video",
  "details": {
    "reason": "Invalid avatar configuration"
  }
}
```

## Event Flow Examples

### Simple Text Response
```
thinking_delta -> status -> text_response (multiple) -> complete
```

### Video Generation
```
thinking_delta -> status -> tool_call -> execution_started ->
status (processing) -> execution_complete -> generation_response -> complete
```

### Multi-Step Workflow
```
thinking_delta -> workflow_started ->
workflow_progress (step 1) -> execution_started -> execution_complete ->
workflow_progress (step 2) -> execution_started -> execution_complete ->
workflow_progress (step 3) -> execution_started -> execution_complete ->
workflow_progress (step 4) -> execution_started -> execution_complete ->
generation_response -> complete
```

### Error Handling
```
thinking_delta -> status -> execution_started -> error
```

### With Clarification
```
thinking_delta -> clarification_needed -> (user responds) ->
thinking_delta -> status -> execution_started -> ... -> complete
```
