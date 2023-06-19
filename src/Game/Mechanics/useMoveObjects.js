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
    
    gameState.objects.map((object) => {
      if (object.y < gameRules.objectDeletionHeight) {
        removeObject(object)
      }
      return null;
    })
  }

  return moveObjects;
}

export default useMoveObjects;
