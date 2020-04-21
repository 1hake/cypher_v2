import React, { useContext } from "react";
import { NavigationFooter } from "../component/NavigationFooter";
import { Header } from "../component/Header";
import { useParams } from "react-router-dom";
import { MyContext } from "../reducer/GameContext";
import { Intro } from "./Intro";
import { Players } from "./Players";
import { Instrumental } from "./Instrumental";
import { Grow } from "@material-ui/core";
import { Words } from "./Words";
import { VerticalLinearStepper } from "./Steps";

const noFooter = ["intro", "words"];

export const Layout = (props) => {
  const { page } = useContext(MyContext);
  return (
    <>
      {
        {
          setup: <VerticalLinearStepper></VerticalLinearStepper>,
          words: <Words />,
        }[page]
      }
    </>
  );
};
