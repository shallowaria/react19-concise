import Container from './components/Container';
import Forecast from './components/Forecast';
import Home from './components/Home';
import useGeolocation from './hooks/useGeolocation.js';

function App() {
  const { getPosition, state } = useGeolocation();

  return (
    <Container>
      <Home getPosition={getPosition} state={state}/>
      {/* <Forecast /> */}
    </Container>
  );
}

export default App;
