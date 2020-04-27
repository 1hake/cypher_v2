import React from "react";
import { BlueRapsodie } from "../constants/colors";
import { Slide } from "@material-ui/core";

export const Footer = () => {
  return (
    <Slide in={true} direction={"up"}>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          height: "100px",
          width: "100%",
          borderRadius: "50% 50% 0 0/ 100% 100% 0 0",
          boxShadow: "inset 0px 13px 23px -19px rgba(0,0,0,0.75)",
          backgroundColor: BlueRapsodie,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span class="text-white">En savoir plus...</span>
        <img
          style={{ height: "50px" }}
          src={require("../svg/tagline.png")}
          alt=""
        />
      </div>
    </Slide>
  );
};
