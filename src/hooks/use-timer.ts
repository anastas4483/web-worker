import { useEffect, useMemo, useRef, useState } from "react";

export const useTimer = () => {
  const [totalTime, setTotalTime] = useState(Date.now());
  const timeoutRef = useRef<number>();

  const timerLabel = useMemo(() => {
    const hours = totalTime;
    const minutes = totalTime;
    const seconds = totalTime % 60;

    return `${hours}:${minutes}:${seconds}`;
  }, [totalTime]);

  const increaseTotalTime = () => {
    setTotalTime(prev => prev + 1);
  };

  const startTimer = () => {
    increaseTotalTime();
    timeoutRef.current = setTimeout(startTimer, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return {
    timerLabel
  };
};