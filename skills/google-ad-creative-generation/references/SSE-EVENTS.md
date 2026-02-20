# SSE Events Reference

Server-Sent Events (SSE) for the each::sense API.

## Event Types

### thinking_delta
Streaming AI reasoning updates.
```json
{
  "type": "thinking_delta",
  "content": "Analyzing the request..."
}
```
| Field | Type | Description |
|-------|------|-------------|
| type | string | Event type identifier |
| content | string | Incremental thinking text |

### status
Processing status updates.
```json
{
  "type": "status",
  "status": "processing",
  "message": "Generating creative assets"
}
```
| Field | Type | Description |
|-------|------|-------------|
| status | string | Current status (processing, queued, etc.) |
| message | string | Human-readable status message |

### text_response
Text content from the AI.
```json
{
  "type": "text_response",
  "content": "Here are your ad creatives..."
}
```
| Field | Type | Description |
|-------|------|-------------|
| content | string | Response text content |

### generation_response
Generated media output.
```json
{
  "type": "generation_response",
  "url": "https://cdn.example.com/output.png",
  "generations": [
    {
      "url": "https://cdn.example.com/v1.png",
      "seed": 12345
    },
    {
      "url": "https://cdn.example.com/v2.png",
      "seed": 67890
    }
  ],
  "model": "flux-pro"
}
```
| Field | Type | Description |
|-------|------|-------------|
| url | string | Primary generated asset URL |
| generations | array | List of generated variations |
| generations[].url | string | URL for each generation |
| generations[].seed | number | Seed used for generation |
| model | string | Model used for generation |

### clarification_needed
Request for user input.
```json
{
  "type": "clarification_needed",
  "question": "What aspect ratio do you prefer?",
  "options": ["16:9", "1:1", "9:16"],
  "context": "For Google Display ads"
}
```
| Field | Type | Description |
|-------|------|-------------|
| question | string | Clarification question |
| options | array | Available choices (optional) |
| context | string | Additional context |

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
| workflow_id | string | Unique workflow identifier |
| name | string | Workflow name |

### workflow_built
Workflow construction complete.
```json
{
  "type": "workflow_built",
  "workflow_id": "wf_abc123",
  "nodes": 5,
  "edges": 4
}
```
| Field | Type | Description |
|-------|------|-------------|
| workflow_id | string | Workflow identifier |
| nodes | number | Number of nodes in workflow |
| edges | number | Number of connections |

### workflow_updated
Workflow modification.
```json
{
  "type": "workflow_updated",
  "workflow_id": "wf_abc123",
  "changes": ["added_node", "updated_params"]
}
```
| Field | Type | Description |
|-------|------|-------------|
| workflow_id | string | Workflow identifier |
| changes | array | List of changes made |

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
| execution_id | string | Unique execution identifier |
| workflow_id | string | Associated workflow ID |

### execution_progress
Execution progress update.
```json
{
  "type": "execution_progress",
  "execution_id": "exec_xyz789",
  "progress": 65,
  "current_node": "image_generation"
}
```
| Field | Type | Description |
|-------|------|-------------|
| execution_id | string | Execution identifier |
| progress | number | Completion percentage (0-100) |
| current_node | string | Currently executing node |

### execution_completed
Execution finished.
```json
{
  "type": "execution_completed",
  "execution_id": "exec_xyz789",
  "status": "success",
  "outputs": {
    "images": ["https://cdn.example.com/ad1.png"]
  }
}
```
| Field | Type | Description |
|-------|------|-------------|
| execution_id | string | Execution identifier |
| status | string | Final status (success, failed) |
| outputs | object | Generated outputs |

### tool_call
External tool invocation.
```json
{
  "type": "tool_call",
  "tool": "image_generator",
  "params": {
    "prompt": "Modern ad banner",
    "size": "1200x628"
  }
}
```
| Field | Type | Description |
|-------|------|-------------|
| tool | string | Tool name |
| params | object | Tool parameters |

### message
General informational message.
```json
{
  "type": "message",
  "content": "Processing your request",
  "level": "info"
}
```
| Field | Type | Description |
|-------|------|-------------|
| content | string | Message content |
| level | string | Severity (info, warning) |

### complete
Stream completion signal.
```json
{
  "type": "complete",
  "summary": "Generated 3 ad creatives"
}
```
| Field | Type | Description |
|-------|------|-------------|
| summary | string | Completion summary |

### error
Error notification.
```json
{
  "type": "error",
  "code": "GENERATION_FAILED",
  "message": "Unable to generate image",
  "details": {
    "reason": "Invalid dimensions"
  }
}
```
| Field | Type | Description |
|-------|------|-------------|
| code | string | Error code |
| message | string | Error description |
| details | object | Additional error context |

## Event Flow Examples

### Simple Generation Flow
```
thinking_delta -> status -> generation_response -> complete
```

### Workflow Execution Flow
```
workflow_created -> workflow_built -> execution_started ->
execution_progress (repeated) -> execution_completed -> complete
```

### Interactive Flow with Clarification
```
thinking_delta -> clarification_needed -> [user response] ->
status -> generation_response -> complete
```

### Error Recovery Flow
```
execution_started -> execution_progress -> error ->
status (retry) -> execution_completed -> complete
```
