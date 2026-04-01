---
name: eachlabs-workflows
description: Build and orchestrate multi-step AI workflows combining multiple EachLabs models. Create custom pipelines, trigger executions, and manage workflow versions. Use when the user needs to chain multiple AI models or automate multi-step content creation.
metadata:
  author: eachlabs
  version: "2.0"
---

# EachLabs Workflows

Build, manage, and execute multi-step AI pipelines that chain multiple models together. each::workflows is completely free to use - you only pay for underlying model costs.

## Authentication

```
Header: X-API-Key: <your-api-key>
```

Set the `EACHLABS_API_KEY` environment variable. Get your key at [eachlabs.ai](https://www.eachlabs.ai/api-keys).

## Base URL

```
https://workflows.eachlabs.run/api/v1
```

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/categories` | List workflow categories |
| POST | `/workflows` | Create a workflow |
| GET | `/workflows/{id}` | Get workflow (UUID or slug) |
| PUT | `/workflows/{id}` | Update workflow metadata |
| PUT | `/workflows/{id}/versions/{versionID}` | Create or update version |
| POST | `/{id}/trigger` | Trigger execution |
| POST | `/{id}/bulk-trigger` | Bulk trigger (1-10 parallel) |
| GET | `/workflows/{id}/executions` | List executions |
| GET | `/executions/{executionID}` | Get execution details |

## Building a Workflow

### Step 1: Create the Workflow

```bash
curl -X POST https://workflows.eachlabs.run/api/v1/workflows \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -d '{
    "name": "Image Enhancement Pipeline",
    "description": "Generate and upscale images",
    "categories": ["image-generation"],
    "definition": {
      "version": "v1",
      "input_schema": {
        "type": "object",
        "properties": {
          "prompt": {"type": "string", "description": "Image description"}
        },
        "required": ["prompt"]
      },
      "steps": [
        {
          "step_id": "generate",
          "type": "model",
          "model": "flux-2-pro",
          "params": {
            "prompt": "{{inputs.prompt}}",
            "aspect_ratio": "16:9"
          }
        },
        {
          "step_id": "upscale",
          "type": "model",
          "model": "topaz-upscale-image",
          "params": {
            "image_url": "{{generate.primary}}",
            "scale": 2
          }
        }
      ]
    }
  }'
```

### Step 2: Trigger the Workflow

```bash
curl -X POST https://workflows.eachlabs.run/api/v1/{workflowID}/trigger \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -d '{
    "version_id": "v1",
    "inputs": {"prompt": "A sunset landscape"},
    "webhook_url": "https://your-server.com/webhook"
  }'
```

Response:
```json
{"execution_id": "exec-123", "status": "queued", "started_at": "..."}
```

### Step 3: Poll for Result

```bash
curl https://workflows.eachlabs.run/api/v1/executions/{executionID} \
  -H "X-API-Key: $EACHLABS_API_KEY"
