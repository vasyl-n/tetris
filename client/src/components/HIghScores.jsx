import React from 'react';
import {database, readData, writeData} from '../dbHelper'

class HighScores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {scores: {}};
    // this.readData = this.readData.bind(this);
    // this.componentWillMount = this.componentWillMount.bind(this)
  }


  componentWillMount() {
    var that = this
    // writeData('Scorpion', 5000)
    readData(function(data){
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

              Object.entries(that.state.scores).sort(function(a, b){
                  return  b[1].score - a[1].score;               
              }).slice(0, 10)
              .map(function(key, index) {
                var entry = that.state.scores[key];
                console.log(key );
                return (
                  <div className="high-scores-entry" key={index}>
                    <div className="username">{key[0]}</div>
                    <div className="score">{key[1].score}</div>
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