import React from "react"

import { sample } from "../../utils"
import { WORDS } from "../../data"
import GuessInput from "../GuessInput/GuessInput"
import GuessResult from "../GuessResult/GuessResult"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
// import GameOverBanner from "../GameOverBanner/GameOverBanner"
import WonBanner from "../WonBanner/WonBanner"
import LostBanner from "../LostBanner/LostBanner"

// Pick a random word on every pageLoad.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [gameStatus, setGameStatus] = React.useState("running")
  const [guesses, setGuesses] = React.useState([])

  function handleSubmitGuess(tentativeGuess) {
    const nextGuess = [...guesses, tentativeGuess]
    setGuesses(nextGuess)

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won")
    } else if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost")
    }
  }

  return (
    <>
      {gameStatus}
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      {/* {<GameOverBanner
        gameStatus={gameStatus}
        answer={answer}
        numOfGuesses={guesses.length}
      />} */}
      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  )
}

export default Game
