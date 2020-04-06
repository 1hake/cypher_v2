import React, { useState, useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Game } from "./Game";
import { MyContext } from "../reducer/GameContext";

function renderTime(value) {
  if (value === 0) {
    return <div className="timer">Let's rap</div>;
  }
  console.log(value);
  return (
    <div className="timer">
      <div className="value">{value}</div>
      <div className="text">Secondes</div>
    </div>
  );
}

export function InitGame() {
  const { playing, setPlaying } = useContext(MyContext);
  return (
    <>
      <h5 class="p-4">Le jeu commence dans</h5>
      <CountdownCircleTimer
        durationSeconds={2}
        colors={[["#ffffff", 0.33], ["#ffffff", 0.33], ["#ffffff"]]}
        onComplete={() => {
          setPlaying(true);
          return [false, 0];
        }}
        renderTime={renderTime}
      />
    </>
  );
}
