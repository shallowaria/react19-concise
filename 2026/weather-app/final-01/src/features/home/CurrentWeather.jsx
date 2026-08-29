import { Button } from '@mui/material';

import styles from './CurrentWeather.module.css';
import Day from './Day.jsx';

function CurrentWeather({ data, state, setIsHome }) {
  return (
    <section className={styles.section}>
      {data && (
        <Day
          temperature={{ max: data.main.temp_max, min: data.main.temp_min }}
          iconCode={data.weather[0].icon}
        />
      )}

      {!data && <Welcome>Welcome to Kayb Weather App</Welcome>}
      <Button variant="contained" size="large" onClick={() => setIsHome(false)}>
        {state}
      </Button>
    </section>
  );
}

export default CurrentWeather;
