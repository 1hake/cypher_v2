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

const myStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

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
    <div className="timer">
      <div className="value">{value}</div>
      <div className="text">Secondes</div>
    </div>
  );
}

const CountDown = ({ children }) => {
  const { step, setStep, setPlaying, setFinish } = useContext(MyContext);
  return (
    <div class="d-flex">
      <Link style={{ textDecoration: "none", color: "#af422d" }} to="/players">
        <div class="p-4 d-flex flex-column justify-content-center align-items-center">
          <p class="text-white p-1">Retour au menu</p>
          <i class=" fa-2x fas fa-fast-backward"></i>
        </div>
      </Link>
      <Link style={{ textDecoration: "none", color: "#af422d" }} to="/players">
        <div class="p-4 d-flex flex-column justify-content-center align-items-center">
          <p class="text-white p-1">Fin de la partie</p>
          <i class=" fa-2x fas fa-power-off"></i>
        </div>
      </Link>
    </div>
  );
};

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
  console.log("Words -> step", step);
  const [duration, setDuration] = useState(null);
  console.log("Words -> player1, player2", player1, player2);
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
              <h5 class="p-4">Le jeu commence dans</h5>
              <CountdownCircleTimer
                isPlaying
                durationSeconds={5}
                colors={[["#ffffff", 0.33], ["#ffffff", 0.33], ["#ffffff"]]}
                onComplete={() => {
                  setPlaying(true);
                  return [false, 0];
                }}
                renderTime={renderTime}
              />
              <CountDown></CountDown>
            </>
          ) : (
            <div class="d-flex flex-column align-items-center">
              <PlayerName></PlayerName>
              <WordContainer player={step === 1 ? 1 : 2} />
              <h5 class="p-4">Il vous reste</h5>
              <CountdownCircleTimer
                isPlaying
                durationSeconds={10}
                colors={[["#ffffff", 0.33], ["#ffffff", 0.33], ["#ffffff"]]}
                onComplete={() => {
                  setStep(step + 1);
                  setPlaying(false);
                  return [false, 0];
                }}
                renderTime={renderTime}
              />
              <CountDown></CountDown>
            </div>
          )}
        </>
      ) : (
        <Finish score={score}></Finish>
      )}
    </div>
  );
};
