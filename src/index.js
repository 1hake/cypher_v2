import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { MyRouter } from "./Router";
import { GameContext } from "./reducer/GameContext";
import { VerticalLinearStepper } from "./pages/Steps";
import { Layout } from "./pages/Layout";

const App = () => (
  <GameContext>
    <Layout />
  </GameContext>
);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
