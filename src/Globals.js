import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // Thats the global variable
  const [gameState, setGameState] = useState({
    'ballX': window.innerWidth/2,
    'score': 1000,
  });
  
  // Provide the global variable and the update function to the child components
  return (
    <GlobalContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GlobalContext.Provider>
  );
};
