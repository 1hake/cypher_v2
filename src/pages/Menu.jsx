import React, { useState } from "react";
import NeoButtonPlay from "../component/NeoButtonPlay";
import NeoButton from "../component/NeoButton";
import { bpmList, modeList } from "../data/mode";
import TextField from "@material-ui/core/TextField";

const myStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#484948",
  width: "100%",
  fontFamily: "Barlow",
  fontWeight: "bold",
  fontSize: "1em",
  color: "white",
  flexDirection: "column"
};

const containerStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "60%",
  height: "200px"
};

const textStyle = {
  margin: "40px",
  color: "white"
};

export const Menu = props => {
  const [mode, setMode] = useState(null);
  const [url, setUrl] = useState("");
  console.log("urlinstate", url);
  return (
    <div style={{ ...myStyle }}>
      <span>Enter a youtube url:</span>
      <p>
        You can pick some{" "}
        <a
          target="blank"
          href="https://www.youtube.com/results?search_query=typebeat"
        >
          here
        </a>
      </p>
      <TextField
        style={{ ...textStyle }}
        id="standard-basic"
        label="Standard"
        onChange={e => {
          console.log(e.target.value);
          setUrl(e.target.value.split("=")[1]);
        }}
      />
      <p>Select your mode</p>
      <div style={{ ...containerStyle }}>
        {modeList.map(modeName => {
          return (
            <span
              style={{ color: mode === modeName ? "black" : "white" }}
              onClick={() => setMode(modeName)}
            >
              {modeName}
            </span>
          );
        })}
      </div>
      <NeoButtonPlay
        disable={url.length === 0}
        link={`/game/${mode}/${url}`}
        text="go to the game"
        color=""
      ></NeoButtonPlay>
    </div>
  );
};
