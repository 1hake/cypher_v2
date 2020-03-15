import React from "react";

const style = (color, selected) => ({
  background: "#484948",
  boxShadow: "20px 20px 60px #3d3e3d, -20px -20px 60px #535453",
  width: selected ? "70px" : "50px",
  height: selected ? "70px" : "50px",
  fontFamily: "Barlow",
  fontWeight: "bold",
  fontSize: "1em",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "white",
  borderRadius: "100%"
});

const NeoButtonPlay = ({ text, color, selected, onClick }) => {
  return (
    <div onClick={onClick} style={{ ...style(color, selected) }}>
      {text}
    </div>
  );
};

export default NeoButtonPlay;
