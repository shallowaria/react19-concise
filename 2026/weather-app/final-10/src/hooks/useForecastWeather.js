import useSWR from 'swr';
import { forecastWeatherFetcher } from '../utils/fetcher';

export default function (position) {
  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const lat = position?.latitude;
  const lon = position?.longitude;

  const { data, error } = useSWR(
    `${API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
    forecastWeatherFetcher,
  );

  const filteredForecastDataList = data?.list
    .map((forecastData) => {
      return {
        id: forecastData.dt,
        weatherIcon: `https://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png`,
        min: forecastData.main.temp_min,
        max: forecastData.main.temp_max,
        weather: forecastData.weather[0].main,
        date: forecastData.dt_txt,
      };
    })
    .filter((forecastData) => forecastData.date.includes('12:00:00'))
    .filter((forecastData) => {
      const todayDate = new Date().getDate();
      const forecastDate = new Date(forecastData.date).getDate();

      return todayDate !== forecastDate;
    });

  return { filteredForecastDataList, error };
}
