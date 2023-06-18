import React from "react";
import { useEffect, useContext } from "react";

// Global Variables
import { GlobalContext } from "../Globals"

// Ball
import Ball from "./Ball/Ball";
import useMoveBall from "./Mechanics/useMoveBall";
import "./Game.css"

// Pole
import Pole from "./Pole/Pole"
import useAddPole from "./Mechanics/useAddPole";

// Misc
import useAddScore from "./Mechanics/useAddScore";
import useEventListener from "./Mechanics/useEventListener";
import Start from "./Ball/Start";

function Game() {
  // Global Variables
  const { gameState, setGameState, gameRules } = useContext(GlobalContext);

  // Pole
  const addPole = useAddPole();

  // Mechanics
  const addScore = useAddScore();
  const checkMovement = useEventListener();
  const moveBall = useMoveBall();
  
  // Main Loop
  useEffect(() => {    
    moveBall()
    addPole()
    // console.log('Current score: ' + gameState.score)
    // console.log(gameState.poles)
  }, [gameState.score]); // Run this code on every tick

  // Main Loop
  useEffect(() => {
    const delay = gameRules.startAnimationDuration; // Wati for the ball to fall down
    const timer = setTimeout(() => {

      // The Game starts here
      const delay = Math.floor(1/gameRules.FPS*1000) // This is the definition of one tick
      const interval = setInterval(() => {
        addScore()
        // I cant move the ball here, because it is a setInterval which does not update from setState, so another useEffect is in need
        // if (condition) {
        //   clearInterval(interval);
        // }     
                   
        // Cleanup
      }, delay);  
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  },);

  // Move Ball with arrowkeys
  useEffect(() => {
    const delay = gameRules.startAnimationDuration; // Wati for the ball to fall down
    const timer = setTimeout(() => {      
      checkMovement() // This function sets the variables 'movingLeft' and 'movingRight' in the global state accordingly
    }, delay);
    return () => clearTimeout(timer);
  },);

  return (    
    <div className="game" >
      <Ball/>
      <Start/>
      {gameState.poles.map((poles) => (
        <Pole poles={poles} {...poles} />  // WHAT IS THIS {...poles} WHY IS IT IMPORTANT?!?!
      ))}
    </div>
  );
}

export default Game;
