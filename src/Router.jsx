import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Menu } from "./pages/Menu";

import { GameContext } from "./reducer/GameContext";
import { Players } from "./pages/Players";
import { Instrumental } from "./pages/Instrumental";
import { Words } from "./pages/Words";
import { Intro } from "./pages/Intro";
import { Layout } from "./pages/Layout";

export const MyRouter = () => {
  const context = useContext(GameContext);
  console.log("MyRouter -> context", context);

  return <Layout></Layout>;
};
