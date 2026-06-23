import { useState } from 'react';
import './App.css';
// import UsernameInput from './UsernameInput';
// import UserPasswordClass from './UserPasswordClass';
import AppInput from './AppInput';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameClass = username.length <= 5 ? 'input-error' : 'input';
  const passwordClass = password.length <= 5 ? 'input-error' : 'input';

  function handleSubmit(event) {
    event.preventDefault();

    if (usernameClass === 'input-error' || passwordClass === 'input-error') {
      return;
    }

    console.log('username: ', username);
    console.log('password: ', password);

    setUsername('');
    setPassword('');
  }

  return (
    <main>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
        <AppInput
          type="text"
          value={username}
          className={usernameClass}
          setValue={setUsername}
        />
        <br />
        <AppInput
          type="password"
          value={password}
          className={passwordClass}
          setValue={setPassword}
        />
        <br />
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </main>
  );
}

export default App;
