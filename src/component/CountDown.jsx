import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export const CountDown = () => (
  <CountdownCircleTimer
    isPlaying
    durationSeconds={3}
    colors={[["#ffffff", 0.33], ["#ffffff", 0.33], ["#ffffff"]]}
  />
);
