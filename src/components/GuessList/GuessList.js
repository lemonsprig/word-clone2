import React from 'react';

import {NUM_OF_GUESSES_ALLOWED} from '../../constants'
import {range} from '../../utils'

import Guess from '../Guess/Guess';

function GuessList({guesses}) {
  console.log({guesses})
  const myrange = range(5)
  console.log(myrange)
return (
      <div className ="guess-results">
        { range(NUM_OF_GUESSES_ALLOWED).map((num) => (
          <Guess key={num} value={guesses[num]}></Guess>
        ))}
      </div>
    );
}

export default GuessList;
