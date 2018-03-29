import React from 'react';
import Header from './Header.jsx';
import Piece from './Piece.jsx';
import Square from './Square.jsx';
import possiblePieces from '../pieces.js';
import { movePieceLogic, getNextPieceState, rowShouldDisappear, getNewCoordAfterRotation} from '../helpers.js';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPieceCoordinates: [[],[],[],[]],
      currentPieceState: 0,
      piece: null,
      pieceInd: null,
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
  };

handleKeyDown (event) {
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
          clearInterval(this.interval);
          this.setInt();
          if ( this.isPieceDown() ) {
            this.handlePieceDown()
          }
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

  rotate() {
    var coord = this.state.currentPieceCoordinates;
    console.log(coord, this.state.pieceInd, this.state.currentPieceState)
    var newCoord = getNewCoordAfterRotation(coord, this.state.pieceInd, this.state.currentPieceState)
    this.setState((state, props) => {
      // console.log(stat)
      return { currentPieceState: getNextPieceState(state.currentPieceState) }
    });
    console.log(newCoord, 'NCCCCCC')
    this.removeCurrentPieceFromBoard();
    this.setState({currentPieceCoordinates: newCoord});
    this.updatePiece();
  }


  handlePieceDown() {
    var rowsToClear = rowShouldDisappear(this.state.board);
    if ( rowsToClear.length > 0 ) {
      this.clearRows(rowsToClear);
    }
    this.placeNewPiece(this.getRandomPiece());
  }

  clearRows(rows) {
    if ( rows.length ) {
      var board = this.state.board.slice();
      for ( var row = 0; row < rows.length; row++) {
        for ( var i = rows[row]; i >= 1; i-- ) {
          for ( var cellInd = 0; cellInd < 10; cellInd++ ) {
            board[i][cellInd] = board[i - 1][cellInd];
          }
        }
      }
      this.setState({board: board})
    }
  }

  setInt(){
    var that = this;
    this.interval = setInterval(function() {
      if ( that.isPieceDown() ) {
        that.handlePieceDown()
      } else if ( that.canMove('down') && !that.isPieceDown()) {
        that.movePiece('down');
      }
    }, 1000)
  }

  movePiece(where) {
    var newCoord = movePieceLogic(this.state.currentPieceCoordinates, where);
    this.removeCurrentPieceFromBoard()
    this.setState({currentPieceCoordinates: newCoord})
    this.updatePiece()
  };


  isInCurrCoord(arr){
    var currPieceCoord = this.state.currentPieceCoordinates;
    var res = false;
    for ( var i = 0; i < currPieceCoord.length; i++){
      if ( currPieceCoord[i][0] === arr[0] &&
        currPieceCoord[i][1] === arr[1] ) {
          res === true;
          return true;
        }
    }
    return res;
  }

  isPieceDown() {
    var result = false;
    var currPieceCoord = this.state.currentPieceCoordinates;
    for( var i = 0; i < this.state.currentPieceCoordinates.length; i++) {
      var row = this.state.currentPieceCoordinates[i][0];
      var col = this.state.currentPieceCoordinates[i][1];
      var squareCoordInNextRow = [this.state.currentPieceCoordinates[i][0] + 1, this.state.currentPieceCoordinates[i][1] ]
      if ( this.state.currentPieceCoordinates[i][0] === 19 ||
        (this.state.board[row + 1][col] === 1 && (!this.isInCurrCoord(squareCoordInNextRow) ) )
      ) {
        result = true;
        break;
      }
    }
    return result;
  };

  updatePiece() {
    var board = this.state.board.slice();
    this.state.currentPieceCoordinates.forEach((el, ind)=> {
      board[el[0]][el[1]] = 1
    })
    this.setState({board: board})
  };

  removeCurrentPieceFromBoard() {
    var board = this.state.board.slice();
    this.state.currentPieceCoordinates.forEach((el, ind)=> {
      board[el[0]][el[1]] = 0;
    })
    this.setState({board: board});
  }

  placeNewPiece (arg) {
    if( this.isGameOver() ){
      clearInterval(this.interval);
      document.removeEventListener("keydown", this.handleKeyDown.bind(this));
      this.props.gameOver();
    }
    var pieceCoord = []
    var board = this.state.board.slice();
    var p = arg || this.state.piece
    for( var i = 0; i < 2; i++ ) {
      var a = 3;
      this.setState({piece: p})
      for ( var j = 0; j < 4; j++ ) {
        board[i][a] = Number(p[i][j]);
        if(board[i][a] === 1) {
          pieceCoord.push([i, a]);
        }
        a++;
      }
    }
    this.setState({ board: board });
    this.setState({ currentPieceCoordinates: pieceCoord});
    this.setState({ currentPieceState: 0})
  };


  getRandomPiece() {
    var ind = Math.floor(Math.random() * Math.floor(possiblePieces.length));
    this.setState({piece: possiblePieces[ind]});
    console.log(ind);
    this.setState({pieceInd: ind});
    return possiblePieces[ind];

  };


  canMove(direction) {
    var result = true
    if( direction === 'left' ) {
      for( var i = 0; i < this.state.currentPieceCoordinates.length; i++) {
        if ( this.state.currentPieceCoordinates[i][1] === 0 ) {
          result = false;
          break
        }
      }
    } 
    if( direction === 'right' ) {
      for( var i = 0; i < this.state.currentPieceCoordinates.length; i++) {
        if ( this.state.currentPieceCoordinates[i][1] === 9 || 
          ( this.state.board[this.state.currentPieceCoordinates[i][1] + 1] === 1 && 
            !this.isInCurrCoord([ this.state.currentPieceCoordinates[i][1], this.state.currentPieceCoordinates[i][1]+1]) ) ) {
          result = false;
          break;
        }
      }
    } 
    if( direction === 'down' ) {
      result === !this.isPieceDown();
    } 
    return result
  }


  gameStart() {
    clearInterval(this.interval);
    this.placeNewPiece(this.getRandomPiece());
    this.setInt();
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  isGameOver() {
    if( this.state.board[1][3] === 1 || this.state.board[1][4] === 1 || this.state.board[1][5] === 1 ) return true;
    return false;
  }

  componentWillMount() {
    this.gameStart()
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
