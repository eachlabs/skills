# SSE Event Reference for NSFW Content Generation

Detailed documentation for all Server-Sent Events (SSE) returned by the each::sense `/chat` endpoint when generating NSFW content.

## Event Format

Each event follows this format:
```
data: {"type": "event_type", ...fields}\n\n
```

Stream ends with:
```
data: [DONE]\n\n
```

---

## Event Types

### thinking_delta

AI reasoning as it streams in real-time. Shows model selection and prompt enhancement decisions.

```json
{
  "type": "thinking_delta",
  "content": "I'll create an artistic nude portrait with renaissance styling..."
}
```

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | Incremental thinking text |

---

### status

Current operation being executed. Shows tool usage and parameters.

```json
{
  "type": "status",
  "message": "Generating with flux-2-max...",
  "tool_name": "execute_model",
  "parameters": {"model": "flux-2-max", "prompt": "..."}
}
```

| Field | Type | Description |
|-------|------|-------------|
| `message` | string | Human-readable status message |
| `tool_name` | string | Internal tool being used |
| `parameters` | object | Tool parameters (optional) |

---

### text_response

Text content from the AI (explanations, suggestions, clarifications).

```json
{
  "type": "text_response",
  "content": "I'll create an elegant boudoir photograph with soft romantic lighting."
}
```

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | Text response content |

---

### generation_response

Generated media URL. This is the primary output event containing your generated content.

```json
{
  "type": "generation_response",
  "url": "https://storage.eachlabs.ai/outputs/abc123.png",
  "generations": ["https://storage.eachlabs.ai/outputs/abc123.png"],
  "total": 1,
  "tool_name": "execute_model",
  "model": "flux-2-max"
}
```

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | Primary output URL |
| `generations` | array | All generated URLs |
| `total` | number | Total number of generations |
| `tool_name` | string | Tool that generated output |
| `model` | string | Model used for generation |

---

### clarification_needed

AI needs more information to proceed. Present options to the user.

```json
{
  "type": "clarification_needed",
  "question": "What style would you prefer for this content?",
  "options": [
    "Artistic renaissance style",
    "Modern glamour photography",
    "Vintage pin-up illustration",
    "Fantasy art style"
  ],
  "context": "I want to ensure the output matches your artistic vision."
}
```

| Field | Type | Description |
|-------|------|-------------|
| `question` | string | The question to ask the user |
| `options` | array | Suggested options |
| `context` | string | Additional context |

**Handling:** Send response in a follow-up request with the same `session_id`.

---

### tool_call

Details of a tool being called. Useful for debugging.

```json
{
  "type": "tool_call",
  "name": "execute_model",
  "input": {
    "model_name": "flux-2-max",
    "inputs": {
      "prompt": "Artistic nude portrait, renaissance painting style...",
      "aspect_ratio": "2:3"
    }
  }
}
```

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Tool name |
| `input` | object | Tool input parameters |

---

### message

Informational message from the agent.

```json
{
  "type": "message",
  "content": "Your artistic portrait is being generated. This typically takes 30-60 seconds."
}
```

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | Message content |

---

### complete

Final event with summary. Always sent when stream completes successfully.

```json
{
  "type": "complete",
  "task_id": "chat_1708345678901",
  "status": "ok",
  "tool_calls": [
    {"name": "search_models", "result": "success"},
    {"name": "execute_model", "result": "success", "model": "flux-2-max"}
  ],
  "generations": ["https://storage.eachlabs.ai/outputs/abc123.png"],
  "model": "flux-2-max"
}
```

| Field | Type | Description |
|-------|------|-------------|
| `task_id` | string | Unique task identifier |
| `status` | string | Final status (ok, awaiting_input, error) |
| `tool_calls` | array | Summary of all tool calls |
| `generations` | array | All generated output URLs |
| `model` | string | Primary model used |

