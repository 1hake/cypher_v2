import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Menu } from "./pages/Menu";
import { Game } from "./pages/Game";
import { InitGame } from "./pages/initGame";

export const MyRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/game/:bpm">
          <InitGame />
        </Route>
        <Route path="/">
          <Menu />
        </Route>
      </Switch>
    </Router>
  );
};
