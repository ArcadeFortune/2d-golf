import React from "react";
import { useEffect, useContext } from "react";

// Global Variables
import { GlobalContext } from "../Globals";

// Ball
import Ball from "./Ball";
import "./Game.css"

// Misc
import ScoreCounter from "../Mechanics/ScoreCounter";
import Start from "./Start";


function Game() {
  // Global Variables
  const { gameState, setGameState } = useContext(GlobalContext);
  
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





        // if (condition) {
        //   clearInterval(interval);
        // }     
           
        // Cleanup
      }, delay);  
      return () => clearInterval(interval); 
    }, delay);
    return () => clearTimeout(timer);
  }, [gameState]);


  return (
    
    <div className="game" >
      <Ball/>
      <Start/>
    </div>
  );
}

export default Game;
