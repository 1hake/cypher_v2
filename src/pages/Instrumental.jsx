import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { MyContext } from "../reducer/GameContext";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { MyLink } from "../component/MyLink";
import { BeatList } from "../component/BeatList";

const myStyle = {
  fontFamily: "Barlow",
  fontWeight: "bold",
  fontSize: "1em",
  color: "#333333",
  flexDirection: "column",

  // maxWidth: "300px",
  width: "100%",
};

export const Instrumental = (props) => {
  const { playing, instru } = useContext(MyContext);
  return (
    <div
      class="d-flex flex-column justify-content-center align-items-center"
      style={{ ...myStyle }}
    >
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
        playing={false}
      />
      <BeatList></BeatList>
    </div>
  );
};
