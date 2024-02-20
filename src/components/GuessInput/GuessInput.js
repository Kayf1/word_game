import React from "react"

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("")

  function handleSubmit(event) {
    event.preventDefault()

    if (tentativeGuess.length !== 5) {
      window.alert("Please enter 5 letters only! 💖")
      return
    }

    handleSubmitGuess(tentativeGuess)

    setTentativeGuess("")
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== "running"}
        minLength={5}
        maxLength={5}
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}
      />
    </form>
  )
}

export default GuessInput
