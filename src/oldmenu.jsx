import React from "react";

const bpmList = ["70", "80", "90"];
const levelList = ["1", "2", "3"];

function Menu(props) {
  return (
    <div
      style={{
        height: "10vh",
        width: "100%",
        backgroundColor: "black",
        display: "flex"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "50%",
          height: "10vh"
        }}
      >
        {bpmList.map(bpm => (
          <div
            onClick={() => {
              if (props.bpm === bpm) {
                props.setBpm(null);
              } else {
                props.setBpm(bpm);
              }
            }}
            style={{
              fontFamily: "Barlow",
              fontSize: bpm === props.bpm ? "2em" : "1em",
              color: "white"
            }}
          >
            {bpm}
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "50%",
          height: "10vh"
        }}
      >
        {levelList.map(level => (
          <div
            onClick={() => {
              props.setBpm(null);
              props.setLevel(level);
            }}
            style={{
              fontFamily: "Barlow",
              fontSize: level === props.level ? "2em" : "1em",
              color: "white"
            }}
          >
            {level}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
