import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <div className={`square ${this.props.s === 1 ? "active-style" : this.props.isNext ? "next-style" : "inactive-style"}`}>
        <div className="triangle"></div>
      </div>
    );
  }
};

export default Square;
