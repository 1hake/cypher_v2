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
  height: "400px",
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
      <div class="align-items-center d-flex flex-column justify-content-center">
        <div class="m-3">
          <h5 class="  m-2">
            <span class="font-weight-bold">Player 1:</span>
          </h5>
          <input
            class="form-control"
            type="text"
            placeholder="Entrez le blase"
            onChange={(e) => {
              console.log(e.target.value);
              setPlayer(1, e.target.value);
            }}
          />
        </div>
        <div class="m-3">
          <h5 class=" m-2">
            <span class="font-weight-bold">Player 2:</span>
          </h5>
          <input
            class="form-control"
            type="text"
            placeholder="Entrez le blase"
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
