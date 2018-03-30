import React from 'react';
import Square from './Square.jsx';

const NextPiece = (props) => {
  console.log(props)
  return (
    <div className="next-piece">
      { props.np !== undefined && props.np.map((el, ind) => {
          console.log(el)
        }) 
      }
    </div>
  )

}

export default NextPiece;