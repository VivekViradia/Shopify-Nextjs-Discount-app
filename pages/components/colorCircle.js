import React from "react";

const ColorCircle = ({ color, borderColor, onClick }) => {
  const circleStyle = {
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    backgroundColor: color,
    display: "inline-block",
    border: "2px solid",
    borderColor: borderColor,
  };
  return (
    <button
      className="color-circle-row"
      style={circleStyle}
      onClick={onClick}
    ></button>
  );
};

export default ColorCircle;
