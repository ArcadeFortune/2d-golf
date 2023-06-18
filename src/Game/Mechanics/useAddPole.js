import { useContext } from "react";
import { GlobalContext } from "../../Globals"

function useAddPole() {
  const { setGameState, gameRules } = useContext(GlobalContext);

  function addPole(isBonus) {
    console.log('asf')
  }

  return addPole;
}

export default useAddPole;
