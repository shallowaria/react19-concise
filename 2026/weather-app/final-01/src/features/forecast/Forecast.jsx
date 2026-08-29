import { List } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

import ForecastListItem from './ForecastListItem.jsx';
import FloatingButton from '@/ui/FloatingButton.jsx';

import useForecastWeather from '@/hooks/useForecastWeather.js';

// Weather forecast
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

function Forecast({ position, setIsHome }) {
  const { filteredForecastDatalist } = useForecastWeather(position);

  const handleBackHome = () => {
    setIsHome(true);
  };

  return (
    <>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {filteredForecastDatalist?.map((weatherForecast) => (
          <ForecastListItem
            key={weatherForecast.id}
            weatherForecast={weatherForecast}
          />
        ))}
      </List>

      <FloatingButton onClick={handleBackHome}>
        <HomeIcon />
      </FloatingButton>
    </>
  );
}
export default Forecast;
