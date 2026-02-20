---
name: SSE Events Reference
description: Server-Sent Events documentation for NSFW image generation streaming responses
---

# SSE Events Reference

The each::sense API uses Server-Sent Events (SSE) for streaming responses during image generation. This document covers the event types and handling for NSFW image generation.

## Connection Setup

### Request with Streaming

```bash
curl -X POST "https://sense.eachlabs.run/chat" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $EACH_API_KEY" \
  -H "Accept: text/event-stream" \
  -d '{
    "messages": [
      {
        "role": "user",
        "content": "Create an artistic nude photograph, dramatic lighting"
      }
    ],
    "mode": "max",
    "enable_safety_checker": false,
    "stream": true
  }'
```

## Event Types

### 1. `message_start`

Indicates the beginning of a new message stream.

```json
event: message_start
data: {
  "type": "message_start",
  "message": {
    "id": "msg_01XFDUDYJgAACzvnptvVoYEL",
    "type": "message",
    "role": "assistant"
  }
}
```

### 2. `content_block_start`

Marks the start of a content block (text or image).

```json
event: content_block_start
data: {
  "type": "content_block_start",
  "index": 0,
  "content_block": {
    "type": "text",
    "text": ""
  }
}
```

For image blocks:

```json
event: content_block_start
data: {
  "type": "content_block_start",
  "index": 1,
  "content_block": {
    "type": "image",
    "source": {
      "type": "url",
      "url": ""
    }
  }
}
```

### 3. `content_block_delta`

Contains incremental content updates.

**Text Delta:**

```json
event: content_block_delta
data: {
  "type": "content_block_delta",
  "index": 0,
  "delta": {
    "type": "text_delta",
    "text": "Here is the artistic "
  }
}
```

**Image Delta:**

```json
event: content_block_delta
data: {
  "type": "content_block_delta",
  "index": 1,
  "delta": {
    "type": "image_delta",
    "url": "https://cdn.eachlabs.run/generated/abc123.png"
  }
}
```

### 4. `content_block_stop`

Indicates completion of a content block.

```json
event: content_block_stop
data: {
  "type": "content_block_stop",
  "index": 0
}
```

### 5. `message_delta`

Contains message-level updates including stop reason.

```json
event: message_delta
data: {
  "type": "message_delta",
  "delta": {
    "stop_reason": "end_turn"
  },
  "usage": {
    "output_tokens": 150
  }
}
```

### 6. `message_stop`

Marks the end of the message stream.

```json
event: message_stop
data: {
  "type": "message_stop"
}
```

### 7. `progress`

Optional progress updates during generation.

```json
event: progress
data: {
  "type": "progress",
  "stage": "generating",
  "progress": 0.45,
  "message": "Generating image..."
}
```

### 8. `error`

Error events during streaming.

```json
event: error
data: {
  "type": "error",
  "error": {
    "code": "content_policy_violation",
    "message": "The requested content violates our acceptable use policy"
  }
}
```

## Progress Stages

| Stage | Description |
|-------|-------------|
| `initializing` | Request received, preparing generation |
| `processing` | Analyzing prompt and preparing model |
| `generating` | Active image generation |
| `finalizing` | Post-processing and quality checks |
| `complete` | Generation finished |

## JavaScript Client Example

```javascript
const EventSource = require('eventsource');

async function generateNSFWImage(prompt) {
  const response = await fetch('https://sense.eachlabs.run/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.EACH_API_KEY}`,
      'Accept': 'text/event-stream'
    },
    body: JSON.stringify({
      messages: [{ role: 'user', content: prompt }],
      mode: 'max',
      enable_safety_checker: false,
      stream: true
    })
  });

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let imageUrl = null;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value);
    const lines = chunk.split('\n');

    for (const line of lines) {
      if (line.startsWith('data: ')) {
        const data = JSON.parse(line.slice(6));

        if (data.type === 'content_block_delta' &&
            data.delta.type === 'image_delta') {
          imageUrl = data.delta.url;
          console.log('Image URL received:', imageUrl);
        }

        if (data.type === 'progress') {
          console.log(`Progress: ${Math.round(data.progress * 100)}%`);
        }

        if (data.type === 'error') {
          throw new Error(data.error.message);
        }
      }
    }
  }

  return imageUrl;
}

// Usage
generateNSFWImage('Artistic nude photograph, dramatic studio lighting')
  .then(url => console.log('Generated:', url))
  .catch(err => console.error('Error:', err));
```

## Python Client Example

```python
import requests
import json
import os

def generate_nsfw_image(prompt):
    response = requests.post(
        'https://sense.eachlabs.run/chat',
        headers={
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {os.environ["EACH_API_KEY"]}',
            'Accept': 'text/event-stream'
        },
        json={
            'messages': [{'role': 'user', 'content': prompt}],
            'mode': 'max',
            'enable_safety_checker': False,
            'stream': True
        },
        stream=True
    )

    image_url = None

    for line in response.iter_lines():
        if line:
            line = line.decode('utf-8')
            if line.startswith('data: '):
                data = json.loads(line[6:])

                if data.get('type') == 'content_block_delta':
                    delta = data.get('delta', {})
                    if delta.get('type') == 'image_delta':
                        image_url = delta.get('url')
                        print(f'Image URL: {image_url}')

                if data.get('type') == 'progress':
                    progress = data.get('progress', 0)
                    print(f'Progress: {int(progress * 100)}%')

                if data.get('type') == 'error':
                    raise Exception(data['error']['message'])

    return image_url

# Usage
url = generate_nsfw_image('Artistic nude, fine art photography style')
print(f'Generated image: {url}')
```

## Error Event Codes

| Code | Description | Resolution |
|------|-------------|------------|
| `safety_check_failed` | Safety checker blocked content | Ensure `enable_safety_checker: false` |
| `content_policy_violation` | Content violates policy | Modify prompt to comply |
| `rate_limit_exceeded` | Too many requests | Implement exponential backoff |
| `invalid_request` | Malformed request | Check request format |
| `server_error` | Internal server error | Retry with backoff |
| `stream_timeout` | Connection timeout | Reconnect and retry |

## Connection Handling

### Retry Logic

```javascript
async function generateWithRetry(prompt, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await generateNSFWImage(prompt);
    } catch (error) {
      if (error.message.includes('rate_limit') && attempt < maxRetries) {
        const backoff = Math.pow(2, attempt) * 1000;
        console.log(`Rate limited, retrying in ${backoff}ms...`);
        await new Promise(r => setTimeout(r, backoff));
        continue;
      }
      throw error;
    }
  }
}
```

### Heartbeat Handling

The server sends periodic heartbeat comments to keep the connection alive:

```
: heartbeat
```

Clients should handle these as no-ops and continue waiting for data events.

## Best Practices

1. **Always handle `error` events** - They can occur at any point during streaming
2. **Implement timeout handling** - Set reasonable timeouts for the entire operation
3. **Buffer incomplete events** - SSE data may be chunked across multiple reads
4. **Track progress** - Use `progress` events to provide user feedback
5. **Clean up connections** - Close connections properly when done or on error
