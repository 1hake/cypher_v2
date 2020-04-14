import React, { useState, useContext } from "react";

import { MyLink } from "./MyLink";
import { MusicIcon } from "../svg/music-icon";
import { MicIcon } from "../svg/mic-icon";
import { MyContext } from "../reducer/GameContext";

export const NavigationFooter = (props) => {
  const { page } = useContext(MyContext);
  console.log("props.matchs", props.matchs);

  const elementStep = [
    {
      color: "#453df5",
      link: "players",

      icon: <MicIcon color={"#453df5"}></MicIcon>,
    },
    {
      color: "#453df5",
      link: "instrumental",
      icon: <MusicIcon color={"#453df5"}></MusicIcon>,
    },
    {
      color: "#453df5",
      link: "words",
      icon: (
        <i style={{ color: "#453df5" }} class="fa-4x fas fa-play-circle"></i>
      ),
    },
  ];

  return (
    <div
      style={{
        transition: "1s ease",
        bottom: 0,
        position: "absolute",
        left: 0,
        height: "100px",
        width: "100%",
        // backgroundColor: "rgb(51, 51, 51)",
      }}
      class="justify-content-center  align-items-center col-sm d-flex"
    >
      {elementStep.map((element) => {
        return (
          <div class="col d-flex justify-content-center">
            <MyLink to={element.link}>{element.icon}</MyLink>
          </div>
        );
      })}
    </div>
  );
};
