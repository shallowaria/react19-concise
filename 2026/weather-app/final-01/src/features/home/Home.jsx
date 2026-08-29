import { Button } from '@mui/material';

import Welcome from '@/ui/Welcome';
import useCurrentWeather from '@/hooks/useCurrentWeather';
import CurrentWeather from './CurrentWeather';

function Home({ getPosition, state, setIsHome }) {
  const { getCurrentWeather, data, isMutating, error } =
    useCurrentWeather(getPosition);

  if (data) {
    return <CurrentWeather data={data} state={state} setIsHome={setIsHome} />;
  }

  return (
    <>
      <Welcome>
        {isMutating ? 'Loading...' : 'Welcome to Kayb Weather App'}
      </Welcome>
      <Button
        disabled={isMutating}
        variant="contained"
        size="large"
        onClick={getCurrentWeather}
      >
        {state}
      </Button>
    </>
  );
}
export default Home;
