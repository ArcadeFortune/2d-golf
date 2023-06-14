import React from 'react';
import { useState } from 'react';

function Menu({ LoadGame }) {
  const [inGame, setInGame] = useState(false);
  function start() {
    setInGame(true);
  }
  return (
    inGame ? <LoadGame /> : <button onClick={start}>START</button>
  )
}

export default Menu;