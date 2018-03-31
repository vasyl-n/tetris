import React from 'react';

class HighScores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {scores: {}};
    this.database = firebase.database();
    this.readData = this.readData.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this)
  }

  writeData(userId, name, score) {
    firebase.database().ref('scores/' + 'test').set({
      username: name,
      score: score
    });
  }

  readData(callback){
    // var userId = firebase.auth().currentUser.uid;
    return firebase.database().ref('scores/').once('value').then(function(data) {
      callback(data.val());
    });
  }

  componentWillMount() {
    var that = this
    this.readData(function(data){
      that.setState({
        scores: data
      })
    })
  }

  render() {
    var that = this
    return(
      <div className="high-scores">
        <div className="high-scores-title">High Scores</div>
          <div className="high-scores-body">
            {
              Object.keys(that.state.scores).map(function(key, index) {
                var entry = that.state.scores[key];
                console.log(entry);
                return (
                  <div className="high-scores-entry" key={index}>
                    <div className="username">{entry.username}</div>
                    <div className="score">{entry.score}</div>
                  </div>
                )
              })
            }
          </div>
      </div>
    )
  }
}

export default HighScores;