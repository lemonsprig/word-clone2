import React from 'react';

import {range} from '../../utils'
import {checkGuess} from '../../game-helpers'

function Guess( {value, answer} ) {
  console.log(value)
  console.log(answer)

  return (
    <p className="guess">
      {range(5).map(num => (
        <span key={num} className="cell">{value ? value[num] : undefined}</span>
      ))}
    </p>
  );
}

export default Guess;
 