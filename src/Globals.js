import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // Thats the global variable
  const [gameState, setGameState] = useState({
    'ballX': window.innerWidth/2,
    'score': 1000,
  });

  const [gameRules, setGameRules] = useState({
    playerSize: 20,
    speed: 5
  })
  
  return (
    <GlobalContext.Provider value={{ gameState, setGameState, gameRules }}>
      {children}
    </GlobalContext.Provider>
  );
};
