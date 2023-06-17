import React from "react";
import { useEffect, useContext } from "react";

// Global Variables
import { GlobalContext } from "../Globals";

// Ball
import Ball from "./Ball";
import useMoveBall from "../Mechanics/useMoveBall";
import "./Game.css"

// Misc
import useAddScore from "../Mechanics/useAddScore";
import Start from "./Start";

function Game() {
  // Global Variables
  const { gameState, setGameState, gameRules } = useContext(GlobalContext);

  // Mechanics
  const addScore = useAddScore();
  const moveBall = useMoveBall();

  // Main Loop
  useEffect(() => {
    const delay = 1300; // Wati for the ball to fall down
    const timer = setTimeout(() => {



      // The Game starts here
      const delay2 = Math.floor(1/gameRules.FPS*1000)
      const interval = setInterval(() => {
        addScore()
        // console.log(gameState.movingLeft)


        // if (condition) {
        //   clearInterval(interval);
        // }                
        // Cleanup
      }, delay2);  
      return () => clearInterval(interval); 
    }, delay);
    return () => clearTimeout(timer);
  },);

  // Move Ball
  useEffect(() => {
    function keyPressed(event) {
      if (event.key === 'ArrowLeft') {
        setGameState((others) => ({...others, 'movingLeft': true}))
      }        
      if (event.key === 'ArrowRight') {
        setGameState((others) => ({...others, 'movingRight': true}))
      }
    }
    function keyReleased(event) {
      if (event.key === 'ArrowLeft') {
        setGameState((others) => ({...others, 'movingLeft': false}))
      }        
      if (event.key === 'ArrowRight') {
        setGameState((others) => ({...others, 'movingRight': false}))
      }
    }

    // Cleanup
    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);
    return () => {
      document.removeEventListener('keydown', keyPressed);
      document.removeEventListener('keyup', keyReleased);
      };
  },)

  // Ball Movement
  useEffect(() => {
    moveBall();
  }, [gameState]);

  return (    
    <div className="game" >
      <Ball/>
      <Start/>
    </div>
  );
}

export default Game;
