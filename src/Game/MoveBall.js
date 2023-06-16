export default function MoveBall(direction, gameState, setGameState) {
  
  let ballX = gameState['ballX']
  if (ballX > 0)
  setGameState((others) => ({...others, 'ballX': others.ballX - 0.1,})) 
  
  console.log(ballX)
  return gameState
}
