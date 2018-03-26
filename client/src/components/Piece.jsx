import React from 'react';
import possiblePieces from '../pieces.js';
import Board from './Board.jsx';

class Piece extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Board piece={possiblePieces[0]} />
      </div>
    );
  }
};

export default Piece;
