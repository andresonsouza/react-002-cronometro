import React from "react";
import TimerDisplay from "./TimerDisplay";
import TimerConstrols from "./TimerConstrols";
import LapList from "./LapList";

const Timer = () => {
  return (
    <div className="timer-container">
      <TimerDisplay />
      <TimerConstrols />
      <LapList />
    </div>
  );
};

export default Timer;
