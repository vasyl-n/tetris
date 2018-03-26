import React from 'react';
import Header from './Header.jsx';
import Piece from './Piece.jsx';
import Square from './Square.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPieceCoordinates: [[],[],[],[]],
      piece: this.props.piece.slice(),
      board: function(){
        var arr = []
        for( var i = 0; i < 20; i++){
          var a = [];
          for( var j = 0; j < 10; j++) {
            a.push(0);
          }
          arr.push(a);
        }
        return arr
      }()
    };
    this.canMoveDown = () => {

    };
    this.rotatePiece = () => {

    };
    
    this.updatePiece = () => {
      var board = this.state.board.slice();
      this.state.currentPieceCoordinates.forEach((el, ind)=> {
        console.log(el)
        console.log(board[el[0]][el[1]])
        board[el[0]][el[1]] = 1
      })
      this.setState({board: board})
    };

    this.removeCurrentPieceFromBoard = () => {
      var board = this.state.board.slice();
      this.state.currentPieceCoordinates.forEach((el, ind)=> {
        console.log(board[el[0]][el[1]])
        board[el[0]][el[1]] = 0
      })
      this.setState({board: board})
    }

    this.moveDown = () => {
      var newCoord = [];
      this.state.currentPieceCoordinates.forEach((el, ind) => {
        var newPix = [];
        newPix.push(el[0] + 1);
        newPix.push(el[1]);
        newCoord.push(newPix);
      });
      this.removeCurrentPieceFromBoard()
      this.setState({currentPieceCoordinates: newCoord})
      this.updatePiece()
    };

    this.moveLeft = () => {
      var newCoord = [];
      this.state.currentPieceCoordinates.forEach((el, ind) => {
        var newPix = [];
        newPix.push(el[0]);
        newPix.push(el[1]-1);
        newCoord.push(newPix);
      });
      this.removeCurrentPieceFromBoard()
      this.setState({currentPieceCoordinates: newCoord})
      this.updatePiece()
    };

    this.moveRight = () => {
      var newCoord = [];
      this.state.currentPieceCoordinates.forEach((el, ind) => {
        var newPix = [];
        newPix.push(el[0]);
        newPix.push(el[1]+1);
        newCoord.push(newPix);
      });
      this.removeCurrentPieceFromBoard()
      this.setState({currentPieceCoordinates: newCoord})
      this.updatePiece()
    };

    this.handleKeyDown = (event) => {
      var keyCodes = {
        leftArrow: 37,
        upArrow:38,
        rightArrow: 39,
        downArrow: 40
      }
      switch( event.keyCode ) {
          case keyCodes.downArrow:
              this.moveDown();
              break;
          case keyCodes.leftArrow:
              this.moveLeft();
              break;
          case keyCodes.rightArrow:
              this.moveRight();
              break;
          default: 
              break;
      }
    };

    this.placeNewPiece = () => {
      var pieceCoord = []
      var board = this.state.board.slice();
      for( var i = 0; i <= 3; i++ ) {
        var a = 3;
        for ( var j = 0; j < 4; j++ ) {
          board[i][a] = Number(this.state.piece[i][j]);
          if(board[i][a] === 1) {
            pieceCoord.push([i, a])
          }
          a++;
        }
      }
      this.setState({ board: board }) 
      this.setState({ currentPieceCoordinates: pieceCoord})
    };
  };

  componentWillMount() {
    this.placeNewPiece();
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  };

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown.bind(this));
  };

  render() {
    return (
      <div className='board'>
        {this.state.board.map((el, ind) => el.map((i, b) => <Square s={i} key={b}/>))}
      </div>
    );
  }
};



export default Board;
