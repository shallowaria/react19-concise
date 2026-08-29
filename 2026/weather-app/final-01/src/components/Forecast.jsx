import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Fab,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Avatar from '@mui/material/Avatar';
import useSWR from 'swr';
import { forecastWeatherFetcher } from '../utils/fetcher';

// Weather forecast
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

function Forecast({ position, setIsHome }) {
  const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
  };

  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const lat = position?.latitude;
  const lon = position?.longitude;

  const { data, error } = useSWR(
    `${API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
    forecastWeatherFetcher,
  );

  const filteredForecastDatalist = data?.list
    .map((forecastData) => {
      return {
        dt: forecastData.dt,
        weatherIcon: `https://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png`,
        min: forecastData.main.temp_min,
        max: forecastData.main.temp_max,
        weather: forecastData.weather[0].main,
        date: forecastData.dt_txt,
      };
    })
    .filter((forecastData) => forecastData.date.includes('12:00:00'))
    .filter((forecastData) => {
      const todatDate = new Date().getDate();
      const forecastDate = new Date(forecastData.date).getDate();
      return forecastDate !== todatDate;
    });

  console.log(filteredForecastDatalist);

  return (
    <>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {filteredForecastDatalist?.map((weatherForecast) => (
          <ListItem key={weatherForecast.dt}>
            <ListItemAvatar>
              <Avatar>
                <img width={48} src={weatherForecast.weatherIcon} alt="" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={weatherForecast.weather}
              secondary={weatherForecast.date.split(' ')[0]}
            />
            <span>
              {Math.floor(weatherForecast.min)}&deg;/
              {Math.ceil(weatherForecast.max)}
              &deg;
            </span>
          </ListItem>
        ))}
      </List>

      <Fab
        color="primary"
        aria-label="add"
        sx={fabStyle}
        onClick={() => setIsHome(true)}
      >
        <HomeIcon />
      </Fab>
    </>
  );
}
export default Forecast;
