import React from "react";
import { useState, useRef } from "react";
import Ball from "./Ball";
import "./Game.css";

function Game() {
  const [ObstacleList, setObstacleList] = useState([]);
  const ballRef = useRef(null);
  return (
    <div className="game">
      <Ball ref={ballRef}/>
    </div>
  );
}

export default Game;
