import React from 'react';
import { useState } from 'react';

function Menu({ LoadGame }) {
  const [inGame, setInGame] = useState(false);
  function start() {
    setInGame(true);
  }
  if (inGame) {
    return <LoadGame />;
  } else {
    return <button onClick={start}>START</button>;
  }
}

export default Menu;
// inGame ? <button onClick={start}>START</button> : <div>GAME</div>