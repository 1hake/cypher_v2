import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { MyContext } from "../reducer/GameContext";
import { Link } from "react-router-dom";
import { MyLink } from "../component/MyLink";
const myStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  fontFamily: "Barlow",
  fontWeight: "bold",
  fontSize: "1em",
  color: "#333333",
  flexDirection: "column",
};

const textStyle = {
  margin: "40px",
  color: "#453df5",
  width: "50%",
};

export const Players = (props) => {
  const { player1, player2, setPlayer } = useContext(MyContext);
  return (
    <div style={{ ...myStyle }}>
      <h1 class="p-4 text-center">
        <span class="font-weight-bold">1.</span> Choisir le nom des joueurs:
      </h1>
      <div class="align-items-center d-flex flex-column justify-content-center">
        <div class="m-4">
          <h5 class=" text-center m-2">
            <span class="font-weight-bold">Player 1:</span>
          </h5>
          <input
            class="form-control"
            type="text"
            placeholder="Player 1"
            onChange={(e) => {
              console.log(e.target.value);
              setPlayer(1, e.target.value);
            }}
          />
        </div>
        <div class="m-4">
          <h5 class=" text-center m-2">
            <span class="font-weight-bold">Player 2:</span>
          </h5>
          <input
            class="form-control"
            type="text"
            placeholder="Player 2"
            onChange={(e) => {
              console.log(e.target.value);
              setPlayer(2, e.target.value);
            }}
          />
        </div>
      </div>
      {/* <i class="fas fa-arrow-left p-5"></i> */}
    </div>
  );
};
