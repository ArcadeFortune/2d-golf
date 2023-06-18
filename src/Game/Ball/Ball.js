import React, { useContext } from "react";
import "./Ball.css";

import { GlobalContext } from "../../Globals";

function Ball() {
  const { gameState, gameRules } = useContext(GlobalContext);

  const style = {
    left: gameState.ballX,
    width: gameRules.playerSize,
    height: gameRules.playerSize,
  };
  return <div className={"ball"} style={style} />;
}

export default Ball;
