import React from 'react';
import { useState } from 'react';
import StartAnimation from './StartAnimation';
import "./Menu.css"

function Menu({ LoadGame }) {
  const [inGame, setInGame] = useState(false);
  function start() {
    // Starts the game when the specific button is clicked
    setInGame(true);
  }
  return (
    inGame ? <LoadGame /> : <StartAnimation startFunction={start}/>
  )
}

export default Menu;