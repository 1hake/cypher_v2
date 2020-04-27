import React from "react";
import { MyContext } from "../reducer/GameContext";
import { useContext } from "react";
import { Instrumental } from "../pages/Instrumental";

export const CurrentInstru = () => {
  const { instruName } = useContext(MyContext);
  return (
    <div
      class="mb-4"
      style={{
        padding: "10px",
        borderRadius: "25px",
        backgroundColor: "white",
        border: "3px solid black",
      }}
    >
      <span>
        <small class="font-size-small">Votre Instrumental:</small>
      </span>
      <div>{instruName}</div>
    </div>
  );
};
