import React from "react";
import { MyLink } from "./MyLink";

export const Logo = () => {
  return (
    <div
      style={{ color: "#453df5", width: "100vw", height: "70%" }}
      class="d-flex flex-column justify-content-center align-items-center"
    >
      <h1
        style={{ fontFamily: "Barlow" }}
        class="font-size-extra font-weight-bold"
      >
        Cypher
      </h1>
      <MyLink to="players">
        <i class="fa-5x fas fa-play-circle"></i>
      </MyLink>
    </div>
  );
};
