import React from 'react';

import {NUM_OF_GUESSES_ALLOWED} from '../../constants'
import {range} from '../../utils'

import Guess from '../Guess/Guess';

function GuessList({guesses, answer}) {
  console.log({guesses})
  console.log({answer})
  const myrange = range(5)
  console.log(myrange)
return (
      <div className ="guess-results">
        { range(NUM_OF_GUESSES_ALLOWED).map((num) => (
          <Guess key={num} value={guesses[num]} answer={answer}></Guess>
        ))}
      </div>
    );
}

export default GuessList;
