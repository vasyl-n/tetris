import React from 'react';

class Audio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        playing: true
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    var audio = document.getElementById("myAudio")
    this.state.playing ? audio.pause() : audio.play()
    this.setState({ playing : !this.state.playing });
  }

  render() {
    return (
      <div>
            <audio autoPlay loop id="myAudio">
                <source src="./tetris.mp3" type="audio/mpeg"/>
            </audio>
        <div className="audioControl" onClick={this.clickHandler} >pause!</div>
      </div>
    );
  }
};

export default Audio;
