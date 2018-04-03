import React from 'react';

const Pause = (props) => {
  console.log(props.isGameOver)
  return (
    <div className={`pause paused${props.paused}`} onClick={props.onClick}  >
      { !props.isGameOver ? props.paused ? 'Play': 'Pause' : '' }
    </div>
  )
}

export default Pause;