import { useEffect, useState } from 'react';
import styles from './Timer.module.scss';

export default function Timer({ isStop }) {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    console.log('mount');
    let timerCount;
    if (!isStop) {
      timerCount = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
        console.log('timer');
      }, 1000);
    }
    return () => {
      if (timerCount) {
        clearInterval(timerCount);
        setTimer(0);
      }

      console.log('unmount');
    };
  }, [isStop]);

  const hours = String(Math.trunc(timer / 3600)).padStart(2, 0);
  const minutes = String(Math.trunc((timer % 3600) / 60)).padStart(2, 0);
  const seconds = String(Math.trunc(timer % 60)).padStart(2, 0);

  return <p className={styles.timer}>{`${hours}:${minutes}:${seconds}`}</p>;
}
