import React from "react";
import { useRef } from "react";

import Ball from "./Ball";
import Start from "./Start";
import "./Game.css"

function Game() {
  const boardRef = useRef(null);
  return (
    
    <div className="game" ref={boardRef}>
      <Ball boardRef={boardRef}/>
      <Start/>
    </div>
  );
}

export default Game;
