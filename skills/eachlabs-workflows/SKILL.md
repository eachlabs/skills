---
name: eachlabs-workflows
description: Build, run and manage multi-step AI workflows that chain EachLabs models into one API call. Create a workflow from a JSON definition, trigger it, read its results and manage versions. Use when a task chains several models, reuses a fixed prompt, needs a fallback model, runs steps in parallel, routes on a condition, or calls an HTTP API between model steps.
metadata:
  author: eachlabs
  version: "3.0"
---

# EachLabs Workflows

Build, manage, and execute multi-step AI pipelines that chain multiple models together. each::workflows is completely free to use - you only pay for underlying model costs.

## Authentication

```
Header: Authorization: Bearer <your-api-key>
```

Set the `EACHLABS_API_KEY` environment variable. Get your key at [eachlabs.ai](https://www.eachlabs.ai/api-keys). The `X-API-Key` header is also accepted.

## Base URL

```
https://api.eachlabs.ai
```

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/workflows` | Create a workflow (with its first version) |
| GET | `/v1/workflows/{workflowID}` | Get a workflow (UUID or slug) with its versions |
| PUT | `/v1/workflows/{workflowID}/versions/{versionID}` | Create or update a version |
| POST | `/v1/workflows/trigger/{workflowID}/{versionID}` | Run a version |
| POST | `/v1/workflows/bulk-trigger/{workflowID}/{versionID}` | Run a version with 1-10 inputs |
| GET | `/v1/workflows/{workflowID}/executions` | List runs (filter a batch with `?bulk_id=`) |
| GET | `/v1/workflows/executions/{executionID}` | Get a run's status and results |

## When to Use a Workflow

| The task wants to… | A workflow gives it |
|---|---|
| Ship an AI feature as one call | Prompts, models and intermediate files stay on each::labs; the app only sends inputs |
| Change it without an app release | Edit a prompt or swap a model in a new version; callers keep the same workflow ID |
| Keep working when a model fails | A `fallback` model runs automatically if the first one errors |
| Combine image, video, audio and text | Chain an image edit into a video model, then resize, merge clips or add music |
| Go faster | Run independent steps (one per photo, one per scene) in `parallel` |
| Let AI decide the path | Ask a vision model a question, then route with a `choice` step |
| Use your own systems | Call any public HTTPS API from a step to fetch data or run your own code |

One model with a prompt the user writes is simpler as a direct prediction. Use a workflow once the
prompt is fixed, a fallback is wanted, or there is a second step.

## Building a Workflow

### Step 1: Create the Workflow

```bash
curl -X POST https://api.eachlabs.ai/v1/workflows \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $EACHLABS_API_KEY" \
  -d '{
    "name": "Text to Image Generator",
    "definition": {
      "input_schema": {
        "properties": {
          "prompt": { "type": "string", "required": true }
        }
      },
      "steps": [
        {
          "id": "write_prompt",
          "type": "model",
          "model": "eachlabs-llm-router",
          "params": {
            "model": "google/gemini-3.6-flash",
            "messages": [
              { "role": "system", "content": "Rewrite the idea as one vivid, detailed image prompt. Reply with the prompt only." },
              { "role": "user", "content": "$.inputs.prompt" }
            ]
          }
        },
        {
          "id": "generate_image",
          "type": "model",
          "model": "nano-banana-2-text-to-image",
          "params": {
            "prompt": "$.write_prompt.primary.choices[0].message.content",
            "aspect_ratio": "16:9"
          }
        }
      ]
    }
  }'
```

The response has `workflow_id` and `versions[0].version_id` (`v1`). If it returns
`400 invalid argument`, send the same definition to `PUT /v1/workflows/{workflowID}/versions/v1` as
`{"definition": {...}}` to see the exact validation error.

### Step 2: Trigger the Workflow

```bash
curl -X POST https://api.eachlabs.ai/v1/workflows/trigger/{workflowID}/v1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $EACHLABS_API_KEY" \
  -d '{
    "inputs": {"prompt": "A lighthouse on a cliff at sunset"}
  }'
