import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Game } from "./Game";

const myStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#262626",
  width: "100%",
  fontFamily: "Barlow",
  fontWeight: "bold",
  color: "white",
  flexDirection: "column"
};

function renderTime(value) {
  if (value === 0) {
    return <div className="timer">Let's rap</div>;
  }
  console.log(value);
  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{value}</div>
      <div className="text">seconds</div>
    </div>
  );
}
export function InitGame() {
  const [hasStarted, setHasStarted] = useState(false);
  return (
    <div style={{ ...myStyle }}>
      {!hasStarted ? (
        <CountdownCircleTimer
          isPlaying
          durationSeconds={3}
          colors={[["#ffffff", 0.33], ["#ffffff", 0.33], ["#ffffff"]]}
          onComplete={() => {
            setHasStarted(true);
            return [false, 0];
          }}
          renderTime={renderTime}
        />
      ) : (
        <Game></Game>
      )}
    </div>
  );
}
