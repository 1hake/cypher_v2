import React from "react";
import { MyLink } from "../component/MyLink";
import { Grow } from "@material-ui/core";

export const Intro = (props) => {
  return (
    <Grow timeout={200} in={true}>
      <div
        style={{ color: "#453df5", height: "100vh" }}
        class="d-flex flex-column justify-content-center align-items-center flex-grow-1"
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
    </Grow>
  );
};
