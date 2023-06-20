import React from "react";
import { useEffect, useContext } from "react";

// Global Variables
import { GlobalContext } from "../Globals"

// Ball
import Ball from "./Ball/Ball";
import useMoveBall from "./Mechanics/useMoveBall";
import Start from "./Ball/Start";
import "./Game.css"

// Pole
import Pole from "./Pole/Pole"
import useAddPole from "./Mechanics/useAddPole";

// Misc
import useAddScore from "./Mechanics/useAddScore";
import useEventListener from "./Mechanics/useEventListener";
import useMoveObjects from "./Mechanics/useMoveObjects";
import useUpdateScreenSize from "./Mechanics/useCheckEnvironment";

function Game() {

  // Global Variables
  const { gameState, setGameState, gameRules } = useContext(GlobalContext);

  // Custom Hooks
  const addPole = useAddPole();
  const addScore = useAddScore();
  const checkMovement = useEventListener();
  const moveBall = useMoveBall();
  const moveObjects = useMoveObjects();
  const updateScreenSize = useUpdateScreenSize();

  function mainLoop() { // This is what happens on every frame
    moveBall()
    moveObjects()
    addPole()
    console.log('Current score: ' + gameState.score)
    // console.log(gameState.objects)
    // console.log(gameState.ballY)
  }
  
  function tick() {
    const delay = Math.floor(1/gameRules.FPS*1000) // This is the definition of one tick
    const interval = setInterval(() => {
      addScore()
      // I cant move the ball here, because it is a setInterval which does not update from setState, so another useEffect is in need

      // if (condition) {
      //   clearInterval(interval);
      // }

      // Cleanup
    }, process.env.NODE_ENV === 'development' ? delay * 2 : delay); // Because React has a reason to not be my favourite language, will it render components twice in development mode :)

    return () => clearInterval(interval);    
  }

  function startCheckingMovement() {
    checkMovement()
  }

  function afterAnimation(callback) {
    const delay = gameRules.startAnimationDuration; // Wait for the ball to fall down
    const timer = setTimeout(() => {
      callback()
    }, delay);

    return () => clearTimeout(timer);
  }

  // Main Loop
  useEffect(() => {
    mainLoop()
  }, [gameState.score]); // Run the mainLoop() on every tick

  // Control the main loop
  useEffect(() => {
    afterAnimation(tick) // After the animtion, it starts ticking
  },[]);

  // Move Ball with arrowkeys
  useEffect(() => {
    afterAnimation(startCheckingMovement)      
  },[]);

  return (    
    <div className="game" >
      <Ball/>
      <Start/>
      {gameState.objects.map((pole) => (
        <Pole key={pole.key} pole={pole} /> // x and y defined in pole in Pole.js
      ))}
    </div>
  );
}

export default Game;
