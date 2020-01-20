import React from 'react';
import NextPiece from './NextPiece.jsx';
import Stats from './Stats.jsx';
import Board from './Board.jsx';
import Pause from './Pause.jsx';
import '../style/right.css';
import { writeData } from '../dbHelper'

class Right extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGameOver: false,
      linesBurned: 0,
      score: 0,
      paused: false,
      level: 1,
      boardKey: 1
    }
    this.pauseHandler = this.pauseHandler.bind(this);
    this.pauseSwitch = this.pauseSwitch.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.updateLevel = this.updateLevel.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  resetGame() {
    this.setState({
      isGameOver: false,
      linesBurned: 0,
      score: 0,
      paused: false,
      level: 1,
      boardKey: this.state.boardKey + 1,
    })
    this.props.updateKey();
  }

  changeNextPiece(np) {
    this.setState({nextPiece: np});
  }

  scoreHandler(multiplier) {
    let that = this;
    this.setState((prev) => {
      if (multiplier > 0) {
        return {score: prev.score + (300 * multiplier), linesBurned: prev.linesBurned + multiplier}
      }
      return {score: prev.score + 50 }
    })
  }

  pauseHandler() {
    this.refs.child.handlePause()
    this.pauseSwitch()
  }

  pauseSwitch() {
    this.setState( prev => {
      return { paused: !prev.paused }
    }) 
  }

  gameOver() {
    this.setState({isGameOver: true})
    let username = prompt('Please enter your name?')
    if (username !== null && username !== undefined && username !== '' ) {
      writeData(username, this.state.score)
    }
    let playAgain = confirm("Play again?");
    if (playAgain) {
      this.setState({shouldClearBoard: true})
      this.resetGame()
    }
  }

  updateLevel(newLevel){
    this.setState({level: newLevel})
  }

  render() {
    return (
      <div className="right">
        <Board 
          key={this.state.boardKey}
          ref="child"
          level={this.state.level}
          score={this.state.score}
          gameOver={this.gameOver}
          handleNextPiece={this.changeNextPiece.bind(this)}
          scoreHandler={this.scoreHandler.bind(this) }
          updateLevel={this.updateLevel}
          paused={this.state.paused} 
        />
        <div className="next-piece-stats">
          <NextPiece np={this.state.nextPiece}  />
          <Stats score={this.state.score} lines={this.state.linesBurned} level={this.state.level} />
          <Pause pauseSwitch={this.pauseSwitch} onClick={this.pauseHandler} paused={this.state.paused} isGameOver={this.state.isGameOver} />
        </div>
        
      </div>
    );
  }
};

export default Right;