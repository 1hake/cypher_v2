import React, { useState, useContext } from "react";
import Slide from "@material-ui/core/Slide";

import { MyLink } from "./MyLink";
import { MusicIcon } from "../svg/music-icon";
import { MicIcon } from "../svg/mic-icon";
import { MyContext } from "../reducer/GameContext";

export const NavigationFooter = (props) => {
  const { page } = useContext(MyContext);
  console.log("props.matchs", page);

  const elementStep = [
    {
      color: "#453df5",
      link: "players",
      icon: "https://img.icons8.com/color/48/000000/decision.png",
    },
    {
      color: "#453df5",
      link: "instrumental",
      icon: "https://img.icons8.com/color/48/000000/musically.png",
    },
    {
      color: "#453df5",
      link: "words",
      icon: "https://img.icons8.com/color/48/000000/play.png",
    },
  ];

  return (
    <div
      style={{
        transition: "1s ease",
        bottom: 0,
        position: "absolute",
        left: 0,
        height: "140px",
        width: "100%",
      }}
      class="justify-content-center  align-items-center col-sm d-flex"
    >
      {elementStep.map((element, index) => {
        return (
          <div class="col d-flex justify-content-center">
            <MyLink to={element.link}>
              <Slide in={true} timeout={200 * index} direction={"up"}>
                <div
                  class={"d-flex justify-content-center align-items-center"}
                  style={{
                    height: "70px",
                    width: "70px",
                    boxShadow: "0px 0px 10px -2px rgba(0,0,0,0.75)",
                    backgroundColor: page === element.link ? "black" : "white",
                    borderRadius: "25px",
                  }}
                >
                  <img alt={"icon"} src={element.icon}></img>
                </div>
              </Slide>
            </MyLink>
          </div>
        );
      })}
    </div>
  );
};
