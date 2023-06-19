import React from 'react';
import { useState } from 'react';

import useCheckEnvironment from '../Game/Mechanics/useCheckEnvironment';

import Game from '../Game/Game';
import StartAnimation from './StartAnimation';
import "./Menu.css"

function Menu() {
  
  const checkEnvironment = useCheckEnvironment();
  const [inGame, setInGame] = useState(false);
  function start() {
    // Starts the game when the specific button is clicked    
    checkEnvironment()
    setInGame(true);
    console.log('And also, watch Date A Live')
  }
  return (
      inGame ? <Game /> : <StartAnimation startFunction={start}/>

  )
}

export default Menu;