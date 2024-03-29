import React from 'react';

function GuessInput({handleSubmitGuess, gameState}) {

  const [guess, setGuess] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault();

    handleSubmitGuess(guess);
    setGuess('');
  }

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={handleSubmit}
    >
      <label className="guess-input-wrapper label" htmlFor="guess-input">Enter Guess:</label>
      <input
        disabled={gameState !== 'playing'}
        type="text" 
        id="guess-input" 
        className="guess-input-wrapper input"
        minLength="5"
        maxLength="5"
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      ></input>
    </form>
  );
}

export default GuessInput;
