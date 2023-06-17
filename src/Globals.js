import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // These are the global variables
  const [gameState, setGameState] = useState({
    ballX: window.innerWidth / 2,
    score: 0,
    movingLeft: false,
    movingRight: false,
  });
  const [gameRules, setGameRules] = useState({
    FPS: 60,
    playerSize: 20,
    speed: 5,
  });

  return (
    <GlobalContext.Provider value={{ gameState, setGameState, gameRules }}>
      {children}
    </GlobalContext.Provider>
  );
};
