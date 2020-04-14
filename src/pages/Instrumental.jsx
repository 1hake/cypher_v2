import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { MyContext } from "../reducer/GameContext";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { MyLink } from "../component/MyLink";
import { BeatList } from "../component/BeatList";

const myStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  fontFamily: "Barlow",
  fontWeight: "bold",
  fontSize: "1em",
  color: "#333333",
  flexDirection: "column",
};

export const Instrumental = (props) => {
  const { playing, instru } = useContext(MyContext);
  return (
    <div style={{ ...myStyle }}>
      <h1 class="p-4">
        <span class="font-weight-bold">
          2. Choisir votre instru sur youtube:
        </span>
      </h1>
      <ReactPlayer
        ref={(player) => console.log(player)}
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
      <BeatList></BeatList>
    </div>
  );
};
