import React from "react";
import { useState, useEffect } from "react";

const style = {
  height: "400px",
  width: "50%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexDirection: "column",
  fontFamily: "Barlow",
  backgroundColor: "#262626",
  margin: "50px",
  borderRadius: "25px"
};

export const Finish = ({ score }) => {
  return (
    <div style={{ ...style }}>
      <span style={{ fontSize: "1em" }}>Bravo vous avez terminé</span>
      <span style={{ fontSize: "1em" }}>Vous avez obtenu {score} points!</span>
      <span style={{ fontSize: "1em" }}>Recommencer</span>
      <span style={{ fontSize: "1em" }}>Changer de mode</span>
    </div>
  );
};
