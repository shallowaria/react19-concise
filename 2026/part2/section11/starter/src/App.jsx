import useSWR from 'swr';
import useTime from './useTime';

function App() {
  const adviceURL = 'https://api.adviceslip.com/advice';
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const {
    data,
    isLoading,
    isValidating,
    mutate: getAdvice,
  } = useSWR(adviceURL, fetcher);

  // const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTime(new Date().toLocaleString());
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  const currentTime = useTime();

  return (
    <main>
      <h1>Advice App</h1>
      <span>{currentTime}</span>
      <p>{isLoading ? 'Loading...' : data.slip?.advice}</p>
      <button disabled={isLoading || isValidating} onClick={() => getAdvice()}>
        Get Advice
      </button>
    </main>
  );
}

export default App;
