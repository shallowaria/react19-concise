const API_URL =
  'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}';

const API_KEY = 'd367d0af6a5ea85abce2459c7778fe62';

export async function getCurrentWeather(latitude, longitude) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`,
  );
  const data = await response.json();
  return data;
}
