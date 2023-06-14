import React from 'react';
import { useState } from 'react';
import StartAnimation from './StartAnimation';

function Menu({ LoadGame }) {
  const [inGame, setInGame] = useState(false);
  function start() {
    setInGame(true);
  }
  return (
    <div className="mainMenu">
      {inGame ? <LoadGame /> : <StartAnimation startFunction={start}/>}
    </div>
  )
}

export default Menu;