```

Response:
```json
{"execution_id": "exec-123", "status": "queued"}
```

### Step 3: Poll for Result

```bash
curl https://api.eachlabs.ai/v1/workflows/executions/{executionID} \
  -H "Authorization: Bearer $EACHLABS_API_KEY"
```

Response (shortened):
```json
{
  "execution_id": "exec-123",
  "status": "completed",
  "output": "https://cdn-us.eachlabs.ai/uploads/3334048f.png",
  "step_outputs": {
    "write_prompt": {"status": "completed", "primary": {"choices": [{"message": {"content": "A dramatic wide-angle photograph of a lighthouse..."}}]}},
    "generate_image": {"status": "completed", "primary": "https://cdn-us.eachlabs.ai/uploads/3334048f.png"}
  }
}
```

Execution statuses: `running`, `completed`, `failed`, `cancelled`

`output` is the result of the last step. `workflow_output` holds named outputs when the version
defines `output_mapping`.

## Authoring Rules

Follow these and a workflow runs on the first try:

1. Reference values with `$.` paths: `$.inputs.<name>`, `$.<step_id>.primary`, `$.<step_id>.output`, nested fields, and brackets for list items (`$.step.output[0]`). `{{inputs.prompt}}` is NOT a reference; it is sent to the model as literal text.
2. A parameter that is exactly one reference keeps its type (URL, number, list, object). A reference inside a longer string is inserted as text: `"A portrait of $.inputs.name in neon light"`.
3. `primary` is the main result: the file URL for image and video models, the chat completion for `eachlabs-llm-router` (text at `$.step.primary.choices[0].message.content`), the response for `eachlabs-http-step` (JSON fields at `$.step.primary.output.<field>`).
4. If a prompt-like parameter (`prompt`, `user_prompt`, `system_prompt`, `text`, `content`, `message`, `caption`, `title`, `description`) is exactly `$.step.primary` or `$.step.output`, the value arrives JSON-encoded, wrapped in quotes. Reference a deeper field or embed the reference in a sentence.
5. Every step, including steps inside branches, needs a unique `id`. Steps run top to bottom and can only reference inputs and earlier steps.
6. Inputs go in `input_schema.properties`, each with `type`, `required` (`true`/`false`) and an optional `default_value`. Give every optional input a `default_value`: a run fails if a step references an omitted input that has no default. Empty values are dropped from lists, so `["$.inputs.photo1", "$.inputs.photo2"]` works with one or two photos when `photo2` defaults to `""`.
7. Model slugs and parameters are checked when a step runs, not when you save. Read a model's inputs with `GET https://api.eachlabs.ai/v1/models/{slug}` and run the workflow once before shipping it.

## Step Types

| Type | Purpose |
|------|---------|
| `model` | Run a model: `model` (slug), `params`, optional `fallback`, `retry`, `timeout_seconds` |
| `parallel` | Run `branches[].steps` at the same time |
| `choice` | Evaluate a condition and run `condition_met_branch` or `default_branch` |
| `pass` | Return a fixed `result` |

HTTP requests and Python code are not step types. They run as model steps through
`eachlabs-http-step` (below) and `eachlabs-python-step` (private beta).

### Model Steps

```json
{
  "id": "restyle",
  "type": "model",
  "model": "nano-banana-2-edit",
  "params": {
    "prompt": "Restyle this photo as $.inputs.style. Keep the person's face unchanged.",
    "image_urls": ["$.inputs.photo"],
    "aspect_ratio": "9:16"
  },
  "retry": {"max_attempts": 3, "retry_on": ["server_error"]}
}
```

### HTTP Calls

