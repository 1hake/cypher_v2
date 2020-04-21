import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { MyLink } from "./MyLink";

const renderTime = (value) => {
  return (
    <MyLink to="words">
      <div
        class={"d-flex flex-column justify-content-center align-items-center"}
      >
        <p class="text-center">Cliquez pour commencer</p>
        <img src="https://img.icons8.com/color/48/000000/play.png" alt="icon" />
      </div>
    </MyLink>
  );
};

export const CountDown = () => (
  <div
    style={{ width: "70vw", height: "400px" }}
    class={"d-flex justify-content-center align-items-center"}
  >
    <CountdownCircleTimer
      isPlaying
      durationSeconds={40}
      colors={[["#453df5", 0.33], ["#453df5", 0.33], ["#453df5"]]}
      renderTime={renderTime}
    />
  </div>
);
