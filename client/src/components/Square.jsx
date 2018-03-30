import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    var activeStyle = {
      backgroundColor:'black'
    };
    var inActiveStyle = {
      backgroundColor:'lightblue'
    };
    var nextStyle = {
      backgroundColor:'transparent'
    }

    return (
      <div className="square" style={this.props.s === 1 ? activeStyle : this.props.isNext? nextStyle : inActiveStyle}>
      </div>
    );
  }
};

export default Square;
