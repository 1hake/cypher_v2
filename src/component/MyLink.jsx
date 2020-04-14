import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../reducer/GameContext";

export const MyLink = (props) => {
  const { setPage } = useContext(MyContext);
  return (
    <div
      onClick={() => setPage(props.to)}
      style={{ color: "inherit", textDecoration: "inherit" }}
      {...props}
    />
  );
};
