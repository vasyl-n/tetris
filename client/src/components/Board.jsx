import React from 'react';
import Header from './Header.jsx';
import Piece from './Piece.jsx';
import Square from './Square.jsx';
import possiblePieces from '../pieces.js';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPieceCoordinates: [[],[],[],[]],
      piece: function(){
        var ind = Math.floor(Math.random() * Math.floor(possiblePieces.length));
        return possiblePieces[ind]
      }(),
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

    this.getRandomPiece = () => {
      var ind = Math.floor(Math.random() * Math.floor(possiblePieces.length));
      return possiblePieces[ind]
    },

    this.canMove = direction => {
      var result = true
      if( direction === 'left' ) {
        for( var i = 0; i < this.state.currentPieceCoordinates.length; i++) {
          console.log(this.state.currentPieceCoordinates[i][1])
          if ( this.state.currentPieceCoordinates[i][1] === 0 ) {
            result = false;
            break
          }
        }
      } 
      if( direction === 'right' ) {
        for( var i = 0; i < this.state.currentPieceCoordinates.length; i++) {
          console.log(this.state.currentPieceCoordinates[i][1])
          if ( this.state.currentPieceCoordinates[i][1] === 9 ) {
            result = false;
            break;
          }
        }
      } 
      if( direction === 'down' ) {
        for( var i = 0; i < this.state.currentPieceCoordinates.length; i++) {
          if ( this.state.currentPieceCoordinates[i][0] === 19 ) {
            result = false;
            break;
          }
        }
      } 
      return result
    }

    this.rotate = () => {

    };
    
    this.updatePiece = () => {
      var board = this.state.board.slice();
      this.state.currentPieceCoordinates.forEach((el, ind)=> {
        board[el[0]][el[1]] = 1
      })
      this.setState({board: board})
      console.log(this.state)
    };

    this.removeCurrentPieceFromBoard = () => {
      var board = this.state.board.slice();
      this.state.currentPieceCoordinates.forEach((el, ind)=> {
        board[el[0]][el[1]] = 0
      })
      this.setState({board: board})
    }

    this.movePiece = (where) => {
      var newCoord = [];
      this.state.currentPieceCoordinates.forEach((el, ind) => {
        var newPix = [];
        if (where === 'down') {
          newPix.push(el[0] + 1);
          newPix.push(el[1]);
        } else if ( where === 'left' ) {
          newPix.push(el[0]);
          newPix.push(el[1]-1);
        } else if ( where === 'right' ) {
          newPix.push(el[0]);
          newPix.push(el[1]+1);
        }
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
        downArrow: 40,
        space: 32
      }
      switch( event.keyCode ) {
          case keyCodes.downArrow:
              if ( this.canMove('down')){
                this.movePiece('down');
              }
              break;
          case keyCodes.leftArrow:
              if ( this.canMove('left')){
                this.movePiece('left');
              }
              break;
          case keyCodes.rightArrow:
              if ( this.canMove('right')){
                this.movePiece('right');
              }
              break;
          case keyCodes.upArrow:
              this.rotate();
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
