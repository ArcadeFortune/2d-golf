export default function ScoreCounter(setGameState) {
  setGameState((others) => ({...others, 'score': others.score + 0.016}))
}