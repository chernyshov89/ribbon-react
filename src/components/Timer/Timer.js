/* eslint-disable */

import { useEffect, useState } from 'react';

export default function Timer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const timerCount = setInterval(function () {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => clearInterval(timerCount);
  }, []);

  const hours = String(Math.trunc(timer / 3600)).padStart(2, 0);
  const minutes = String(Math.trunc((timer % 3600) / 60)).padStart(2, 0);
  const seconds = String(Math.trunc(timer % 60)).padStart(2, 0);

  return <p style={{ fontSize: '20px' }}>{`${hours}:${minutes}:${seconds}`}</p>;
}
