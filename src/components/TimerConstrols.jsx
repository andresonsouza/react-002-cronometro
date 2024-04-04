import React from "react";

const TimerConstrols = ({ onStart, onStop }) => {
  return (
    <div className="timer-controls">
      <button onClick={onStart}>Iniciar</button>
      <button onClick={onStop}>Zerar</button>
    </div>
  );
};

export default TimerConstrols;
