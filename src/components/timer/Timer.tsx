import { useTimer } from '@/hooks/use-timer';
import React from 'react';

export const Timer = () => {
  const { timerLabel } = useTimer();
  return (
    <div>{timerLabel}</div>
  );
};
