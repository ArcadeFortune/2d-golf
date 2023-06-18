import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // These are the global variables
  const [gameState, setGameState] = useState({
    poles: [],
    obstacles: [],
    ballX: document.body.offsetWidth / 2,
    score: 0,
    movingLeft: false,
    movingRight: false,
  });
  const [gameRules, setGameRules] = useState({
    FPS: 60, // FPS is still sort of hardcoded to 60 bc of the scoresystem
    startAnimationDuration: 1300, // Make sure to update the CSS aswell
    playerSize: 20,
    speed: 20,
    poleBonusScore: 20,
  });

  return (
    <GlobalContext.Provider value={{ gameState, setGameState, gameRules }}>
      {children}
    </GlobalContext.Provider>
  );
};
