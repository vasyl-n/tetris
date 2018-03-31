import React from 'react';
import Header from './Header.jsx';
import Board from './Board.jsx';
import Left from './Left.jsx';
import Right from './Right.jsx';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      linesBurned: 0
    };
  }

  gameOver() {
    console.log('gameOver');
  }

  changeNextPiece(nextP) {
    this.setState({nextPiece: nextP});
  }

  scoreHandler(multiplier) {
    this.setState((prev) => {
      if (multiplier > 0) {
        return {score: prev.score + (300 * multiplier), linesBurned: prev.linesBurned + multiplier}
      }
      return {score: prev.score + 50 }
    })
  }

  render() {
    return (
      <div className='app-container'>
        <Header />
        <div className='main-container'> 
          <Left />  
          <Board gameOver={this.gameOver} 
            handleNextPiece={this.changeNextPiece.bind(this)}
            scoreHandler={this.scoreHandler.bind(this) } />
          <Right np={this.state.nextPiece} score={this.state.score} lines={this.state.linesBurned}  />
        </div>
      </div>
    );
  }
};




export default App;
