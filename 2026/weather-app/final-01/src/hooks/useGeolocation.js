import { useState } from 'react';

export default function () {
  const [state, setState] = useState('Get Current Weather');

  async function getPosition() {
    return new Promise((resolve, reject) => {
      const geolocation = navigator.geolocation;

      setState('Locating...');

      if (!geolocation) {
        alert('Geolocation is not supported by your browser');
        reject('Geolocation is not supported by your browser');
        return;
      }

      geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          setState('Get Forecast Weather');
          resolve({ latitude, longitude });
        },
        (error) => {
          alert(error.message);
          console.error(error);
          setState(error.message);
          reject(error);
        },
      );
    });
  }

  return { getPosition,  state };
}
