import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { MyContext } from "../reducer/GameContext";
import { Link } from "react-router-dom";
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

const textStyle = {
  margin: "40px",
  color: "#777676",
  width: "50%",
};

export const Players = (props) => {
  const { player1, player2, setPlayer } = useContext(MyContext);
  return (
    <div style={{ ...myStyle }}>
      <h1 class="p-4">
        <span class="font-weight-bold">1.</span> Choisir le nom des joueurs:
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <TextField
          style={{ ...textStyle }}
          inputProps={{ fontFamily: "Barlow", color: "#777676" }}
          id="standard-basic"
          label={player1.name}
          onChange={(e) => {
            console.log(e.target.value);
            setPlayer(1, e.target.value);
          }}
        />
        <TextField
          style={{ ...textStyle }}
          inputProps={{ fontFamily: "Barlow", color: "#777676" }}
          id="standard-basic"
          label={player2.name}
          onChange={(e) => {
            console.log(e.target.value);
            setPlayer(2, e.target.value);
          }}
        />
      </div>
      {/* <i class="fas fa-arrow-left p-5"></i> */}
      <span class="d-flex display-2 p-5">
        <Link
          style={{ textDecoration: "none", color: "#af422d" }}
          to="/instrumental"
        >
          <i class="fas fa-arrow-right p-5"></i>
        </Link>
      </span>
    </div>
  );
};
