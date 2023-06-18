import { useContext } from "react";
import { GlobalContext } from "../../Globals";

import Pole from "../Pole/Pole";

function useAddPole() {
  const { setGameState, gameRules } = useContext(GlobalContext);

  function addPole() {
    const x = Math.floor(
      Math.random() * (gameRules.screenWidth - gameRules.playerSize)
    );
    var randomNumber = Math.floor(Math.random() * 300) + 1;
    if (randomNumber === 1) {
      setGameState((others) => ({
        ...others,
        poles: [
          ...others.poles,
          { x: x, y: gameRules.objectStartingHeight, key: others.poles.length },
        ],
      }));
    }
  }

  return addPole;
}

export default useAddPole;