```

Response:
```json
{
  "execution_id": "exec-123",
  "workflow_id": "wf-456",
  "status": "completed",
  "inputs": {"prompt": "A sunset landscape"},
  "step_outputs": {
    "generate": {
      "step_id": "generate",
      "status": "completed",
      "output": "https://cdn.example.com/image.png",
      "primary": "https://cdn.example.com/image.png",
      "metadata": {"model": "flux-2-pro", "version": "1.0.0"}
    }
  },
  "output": ["https://cdn.example.com/upscaled.png"]
}
```

Execution statuses: `running`, `completed`, `failed`, `cancelled`

## Step Types

| Type | Purpose |
|------|---------|
| `model` | Execute an AI model via each::api |
| `http` | External HTTP request (GET, POST, PUT, DELETE, PATCH) |
| `python` | Execute Python code |
| `parallel` | Execute multiple branches concurrently |
| `choice` | Evaluate condition and route to matching branch |
| `pass` | Pass-through with optional static value injection |

All steps support:
- `continue_on_error` (boolean) - Continue workflow if step fails
- `timeout_seconds` (integer) - Step timeout
- `retry` configuration - Automatic retry on failure

### Model Steps

```json
{
  "step_id": "generate",
  "type": "model",
  "model": "flux-2-max",
  "params": {
    "prompt": "{{inputs.prompt}}",
    "aspect_ratio": "16:9"
  }
}
```

### HTTP Steps

```json
{
  "step_id": "call_api",
  "type": "http",
  "url": "https://api.example.com/process",
  "method": "POST",
  "headers": {"Content-Type": "application/json"},
  "body": {"data": "{{generate.primary}}"},
  "auth": {"type": "bearer", "token": "{{inputs.api_token}}"},
  "timeout": 30000
}
```

Auth types: `basic` (username/password), `bearer` (token), `api_key`

### Python Steps

```json
{
  "step_id": "transform",
  "type": "python",
  "code": "result = inputs['text'].upper()",
  "inputs": {"text": "{{generate.primary}}"}
}
```

### Parallel Steps

Execute multiple branches simultaneously:

```json
{
  "step_id": "step1",
  "type": "parallel",
  "branches": [
    {
      "name": "Video Generation",
      "steps": [
        {
          "step_id": "step1_branch_0",
          "type": "model",
          "model": "kling-3-0",
          "params": {"prompt": "{{inputs.prompt}}", "duration": 5}
        }
      ]
    },
    {
      "name": "Image Edit",
      "steps": [
        {
          "step_id": "step1_branch_1",
          "type": "model",
          "model": "flux-2-edit",
          "params": {"prompt": "{{inputs.prompt}}", "image_url": "{{inputs.image}}"}
        }
      ]
    }
  ]
}
```

### Choice Steps (Conditional Routing)

```json
{
  "step_id": "step2",
  "type": "choice",
  "condition": {
    "expression": "$.step1.primary",
    "operator": "string_matches",
    "value": ".mp4"
  },
  "condition_met_branch": {
    "name": "condition_met",
    "step_id": "step2_condition_met",
    "steps": [
      {"step_id": "step2_branch_0", "type": "model", "model": "topaz-upscale-video", "params": {"video": "{{step1.primary}}", "scale": 2}}
    ]
  },
  "default_branch": {
    "name": "default",
    "step_id": "step2_default",
    "steps": [
      {"step_id": "step2_default", "type": "model", "model": "topaz-upscale-image", "params": {"image_url": "{{step1.primary}}", "scale": 2}}
    ]
  }
}
```

**Condition operators:**

| Category | Options |
|----------|---------|
| Comparison | `equals`, `not_equals`, `greater_than`, `less_than`, `greater_than_or_equal`, `less_than_or_equal` |
| String | `string_equals`, `string_matches` |
| Array | `in`, `not_in` |
| Existence | `exists`, `not_exists`, `is_null`, `is_not_null` |

**Logical operators:** `and`, `or`, `not` for complex conditions:
```json
{"and": [
  {"expression": "$.step1.primary", "operator": "string_matches", "value": ".png"},
  {"expression": "$.inputs.upscale", "operator": "equals", "value": true}
]}
```

### Pass Steps

```json
{"step_id": "config", "type": "pass", "result": {"style": "cinematic"}}
```

## Parameter References (Template Syntax)

Use `{{double braces}}` to reference inputs and step outputs:

| Reference | Purpose | Example |
|-----------|---------|---------|
| `{{inputs.field}}` | Workflow input value | `{{inputs.prompt}}` |
| `{{step_id.output}}` | Full step output | `{{generate.output}}` |
| `{{step_id.primary}}` | Primary/first result | `{{generate.primary}}` |
| `{{branch_step_id.primary}}` | Output from parallel branch | `{{step1_branch_0.primary}}` |

Templates can be embedded in strings: `"A portrait of {{inputs.name}} in {{inputs.style}} style"`

Conditions use `$` syntax: `$.step_id.primary`, `$.inputs.field`

## Fallback Configuration

Automatic fallback to secondary model when primary fails:

```json
{
  "step_id": "generate",
  "type": "model",
  "model": "flux-2-max",
  "params": {"prompt": "{{inputs.prompt}}"},
  "fallback": {
    "enabled": true,
    "model": "flux-2-pro",
    "params": {"prompt": "{{inputs.prompt}}"}
  }
}
```

## Version Management

Steps are defined in versions, not in the workflow itself. This allows iterating while keeping previous versions intact.

**Version states:** `active`, `archived`, `deleted`

**Locking:** Set `locked: true` to prevent modifications (for production stability).

**Visibility:**
- `allowed_to_share: false` (default) - Private, organization only
- `allowed_to_share: true` - Unlisted, accessible via direct link

### Create/Update a Version

```bash
curl -X PUT https://workflows.eachlabs.run/api/v1/workflows/{workflowID}/versions/{versionID} \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -d '{
    "description": "Added upscaling step",
    "definition": {
      "version": "v1",
      "input_schema": {
        "type": "object",
        "properties": {
          "prompt": {"type": "string"}
        },
        "required": ["prompt"]
      },
      "steps": [...]
    }
  }'
```

## Bulk Trigger

Process multiple inputs (max 10) in a single API call:

```bash
curl -X POST https://workflows.eachlabs.run/api/v1/{workflowID}/bulk-trigger \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -d '{
    "version_id": "v1",
    "inputs": [
      {"prompt": "A sunset landscape"},
      {"prompt": "A mountain scene"},
      {"prompt": "An ocean view"}
    ],
    "webhook_url": "https://your-server.com/webhook"
  }'
```

Response includes `bulk_id` for tracking. Partial failures are possible.

## Webhooks

Configure a webhook to receive results asynchronously:

```bash
curl -X POST https://workflows.eachlabs.run/api/v1/{workflowID}/trigger \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -d '{
    "version_id": "v1",
    "inputs": {"prompt": "A sunset landscape"},
    "webhook_url": "https://your-server.com/webhook",
    "webhook_secret": "your-secret"
  }'
```

**Webhook payload (success):**
```json
{"execution_id": "...", "workflow_id": "...", "status": "completed", "inputs": {}, "step_outputs": {}, "output": []}
```

**Retry schedule:** ~30 seconds, ~2 minutes, ~10 minutes

Verify webhook authenticity using HMAC-SHA256 with `webhook_secret`.

## Workflow Builder via each::sense

You can also build workflows using natural language via the each::sense workflow endpoint:

```bash
curl -X POST https://eachsense-agent.core.eachlabs.run/workflow \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -d '{
    "message": "Create a workflow that generates an image and then upscales it",
    "stream": true,
    "session_id": "my-session"
  }'
```

To update an existing workflow, include `workflow_id` and `version_id`.

## Example Workflow References

See [references/WORKFLOW-EXAMPLES.md](references/WORKFLOW-EXAMPLES.md) for common workflow patterns.
