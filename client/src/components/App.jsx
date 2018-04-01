import React from 'react';
import Header from './Header.jsx';
import Board from './Board.jsx';
import Left from './Left.jsx';
import Right from './Right.jsx';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.gameOver = this.gameOver.bind(this)
  }

  gameOver() {
    console.log('gameOver');
    this.refs.child.pauseHandler()
  }


  render() {
    return (
      <div className='app-container'>
        <Header />
        <div className='main-container'> 
          <Left />  
          <Right gameOver={this.gameOver} />
        </div>
      </div>
    );
  }
};




export default App;
