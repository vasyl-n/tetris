
const database = firebase.database();

const writeData = (username, score) => {
  firebase.database().ref('scores/' + username).set({
    score: score, 
    username: username

  });
}

const readData = callback => {
  // var userId = firebase.auth().currentUser.uid;
  return firebase.database().ref('scores/').once('value').then(function(data) {
    callback(data.val());
  });
}

export {
  database, writeData, readData
}