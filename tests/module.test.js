const { getLocation, getWeather } = require("../index.js");

describe("Module Tests", () => {
  jest.setTimeout(10000); // allow API requests some time

  test("getLocation returns an object with city, lat, lon", async () => {
    const loc = await getLocation();
    expect(loc).toHaveProperty("city");
    expect(loc).toHaveProperty("lat");
    expect(loc).toHaveProperty("lon");
  });

  test("getWeather returns weather data for a valid city", async () => {
    const weather = await getWeather("Warsaw");
    expect(weather).toHaveProperty("current_condition");
    expect(weather).toHaveProperty("nearest_area");
  });
});
