import { useContext } from "react";
import { GlobalContext } from "../../Globals"

import Pole from "../Pole/Pole"

function useAddPole() {
  const { setGameState, gameRules } = useContext(GlobalContext);

  function addPole(isBonus) {
    var randomNumber = Math.floor(Math.random() * 300) + 1;
    if (randomNumber === 1) {
      setGameState((others) => ({
        ...others,
        poles: [...others.poles, <Pole key={others.poles.length} />],
      }))
    } else {
      // console.log('.')
    }
  }

  return addPole;
}

export default useAddPole;
