import React from "react";
import "./Game.css";

function Ball({ gameState }) {
  const size = '20px'
  const style = {
    left: gameState.ballX + "px",
    width: size,
    height: size,
  }
  console.log(gameState)
  return (
    <div className={"ball"} style={style}>
      {" "}
    </div>
  );
}

export default Ball;
