import React from 'react';

const Score = (props) => {

  return(
    <div className="score">
      Score: {props.score}
      Lines: {props.lines}
    </div>

  )

}

export default Score