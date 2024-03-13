import { useTimer } from '@/hooks/use-timer';
import React from 'react';
import './app-timer.scss';

export const AppTimer = () => {
  const { timerLabel } = useTimer();

  return (
    <div className="app-timer">
      {timerLabel}
    </div>
  );
};
