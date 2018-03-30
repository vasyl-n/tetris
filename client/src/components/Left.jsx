import React from 'react';
import Audio from './Audio.jsx'

class Left extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    return (
      <div className="left">
        <Audio />
      </div>
    );
  }
};

export default Left;