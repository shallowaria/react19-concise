import Container from './components/Container';
import Forecast from './components/Forecast';
import Home from './components/Home';
import useGeolocation from './hooks/useGeolocation.js';
import { useState } from 'react';

function App() {
  const { getPosition, state, position } = useGeolocation();

  const [isHome, setIsHome] = useState(true);

  return (
    <Container>
      {isHome && (
        <Home getPosition={getPosition} state={state} setIsHome={setIsHome} />
      )}
      {!isHome && <Forecast position={position} setIsHome={setIsHome} />}
    </Container>
  );
}

export default App;
