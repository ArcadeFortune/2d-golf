import React, { createContext, useState } from 'react';
import Menu from './Menu/Menu';

const GlobalContext = createContext();
const GlobalProvider = ({ children }) => {
  const [gameState, setGameState] = useState({
    'ballX': window.innerWidth/2,
    'score': 0,
  });

  return (
    <GlobalContext.Provider value={{  }}>
      {children}
    </GlobalContext.Provider>
  );
};

function App() {
  return (
    <GlobalProvider>
    <Menu /></GlobalProvider>
  );
}

export default App;
