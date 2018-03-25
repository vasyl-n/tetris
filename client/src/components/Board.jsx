import React from 'react';
import Header from './Header.jsx';
import Piece from './Piece.jsx';
import Square from './Square.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.canMoveDown = () => {};
    this.rotatePiece = () => {};
    this.moveDown = () => {};
    this.setCurrentPieceCoordinates = (x,y) => {
        console.log(x, y)
    };
    this.state = {
      currentPieceCoordinates: [[],[],[],[]],
      piece: this.props.piece.slice(),
      board: [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
      ]
    };

    this.placePiece = () => {
      var board = this.state.board.slice();
      for( var i = 0; i <= 3; i++ ) {
        var a = 3;
        for ( var j = 0; j < 4; j++ ) {
          board[i][a] = Number(this.state.piece[i][j]);
          if(board[i][a] === 1) this.setCurrentPieceCoordinates(i, a)
          a++;
        }
      }

      this.setState({ board: board }) 
      console.log(this.state.board)
    }
  };

  componentWillMount() {
    this.placePiece()
  }


  render() {
    return (
      <div className='board'>
        {this.state.board.map((el, ind) => el.map((i, b) => <Square s={i} key={b}/>))}
      </div>
    );
  }
};

export default Board;
