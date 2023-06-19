import { useContext } from "react";
import { GlobalContext } from "../../Globals";

import useRemoveObject from "./useRemoveObject";
function useMoveObjects() {
  const removeObject = useRemoveObject()
  const { gameState, setGameState, gameRules } = useContext(GlobalContext);

  function moveObjects() {
    setGameState((prevState) => ({
      ...prevState,
      objects: prevState.objects.map((object) => ({
        ...object,
        y: object.y - gameRules.objectSpeed,
        
      })),
    }));
    // Im condisering to move this to a seperate function, but I dont know if it is worth it
    gameState.objects.map((object) => {
      if (object.y < gameRules.objectDeletionHeight) {
        removeObject(object)
      }

      if (object.x < gameState.ballX + gameRules.playerSize && object.x + gameRules.poleSize > gameState.ballX
        && object.y < gameState.ballY) {
        console.log("hit");
      }
      return null;
    })
  }

  return moveObjects;
}

export default useMoveObjects;
