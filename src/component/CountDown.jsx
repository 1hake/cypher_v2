import React, { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { MyLink } from "./MyLink";
import { MyContext } from "../reducer/GameContext";
import { BlueRapsodie } from "../constants/colors";

const renderTime = (value) => {
  return (
    <MyLink to="words">
      <div
        class={"d-flex flex-column justify-content-center align-items-center"}
      >
        <i style={{ color: BlueRapsodie }} class="fa-5x fas fa-play-circle"></i>
      </div>
    </MyLink>
  );
};

export const CountDown = () => {
  const { setPage } = useContext(MyContext);
  return (
    <div
      style={{ width: "70vw", height: "400px" }}
      class={"d-flex justify-content-center align-items-center flex-column"}
    >
      <CountdownCircleTimer
        isPlaying
        durationSeconds={40}
        colors={[[BlueRapsodie]]}
        onComplete={() => {
          setPage("words");
        }}
        renderTime={renderTime}
        size={150}
      />
      <p
        style={{
          marginTop: "20px",
          color: "grey",
          fontSize: "0.8em",
          textAlign: "center",
        }}
      >
        Le jeu démarre automatiquement dans 40sec...
      </p>
    </div>
  );
};
