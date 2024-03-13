import { useEffect, useMemo, useRef, useState } from "react";

export const useTimer = () => {
  const [totalSeconds, setTotalSeconds] = useState(Math.floor(Date.now() / 1000));
  const timeoutRef = useRef<number>();

  const timeZone = 3;

  const getFormatNumber = (value: number) => value < 10 ? `0${value}` : value;

  const timerLabel = useMemo(() => {
    const hours = Math.floor(totalSeconds % (60 * 60 * 60) / 3600) + timeZone;
    const minutes = Math.floor(totalSeconds % (60 * 60) / 60);
    const seconds = totalSeconds % 60;

    return `${getFormatNumber(hours)}:${getFormatNumber(minutes)}:${getFormatNumber(seconds)}`;
  }, [totalSeconds]);

  const increaseTotalSeconds = () => {
    setTotalSeconds(prev => prev + 1);
  };

  const startTimer = () => {
    increaseTotalSeconds();
    timeoutRef.current = setTimeout(startTimer, 1000);
  };

  const stopTimer = () => {
    clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, []);

  return {
    timerLabel
  };
};