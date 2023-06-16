import React from "react";
import { useState, useEffect, createContext } from "react";

import Ball from "./Ball";
import Start from "./Start";
import "./Game.css"

import ScoreCounter from "./ScoreCounter";

function Game() {
  const [gameState, setGameState] = useState({
    'ballX': window.innerWidth/2,
    'score': 0,
  });
  useEffect(() => {
    
    

        // const handleKeyDown = (event) => {
        //   if (event.key === 'Enter') {
        //       // Perform some action when Enter key is pressed
        //     move_player_left(gameState)
        //   }
        // };
    
        // // Attach event listener to the document
        // document.addEventListener('keydown', handleKeyDown);
    
        // return () => {
        //   document.removeEventListener('keydown', handleKeyDown);
        // };
  })

  // Main Loop
  useEffect(() => {
    const delay = 1300; // Wati for the ball to fall down
    const timer = setTimeout(() => {

      
      
      
      
    function move_player_left(gameState){
      //import MoveBall from "./MoveBall";
    }
    
               
      // The Game starts here
      const delay = 16; // 60 FPS
      const interval = setInterval(() => {   
        ScoreCounter(setGameState)
        // setGameState((others) => ({...others, 'score': others.score + 0.016}))
        

















    //     // Clear the interval after the desired number of iterations
    //     // For an infinite loop, you can omit this line
    //     // if (condition) {
    //     //   clearInterval(interval);
    //     // }     
           
        // Cleanup
      }, delay);  
      return () => clearInterval(interval); 
    }, delay);
    return () => clearTimeout(timer);
  }, [gameState]);


  return (
    
    <div className="game" >
      <Ball gameState={gameState}/>
      <Start/>
    </div>
  );
}

export default Game;
