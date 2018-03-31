import React from 'react';
import '../style/score.css';

const Score = (props) => {

  return(
    <div className="scores">
      <div className="score"><span>Score: </span><span>{props.score}</span></div>
      <div className="lines"><span>Lines: </span><span>{props.lines}</span></div>
    </div>

  )

}

export default Score