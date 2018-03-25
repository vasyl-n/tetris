import React from 'react';
import Header from './Header.jsx';
import Piece from './Piece.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='board'>
        <Piece />
      </div>
    );
  }
};

export default Board;
