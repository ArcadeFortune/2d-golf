import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // These are the global variables
  const [gameState, setGameState] = useState({
    objects: [],
    textfields: [],
    ballX: document.body.offsetWidth / 2,
    ballY: 0, //
    score: 0,
    movingLeft: false,
    movingRight: false,
  });
  const [gameRules, setGameRules] = useState({
    FPS: 60, // FPS is still sort of hardcoded to 60 bc of the scoresystem
    screenWidth: 0, // These are updated in useUpdateScreenSize.js
    screenHeight: 0, 
    objectStartingHeight: 0,
    startAnimationDuration: 1300, // Make sure to update the CSS aswell
    playerSize: 20,
    poleWidth: 60,
    poleHeight: 91,
    speed: 20,
    objectSpeed: 5,
    poleBonusScore: 10,
    objectDeletionHeight: 0 - 100,
  });

  return (
    <GlobalContext.Provider value={{ gameState, setGameState, gameRules, setGameRules }}>
      {children}
    </GlobalContext.Provider>
  );
};
