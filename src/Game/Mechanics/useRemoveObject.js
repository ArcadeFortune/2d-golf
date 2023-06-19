import { useContext } from "react";
import { GlobalContext } from "../../Globals";

import randomHaha from "../OnlyToMakeYouFeelBad"

function useRemoveObject() {
  const { setGameState } = useContext(GlobalContext);
  function removeObject(object) {
    if (object.type === "pole") randomHaha()
    setGameState((prevState) => ({
      ...prevState,
      objects: prevState.objects.filter((o) => o.key !== object.key),
    }));
  }
  return removeObject;
}

export default useRemoveObject;
