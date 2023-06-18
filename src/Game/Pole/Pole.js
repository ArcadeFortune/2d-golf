import React, { useContext } from "react";
import './Pole.css'

import { GlobalContext } from "../../Globals";

export default function Pole(key) {
  const { gameState, gameRules } = useContext(GlobalContext);
  const style = {
    left: gameState.ballX,
    width: gameRules.poleSize,
    height: gameRules.poleSize,
  };
  return (
    <div key={key} className="pole" style={{width:10, height:10, backgroundColor:"white", top:200, position: "absolute"}}/>
  )
}

