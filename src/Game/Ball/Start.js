import React, { useState, useEffect, useContext } from "react";

import { GlobalContext } from "../../Globals";

import "./Start.css";

export default function Start() {  
  const [pos, setPos] = useState(0);
  const { gameState, gameRules } = useContext(GlobalContext);

  // to make the start pad unmovable
  useEffect(() => {
    setPos(gameState.ballX - gameRules.playerSize + 2)
  }, [])

  const style = {
    left: pos
  }

  return <div className="start" style={style}></div>;
}
