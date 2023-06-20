import { useContext } from "react";
import { GlobalContext } from "../../Globals";

import useGeneratePos from "./useGeneratePos";

function useAddText() {
  const generatePos = useGeneratePos();

  const {id} = generatePos();
  const { setGameState, gameRules } = useContext(GlobalContext);

  function addText(text, object) {
    setGameState((prevState) => ({
      ...prevState,
      textfields: [
        ...prevState.textfields,
        {
          text: text,
          x: object.x,
          y: object.y,
          key: id,
          class: object.type ? 'hit' : undefined,
        },
      ],
    }));
    console.log(object.x, object.y)
  }

  return addText;
}

export default useAddText;
