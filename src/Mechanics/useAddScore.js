import { useContext } from "react";
import { GlobalContext } from "../Globals";

function useAddScore() {
  const { setGameState, gameRules } = useContext(GlobalContext);

  function addScore() {
    setGameState((others) => ({ ...others, score: others.score + Math.floor(1/gameRules.FPS*1000)/1000 }));
  };

  return addScore;
}

export default useAddScore;