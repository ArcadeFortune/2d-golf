import { v4 as uuidv4 } from 'uuid';

import { useContext } from "react";
import { GlobalContext } from "../../Globals";

function useGeneratePos() {
  const { gameRules } = useContext(GlobalContext);

  function geneartePos() {
    const x = Math.floor(
      Math.random() * (gameRules.screenWidth - gameRules.playerSize)
    );

    const id = uuidv4();

    return {x, id}
  }

  return geneartePos;
}

export default useGeneratePos;
