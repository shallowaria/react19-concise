import { useState, Activity } from 'react';

import Container from './components/Container';
import Forecast from './components/Forecast';
import Home from './components/Home';

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
