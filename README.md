# Starlight Interdimensional Broadcast Radio Agent (Proof of Concept)

*if you would like me to update the code, drop me a note in r/starlightrobotics or to u/starlightrobotics*

A radio from across impossible dimension that has only one button - "Change channel".
![Image](1.jpeg)

Make sure your backend AI & TTS services are running locally:

Starts as:
```
git clone 
npm init -y https://github.com/starlightrobotics/interdimensional_broadcast_agent.git
cd interdimensional_broadcast_agent
npm install express@4 # install express v4 in the directory
node server.js # start the server on port 3000
```

- AI completion at http://127.0.0.1:5000/v1/chat/completions
- I made Kokoro into a TTS API at http://127.0.0.1:9000/tts
- Worldbuilding data.json in the same directory as index.html

## Components
- node js (but you can write your own Agent)
- [OobaBooga API](https://github.com/oobabooga/text-generation-webui)
    - Uses the "Assistant" character card, so you need to have it, and a model which is currently loaded in Ooba
- TTS (I used Kokoro)

## How it works
- It has a JSON file of pre-generated impossible universes
- pipes it to a local OobaBooga API LLM and a character card "Assistant"
- Generates individual components for a new world:
  - Core Twist
  - World State
  - Dominant Species
  - Culture
  - Technology Level
  - Politics
  - Fashion
  - Laws of Nature
  - Snapshot
  - Tone
- Makes you land in the middle of whatever is playing on the station
- Creates a TTS broadcast (in my case - Kokoro)

