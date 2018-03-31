import React from 'react';

const Stats = (props) => {

  return(
    <div className="stats">
      <div className="score"><span>Score: </span><span>{props.score}</span></div>
      <div className="lines"><span>Lines: </span><span>{props.lines}</span></div>
      <div className="level"><span>Level: </span><span>1</span></div>
    </div>

  )

}

export default Stats;