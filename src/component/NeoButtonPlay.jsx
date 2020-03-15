import React from "react";
import { Link } from "react-router-dom";

const style = color => ({
  background: color,
  boxShadow: "20px 20px 60px #3d3e3d, -20px -20px 60px #535453",
  width: "150px",
  height: "150px",
  fontFamily: "Barlow",
  fontWeight: "bold",
  fontSize: "0.8m",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "white",
  borderRadius: "100%"
});

const linkStyle = { textDecoration: "none", color: "white" };

const NeoButton = ({ text, color, link }) => {
  return (
    <div style={{ ...style(color) }}>
      <Link style={{ ...linkStyle }} to={link}>
        <span class="fas fa-play"></span>
      </Link>
    </div>
  );
};

export default NeoButton;