Call any public HTTPS API with the `eachlabs-http-step` model. Params: `url`, `method`, `headers`,
`query_params`, `body` (JSON object for `POST`/`PUT`/`PATCH`), `timeout_seconds` (up to 30
recommended) and `fail_on_status` (`"non_2xx"` stops the run on an error response).

```json
{
  "id": "product",
  "type": "model",
  "model": "eachlabs-http-step",
  "params": {
    "url": "https://dummyjson.com/products/$.inputs.product_id",
    "method": "GET",
    "timeout_seconds": 20,
    "fail_on_status": "non_2xx"
  }
}
```

A later step reads the JSON body as `$.product.primary.output.title`. Put credentials in `headers`
(for example `"Authorization": "Bearer <scoped-token>"`); only public URLs are reachable. To run
your own code, host it behind an HTTPS endpoint and `POST` to it.

### Parallel Steps

```json
{
  "id": "prepare",
  "type": "parallel",
  "branches": [
    {"steps": [{"id": "edit_a", "type": "model", "model": "nano-banana-2-edit", "params": {"prompt": "Full-body photo of this person as a traveler in a sunny old-town street.", "image_urls": ["$.inputs.photo_a"]}}]},
    {"steps": [{"id": "edit_b", "type": "model", "model": "nano-banana-2-edit", "params": {"prompt": "Full-body photo of this person as a traveler in a sunny old-town street.", "image_urls": ["$.inputs.photo_b"]}}]}
  ]
}
```

Later steps reference branch steps by their own ids: `$.edit_a.primary`, `$.edit_b.primary`. A
branch can hold several steps that run in order.

### Choice Steps (Conditional Routing)

```json
{
  "id": "portrait",
  "type": "choice",
  "condition": {
    "expression": "$.subject.primary.choices[0].message.content",
    "operator": "string_matches",
    "value": "*PET*"
  },
  "condition_met_branch": {
    "name": "pet",
    "steps": [{"id": "pet_portrait", "type": "model", "model": "nano-banana-2-edit", "params": {"prompt": "A royal oil-painting portrait of this animal wearing a small crown.", "image_urls": ["$.inputs.photo"]}}]
  },
  "default_branch": {
    "name": "person",
    "steps": [{"id": "person_portrait", "type": "model", "model": "nano-banana-2-edit", "params": {"prompt": "A royal oil-painting portrait of this person wearing a crown. Keep their face unchanged.", "image_urls": ["$.inputs.photo"]}}]
  }
}
```

After the choice, `$.portrait.primary` is the result of whichever branch ran, and `selected` holds
its name.

**Condition operators:**

| Category | Operators |
|----------|-----------|
| Comparison | `equals`, `not_equals` (type-strict), `greater_than`, `less_than`, `greater_than_or_equal`, `less_than_or_equal` |
| String | `string_equals`, `string_matches` (`*` wildcard pattern; without `*` it must match exactly) |
| Existence | `exists` / `is_not_null` (field present), `is_null` / `not_exists` (field present and null) |
| Logical | `and`, `or`, `not` |

`in` and `not_in` are not supported; combine `equals` conditions with `or`.

```json
{"or": [
  {"expression": "$.inputs.format", "operator": "equals", "value": "mp4"},
  {"expression": "$.inputs.format", "operator": "equals", "value": "webm"}
]}
```

### Pass Steps

```json
{"id": "config", "type": "pass", "result": {"style": "cinematic"}}
```

`$.` references inside `result` are not resolved. Later steps read its fields as `$.config.style`.

## Parameter References

| Reference | Value | Example |
|-----------|-------|---------|
| `$.inputs.<name>` | Workflow input | `$.inputs.prompt` |
| `$.<step_id>.primary` | Main result of a step | `$.restyle.primary` |
| `$.<step_id>.output` | Full result of a step | `$.restyle.output` |
| `$.<step_id>.primary.<field>` | Field of an object result | `$.product.primary.output.title` |
| `$.<choice_id>.primary` | Result of the branch that ran | `$.portrait.primary` |

