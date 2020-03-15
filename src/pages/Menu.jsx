import React, { useState } from "react";
import NeoButtonPlay from "../component/NeoButtonPlay";
import NeoButton from "../component/NeoButton";
import { bpmList } from "../data/mode";

const myStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#484948",
  width: "100%",
  fontFamily: "Barlow",
  fontWeight: "bold",
  fontSize: "4em",
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

export const Menu = props => {
  const [bpm, setBpm] = useState(80);
  console.log(bpm);
  return (
    <div style={{ ...myStyle }}>
      <p>Welcome to cypher</p>
      <div style={{ ...containerStyle }}>
        {bpmList.map(item => {
          return (
            <NeoButton
              selected={item === bpm}
              onClick={() => setBpm(item)}
              text={item}
            ></NeoButton>
          );
        })}
      </div>
      <NeoButtonPlay
        link={"/game/" + bpm}
        text="go to the game"
        color=""
      ></NeoButtonPlay>
    </div>
  );
};
