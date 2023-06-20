import { useContext } from "react";
import { GlobalContext } from "../../Globals";

function useAddScore() {
  const { setGameState, gameRules } = useContext(GlobalContext);

  function addScore(isBonus) {
    let bonus = 0;
    if (isBonus) bonus = gameRules.poleBonusScore
    setGameState((others) => ({
      ...others,
      score: others.score + Math.floor(1 / gameRules.FPS * 1000) / 1000 + bonus,
    }));
  }

  return addScore;
}

export default useAddScore;
