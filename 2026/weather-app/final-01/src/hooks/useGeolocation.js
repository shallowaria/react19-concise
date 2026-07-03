import { useEffect, useState } from 'react';

export default function useGeolocation() {
  const [status, setStatus] = useState('Get Current Weather');

  async function getPosition() {
    return new Promise((resolve, reject) => {
      const geolocation = navigator.geolocation;

      setStatus('Locating...');

      if (!geolocation) {
        alert('Geolocation is not supported by your browser');
        reject(new Error('Geolocation is not supported by your browser'));
        return;
      }

      geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          resolve({ latitude, longitude });
          setStatus('Get Forecast Weather');
        },
        (error) => {
          alert(error.message);
          console.error(error);
          reject(error);
          setStatus(error.message);
        },
      );
    });
  }
  return { getPosition, status };
}
