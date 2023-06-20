import { useContext } from "react";
import { GlobalContext } from "../../Globals";

import randomHaha from "../OnlyToMakeYouFeelBad"
import useRemoveObject from "./useRemoveObject";
import useAddScore from "./useAddScore"
;
function useMoveObjects() {
  const removeObject = useRemoveObject()
  const addScore = useAddScore()
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
        if (object.type === "pole") randomHaha()
      }
      // console.log('ball:', gameState.ballX, '\nPole:', object.x)
      if (
        gameState.ballX + gameRules.playerSize > object.x 
        && gameState.ballX + gameRules.playerSize < object.x + gameRules.poleWidth
        && object.y + gameRules.poleHeight/1.5 < gameState.ballY
        && object.y + gameRules.poleHeight > gameState.ballY
        ) {
        removeObject(object)
        addScore(true)
      }
      return null;
    })
  }

  return moveObjects;
}

export default useMoveObjects;
