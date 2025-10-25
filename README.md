# how-is-the-weather

![Node.js](https://img.shields.io/badge/node-%3E%3D12-green)
![MIT License](https://img.shields.io/badge/license-MIT-blue)
![GitHub Repo](https://img.shields.io/badge/github-luca--bianchiano%2Fhow--is--the--weather-lightgrey)
![Node.js CI](https://github.com/luca-bianchiano/how-is-the-weather/actions/workflows/test.yml/badge.svg)

A simple Node.js utility that detects your current location and returns the current weather in **JSON format** using [wttr.in](https://wttr.in).  

✅ Works as a **CLI tool** and as an **importable module**  
✅ No API keys or configuration required  
✅ Cross-platform and compatible with CommonJS and ES modules  

---

## Quick Start

### Run via npx (no install required)

Detect location automatically (pretty JSON):

```bash
npx luca-bianchiano/how-is-the-weather
```

Detect location automatically (compact JSON, one-line for piping):

```bash
npx luca-bianchiano/how-is-the-weather --compact
```

Specify a city manually:

```bash
npx luca-bianchiano/how-is-the-weather Paris
```

Specify a city manually with compact JSON:

```bash
npx luca-bianchiano/how-is-the-weather Paris --compact
```

---

## Installation

```bash
# Clone the repo
git clone https://github.com/luca-bianchiano/how-is-the-weather.git
cd how-is-the-weather
npm install
```

---

## Usage

### CLI Mode

```bash
# Auto-detect location (pretty JSON)
npx how-is-the-weather

# Auto-detect location (compact JSON)
npx how-is-the-weather --compact

# Manual city (pretty JSON)
npx how-is-the-weather London

# Manual city (compact JSON)
npx how-is-the-weather London --compact
```

**Example output (pretty JSON):**

```json
{
  "location": {
    "city": "Warsaw",
    "region": "Mazovia",
    "country": "Poland",
    "lat": 52.25,
    "lon": 21.0
  },
  "weather": {
    "temperature_C": "11",
    "feels_like_C": "9",
    "humidity": "77",
    "wind_speed_kmph": "12",
    "condition": "Partly cloudy"
  },
  "source": "wttr.in",
  "timestamp": "2025-10-25T21:15:33.201Z"
}
```

### Module Mode

**CommonJS:**

```js
const { getLocation, getWeather } = require("how-is-the-weather");

(async () => {
  const loc = await getLocation();
  const weather = await getWeather(loc.city);
  console.log(weather);
})();
```

**ES Module:**

```js
import { getLocation, getWeather } from "how-is-the-weather";

const loc = await getLocation();
const weather = await getWeather(loc.city);
console.log(weather);
```

---

## Project Structure

```
how-is-the-weather/
├─ index.js       # CommonJS CLI + module
├─ index.mjs      # ES module version
├─ package.json
└─ README.md
```

---

## Features

- Auto-detects user location via IP  
- Returns **clean JSON output**  
- Optional manual city argument  
- Optional `--compact` flag for one-line JSON  
- Works on Node.js 12+  
- No API key required (uses wttr.in)  

---

## License

MIT © Luca Bianchiano