**Status values:**
- `ok` - Completed successfully
- `awaiting_input` - Waiting for user clarification
- `error` - An error occurred

---

### error

An error occurred during processing.

```json
{
  "type": "error",
  "message": "Failed to generate image: Invalid parameters"
}
```

| Field | Type | Description |
|-------|------|-------------|
| `message` | string | Error message |

---

## Event Flow Examples

### Simple NSFW Generation

```
thinking_delta -> "I'll create an artistic nude with renaissance styling..."
status -> "Searching for best model..."
status -> "Generating with flux-2-max..."
generation_response -> {url: "https://..."}
complete -> {status: "ok", generations: [...]}
[DONE]
```

### Multi-Turn Character Consistency

```
# First request
thinking_delta -> "Creating initial character..."
generation_response -> {url: "https://...character1.png"}
complete -> {status: "ok"}
[DONE]

# Follow-up request (same session_id)
thinking_delta -> "Using same character from previous generation..."
generation_response -> {url: "https://...character2.png"}
complete -> {status: "ok"}
[DONE]
```

### Clarification Flow

```
thinking_delta -> "I need more details about the desired style..."
clarification_needed -> {question: "What artistic style?", options: [...]}
complete -> {status: "awaiting_input"}
[DONE]
```

---

## Parsing SSE Events

### JavaScript Example

```javascript
const response = await fetch('https://sense.eachlabs.run/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': process.env.EACHLABS_API_KEY,
    'Accept': 'text/event-stream'
  },
  body: JSON.stringify({
    message: 'Generate artistic nude portrait...',
    mode: 'max',
    enable_safety_checker: false
  })
});

const reader = response.body.getReader();
const decoder = new TextDecoder();

while (true) {
  const { done, value } = await reader.read();
  if (done) break;

  const chunk = decoder.decode(value);
  const lines = chunk.split('\n');

  for (const line of lines) {
    if (line.startsWith('data: ')) {
      const data = line.slice(6);
      if (data === '[DONE]') {
        console.log('Stream complete');
        break;
      }

      const event = JSON.parse(data);

      switch (event.type) {
        case 'generation_response':
          console.log('Generated:', event.url);
          break;
        case 'error':
          console.error('Error:', event.message);
          break;
        case 'complete':
          console.log('All outputs:', event.generations);
          break;
      }
    }
  }
}
```

### Python Example

```python
import requests
import json
import os

response = requests.post(
    'https://sense.eachlabs.run/chat',
    headers={
        'Content-Type': 'application/json',
        'X-API-Key': os.environ['EACHLABS_API_KEY'],
        'Accept': 'text/event-stream'
    },
    json={
        'message': 'Generate artistic nude portrait...',
        'mode': 'max',
        'enable_safety_checker': False
    },
    stream=True
)

for line in response.iter_lines():
    if line:
        line = line.decode('utf-8')
        if line.startswith('data: '):
            data = line[6:]
            if data == '[DONE]':
                print('Stream complete')
                break

            event = json.loads(data)

            if event['type'] == 'generation_response':
                print(f"Generated: {event['url']}")
            elif event['type'] == 'error':
                print(f"Error: {event['message']}")
            elif event['type'] == 'complete':
                print(f"All outputs: {event.get('generations', [])}")
```

### cURL with Event Parsing

```bash
curl -N -X POST https://sense.eachlabs.run/chat \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $EACHLABS_API_KEY" \
  -H "Accept: text/event-stream" \
  -d '{
    "message": "Generate artistic nude portrait...",
    "mode": "max",
    "enable_safety_checker": false
  }' | while read line; do
    if [[ $line == data:* ]]; then
      data="${line#data: }"
      if [[ $data == "[DONE]" ]]; then
        echo "Stream complete"
        break
      fi
      echo "$data" | jq -r 'if .type == "generation_response" then "Generated: \(.url)" elif .type == "error" then "Error: \(.message)" else empty end'
    fi
  done
```
