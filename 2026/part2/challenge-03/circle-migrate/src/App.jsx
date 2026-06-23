import { useState } from 'react';
import './App.css';
import CircleController from './CircleController';

function App() {
  const [isPurple, setIsPurple] = useState(false);
  const [textColor, setTextColor] = useState('');

  const circleClasses = `${isPurple ? 'purple' : ''} ${textColor}`;

  const [size, setSize] = useState(150);
  const [rotate, setRotate] = useState(0);

  const circleStyles = {
    height: `${size}px`,
    width: `${size}px`,
    lineHeight: `${size}px`,
    transform: `rotate(${rotate}deg)`,
  };

  return (
    <main>
      <label>
        Purple
        <input
          type="checkbox"
          onChange={() => setIsPurple(!isPurple)}
          checked={isPurple}
        />
      </label>

      <label>
        text color
        <select
          value={textColor}
          onChange={(event) => setTextColor(event.target.value)}
        >
          <option value="" selected>
            White
          </option>
          <option value="text-black">Black</option>
          <option value="text-orange">Orange</option>
        </select>
      </label>

      <CircleController value={size} setValue={setSize}>
        Circle Size
      </CircleController>

      <CircleController value={rotate} setValue={setRotate}>
        Circle Rotate
      </CircleController>
      <div className={`circle ${circleClasses}`} style={circleStyles}>
        Hi!
      </div>
    </main>
  );
}

export default App;
