import { useContext } from "react";
import { GlobalContext } from "../../Globals";

import useRemoveObject from "./useRemoveObject";
import useAddScore from "./useAddScore";
import useAddText from "./useAddText";

function usePoleIsHit() {
  const removeObject = useRemoveObject();
  const addScore = useAddScore();
  const addText = useAddText();

  const { setGameState, gameRules } = useContext(GlobalContext);

  function poleIsHit(object) {
    removeObject(object);
    addScore(true);
    addText("+" + gameRules.poleBonusScore, object);
  }

  return poleIsHit;
}

export default usePoleIsHit;
