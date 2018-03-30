import React from 'react';
import NextPiece from './NextPiece.jsx';

class Right extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {

    return (
      <div className="right">
        <NextPiece np={this.props.np} />
      </div>
    );
  }
};

export default Right;