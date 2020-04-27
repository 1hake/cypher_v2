import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../reducer/GameContext";
import { Link } from "react-router-dom";
import { MyLink } from "./MyLink";
import { Logo } from "./Logo";
import { Footer } from "./Footer";
import { PlayerScore } from "./PlayerName";

const style = {
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  fontFamily: "Barlow",
  backgroundColor: "white",
};

export const Finish = ({ score }) => {
  const { player1, player2, reset } = useContext(MyContext);
  let bestPlayer = false;
  if (player1.score > player2.score) {
    bestPlayer = player1.score > player2.score ? player1 : player2;
  }
  return (
    <div style={{ ...style }}>
      <Logo></Logo>
      <h2 style={{ marginTop: "30px", fontSize: "1em" }}>
        Bravo vous avez terminé
      </h2>
      {!bestPlayer ? (
        <>
          <h4 style={{ color: "black" }} class="font-weight-bold">
            Vous avez fait égalité
          </h4>
          <div class="d-flex align-items-center">
            <h4 class="mr-2">avec un score de</h4>
            <PlayerScore score={bestPlayer.score}></PlayerScore>
          </div>
        </>
      ) : (
        <>
          <h4 class="font-weight-bold">Le gagnant est {bestPlayer.name}</h4>
          <div class="d-flex align-items-center">
            <h4 class="mr-2">avec un score de</h4>
            <PlayerScore score={bestPlayer.score}></PlayerScore>
          </div>
        </>
      )}

      <Footer></Footer>
    </div>
  );
};
