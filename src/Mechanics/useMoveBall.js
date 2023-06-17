import { useContext } from "react";
import { GlobalContext } from "../Globals";

function useMoveBall() {
  const { gameState, setGameState, gameRules } = useContext(GlobalContext);

  function moveBall() {
    if (gameState.movingLeft && gameState.ballX > gameRules.playerSize) {
      setGameState((others) => ({...others, 'ballX': others.ballX - 1}))
    }
    if (gameState.movingRight && gameState.ballX < document.body.offsetWidth - gameRules.playerSize*2) {
      setGameState((others) => ({...others, 'ballX': others.ballX + 1}))
    }
  }

  return moveBall;
}

export default useMoveBall;
