import React, { useContext } from "react";
import "./Ball.css";

import { GlobalContext } from "../../Globals";

function Ball() {
  const { gameState, gameRules } = useContext(GlobalContext);
  console.log()
  const style = {
    top: gameState.ballY,
    left: gameState.ballX,
    width: gameRules.playerSize,
    height: gameRules.playerSize,
  };
  
  return <div className={"ball"} style={style} />;
}

export default Ball;
