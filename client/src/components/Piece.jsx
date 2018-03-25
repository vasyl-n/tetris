import React from 'react';
import Square from './Square.jsx'


class Piece extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shape: [[0,1,0,0], 
              [0,1,0,0], 
              [0,1,0,0], 
              [0,1,0,0]]
    }
  };

  rotate() {

  };

  render() {
    return (
      <div className='piece'>
        {this.state.shape.map((el, ind) => el.map((i, b) => <Square s={i} key={b}/>))}
      </div>
    );
  }
};

export default Piece;
