import React from 'react';
import NextPiece from './NextPiece.jsx';
import Stats from './Stats.jsx';

class Right extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {

    return (
      <div className="right">
         <NextPiece np={this.props.np}  />
         <Stats score={this.props.score} lines={this.props.lines} />
      </div>
    );
  }
};

export default Right;