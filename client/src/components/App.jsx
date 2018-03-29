import React from 'react';
import Header from './Header.jsx';
import Board from './Board.jsx';
import Piece from './Piece.jsx';
import Left from './Left.jsx';
import Right from './Right.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  gameOver() {
    console.log('gameOver')
  }

  render() {
    return (
      <div className='app-container'>
        <Header />
        <div className='main-container'> 
          <Left />
          <Board gameOver={this.gameOver} />
          <Right />
        </div>
      </div>
    );
  }
};




export default App;
