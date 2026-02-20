---
name: SSE Events Reference
description: Server-Sent Events response format for NSFW video generation
---

# SSE Events Reference

The each::sense API uses Server-Sent Events (SSE) to stream responses for video generation requests.

## Connection Setup

When making requests to the API, set up your client to handle SSE streams:

```bash
curl -X POST "https://sense.eachlabs.run/chat" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Accept: text/event-stream" \
  -d '{
    "messages": [{"role": "user", "content": "Your prompt here"}],
    "mode": "video",
    "enable_safety_checker": false
  }'
```

## Event Types

### 1. Message Start

Indicates the beginning of a new response.

```
event: message_start
data: {"type": "message_start", "message_id": "msg_123456"}
```

### 2. Content Block Start

Signals the start of a content block (text or media).

```
event: content_block_start
data: {"type": "content_block_start", "index": 0, "content_block": {"type": "text"}}
```

### 3. Content Block Delta

Streams incremental content updates.

```
event: content_block_delta
data: {"type": "content_block_delta", "index": 0, "delta": {"type": "text_delta", "text": "Generating your video..."}}
```

### 4. Video Generation Progress

Provides progress updates during video generation.

```
event: progress
data: {"type": "progress", "stage": "generating", "percent": 45, "message": "Rendering frames..."}
```

Progress stages:
- `initializing` - Setting up generation pipeline
- `generating` - Creating video frames
- `rendering` - Assembling final video
- `encoding` - Encoding output format
- `complete` - Generation finished

### 5. Video Result

Contains the generated video URL when complete.

```
event: video_result
data: {
  "type": "video_result",
  "video_url": "https://cdn.eachlabs.run/videos/generated_123456.mp4",
  "duration": 6.0,
  "resolution": "1280x720",
  "format": "mp4"
}
```

### 6. Content Block Stop

Marks the end of a content block.

```
event: content_block_stop
data: {"type": "content_block_stop", "index": 0}
```

### 7. Message Stop

Indicates the response is complete.

```
event: message_stop
data: {"type": "message_stop"}
```

### 8. Error Event

Reports errors during generation.

```
event: error
data: {"type": "error", "error": {"type": "generation_failed", "message": "Video generation failed"}}
```

## Event Sequence

Typical successful generation flow:

```
message_start
  -> content_block_start (text)
  -> content_block_delta (status messages)
  -> progress (multiple updates)
  -> content_block_stop
  -> content_block_start (video)
  -> video_result
  -> content_block_stop
message_stop
```

## Handling SSE in Code

### JavaScript/Node.js

```javascript
const EventSource = require('eventsource');

const response = await fetch('https://sense.eachlabs.run/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    messages: [{ role: 'user', content: 'Your NSFW video prompt' }],
    mode: 'video',
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
      const data = JSON.parse(line.slice(6));

      if (data.type === 'video_result') {
        console.log('Video URL:', data.video_url);
      } else if (data.type === 'progress') {
        console.log(`Progress: ${data.percent}% - ${data.message}`);
      }
    }
  }
}
```

### Python

```python
import requests
import json

response = requests.post(
    'https://sense.eachlabs.run/chat',
    headers={
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
    },
    json={
        'messages': [{'role': 'user', 'content': 'Your NSFW video prompt'}],
        'mode': 'video',
        'enable_safety_checker': False
    },
    stream=True
)

for line in response.iter_lines():
    if line:
        line = line.decode('utf-8')
        if line.startswith('data: '):
            data = json.loads(line[6:])

            if data['type'] == 'video_result':
                print(f"Video URL: {data['video_url']}")
            elif data['type'] == 'progress':
                print(f"Progress: {data['percent']}% - {data['message']}")
```

## Error Handling

Common error types in SSE responses:

| Error Type | Description | Recovery |
|------------|-------------|----------|
| `rate_limit_error` | Too many concurrent requests | Wait and retry with backoff |
| `generation_failed` | Video generation error | Retry with modified prompt |
| `timeout_error` | Generation took too long | Simplify prompt, retry |
| `invalid_request` | Malformed request | Check request format |
| `authentication_error` | Invalid API key | Verify credentials |

## Timeouts and Reconnection

- Default timeout: 120 seconds for video generation
- For longer generations, the API sends keepalive events
- Implement reconnection logic for network interruptions
- Use `session_id` to resume interrupted series

## Video Output Specifications

| Property | Value |
|----------|-------|
| Format | MP4 (H.264) |
| Resolution | Up to 1280x720 |
| Duration | 4-8 seconds typical |
| Frame Rate | 24-30 FPS |
| Audio | None (silent) |

## Best Practices

1. **Buffer events** - Process events in order, buffer if needed
2. **Handle all event types** - Don't assume event order
3. **Implement timeouts** - Set reasonable client-side timeouts
4. **Log progress** - Track progress events for debugging
5. **Save video URLs** - URLs may expire, download promptly
