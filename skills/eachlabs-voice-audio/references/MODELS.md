# Voice & Audio Models Reference

Complete parameter reference for all voice and audio models. All models use version `0.0.1`.

# Text To Voice

---

## Mureka | Create Podcast

**Slug:** `mureka-create-podcast`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `conversations` | array | No | — | — | Speaker limit: This model supports exactly 2 speakers (two Voice IDs). Requests with more than two speakers are not s... |

---

## Mureka | Stem Song

**Slug:** `mureka-stem-song`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `url` | string | Yes | — | — | — |

---

## ElevenLabs | Text to Speech with Timestamp

**Slug:** `elevenlabs-text-to-speech-with-timestamp`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `text` | string | Yes | — | — | — |
| `model_id` | string | No | `"eleven_multilingual_v2"` | eleven_multilingual_v2,eleven_flash_v2_5,eleven_turbo_v2_5,eleven_turbo_v2,el... | — |
| `voice_id` | string | Yes | — | {"9BWtsMINqrJLrRacOk9x":{"title":"Aria","audio":"https://storage.googleapis.c... | Select a voice while using the web/ui, or send only the raw ElevenLabs voice_id string (e.g. "EXAVITQu4vr4xnSDxMaL") ... |
| `language_code` | string | No | — | — | Language code (ISO 639-1) used to enforce a language for the model and text normalization. If the model does not supp... |
| `stability` | number | No | `"0.5"` | — | — |
| `use_speaker_boost` | boolean | No | — | — | — |
| `similarity_boost` | number | No | `"0.7"` | — | — |
| `style` | number | No | — | — | — |
| `speed` | number | No | — | — | — |
| `seed` | integer | No | — | — | — |
| `previous_text` | string | No | — | — | — |
| `next_text` | string | No | — | — | — |
| `apply_text_normalization` | string | No | `"auto"` | auto,on,off | — |
| `apply_language_text_normalization` | boolean | No | — | — | — |

---

## Minimax Music v2

**Slug:** `minimax-music-v2`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `audio_setting` | object | No | — | — | — |
| `prompt` | string | Yes | — | — | A description of the music, specifying style, mood, and scenario. 10-300 characters. |
| `lyrics_prompt` | string | Yes | — | — | Lyrics of the song. Use n to separate lines. You may add structure tags like [Intro], [Verse], [Chorus], [Bridge], [O... |

---

## Elevenlabs Text to Dialogue

**Slug:** `elevenlabs-text-to-dialogue`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `inputs` | array | Yes | — | — | — |
| `model_id` | string | No | `"eleven_v3"` | eleven_v3 | — |
| `stability` | number | No | `"0.5"` | — | — |
| `language_code` | string | No | — | — | Language code (ISO 639-1) used to enforce a language for the model and text normalization. If the model does not supp... |
| `seed` | integer | No | — | — | If specified, our system will make a best effort to sample deterministically, such that repeated requests with the sa... |
| `apply_text_normalization` | string | No | `"auto"` | auto,on,off | This parameter controls text normalization with three modes: ‘auto’, ‘on’, and ‘off’. When set to ‘auto’, the system ... |

---

## Elevenlabs Voice Design V2

**Slug:** `elevenlabs-voice-design-v2`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `voice_description` | string | Yes | — | — | Description to use for the created voice. |
| `text` | string | No | — | — | Text to generate, text length has to be between 100 and 1000. |
| `auto_generate_text` | boolean | No | `"false"` | — | Whether to automatically generate a text suitable for the voice description. |
| `model_id` | string | No | `"eleven_multilingual_ttv_v2"` | eleven_multilingual_ttv_v2 | — |
| `loudness` | number | No | `"0.5"` | — | Controls the volume level of the generated voice. -1 is quietest, 1 is loudest, 0 corresponds to roughly -24 LUFS. |
| `seed` | integer | No | — | — | Random number that controls the voice generation. Same seed with same inputs produces same voice. max: 2147483646 |
| `guidance_scale` | integer | No | `"5"` | — | Controls how closely the AI follows the prompt. Lower numbers give the AI more freedom to be creative, while higher n... |
| `quality` | number | No | `"0"` | — | Higher quality results in better voice output but less variety. |

---

## Kling V1 | Text to Speech

**Slug:** `kling-v1-tts`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `text` | string | Yes | — | — | The text to be converted to speech Max 120 character |
| `voice_id` | string | No | `"genshin_vindi2"` | genshin_vindi2,zhinen_xuesheng,AOT,ai_shatang,genshin_klee2,genshin_kirara,ai... | The voice ID to use for speech synthesis |
| `voice_speed` | number | No | `"1"` | — | Rate of speech |

---

## Minimax Music | V1.5

**Slug:** `minimax-music-v1-5`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | Lyrics, supports [intro][verse][chorus][bridge][outro] sections. 10-600 characters. |
| `lyrics_prompt` | string | Yes | — | — | Control music generation. 10-3000 characters. |

---

## Stable Audio 2.5 | Text to Audio

**Slug:** `stable-audio-2-5-text-to-audio`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to generate audio from |
| `seconds_total` | integer | No | `"190"` | — | The duration of the audio clip to generate |
| `num_inference_steps` | integer | No | `"8"` | — | The number of steps to denoise the audio for |
| `guidance_scale` | integer | No | `"1"` | — | How strictly the diffusion process adheres to the prompt text (higher values make your audio closer to your prompt). |
| `seed` | integer | No | — | — | — |

---

## Play AI | Text to Speech | Dialog

**Slug:** `play-ai-text-to-speech-dialog`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `input` | string | No | — | — | The dialogue text with turn prefixes to distinguish speakers. |
| `voices` | array | Yes | — | — | The unique ID of a PlayHT or Cloned Voice, or a name from the available presets. |
| `response_format` | string | No | `"url"` | url | The format of the response. |
| `seed` | integer | No | — | — | An integer number greater than or equal to 0. If equal to null or not provided, a random seed will be used. Useful to... |

---

## ElevenLabs | Sound Effects

**Slug:** `elevenlabs-sound-effects`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `text` | string | Yes | — | — | — |
| `duration_seconds` | integer | No | `"1"` | — | The duration of the sound which will be generated in seconds. Must be at least 0.5 and at most 22. If set to None we ... |
| `prompt_influence` | number | No | `"0.3"` | — | A higher prompt influence makes your generation follow the prompt more closely while also making generations less var... |

---

## ElevenLabs | Text to Speech

**Slug:** `elevenlabs-text-to-speech`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `text` | string | Yes | — | — | — |
| `model_id` | string | Yes | `"eleven_v3"` | eleven_multilingual_v2,eleven_flash_v2_5,eleven_turbo_v2_5,eleven_turbo_v2,el... | — |
| `voice_id` | string | Yes | — | {"9BWtsMINqrJLrRacOk9x":{"title":"Aria","audio":"https://storage.googleapis.c... | Select a voice while using the web/ui, or send only the raw ElevenLabs voice_id string (e.g. "EXAVITQu4vr4xnSDxMaL") ... |
| `use_speaker_boost` | boolean | No | `"false"` | — | Boost the similarity of the synthesized speech and the voice at the cost of some generation speed. |
| `style` | number | No | `"0"` | — | High values are recommended if the style of the speech should be exaggerated compared to the uploaded audio. Higher v... |
| `similarity_boost` | number | No | `"0.7"` | — | High enhancement boosts overall voice clarity and target speaker similarity. Very high values can cause artifacts, so... |
| `stability` | number | No | `"0.5"` | — | Increasing stability will make the voice more consistent between re-generations, but it can also make it sounds a bit... |
| `seed` | integer | No | — | — | If specified, our system will make a best effort to sample deterministically, such that repeated requests with the sa... |

---

## Kokoro 82M

**Slug:** `kokoro-82m`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `voice` | string | No | `"af"` | af,af_bella,af_sarah,am_adam,am_michael,bf_emma,bf_isabella,bm_george,bm_lewi... | An enumeration. |
| `speed` | number | No | `"1"` | — | Speech speed multiplier (0.5 = half speed, 2.0 = double speed) |
| `text` | string | Yes | — | — | Text input (long text is automatically split into smaller chunks) |

---

# Voice To Text

---

## ElevenLabs | Speech to Text Scribe V2

**Slug:** `elevenlabs-speech-to-text-scribe-v2`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `media_url` | string | Yes | — | — | — |
| `language_code` | string | No | — | — | An ISO-639-1 or ISO-639-3 language_code corresponding to the language of the audio file. Can sometimes improve transc... |
| `tag_audio_events` | boolean | No | `"false"` | — | Whether to tag audio events like (laughter), (footsteps), etc. in the transcription. |
| `num_speakers` | integer | No | — | — | The maximum amount of speakers talking in the uploaded file. Can help with predicting who speaks when. The maximum am... |
| `timestamps_granularity` | string | No | `"word"` | none,word,character | The granularity of the timestamps in the transcription. ‘word’ provides word-level timestamps and ‘character’ provide... |
| `diarize` | boolean | No | `"false"` | — | Whether to annotate which speaker is currently talking in the uploaded file. |
| `diarization_threshold` | number | No | — | — | Diarization threshold to apply during speaker diarization. A higher value means there will be a lower chance of one s... |
| `temperature` | number | No | — | — | Controls the randomness of the transcription output. Accepts values between 0.0 and 2.0, where higher values result i... |
| `seed` | integer | No | — | — | — |
| `use_multi_channel` | boolean | No | `"false"` | — | Whether the audio file contains multiple channels where each channel contains a single speaker. When enabled, each ch... |

---

## Wizper with Timestamp

**Slug:** `wizper-with-timestamp`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `audio_url` | string | Yes | — | — | URL of the audio file to transcribe. Supported formats: mp3, mp4, mpeg, mpga, m4a, wav or webm. |
| `task` | string | No | `"transcribe"` | transcribe, translate | Task to perform on the audio file. Either transcribe or translate. |
| `language` | string | No | — | af,am,ar,as,az,ba,be,bg,bn,bo,br,bs,ca,cs,cy,da,de,el,en,es,et,eu,fa,fi,fo,fr... | Language of the audio file. If translate is selected as the task, the audio will be translated to English, regardless... |
| `chunk_level` | string | No | `"segment"` | — | Level of the chunks to return. |
| `max_segment_len` | integer | No | `"29"` | — | Maximum speech segment duration in seconds before splitting. |
| `merge_chunks` | boolean | No | `"True"` | — | Whether to merge consecutive chunks. When enabled, chunks are merged if their combined duration does not exceed max_s... |
| `version` | string | No | `"3"` | — | Version of the model to use. All of the models are the Whisper large variant. |

---

## Whisper Diarization

**Slug:** `whisper-diarization`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `file_string` | string | No | — | — | Either provide: Base64 encoded audio file, |
| `file_url` | string | No | — | — | Or provide: A direct audio file URL |
| `file` | string | Yes | — | — | Or an audio file |
| `group_segments` | boolean | No | `"True"` | — | Group segments of same speaker shorter apart than 2 seconds |
| `num_speakers` | integer | No | `"2"` | — | Number of speakers, leave empty to autodetect. |
| `translate` | boolean | No | `"false"` | — | Translate the speech into English. |
| `language` | string | No | `"en"` | — | Language of the spoken words as a language code like 'en'. Leave empty to auto detect language. |
| `prompt` | string | No | — | — | Vocabulary: provide names, acronyms and loanwords in a list. Use punctuation for best accuracy. |

---

## Whisper

**Slug:** `whisper`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `audio_url` | string | Yes | — | — | URL of the audio file to transcribe. Supported formats: mp3, mp4, mpeg, mpga, m4a, wav or webm. |
| `task` | string | No | `"transcribe"` | transcribe,translate | Task to perform on the audio file. Either transcribe or translate. |
| `language` | string | No | — | af,am,ar,as,az,ba,be,bg,bn,bo,br,bs,ca,cs,cy,da,de,el,en,es,et,eu,fa,fi,fo,fr... | Language of the audio file. If set to null, the language will be automatically detected. Defaults to null. If transla... |
| `diarize` | boolean | No | `"False"` | — | Whether to diarize the audio file. Defaults to false. Setting to true will add costs proportional to diarization infe... |
| `chunk_level` | string | No | `"segment"` | none,segment,word | Level of the chunks to return. Either none, segment or word. `none` would imply that all of the audio will be transcr... |
| `version` | string | No | `"3"` | 3 | Version of the model to use. All of the models are the Whisper large variant. |
| `batch_size` | integer | No | `"64"` | — | — |
| `prompt` | string | No | — | — | Prompt to use for generation. Defaults to an empty string. |
| `num_speakers` | integer | No | — | — | Number of speakers in the audio file. Defaults to null. If not provided, the number of speakers will be automatically... |

---

## Wizper

**Slug:** `wizper`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `audio_url` | string | Yes | — | — | URL of the audio file to transcribe. Supported formats: mp3, mp4, mpeg, mpga, m4a, wav or webm. |
| `task` | string | No | `"transcribe"` | transcribe,translate | Task to perform on the audio file. Either transcribe or translate. |
| `language` | string | No | — | af,am,ar,as,az,ba,be,bg,bn,bo,br,bs,ca,cs,cy,da,de,el,en,es,et,eu,fa,fi,fo,fr... | Language of the audio file. If translate is selected as the task, the audio will be translated to English, regardless... |
| `chunk_level` | string | No | `"segment"` | — | Level of the chunks to return. |
| `version` | string | No | `"3"` | — | Version of the model to use. All of the models are the Whisper large variant. |

---

## ElevenLabs | Speech to Text

**Slug:** `elevenlabs-speech-to-text`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `diarization_threshold` | number | No | `"0.22"` | — | Diarization threshold to apply during speaker diarization. A higher value means there will be a lower chance of one s... |
| `audio_url` | string | Yes | — | — | — |
| `model_id` | string | Yes | `"scribe_v1"` | scribe_v1,scribe_v1_experimental | — |
| `language_code` | string | No | — | — | An ISO-639-1 or ISO-639-3 language_code corresponding to the language of the audio file. Can sometimes improve transc... |
| `tag_audio_events` | boolean | No | — | — | — |
| `num_speakers` | integer | No | — | — | — |
| `timestamp_granularity` | string | No | `"none"` | none,word,character | — |
| `diarize` | boolean | No | `"false"` | — | Whether to annotate which speaker is currently talking in the uploaded file. |

---

## Incredibly Fast Whisper

**Slug:** `incredibly-fast-whisper`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `audio` | string | Yes | `"https://storage.googleapis.com/magicpoint/inputs/fast-whisper-input.wav"` | — | Audio refers to the sound or recording that is being analyzed or processed. |
| `task` | string | No | `"transcribe"` | transcribe | Task defines the specific operation or activity the model is required to perform on the input audio. |
| `language` | string | No | `"None"` | None,afrikaans,amharic,arabic,azerbaijani,belarusian,bosnian,breton,bulgarian... | Language refers to the specific language in which the input audio is provided. |
| `batch_size` | integer | No | `"24"` | — | Batch size is the number of samples processed together in one iteration. |
| `timestamp` | string | No | `"chunk"` | chunk,word | Timestamp denotes the specific time at which an event occurs in the audio. |
| `diarise_audio` | boolean | No | — | — | Diarise audio involves splitting a conversation into segments based on who is speaking. |
| `hf_token` | string | No | — | — | HF token is a special key used to authenticate and access resources on the Hugging Face platform. |

---

# Voice To Voice

---

## Mureka | Extend Song

**Slug:** `mureka-extend-song`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `lyrics` | string | Yes | — | — | The lyrics to be extended. |
| `extend_at` | integer | Yes | — | — | Extending start time (milliseconds). If greater than song duration, defaults to song duration. Valid range: [8000,420... |
| `upload_audio_id` | string | No | — | — | Upload ID of the song to be extended, generated by the files/upload API (purpose: audio). Only supports songs generat... |
| `song_id` | string | No | — | — | Song ID for extending, generated by the song/generate API. Mutually exclusive with the upload_audio_id parameter. |

---

## Rvc v2

**Slug:** `rvc-v2`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `input_audio` | string | Yes | — | — | Upload your audio file here. |
| `rvc_model` | string | No | `"CUSTOM"` | Obama,Trump,Sandy,Rogan,CUSTOM | An enumeration. |
| `custom_rvc_model_download_url` | string | No | — | — | URL to download a custom RVC model. If provided, the model will be downloaded (if it doesn't already exist) and used ... |
| `pitch_change` | number | No | `"0"` | — | Adjust pitch of AI vocals in semitones. Use positive values to increase pitch, negative to decrease. |
| `index_rate` | number | No | `"0.5"` | — | Control how much of the AI's accent to leave in the vocals. |
| `filter_radius` | integer | No | `"3"` | — | If >=3: apply median filtering to the harvested pitch results. |
| `rms_mix_rate` | number | No | `"0.25"` | — | Control how much to use the original vocal's loudness (0) or a fixed loudness (1). |
| `f0_method` | string | No | `"rmvpe"` | rmvpe,mangio-crepe | An enumeration. |
| `crepe_hop_length` | integer | No | `"128"` | — | When `f0_method` is set to `mangio-crepe`, this controls how often it checks for pitch changes in milliseconds. |
| `protect` | number | No | `"0.33"` | — | Control how much of the original vocals' breath and voiceless consonants to leave in the AI vocals. Set 0.5 to disable. |
| `output_format` | string | No | `"wav"` | mp3,wav | An enumeration. |

---

## Elevenlabs Voice Design V3

**Slug:** `elevenlabs-voice-design-v3`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `voice_description` | string | Yes | — | — | Description to use for the created voice. |
| `reference_audio_url` | string | Yes | — | — | — |
| `prompt_strength` | number | No | `"0"` | — | Controls the balance of prompt versus reference audio when generating voice samples. 0 means almost no prompt influen... |
| `text` | string | No | — | — | Text to generate, text length has to be between 100 and 1000. |
| `auto_generate_text` | boolean | No | `"false"` | — | Whether to automatically generate a text suitable for the voice description. |
| `guidance_scale` | integer | No | `"5"` | — | Controls how closely the AI follows the prompt. Lower numbers give the AI more freedom to be creative, while higher n... |
| `loudness` | number | No | `"0.5"` | — | Controls the volume level of the generated voice. -1 is quietest, 1 is loudest, 0 corresponds to roughly -24 LUFS. |
| `seed` | integer | No | — | — | Random number that controls the voice generation. Same seed with same inputs produces same voice. max: 2147483646 |
| `model_id` | string | No | `"eleven_ttv_v3"` | eleven_ttv_v3 | — |

---

## Chatterbox | Speech to Speech

**Slug:** `chatterbox-speech-to-speech`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `source_audio_url` | string | Yes | — | — | — |
| `target_voice_audio_url` | string | No | — | — | Optional URL to an audio file to use as a reference for the generated speech. If provided, the model will try to matc... |

---

## Stable Audio 2.5 | Audio to Audio

**Slug:** `stable-audio-2-5-audio-to-audio`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to guide the audio generation |
| `audio_url` | string | Yes | — | — | The audio clip to transform |
| `strength` | number | No | `"0.8"` | — | Sometimes referred to as denoising, this parameter controls how much influence the `audio_url` parameter has on the g... |
| `num_inference_steps` | integer | No | `"8"` | — | The number of steps to denoise the audio for |
| `total_seconds` | integer | No | — | — | The duration of the audio clip to generate. If not provided, it will be set to the duration of the input audio. |
| `guidance_scale` | integer | No | `"1"` | — | How strictly the diffusion process adheres to the prompt text (higher values make your audio closer to your prompt). |
| `seed` | integer | No | — | — | — |

---

## Stable Audio 2.5 | Inpaint

**Slug:** `stable-audio-2-5-inpaint`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `prompt` | string | Yes | — | — | The prompt to guide the audio generation |
| `audio_url` | string | Yes | — | — | The audio clip to inpaint |
| `seconds_total` | integer | No | `"190"` | — | The duration of the audio clip to generate. If not provided, it will be set to the duration of the input audio. |
| `guidance_scale` | integer | No | `"1"` | — | How strictly the diffusion process adheres to the prompt text (higher values make your audio closer to your prompt). |
| `mask_start` | integer | No | `"30"` | — | The start point of the audio mask |
| `mask_end` | integer | No | `"190"` | — | The end point of the audio mask |
| `num_inference_steps` | integer | No | `"8"` | — | The number of steps to denoise the audio for |
| `seed` | integer | No | — | — | — |

---

## Elevenlabs Voice Clone

**Slug:** `elevenlabs-voice-clone`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `name` | string | No | — | — | Enter voice name |
| `files` | array | No | — | — | Upload your files |
| `remove_background_noise` | boolean | No | — | — | — |
| `description` | string | No | — | — | Defines the tone, style, and personality of the generated voice. |

---

## Audio Trimmer

**Slug:** `audio-trimmer-with-fade`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `audio_file` | string | Yes | — | — | Input MP3 file |
| `start_time` | integer | Yes | — | — | Start time in MMSS format, e.g., 130 for 1 minute and 30 seconds |
| `end_time` | integer | Yes | — | — | End time in MMSS format, e.g., 625 for 6 minutes and 25 seconds |
| `fade_out` | boolean | No | `"false"` | — | Apply fade out effect to the last 2.5 seconds |

---

## ElevenLabs | Voice Changer

**Slug:** `elevenlabs-voice-changer`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `audio_url` | string | Yes | — | — | — |
| `model_id` | string | No | `"eleven_english_sts_v2"` | eleven_english_sts_v2 | — |
| `voice_id` | string | Yes | — | {"9BWtsMINqrJLrRacOk9x":{"title":"Aria","audio":"https://storage.googleapis.c... | Select a voice while using the web/ui, or send only the raw ElevenLabs voice_id string (e.g. "EXAVITQu4vr4xnSDxMaL") ... |

---

## ElevenLabs | Dubbing

**Slug:** `elevenlabs-dubbing`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `source_url` | string | Yes | — | — | URL of the source video/audio file. |
| `source_lang` | string | No | — | — | — |
| `target_lang` | string | Yes | — | — | — |

---

## XTTS

**Slug:** `xtts-v2`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `text` | string | No | `"Hello, you are now at Eachlabs AI. If you need any support, just contact us."` | — | This is the written input that you want to be converted into spoken words. |
| `speaker` | string | Yes | — | — | This determines the specific voice or persona that will speak the provided text. |
| `language` | string | No | `"en"` | en,es,fr,de,it,pt,pl,tr,ru,nl,cs,ar,zh,hu,ko,hi | This refers to the choice of language for the text-to-speech synthesis. |
| `cleanup_voice` | boolean | No | `"true"` | — | This option helps in refining and improving the quality of the generated speech. |

---

## Open Voice

**Slug:** `openvoice`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `audio` | string | Yes | `"https://cdn.eachlabs.ai/ipfs/3FA9ck5a0woAEJulGzeg3CJkcPVBcLCfdixBNrAxA8ediDrlA/out.wav"` | — | Input reference audio |
| `text` | string | No | `"Did you ever hear a folk tale about a giant turtle?"` | — | Input text |
| `language` | string | No | `"EN_NEWEST"` | EN_NEWEST,EN,ES,FR,ZH,JP,KR | An enumeration. |
| `speed` | number | No | `"1"` | — | Set speed scale of the output audio |

---

## Voice Changer

**Slug:** `realistic-voice-cloning`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `song_input` | string | Yes | — | — | The original song file provided as input. |
| `rvc_model` | string | No | `"Squidward"` | Squidward,MrKrabs,Plankton,Drake,Vader,Trump,Biden,Obama,Guitar,Voilin,CUSTOM | The specific RVC model used for the function. |
| `custom_rvc_model_download_url` | string | No | — | — | URL to download a custom RVC model. |
| `pitch_change` | string | No | `"no-change"` | no-change,male-to-female,female-to-male | Alteration in the pitch of the audio. |
| `index_rate` | number | No | `"0.5"` | — | The frequency at which indexing is performed. |
| `filter_radius` | integer | No | `"3"` | — | Range of frequencies affected by the filter. |
| `rms_mix_rate` | number | No | `"0.25"` | — | Ratio of root mean square levels for mixing. |
| `pitch_detection_algorithm` | string | No | `"rmvpe"` | rmvpe,mangio-crepe | The method used to detect the pitch of the vocals and instruments. |
| `crepe_hop_length` | integer | No | `"128"` | — | The step size for the pitch detection process using the CREPE algorithm. |
| `protect` | number | No | `"0.33"` | — | Safety or backup mechanism for the original audio. |
| `main_vocals_volume_change` | number | No | `"0"` | — | Adjustment of the main vocals' volume. |
| `backup_vocals_volume_change` | number | No | `"0"` | — | Adjustment of the backup vocals' volume. |
| `instrumental_volume_change` | number | No | `"0"` | — | Change in the volume of the instrumental part of the song. |
| `pitch_change_all` | number | No | `"0"` | — | Modification of the pitch for all elements of the song. |
| `reverb_size` | number | No | `"0.15"` | — | The perceived size of the reverb effect location. |
| `reverb_wetness` | number | No | `"0.2"` | — | The amount of the reverb effect applied (wet signal). |
| `reverb_dryness` | number | No | `"0.8"` | — | The degree to which the direct sound is present without reverb (dry signal). |
| `reverb_damping` | number | No | `"0.7"` | — | The reduction of high frequencies in the reverb effect. |
| `output_format` | string | No | `"mp3"` | mp3,wav | The format of the resulting audio file. |

---

## Toolkit - Video Convert

**Slug:** `toolkit`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `task` | string | Yes | — | convert_input_to_mp4,convert_input_to_gif,extract_video_audio_as_mp3,zipped_f... | An enumeration. |
| `input_file` | string | Yes | — | — | File – zip, image or video to process |
| `fps` | integer | No | `"1"` | — | frames per second, if relevant. Use 0 to keep original fps (or use default). Converting to GIF defaults to 12fps |

---

## Ffmpeg Api | Merge Audio Video

**Slug:** `ffmpeg-api-merge-audio-video`

| Parameter | Type | Required | Default | Options / Constraints | Description |
|-----------|------|----------|---------|----------------------|-------------|
| `video_url` | string | Yes | — | — | URL of the video file to use as the video track |
| `audio_url` | string | Yes | — | — | URL of the audio file to use as the audio track |
| `start_offset` | number | No | `"0"` | — | Offset in seconds for when the audio should start relative to the video |

---
