import { useEffect, useState } from 'react';

function App() {
  const adviceURL = 'https://api.adviceslip.com/advice';

  const [advice, setAdvice] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  async function getAdvice() {
    setIsLoading(true);

    const response = await fetch(adviceURL);
    const data = await response.json();

    const adviceText = data.slip.advice;

    setIsLoading(false);
    setAdvice(adviceText);
  }

  useEffect(() => {
    getAdvice(); // 以同步代码方式调用，不允许任何 Promise 语法，避免在 useEffect 中使用 async/await
  }, []);

  return (
    <main>
      <h1>Advice App</h1>
      <p>{isLoading ? 'Loading...' : advice}</p>
      <button onClick={getAdvice} disabled={isLoading}>
        Get Advice
      </button>
    </main>
  );
}
export default App;
