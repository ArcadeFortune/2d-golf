import React, { useContext} from "react";

import { GlobalContext } from "../Globals";

export default function Start() {  
  const { gameState, gameRules } = useContext(GlobalContext);
  
  const style = {
    left: gameState.ballX - gameRules.playerSize + 2
  }

  return <div className="start" style={style}></div>;
}
