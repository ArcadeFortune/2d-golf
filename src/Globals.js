import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // These are the global variables
  const [gameState, setGameState] = useState({
    objects: [],
    ballX: document.body.offsetWidth / 2,
    score: 0,
    movingLeft: false,
    movingRight: false,
  });
  const [gameRules, setGameRules] = useState({
    FPS: 60, // FPS is still sort of hardcoded to 60 bc of the scoresystem
    screenWidth: document.body.offsetWidth,
    screenHeight: document.body.offsetHeight,
    startAnimationDuration: 1300, // Make sure to update the CSS aswell
    playerSize: 20,
    poleSize: 30,
    speed: 20,
    objectSpeed: 5,
    poleBonusScore: 20,
    objectStartingHeight: window.screen.height,
    objectDeletionHeight: 0 - 100,
  });

  return (
    <GlobalContext.Provider value={{ gameState, setGameState, gameRules }}>
      {children}
    </GlobalContext.Provider>
  );
};
