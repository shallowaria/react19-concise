import { Button } from '@mui/material';
import Welcome from './Welcome.jsx';
import useCurrentWeather from '../hooks/useCurrentWeather.js';
import CurrentWeather from './CurrentWeather.jsx';
import styles from './Home.module.css';

function Home({ getPosition, status, setIsHome }) {
  const { data, isMutating, getCurrentWeather } =
    useCurrentWeather(getPosition);

  if (data) {
    return <CurrentWeather data={data} status={status} setIsHome={setIsHome} />;
  }

  return (
    <div className={styles.container}>
      <Welcome>
        {isMutating ? 'Loading...' : 'Welcome To Kayb Weather App'}
      </Welcome>
      <Button
        disabled={isMutating}
        variant="contained"
        size="large"
        onClick={getCurrentWeather}
      >
        {status}
      </Button>
    </div>
  );
}
export default Home;
