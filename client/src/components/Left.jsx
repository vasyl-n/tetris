import React from 'react';
import Audio from './Audio.jsx'
import NextPiece from './NextPiece.jsx'
import Stats from './Stats.jsx';
import HighScores from './HighScores.jsx';
import Pause from './Pause.jsx';
import '../style/left.css'

class Left extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="left">
        <div className="top-bar">
          <Audio />
        </div>
        <HighScores username={this.props.username} />
      </div>
    );
  }
};

export default Left;