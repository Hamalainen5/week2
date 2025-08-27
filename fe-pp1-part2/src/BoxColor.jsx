import React from "react";

function BoxColor({ r, g, b }) {
  const toHex = (value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    color: r + g + b > 382 ? "black" : "white", // Simple contrast check
    border: "1px solid black",
    borderRadius: "5px",
    padding: "20px",
    margin: "20px auto",
    width: "200px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif"
  };  
  return (
    <div style={divStyle}>
      rgb({r}, {g}, {b})<br />
      {hexColor}
    </div>
  );
} 
export default BoxColor;