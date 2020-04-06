import React, { useContext } from "react";
import { MyContext } from "../reducer/GameContext";

export const PlayerName = () => {
  const { player1, player2, step } = useContext(MyContext);
  return (
    <div>
      <h5 class="mt-10">C'est le tour de</h5>
      <h1 class="font-weight-bold text-white">
        {step === 1 ? player1.name : player2.name}
      </h1>
    </div>
  );
};
