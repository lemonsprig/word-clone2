import React from 'react';
import { useState }  from 'react';

function GuessInput({guessList, setGuessList}) {

  [guess, setGuess] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault();
    console.log({guess});
    const newGuessList = [...guessList, guess];
    setGuessList(newGuessList);
    setGuess('');
  }

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={handleSubmit}
    >
      <label className="guess-input-wrapper label" htmlFor="guess-input">Enter Guess:</label>
      <input 
        type="text" 
        id="guess-input" 
        className="guess-input-wrapper input"
        minLength="5"
        maxLength="5"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      ></input>
    </form>
  );
}

export default GuessInput;
