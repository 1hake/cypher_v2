import React from "react";
import { MyLink } from "./MyLink";
import { Slide, Grow } from "@material-ui/core";
import { BlueRapsodie } from "../constants/colors";

export const Logo = () => {
  return (
    <Slide in={true} direction={"down"}>
      <div
        style={{
          backgroundColor: BlueRapsodie,
          color: "white",
          width: "100vw",
          height: "40%",
          borderRadius: "0 0 50% 50%/0 0 50% 50%",
          boxShadow: "inset 0px -11px 23px -19px rgba(0,0,0,0.75)",
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
          <MyLink to="setup">
            <Grow in={true} timeout={1000}>
              <img
                class="m-2"
                style={{ width: "100px" }}
                src={require("../svg/logoblanc.png")}
                alt=""
              />
            </Grow>
            {/* <i class="fa-5x fas fa-play-circle"></i> */}
          </MyLink>
        </div>
      </div>
    </Slide>
  );
};
