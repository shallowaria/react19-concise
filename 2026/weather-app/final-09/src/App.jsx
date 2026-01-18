import { useState, Activity } from 'react';

import Container from './ui/Container.jsx';
import Forecast from './features/forecast/Forecast.jsx';
import Home from './features/home/Home.jsx';

import useGeolocation from './hooks/useGeolocation.js';

function App() {
  const { getPosition, status, position } = useGeolocation();

  const [isHome, setIsHome] = useState(true);

  return (
    <Container>
      <Activity mode={isHome ? 'visible' : 'hidden'}>
        <Home getPosition={getPosition} status={status} setIsHome={setIsHome} />
      </Activity>

      <Activity mode={isHome ? 'hidden' : 'visible'}>
        <Forecast position={position} setIsHome={setIsHome} />
      </Activity>
    </Container>
  );
}

export default App;
