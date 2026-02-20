# SSE Events Reference

Server-Sent Events (SSE) for the each::sense API streaming responses.

## Event Types

### thinking_delta
Streams reasoning process tokens.
```json
{
  "type": "thinking_delta",
  "content": "Analyzing the request...",
  "thinking_id": "think_abc123"
}
```

### status
Reports current processing status.
```json
{
  "type": "status",
  "status": "processing",
  "message": "Generating image...",
  "progress": 45
}
```

### text_response
Streams text response tokens.
```json
{
  "type": "text_response",
  "content": "Here is your generated content",
  "delta": " content"
}
```

### generation_response
Returns generated media (images, videos, audio).
```json
{
  "type": "generation_response",
  "media_type": "image",
  "url": "https://cdn.eachlabs.ai/outputs/abc123.png",
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
  "question": "What style would you prefer?",
  "options": ["realistic", "artistic", "cartoon"],
  "context": "Multiple styles available for this generation"
}
```

### workflow_started
Indicates a workflow has begun execution.
```json
{
  "type": "workflow_started",
  "workflow_id": "wf_xyz789",
  "workflow_name": "image_to_video",
  "steps_total": 3
}
```

### workflow_step
Reports progress through workflow steps.
```json
{
  "type": "workflow_step",
  "workflow_id": "wf_xyz789",
  "step": 2,
  "step_name": "video_generation",
  "status": "running"
}
```

### workflow_completed
Indicates workflow finished successfully.
```json
{
  "type": "workflow_completed",
  "workflow_id": "wf_xyz789",
  "duration_ms": 12500,
  "outputs": ["https://cdn.eachlabs.ai/outputs/video.mp4"]
}
```

### execution_started
Marks the beginning of model execution.
```json
{
  "type": "execution_started",
  "execution_id": "exec_def456",
  "model": "wan-2.1",
  "estimated_time": 30
}
```

### execution_progress
Reports execution progress percentage.
```json
{
  "type": "execution_progress",
  "execution_id": "exec_def456",
  "progress": 75,
  "eta_seconds": 8
}
```

### tool_call
Indicates an internal tool is being invoked.
```json
{
  "type": "tool_call",
  "tool_name": "image_generator",
  "parameters": {
    "prompt": "professional headshot",
    "model": "flux-pro"
  },
  "call_id": "call_ghi789"
}
```

### message
General informational messages.
```json
{
  "type": "message",
  "role": "assistant",
  "content": "Processing your request now."
}
```

### complete
Signals successful completion of the request.
```json
{
  "type": "complete",
  "request_id": "req_abc123",
  "total_duration_ms": 15200,
  "tokens_used": 1250
}
```

### error
Reports errors during processing.
```json
{
  "type": "error",
  "code": "GENERATION_FAILED",
  "message": "Model returned invalid output",
  "retryable": true,
  "request_id": "req_abc123"
}
```

## Event Flow Examples

### Simple Text Response
```
event: status
data: {"type":"status","status":"processing","message":"Thinking..."}

event: thinking_delta
data: {"type":"thinking_delta","content":"Understanding the request..."}

event: text_response
data: {"type":"text_response","content":"Here is","delta":"Here is"}

event: text_response
data: {"type":"text_response","content":" your answer","delta":" your answer"}

event: complete
data: {"type":"complete","request_id":"req_001","total_duration_ms":2100}
```

### Image Generation
```
event: status
data: {"type":"status","status":"processing","message":"Preparing generation..."}

event: execution_started
data: {"type":"execution_started","execution_id":"exec_001","model":"flux-pro"}

event: execution_progress
data: {"type":"execution_progress","execution_id":"exec_001","progress":50}

event: generation_response
data: {"type":"generation_response","media_type":"image","url":"https://cdn.eachlabs.ai/out.png"}

event: complete
data: {"type":"complete","request_id":"req_002","total_duration_ms":8500}
```

### Workflow Execution
```
event: workflow_started
data: {"type":"workflow_started","workflow_id":"wf_001","workflow_name":"ai_influencer","steps_total":3}

event: workflow_step
data: {"type":"workflow_step","workflow_id":"wf_001","step":1,"step_name":"face_generation","status":"running"}

event: execution_progress
data: {"type":"execution_progress","execution_id":"exec_face","progress":100}

event: workflow_step
data: {"type":"workflow_step","workflow_id":"wf_001","step":2,"step_name":"style_transfer","status":"running"}

event: workflow_step
data: {"type":"workflow_step","workflow_id":"wf_001","step":3,"step_name":"upscale","status":"completed"}

event: generation_response
data: {"type":"generation_response","media_type":"image","url":"https://cdn.eachlabs.ai/influencer.png"}

event: workflow_completed
data: {"type":"workflow_completed","workflow_id":"wf_001","duration_ms":25000}

event: complete
data: {"type":"complete","request_id":"req_003","total_duration_ms":25500}
```

### Error Handling
```
event: status
data: {"type":"status","status":"processing","message":"Starting..."}

event: execution_started
data: {"type":"execution_started","execution_id":"exec_err","model":"flux-pro"}

event: error
data: {"type":"error","code":"RATE_LIMIT_EXCEEDED","message":"Too many requests","retryable":true}
```

### Clarification Flow
```
event: thinking_delta
data: {"type":"thinking_delta","content":"User request is ambiguous..."}

event: clarification_needed
data: {"type":"clarification_needed","question":"What aspect ratio?","options":["1:1","16:9","9:16"]}
```
