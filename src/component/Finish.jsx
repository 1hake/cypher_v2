import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../reducer/GameContext";
import { Link } from "react-router-dom";

const style = {
  height: "400px",
  width: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  fontFamily: "Barlow",
  backgroundColor: "#262626",
  margin: "50px",
  borderRadius: "25px",
};

export const Finish = ({ score }) => {
  const { player1, player2, reset } = useContext(MyContext);
  let bestPlayer = false;
  if (player1.score > player2.score) {
    bestPlayer = player1.score > player2.score ? player1 : player2;
  }
  return (
    <div style={{ ...style }}>
      <h2 style={{ fontSize: "1em" }}>Bravo vous avez terminé</h2>
      {!bestPlayer ? (
        <>
          <h4 class="font-weight-bold">Vous avez fait égalité</h4>
          <h4>avec un score de {player1.score}</h4>
        </>
      ) : (
        <>
          <h4 class="font-weight-bold">Le gagnant est {bestPlayer.name}</h4>
          <h4>avec un score de {bestPlayer.score}</h4>
        </>
      )}
      <Link
        onClick={reset}
        style={{ textDecoration: "none", color: "#af422d" }}
        to="/words"
      >
        Recommencer
      </Link>
      <Link
        style={{ textDecoration: "none", color: "#af422d" }}
        to="/instrumental"
      >
        Changer d'instru
      </Link>
      <Link style={{ textDecoration: "none", color: "#af422d" }} to="/players">
        <span>Changer de joueur</span>
      </Link>
    </div>
  );
};
