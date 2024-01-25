import React from 'react';

import {range} from '../../utils'
import {checkGuess} from '../../game-helpers'

function Guess( {value, answer} ) {
  console.log(value)

  const checkResults = checkGuess(value, answer)

  //Josh' solution creates a separate Cell component within this component which he says is ok as it is only used in this component

  // function Cell( { letter, status} ) {
  //   const className = status ? `cell ${statugirs}` : `cell`
  //   return <span className={className}>{letter}</span>
  // }

  // return (
  //   <p className="guess">
  //     {range(5).map((num) => (
  //       <Cell
  //         key={num}
  //         letter={value ? checkResults[num].letter : undefined}
  //         status={value ? checkResults[num].status : undefined}
  //       />
  //     ))}
  //   </p>
  // )

  return (
    <p className="guess">
      {range(5).map(num => (
        <span key={num} className={value ? `cell ${checkResults[num].status}` : `cell`}>{value ? value[num] : null}</span>
      ))}
    </p>
  );
}

export default Guess;
 