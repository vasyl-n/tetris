import React from 'react';
import Audio from './Audio.jsx'
import NextPiece from './NextPiece.jsx'
import Stats from './Stats.jsx';
import HighScores from './HighScores.jsx';
import '../style/left.css'

class Left extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="left">
        <Audio />
        <HighScores />
      </div>
    );
  }
};

export default Left;