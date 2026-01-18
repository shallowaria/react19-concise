import { List } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

import ForecastListItem from './ForecastListItem';
import FloatingButton from '@/ui/FloatingButton';

import useForecastWeather from '@/hooks/useForecastWeather';

function Forecast({ position, setIsHome }) {
  const { filteredForecastDataList } = useForecastWeather(position);

  function handleClickBackHome() {
    setIsHome(true);
  }

  return (
    <>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {filteredForecastDataList?.map((weatherForecast) => (
          <ForecastListItem
            weatherForecast={weatherForecast}
            key={weatherForecast.id}
          />
        ))}
      </List>

      <FloatingButton onClick={handleClickBackHome}>
        <HomeIcon />
      </FloatingButton>
    </>
  );
}

export default Forecast;
