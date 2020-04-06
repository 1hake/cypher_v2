import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Menu } from "./pages/Menu";
import { Game } from "./pages/Game";
import { InitGame } from "./pages/initGame";
import { GameContext } from "./reducer/GameContext";
import { Players } from "./pages/Players";
import { Instrumental } from "./pages/Instrumental";
import { Words } from "./pages/Words";

export const MyRouter = () => {
  const context = useContext(GameContext);
  console.log("MyRouter -> context", context);

  return (
    <Router>
      <Switch>
        <Route path="/players">
          <Players></Players>
        </Route>
        <Route path="/instrumental">
          <Instrumental></Instrumental>
        </Route>
        <Route path="/words/">
          <Words />
        </Route>
        <Route path="/">
          <Players></Players>
        </Route>
      </Switch>
    </Router>
  );
};
