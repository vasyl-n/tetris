import React from 'react';
import NextPiece from './NextPiece.jsx';
import Stats from './Stats.jsx';
import Board from './Board.jsx';
import '../style/right.css'

class Right extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linesBurned: 0,
      score: 0
    }
  }

  gameOver() {
    console.log('gameOver');
  }

  changeNextPiece(np) {
    this.setState({nextPiece: np});
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
      <div className="right">
        <Board gameOver={this.gameOver} 
            handleNextPiece={this.changeNextPiece.bind(this)}
            scoreHandler={this.scoreHandler.bind(this) } />
        <div className="next-piece-stats">
          <NextPiece np={this.state.nextPiece}  />
          <Stats score={this.state.score} lines={this.state.linesBurned} />
        </div>

      </div>
    );
  }
};

export default Right;