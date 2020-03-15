import React, { useState } from "react";
import { words } from "../data/mode";

const containerStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexWrap: "wrap",
  width: "60%",
  margin: "50px"
};

const itemStyle = checked => {
  return {
    boxShadow: "20px 20px 60px #3d3e3d, -20px -20px 60px #535453",
    height: "100px",
    width: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    fontFamily: "Barlow",
    fontSize: "2em",
    margin: "20px",
    padding: "30px",
    backgroundColor: !checked ? "white" : "#262626",
    borderRadius: "25px"
  };
};

function Item(word, setCount, count) {
  const [checked, setChecked] = useState(false);
  return (
    <div
      onClick={() => {
        setChecked(!checked);
      }}
      style={{ ...itemStyle(checked) }}
    >
      {word}
    </div>
  );
}

export function WordContainer({ count, setCount }) {
  return (
    <div style={{ ...containerStyle }}>
      {words.map(word => {
        return Item(word, setCount, count);
      })}
    </div>
  );
}
