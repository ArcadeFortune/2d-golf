import { useContext } from "react";
import { GlobalContext } from "../../Globals";

function useCheckEnvironment() {
  const { setGameState, setGameRules } = useContext(GlobalContext);

  function checkEnvironment() {
    setGameRules((prevState) => ({
      ...prevState,
      screenWidth: document.body.offsetWidth,
      screenHeight: document.body.offsetHeight,
    }));
    setGameState((prevState) => ({
      ...prevState,
      ballY: document.body.offsetHeight * 0.05,
    }));
  }

  return checkEnvironment;
}

export default useCheckEnvironment;
