import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { MyContext } from "../reducer/GameContext";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const myStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#28292c",
  width: "100%",
  fontFamily: "Barlow",
  fontWeight: "bold",
  fontSize: "1em",
  color: "#777676",
  flexDirection: "column",
};

const textStyle = {
  margin: "40px",
  color: "#777676",
  width: "50%",
};

export const Instrumental = (props) => {
  const { instru, setInstru } = useContext(MyContext);
  return (
    <div style={{ ...myStyle }}>
      <h1 class="p-4">
        <span class="font-weight-bold">2.</span> Choisir votre instru sur
        youtube:
      </h1>
      <TextField
        style={{ ...textStyle }}
        inputProps={{ fontFamily: "Barlow", color: "#777676" }}
        id="standard-basic"
        label="Enter a youtube url..."
        onChange={(e) => {
          console.log(e.target.value);
          setInstru(e.target.value.split("=")[1]);
        }}
      />
      <p>
        You can pick some instrumental{" "}
        <a
          target="blank"
          href="https://www.youtube.com/results?search_query=typebeat"
        >
          here
        </a>
      </p>
      <span class="d-flex display-2 p-5">
        <Link
          style={{ textDecoration: "none", color: "#af422d" }}
          to="/players"
        >
          <i class="fas fa-arrow-left p-5"></i>
        </Link>
        <Link style={{ textDecoration: "none", color: "#af422d" }} to="/words/">
          <i class="fas fa-arrow-right p-5"></i>
        </Link>
      </span>
    </div>
  );
};
