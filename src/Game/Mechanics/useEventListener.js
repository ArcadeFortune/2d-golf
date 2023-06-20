import { useContext } from "react";
import { GlobalContext } from "../../Globals";

import useAddPole from "./useAddPole";

function useEventListener() {
  const addPole = useAddPole();

  const { setGameState, gameRules } = useContext(GlobalContext);

  function checkMovement() {
    function keyPressed(event) {
      if (event.key === 'ArrowLeft') {
        setGameState((others) => ({...others, 'movingLeft': true}))
      }        
      if (event.key === 'ArrowRight') {
        setGameState((others) => ({...others, 'movingRight': true}))
      }
      if (event.key === 'Escape') {
        addPole(true)
      }
    }
    function keyReleased(event) {
      if (event.key === 'ArrowLeft') {
        setGameState((others) => ({...others, 'movingLeft': false}))
        }        
      if (event.key === 'ArrowRight') {
        setGameState((others) => ({...others, 'movingRight': false}))
      }
    }

    // Cleanup for the useEffect()
    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);
    return () => {
      document.removeEventListener('keydown', keyPressed);
      document.removeEventListener('keyup', keyReleased);
    };
  }

  return checkMovement;
}

export default useEventListener;
