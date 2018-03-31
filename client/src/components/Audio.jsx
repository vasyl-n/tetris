import React from 'react';

class Audio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false

    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    var audio = this.state.audio;
    this.state.playing ? audio.pause() : this.play(audio);
    this.setState({ playing : !this.state.playing });
  }

  play(audio) {
    document.getElementById("myAudio").volume = 0.5;
    audio.play();
  }

  componentDidMount(){
    this.setState({audio: document.getElementById("myAudio")})
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
