import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import ReactAudioPlayer from "react-audio-player";
import { WordContainer } from "../component/wordContainer";
import ReactPlayer from "react-player";
import { useRef } from "react";
import { PictureMode } from "../component/PictureMode";
import { UnlimitedWords } from "../component/UnlimitedWords";
import { Finish } from "../component/Finish";

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
  flexDirection: "column",
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

export const Game = (props) => {
  let { mode, url } = useParams();
  const [duration, setDuration] = useState(null);
  const [finish, setFinish] = useState(false);
  const [score, setScore] = useState(0);
  return (
    <div style={{ ...myStyle }}>
      {!finish ? (
        <>
          <ReactPlayer
            ref={(player) => setDuration(player)}
            controls={false}
            width={0}
            height={0}
            url={
              url
                ? "https://www.youtube.com/watch?v=" + url
                : "https://www.youtube.com/watch?v=KClRc_qd-KI"
            }
            playing
          />
          {mode === "Wordcloud" && (
            <WordContainer score={score} setScore={setScore} />
          )}
          {mode === "Images" && (
            <PictureMode score={score} setScore={setScore} />
          )}
          {mode === "WordCount" && (
            <UnlimitedWords score={score} setScore={setScore} />
          )}
          <CountdownCircleTimer
            isPlaying
            durationSeconds={30}
            colors={[["#ffffff", 0.33], ["#ffffff", 0.33], ["#ffffff"]]}
            onComplete={() => {
              setFinish(true);
              return [false, 0];
            }}
            renderTime={renderTime}
          />
        </>
      ) : (
        <Finish score={score}></Finish>
      )}
    </div>
  );
};
