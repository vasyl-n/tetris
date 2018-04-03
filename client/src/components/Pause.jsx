import React from 'react';

const Pause = (props) => {
  return (
    <div className={`pause paused${props.paused}`} onClick={props.onClick}   >
      { props.paused ? 'Play': 'Pause' }
    </div>
  )
}

export default Pause;