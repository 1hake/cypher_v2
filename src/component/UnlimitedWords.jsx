import React from "react";
import { useState, useEffect } from "react";
import { shuffle } from "../tools/shuffle";
import { rwords } from "../data/mode";

const style = {
  height: "400px",
  width: "50%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexDirection: "column",
  fontFamily: "Barlow",
  boxShadow: "20px 20px 60px #3d3e3d, -20px -20px 60px #535453",
  backgroundColor: "#262626",
  margin: "50px",
  borderRadius: "25px"
};

export const UnlimitedWords = ({ score, setScore }) => {
  const list = shuffle(rwords);
  return (
    <div
      style={{ ...style }}
      onClick={() => {
        setScore(score + 1);
      }}
    >
      <span style={{ fontSize: "1em" }}>
        Place ce mot dans ton rap et clique pour obtenir un nouveau mot...
      </span>
      <span style={{ fontSize: "3em" }}>{list[score]}</span>
      <span style={{ fontSize: "1em" }}>Tu as placé {score} mot</span>
    </div>
  );
};
