import { useContext } from "react";
import { GlobalContext } from "../../Globals";

import useGeneratePos from "./useGeneratePos";


function useAddPole() {
  const { setGameState, gameRules } = useContext(GlobalContext);

  const generatePos = useGeneratePos();

  function addPole() {
    const { x, id } = generatePos();
    var randomNumber = Math.floor(Math.random() * 300) + 1;
    if (randomNumber === 1) {
      setGameState((others) => ({
        ...others,
        poles: [
          ...others.poles,
          { x: x, y: gameRules.objectStartingHeight, key: id },
        ],
      }));
    }
  }

  return addPole;
}

export default useAddPole;
