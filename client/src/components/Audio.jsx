import React from 'react';
import '../style/audio.css';

class Audio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        playing: false
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
            <audio loop id="myAudio">
                <source src="./tetris.mp3" type="audio/mpeg"/>
            </audio>
        <div className="audioControl" onClick={this.clickHandler} >
          <img src={this.state.playing ? './audio-enabled.png' : './audio-disabled.png'} alt="" height='50'/>
        </div>
      </div>
    );
  }
};

export default Audio;
