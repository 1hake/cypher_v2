import React from "react";
import { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";

const style = {
  height: "400px",
  width: "50%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexDirection: "column",
  fontFamily: "Barlow",
  backgroundColor: "#262626",
  margin: "50px",
  borderRadius: "25px"
};

export const PictureMode = ({ score, setScore }) => {
  const [url, setUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://source.unsplash.com/300x300/").then(response => {
      setUrl(response.url);
      setIsLoading(false);
    });
  }, [count]);
  return (
    <div style={{ ...style }}>
      <span style={{ margin: "20px", width: "50%", fontSize: "1em" }}>
        Placé des références aux images ci dessous dans votre rap, cliquez pour
        obtenir une nouvelle image
      </span>
      <div
        onClick={() => {
          if (!isLoading) {
            setCount(count + 1);
            setScore(score + 1);
          }
        }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "300px",
          height: "300px"
        }}
      >
        {!isLoading ? (
          <img src={url} alt="" />
        ) : (
          <CircularProgress></CircularProgress>
        )}
      </div>
      <span style={{ margin: "20px", fontSize: "1em" }}>
        Vous avez placé {count} images
      </span>
    </div>
  );
};
