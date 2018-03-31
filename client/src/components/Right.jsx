import React from 'react';
import NextPiece from './NextPiece.jsx';
import Score from './Score.jsx';

class Right extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {

    return (
      <div className="right">
         <NextPiece np={this.props.np}  />
         <Score score={this.props.score} lines={this.props.lines} />
      </div>
    );
  }
};

export default Right;