Conditions use the same paths in `expression`.

## Fallback Configuration

```json
{
  "id": "restyle",
  "type": "model",
  "model": "nano-banana-2-edit",
  "params": {"prompt": "Restyle this photo as $.inputs.style.", "image_urls": ["$.inputs.photo"]},
  "fallback": {
    "enabled": true,
    "model": "gpt-image-v2-edit",
    "params": {"prompt": "Restyle this photo as $.inputs.style.", "image_urls": ["$.inputs.photo"]}
  }
}
```

If the primary model fails, the fallback runs with its own `params`, and `$.restyle.primary` is its
result. In the run's `step_outputs`, `restyle_fallback.fallback.reason` is `primary_failed` or
`not_triggered`.

## Version Management

Each version holds a complete definition, so you can change a workflow while callers keep using a
previous version. Trigger a specific version with `/v1/workflows/trigger/{workflowID}/{versionID}`.
Set `locked: true` on a version to stop further changes.

### Create/Update a Version

```bash
curl -X PUT https://api.eachlabs.ai/v1/workflows/{workflowID}/versions/v2 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $EACHLABS_API_KEY" \
  -d '{
    "definition": {
      "input_schema": {
        "properties": {
          "prompt": { "type": "string", "required": true },
          "aspect_ratio": { "type": "string", "required": false, "default_value": "16:9" }
        }
      },
      "steps": [
        {
          "id": "write_prompt",
          "type": "model",
          "model": "eachlabs-llm-router",
          "params": {
            "model": "google/gemini-3.6-flash",
            "messages": [
              { "role": "system", "content": "Rewrite the idea as one vivid, detailed image prompt. Reply with the prompt only." },
              { "role": "user", "content": "$.inputs.prompt" }
            ]
          }
        },
        {
          "id": "generate_image",
          "type": "model",
          "model": "nano-banana-2-text-to-image",
          "params": {
            "prompt": "$.write_prompt.primary.choices[0].message.content",
            "aspect_ratio": "$.inputs.aspect_ratio"
          }
        }
      ]
    },
    "output_mapping": { "image": "$.generate_image.primary" }
  }'
```

A run of `v2` returns the image as `workflow_output.image`. Omitted fields keep their stored values.

## Bulk Trigger

Process multiple inputs (max 10) in a single API call:

```bash
curl -X POST https://api.eachlabs.ai/v1/workflows/bulk-trigger/{workflowID}/v1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $EACHLABS_API_KEY" \
  -d '{
    "inputs": [
      {"prompt": "A red bicycle against a white wall"},
      {"prompt": "A blue bicycle against a white wall"}
    ]
  }'
```

The response has a `bulk_id` and one `execution_id` per input. List the batch with
`GET /v1/workflows/{workflowID}/executions?bulk_id={bulk_id}`. Partial failures are possible.

## Webhooks

Add `webhook_url` (and optionally `webhook_secret`) to a trigger to receive the result instead of polling:

```bash
curl -X POST https://api.eachlabs.ai/v1/workflows/trigger/{workflowID}/v1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $EACHLABS_API_KEY" \
  -d '{
    "inputs": {"prompt": "A lighthouse on a cliff at sunset"},
    "webhook_url": "https://your-server.com/webhook",
    "webhook_secret": "your-secret"
  }'
```

The webhook body has the same shape as the execution response. Deliveries are attempted up to 3
times, about 10 seconds apart. With a `webhook_secret`, verify `X-Webhook-Signature` (HMAC-SHA256
over `<X-Webhook-Timestamp>.<raw body>`).

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

See [references/WORKFLOW-EXAMPLES.md](references/WORKFLOW-EXAMPLES.md) for eight complete workflows,
each run end to end: one-photo effect, restyle then animate, LLM-written prompt, two photos with
music, reliable vision call, HTTP API data, AI routing and parallel scenes.
