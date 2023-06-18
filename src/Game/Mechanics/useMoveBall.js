import { useContext } from "react";
import { GlobalContext } from "../../Globals";

function useMoveBall() {
  const { gameState, setGameState, gameRules } = useContext(GlobalContext);
  
  function moveBall() {
    if (gameState.movingLeft && gameState.ballX > gameRules.playerSize) {
      setGameState((prevState) => ({ ...prevState, ballX: prevState.ballX - gameRules.speed }));
    }
    if (gameState.movingRight && gameState.ballX < document.body.offsetWidth - gameRules.playerSize*2) {
      setGameState((prevState) => ({ ...prevState, ballX: prevState.ballX + gameRules.speed }));
    }
  }

  return moveBall;
}

export default useMoveBall;
