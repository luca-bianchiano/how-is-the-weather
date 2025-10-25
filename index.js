#!/usr/bin/env node

// dynamic import for node-fetch v3 (since it’s ESM-only)
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

async function getLocation() {
  const res = await fetch("http://ip-api.com/json/");
  const data = await res.json();
  if (!data || data.status !== "success") throw new Error("Location detection failed");
  return data;
}

async function getWeather(city) {
  const url = `https://wttr.in/${encodeURIComponent(city)}?format=j1`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`wttr.in request failed: ${res.status}`);
  return res.json();
}

async function main() {
  try {
    const argCity = process.argv[2];
    const loc = argCity ? { city: argCity } : await getLocation();
    const weatherData = await getWeather(loc.city);

    const current = weatherData.current_condition?.[0] || {};
    const area = weatherData.nearest_area?.[0] || {};

    const result = {
      location: {
        city: area.areaName?.[0]?.value || loc.city,
        region: area.region?.[0]?.value || loc.regionName || "",
        country: area.country?.[0]?.value || loc.country || "",
        lat: loc.lat,
        lon: loc.lon
      },
      weather: {
        temperature_C: current.temp_C,
        feels_like_C: current.FeelsLikeC,
        humidity: current.humidity,
        wind_speed_kmph: current.windspeedKmph,
        condition: current.weatherDesc?.[0]?.value
      },
      source: "wttr.in",
      timestamp: new Date().toISOString()
    };

    console.log(JSON.stringify(result, null, 2));
  } catch (err) {
    console.error(JSON.stringify({ error: err.message }, null, 2));
    process.exit(1);
  }
}

if (require.main === module) main();

module.exports = { getLocation, getWeather };
