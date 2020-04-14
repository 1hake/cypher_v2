import React from "react";

export const Header = (props) => {
  return (
    <div
      style={{ color: "#453df5" }}
      class=" mr-2 d-flex m-1 flex-row-reverse align-items-center"
    >
      <i class="fa-2x fas fa-play-circle ml-2"></i>
      <h1 style={{ fontFamily: "Barlow" }} class=" font-weight-bold">
        Cypher
      </h1>
    </div>
  );
};
