import { Button } from '@mui/material';
import Day from './Day';
import styles from './Home.module.css';
import { useState } from 'react';
import Welcome from './Welcome';
import useSWRMutation from 'swr/mutation';
import useCurrentWeather from '../hooks/useCurrentWeather';

function Home({ getPosition, status }) {
  // const { trigger, data, isMutating, error } = useSWRMutation(API_URL, fetcher);

  // async function getCurrentWeather() {
  //   const position = await getPosition();
  //   const { latitude: lat, longitude: lon } = position;

  //   await trigger({ path: 'weather', lat, lon, apiKey: API_KEY });

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
        {status}
      </Button>
    </section>
  );
}

export default Home;
