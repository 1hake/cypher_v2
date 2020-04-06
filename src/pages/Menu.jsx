import React, { useState, useContext } from "react";
import NeoButtonPlay from "../component/NeoButtonPlay";
import NeoButton from "../component/NeoButton";
import { bpmList, modeList } from "../data/mode";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import { MyContext } from "../reducer/GameContext";

const myStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#28292c",
  width: "100%",
  fontFamily: "Barlow",
  fontWeight: "bold",
  fontSize: "1em",
  color: "#777676",
  flexDirection: "column",
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "60%",
  height: "200px",
};

const textStyle = {
  margin: "40px",
  color: "#777676",
  width: "50%",
};

const fieldStyles = {
  root: {
    background: "black",
  },
  input: {
    color: "777676",
  },
};

export const Menu = (props) => {
  const [mode, setMode] = useState(null);
  const [url, setUrl] = useState("");
  const { player1 } = useContext(MyContext);
  return (
    <div style={{ ...myStyle }}>
      <TextField
        style={{ ...textStyle }}
        inputProps={{ fontFamily: "Barlow", color: "#777676" }}
        id="standard-basic"
        label="Enter a youtube url..."
        onChange={(e) => {
          console.log(e.target.value);
          setUrl(e.target.value.split("=")[1]);
        }}
      />
      <p>
        You can pick some instrumental{" "}
        <a
          target="blank"
          href="https://www.youtube.com/results?search_query=typebeat"
        >
          here
        </a>
      </p>
      <div style={{ ...containerStyle }}>
        {modeList.map((modeName) => {
          return (
            <div
              style={{
                color: mode !== modeName ? "#777676" : "white",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "25px",
                width: "100px",
                boxShadow:
                  mode === modeName &&
                  "20px 20px 24px #1c1d1f, -20px -20px 24px #343539",
              }}
              onClick={() => setMode(modeName)}
            >
              {modeName}
            </div>
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
