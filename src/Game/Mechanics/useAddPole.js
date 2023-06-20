import { useContext } from "react";
import { GlobalContext } from "../../Globals";

import useGeneratePos from "./useGeneratePos";


function useAddPole() {
  const { setGameState, gameRules } = useContext(GlobalContext);

  const generatePos = useGeneratePos();

  function addPole(dev) {
    const { x, id } = generatePos();
    var randomNumber = Math.floor(Math.random() * 300) + 1;
    if (dev ? 1 : randomNumber === 1) {
      setGameState((others) => ({
        ...others,
        objects: [
          ...others.objects,
          { key: id, x: x, y: gameRules.objectStartingHeight, type: "pole"},
        ],
      }));
    }
  }

  return addPole;
}

export default useAddPole;
