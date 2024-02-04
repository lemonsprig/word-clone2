import React from 'react';

function Banner( {gameState, numOfGuesses, answer} ) {
  if(gameState === "won") {
    return (
      <div className={`banner happy`}>
        <p>Congratulations, You Win!</p>
        <p>You got it in {numOfGuesses}</p>
      </div>
    );  
  } else if(gameState === "lost") {
      return (
        <div className={`banner sad`}>
          <p>Sorry, You Lose!</p>
          <p>The correct answer was {answer}</p>
        </div>
      );
    }
}

export default Banner;
