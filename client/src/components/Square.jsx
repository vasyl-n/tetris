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
      backgroundColor:'transparent'
    };

    return (
      <div className="square" style={this.props.s === 1 ? activeStyle : inActiveStyle}>
      </div>
    );
  }
};

export default Square;
