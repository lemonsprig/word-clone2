import React from 'react';
import Guess from '../Guess/Guess';

function GuessList({guessList}) {
  console.log({guessList})
return (
      <div className ="guess-results">
        {guessList.map((guess, index) => (
          <Guess key={index} value={guess}></Guess>
        ))}
      </div>
    );
}

export default GuessList;
