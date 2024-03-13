import { AppTimer } from '@/components/app-timer/AppTimer';
import React from 'react';
import './timer-page.scss';

export const TimerPage = () => {
  return (
    <div className="timer-page">
      <AppTimer />
    </div>
  );
};
