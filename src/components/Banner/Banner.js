import React from 'react';

function Banner( {state, message} ) {
  return (
  <div className={`banner ${state}`}>
    <p>{message}</p>
  </div>
  );
}

export default Banner;
