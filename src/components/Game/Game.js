import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
// import Guess from '../Guess/Guess';
import Banner from '../Banner/Banner';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guessList, setGuessList] = React.useState([])
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

    setGuessList(newGuessList)
    console.log("game: ",{guessList})
  }


  return <>
    {/* {gameState != 'playing' ? <Banner state="sad" message="Some message on the banner"></Banner> : ''} */}
    {/* <Banner state="sad" message="Some message on the banner"></Banner> */}
    <GuessList guesses={guessList} answer={answer}></GuessList>
    <GuessInput gameState={gameState} handleSubmitGuess={handleSubmitGuess}></GuessInput>
    {gameState !== 'playing' && (<Banner gameState={gameState} numOfGuesses={guessList.length} answer={answer}></Banner>) }
  </>;
}

export default Game;
