import { Button } from '@mui/material';
import Day from './Day';
import styles from './Home.module.css';
import { getCurrentWeather as getCurrentWeatherApi } from '../services/apiWeather';

function Home({ getPosition, state }) {
  async function getCurrentWeather() {
    const position = await getPosition();

    console.log(position);

    const data = await getCurrentWeatherApi(
      position.latitude,
      position.longitude,
    );
    console.log(data);
  }

  return (
    <section className={styles.section}>
      <Day />
      <Button variant="contained" size="large" onClick={getCurrentWeather}>
        {state}
      </Button>
    </section>
  );
}
export default Home;
