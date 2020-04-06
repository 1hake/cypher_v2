import React from "react";
import { Link } from "react-router-dom";

const style = (color, disable) => ({
  boxShadow: !disable
    ? "20px 20px 24px #1c1d1f, -20px -20px 24px #343539"
    : "20px 20px 24px #1c1d1f, -20px -20px 24px #343539",
  width: "150px",
  height: "150px",
  fontFamily: "Barlow",
  fontWeight: "bold",
  textAlign: "center",
  fontSize: "3em",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  color: disable ? "#af422d" : "white",
  borderRadius: "100%"
});

const linkStyle = { textDecoration: "none", color: "#af422d" };

const NeoButton = ({ text, color, link, disable }) => {
  return (
    <Link style={{ ...linkStyle }} to={link}>
      <div style={{ ...style(color, disable) }}>
        <span style={{ marginLeft: "12px" }} class="fas fa-play"></span>
      </div>
    </Link>
  );
};

export default NeoButton;
