import React from "react";
import { useRef } from "react";
import Ball from "./Ball";
import "./Game.css"

function Game() {
  const boardRef = useRef(null);
  return (
    
    <div className="game" ref={boardRef}>
      <Ball boardRef={boardRef}/>
    </div>
  );
}

export default Game;
