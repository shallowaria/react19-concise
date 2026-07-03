const API_URL = import.meta.env.VITE_API_URL;

const API_KEY = import.meta.env.VITE_API_KEY;

export async function getCurrentWeather(latitude, longitude) {
  const response = await fetch(
    `${API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
  );
  const data = await response.json();
  return data;
}
