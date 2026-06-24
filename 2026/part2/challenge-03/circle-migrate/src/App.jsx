import { useState } from 'react';
import './App.css';
import CircleController from './CircleController';
import TogglePurple from './TogglePurple';
import TextColor from './TextColor';

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
      <TogglePurple
        type="checkbox"
        isPurple={isPurple}
        setIsPurple={setIsPurple}
      />

      <TextColor textColor={textColor} setTextColor={setTextColor}>
        Text Color
      </TextColor>

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
