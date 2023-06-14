import React from 'react';
import { useState } from 'react';
import Game from '../Game/Game';
import StartAnimation from './StartAnimation';
import "./Menu.css"

function Menu() {
  const [inGame, setInGame] = useState(false);
  function start() {
    // Starts the game when the specific button is clicked
    setInGame(true);
  }
  return (
    inGame ? <Game /> : <StartAnimation startFunction={start}/>
  )
}

export default Menu;