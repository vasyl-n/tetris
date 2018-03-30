import React from 'react';
import Header from './Header.jsx';
import Board from './Board.jsx';
import Piece from './Piece.jsx';
import Left from './Left.jsx';
import Right from './Right.jsx';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // nextPiece: null
    };
  }

  gameOver() {
    console.log('gameOver');
  }

  changeNextPiece(nextP) {
    this.setState({nextPiece: nextP});
  }

  render() {
    return (
      <div className='app-container'>
        <Header />
        <div className='main-container'> 
          <Left />
          <Board gameOver={this.gameOver} handleNextPiece={this.changeNextPiece.bind(this)} />
          <Right np={this.state.nextPiece} />
        </div>
      </div>
    );
  }
};




export default App;
