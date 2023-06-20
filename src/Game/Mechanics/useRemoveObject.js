import { useContext } from "react";
import { GlobalContext } from "../../Globals";

function useRemoveObject() {
  const { setGameState } = useContext(GlobalContext);
  function removeObject(object) {
    setGameState((prevState) => ({
      ...prevState,
      objects: prevState.objects.filter((o) => o.key !== object.key),
    }));
  }
  return removeObject;
}

export default useRemoveObject;
