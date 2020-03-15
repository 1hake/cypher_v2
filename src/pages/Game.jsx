import React from "react";
import { useParams } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import ReactAudioPlayer from "react-audio-player";
import { WordContainer } from "../component/wordContainer";
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

export const Game = props => {
  let { bpm } = useParams();

  return (
    <div style={{ ...myStyle }}>
      <ReactAudioPlayer
        autoPlay
        loop
        src={"sounds/" + bpm + "bpm.mp3"}
      ></ReactAudioPlayer>
      <WordContainer />
      <CountdownCircleTimer
        isPlaying
        durationSeconds={60}
        colors={[["#ffffff", 0.33], ["#ffffff", 0.33], ["#ffffff"]]}
        onComplete={() => {
          return [false, 0];
        }}
        renderTime={renderTime}
      />
    </div>
  );
};
