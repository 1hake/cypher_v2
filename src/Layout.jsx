import React, { useState } from "react";
import Menu from "./Menu";
import ReactAudioPlayer from "react-audio-player";
import PatternInterval from "./App";

export default function Layout() {
  const [bpm, setBpm] = useState(80);
  const [level, setLevel] = useState(1);
  return (
    <div style={{ height: "100vh" }}>
      <Menu bpm={bpm} setBpm={setBpm} level={level} setLevel={setLevel} />
      <ReactAudioPlayer
        autoPlay
        loop
        src={"sounds/" + bpm + "bpm.mp3"}
      ></ReactAudioPlayer>
      {bpm && <PatternInterval bpm={bpm} level={level} />}
    </div>
  );
}
