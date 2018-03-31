import React from 'react';

class HighScores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.database = firebase.database();
  }

  writeUserData(userId, name, score) {
    firebase.database().ref('scores/' + userId).set({
      username: name,
      score: score
    });
  }

  render() {
    console.log(this.database)
    this.writeUserData(4, 'Scorpion', 12)
    return(
      <div className="hign-scores">scores</div>
    )
  }
}

export default HighScores;