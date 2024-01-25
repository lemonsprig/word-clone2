import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import Guess from '../Guess/Guess';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guessList, setGuessList] = React.useState(["woman", "lover","cakes"])

  function handleSubmitGuess(guess) {
    setGuessList([...guessList, guess])
    console.log("game: ",{guessList})
  }


  return <>
    <GuessList guesses={guessList} answer={answer}></GuessList>
    <GuessInput guessList={guessList} handleSubmitGuess={handleSubmitGuess}></GuessInput>
  </>;
}

export default Game;
