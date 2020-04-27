import React, { useState, useContext, Children } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import ReactAudioPlayer from "react-audio-player";
import { WordContainer } from "../component/wordContainer";
import ReactPlayer from "react-player";
import { useRef } from "react";
import { PictureMode } from "../component/PictureMode";
import { UnlimitedWords } from "../component/UnlimitedWords";
import { Finish } from "../component/Finish";
import { MyContext } from "../reducer/GameContext";
import { Link, useParams } from "react-router-dom";
import { InitGame } from "./initGame";
import { PlayerName } from "../component/PlayerName";
import { useEffect } from "react";
import { MyLink } from "../component/MyLink";

const myStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100%",
  fontFamily: "Barlow",
  fontWeight: "bold",
  fontSize: "1em",
  color: "#777676",
  flexDirection: "column",
};

function renderTime(value) {
  if (value === 0) {
    return <div className="timer">Let's rap</div>;
  }
  console.log(value);
  return (
    <div style={{ marginTop: "10px" }} className="timer">
      <div className="value">{value}</div>
      <div style={{ color: "white" }} className="text">
        Secondes
      </div>
    </div>
  );
}

export const Words = (props) => {
  const {
    instru,
    player1,
    player2,
    step,
    setStep,
    finish,
    playing,
    setPlaying,
    setFinish,
    reset,
  } = useContext(MyContext);
  const [duration, setDuration] = useState(null);
  const [score, setScore] = useState(0);
  useEffect(() => {
    reset();
  }, []);
  return (
    <div style={{ ...myStyle }}>
      <ReactPlayer
        ref={(player) => setDuration(player)}
        controls={false}
        width={0}
        height={0}
        url={
          instru
            ? "https://www.youtube.com/watch?v=" + instru + "?start=20"
            : "https://www.youtube.com/watch?v=KClRc_qd-KI"
        }
        playing={playing}
      />
      {!finish ? (
        <>
          {!playing ? (
            <>
              <PlayerName></PlayerName>
              <WordContainer player={step === 1 ? 1 : 2} />
              <div
                style={{
                  width: "100%",
                  backgroundColor: "#453df5",
                  height: "100%",
                  borderRadius: "50% 50% 0 0/ 50% 50% 0 0",
                }}
              >
                <span class="p-4 text-white text-center">
                  Le jeu commence dans
                </span>
                <CountdownCircleTimer
                  isPlaying
                  durationSeconds={5}
                  colors={[["#ffffff"]]}
                  onComplete={() => {
                    setPlaying(true);
                    return [false, 0];
                  }}
                  size={150}
                  renderTime={renderTime}
                />
              </div>
            </>
          ) : (
            <div class="d-flex flex-column align-items-center">
              <PlayerName></PlayerName>
              <WordContainer player={step === 1 ? 1 : 2} />
              <div
                style={{
                  width: "100%",
                  backgroundColor: "#453df5",
                  height: "100%",
                  borderRadius: "50% 50% 0 0/ 50% 50% 0 0",
                }}
              >
                <h5 class="p-4 text-white text-center ">Il vous reste</h5>
                <CountdownCircleTimer
                  isPlaying
                  durationSeconds={10}
                  colors={[["#ffffff"]]}
                  onComplete={() => {
                    setStep(step + 1);
                    setPlaying(false);
                    return [false, 0];
                  }}
                  size={150}
                  renderTime={renderTime}
                />
              </div>
            </div>
          )}
        </>
      ) : (
        <Finish score={score}></Finish>
      )}
    </div>
  );
};
