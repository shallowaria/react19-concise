const API_URL =
  'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';

const API_KEY = '8ab7e6caf8372f41065178ff1992053e';

export async function getCurrentWeather(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
  );

  const data = await response.json();

  return data;
}
