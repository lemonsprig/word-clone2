import React from 'react';

function Guess( {value} ) {
  console.log(value)
  const letters = value.split('');
  return (
    <p className="guess">
      {letters.map(letter => (
        <span className="cell">{letter}</span>
      ))}
    </p>
  );
}

export default Guess;
 