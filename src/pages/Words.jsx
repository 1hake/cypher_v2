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
import { Slide, Grow } from "@material-ui/core";

const myStyle = {
  display: "flex",

  alignItems: "center",
  height: "100%",
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
  const [duration, setDuration] = useState(3);
  const [score, setScore] = useState(0);
  useEffect(() => {
    reset();
  }, []);
  return (
    <div style={{ ...myStyle }}>
      <ReactPlayer
        controls={false}
        width={0}
        height={0}
        url={
          instru && "https://www.youtube.com/watch?v=" + instru + "?start=20"
        }
        playing={playing}
      />
      {!finish ? (
        <>
          <PlayerName></PlayerName>
          <WordContainer player={step} />
          <Slide direction={"up"} in={true}>
            <div
              style={{
                width: "100%",
                backgroundColor: "#453df5",
                position: "absolute",
                height: "40%",
                borderRadius: "50% 50% 0 0/ 50% 50% 0 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                bottom: "0",
                boxShadow: "inset 0px 13px 23px -19px rgba(0,0,0,0.75)",
              }}
            >
              {!playing && (
                <span class="p-4 text-white text-center">
                  Le jeu commence dans
                </span>
              )}
              {duration && (
                <CountdownCircleTimer
                  isPlaying={true}
                  durationSeconds={duration}
                  key={playing}
                  colors={[["#ffffff"]]}
                  onComplete={() => {
                    if (playing === true) {
                      setDuration(5);
                      setPlaying(false);
                      if (step === 1) {
                        setStep(step + 1);
                      } else {
                        setFinish(true);
                      }
                    } else {
                      setDuration(30);
                      setPlaying(true);
                    }
                    // setDuration(10);
                    return [true, 100];
                  }}
                  size={120}
                  renderTime={renderTime}
                />
              )}
            </div>
          </Slide>
        </>
      ) : (
        <Finish score={score}></Finish>
      )}
    </div>
  );
};
