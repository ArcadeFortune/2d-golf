import React, { useContext} from "react";
import "./Game.css";

import { GlobalContext } from "../Globals";

function Ball() {  
  const { gameState, gameRules } = useContext(GlobalContext);
  
  const style = {
    left: gameState.ballX,
    width: gameRules.playerSize,
    height: gameRules.playerSize,
  }
  console.log(gameState)
  return (
    <div className={"ball"} style={style}>
      {" "}
    </div>
  );
}

export default Ball;
