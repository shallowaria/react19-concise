import { Button } from '@mui/material';
import Day from './Day';
import styles from './Home.module.css';
import Welcome from './Welcome';
import useCurrentWeather from '../hooks/useCurrentWeather';

function Home({ getPosition, state }) {
  const { getCurrentWeather, data, isMutating, error } =
    useCurrentWeather(getPosition);

  return (
    <section className={styles.section}>
      {data && (
        <Day
          temperature={{ max: data.main.temp_max, min: data.main.temp_min }}
          iconCode={data.weather[0].icon}
        />
      )}

      {!data && <Welcome>Welcome to Kayb Weather App</Welcome>}
      <Button
        disabled={isMutating}
        variant="contained"
        size="large"
        onClick={getCurrentWeather}
      >
        {state}
      </Button>
    </section>
  );
}
export default Home;
