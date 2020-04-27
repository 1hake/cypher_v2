import React from "react";
import { MyLink } from "./MyLink";

export const Logo = () => {
  return (
    <div
      style={{
        backgroundColor: "#453df5",
        color: "white",
        width: "100vw",
        height: "40%",
        borderRadius: "0 0 50% 50%/0 0 50% 50%",
      }}
      class="d-flex flex-column justify-content-center align-items-center"
    >
      <h1
        style={{ fontFamily: "Barlow", marginBottom: "-5px" }}
        class="font-size-extra font-weight-bold"
      >
        CYPHER
      </h1>
      <div class="d-flex align-items-center justify-content-center">
        <h3 style={{ fontFamily: "Barlow" }} class="font-size-extra ">
          by
        </h3>
        <MyLink to="players">
          <img
            class="m-2"
            style={{ width: "100px" }}
            src={require("../svg/logoblanc.png")}
            alt=""
          />
          {/* <i class="fa-5x fas fa-play-circle"></i> */}
        </MyLink>
      </div>
    </div>
  );
};
