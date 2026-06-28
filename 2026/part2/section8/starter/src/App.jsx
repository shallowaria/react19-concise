import { useEffect, useState } from 'react';
import useSWR from 'swr';

function App() {
  const adviceURL = 'https://api.adviceslip.com/advice';
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const {
    data,
    isLoading,
    mutate: getAdvice,
    isValidating,
  } = useSWR(adviceURL, fetcher);

  // const [advice, setAdvice] = useState('');
  // const [isLoading, setIsLoading] = useState(false);

  // async function getAdvice() {
  //   setIsLoading(true);

  //   const response = await fetch(adviceURL);
  //   const data = await response.json();

  //   setIsLoading(false);
  //   setAdvice(data.slip.advice);
  // }

  // useEffect(() => {
  //   getAdvice();
  // }, []);

  return (
    <main>
      <h1>Advice App</h1>
      <p>{isValidating ? 'Loading...' : data?.slip?.advice}</p>
      <button disabled={isValidating} onClick={() => getAdvice()}>
        Get Advice
      </button>
    </main>
  );
}

export default App;
