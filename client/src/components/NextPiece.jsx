import React from 'react';
import Square from './Square.jsx';

const NextPiece = (props) => {
  console.log(props)
  return (
    <div className="next-piece">
      { props.np !== undefined && 
          props.np.map((el, ind) => 
            (ind === 1 || ind === 0 )&& el.split('').map((i, b) => <Square s={Number(i)} key={b} isNext={true}/>
            ) 
          )
      }
    </div>
  )

}

export default NextPiece;