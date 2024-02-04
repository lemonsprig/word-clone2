import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import Guess from '../Guess/Guess';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants'


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guessList, setGuessList] = React.useState(["woman", "lover","cakes"])
  // game states allowed playing, won, lost
  const [gameState, setGameState] = React.useState('playing')

  function handleSubmitGuess(guess) {

    const newGuessList = [...guessList, guess]
    console.log(newGuessList)


    if(guess === answer) {
      setGameState('won')
    } else if(newGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState('lost')
    }

    setGuessList([...guessList, guess])
    console.log("game: ",{guessList})
  }


  return <>
    {gameState}
    <GuessList guesses={guessList} answer={answer}></GuessList>
    <GuessInput guessList={guessList} handleSubmitGuess={handleSubmitGuess}></GuessInput>
  </>;
}

export default Game;
