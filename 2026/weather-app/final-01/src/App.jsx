import { useState, Activity } from 'react';

import Container from './ui/Container';
import Forecast from './features/forecast/Forecast';
import Home from './features/home/Home';

import useGeolocation from './hooks/useGeolocation.js';

function App() {
  const { getPosition, state, position } = useGeolocation();

  const [isHome, setIsHome] = useState(true);

  return (
    <Container>
      <Activity mode={isHome ? 'visible' : 'hidden'}>
        <Home getPosition={getPosition} state={state} setIsHome={setIsHome} />
      </Activity>

      <Activity mode={isHome ? 'hidden' : 'visible'}>
        <Forecast position={position} setIsHome={setIsHome} />
      </Activity>
    </Container>
  );
}

export default App;
