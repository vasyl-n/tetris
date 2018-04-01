import React from 'react';
import NextPiece from './NextPiece.jsx';
import Stats from './Stats.jsx';
import Board from './Board.jsx';
import Pause from './Pause.jsx';
import '../style/right.css'

class Right extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linesBurned: 0,
      score: 0,
      paused: false
    }
    this.pauseHandler = this.pauseHandler.bind(this)
    this.pauseSwitch = this.pauseSwitch.bind(this)
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

  pauseHandler() {
    this.refs.child.handlePause()
  }

  pauseSwitch() {
    this.setState( prev => {
      return { paused: !prev.paused }
    })
    
  }

  render() {

    return (
      <div className="right">
        <Board 
            ref="child"
            gameOver={this.props.gameOver} 
            handleNextPiece={this.changeNextPiece.bind(this)}
            scoreHandler={this.scoreHandler.bind(this) }
            paused={this.state.paused} />
        <div className="next-piece-stats">
          <NextPiece np={this.state.nextPiece}  />
          <Stats score={this.state.score} lines={this.state.linesBurned} />
        </div>
        <Pause pauseSwitch={this.pauseSwitch} onClick={this.pauseHandler} />
      </div>
    );
  }
};

export default Right;