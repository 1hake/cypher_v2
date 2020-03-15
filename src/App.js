import React, { useState } from "react";
import "./App.css";
import useInterval from "./tools/useInterval";
import { getRandomColor } from "./tools/getRandomColor";
import { getPattern, vow } from "./getVow";

const myStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "90vh",
  color: "black",
  fontFamily: "Barlow",
  fontSize: "3em",
  transition: "0.2s ease-in-out",
  width: "100%",
  flexDirection: "column"
};

const matchBpm = {
  70: 3428,
  80: 3000,
  90: 2666
};

function PatternInterval(props) {
  let [count, setCount] = useState(false);
  let pattern = getPattern(props.level);
  useInterval(() => {
    setCount(!count);
  }, matchBpm[props.bpm] * 2);

  return (
    <div style={{ ...myStyle }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%"
        }}
      >
        {pattern &&
          pattern.map(pattern => {
            return (
              <div
                style={{
                  height: "90vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  backgroundColor: vow[pattern],
                  color: "white",
                  width: 100 / props.level + "%",
                  fontSize: "12em"
                }}
              >
                {pattern}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default PatternInterval;
