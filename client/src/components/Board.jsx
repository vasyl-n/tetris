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
    this.state = {
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
      // board[0][3] = Number(this.state.piece[0][0]);
      // board[0][4] = Number(this.state.piece[0][1]);
      // board[0][5] = Number(this.state.piece[0][2]);
      // board[0][6] = Number(this.state.piece[0][3]);

      // board[1][3] = Number(this.state.piece[1][0]);
      // board[1][4] = Number(this.state.piece[1][1]);
      // board[1][5] = Number(this.state.piece[1][2]);
      // board[1][6] = Number(this.state.piece[1][3]);

      // board[2][3] = Number(this.state.piece[2][0]);
      // board[2][4] = Number(this.state.piece[2][1]);
      // board[2][5] = Number(this.state.piece[2][2]);
      // board[2][6] = Number(this.state.piece[2][3]);

      // board[3][3] = Number(this.state.piece[3][0]);
      // board[3][4] = Number(this.state.piece[3][1]);
      // board[3][5] = Number(this.state.piece[3][2]);
      // board[3][6] = Number(this.state.piece[3][3]);
      for( var i = 0; i <= 3; i++ ) {
        var a = 3;
        for ( var j = 0; j < 4; j++ ) {
          board[i][a] = Number(this.state.piece[i][j]);
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
