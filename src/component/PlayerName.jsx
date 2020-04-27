import React, { useContext } from "react";
import { MyContext } from "../reducer/GameContext";
import { BlueRapsodie } from "../constants/colors";

export const PlayerScore = ({ score }) => {
  return (
    <div
      style={{
        padding: "15px",
        borderRadius: "25px",
        marginLeft: "10px",
        fontSize: "1em",
        color: "white",
        backgroundColor: BlueRapsodie,
      }}
      class={
        "font-weight-bold d-flex align-items-center justify-content-center"
      }
    >
      {score}
    </div>
  );
};

export const PlayerName = () => {
  const { player1, player2, step } = useContext(MyContext);
  return (
    <div>
      <h5 class="text-center mt-2">C'est le tour de</h5>
      <div class="d-flex align-items-center">
        <h1 style={{ color: "black" }} class="font-weight-bold ">
          {step === 1 ? player1.name : player2.name}
        </h1>
        <span>
          <PlayerScore
            score={step === 1 ? player1.score : player2.score}
          ></PlayerScore>
        </span>
      </div>
    </div>
  );
};
