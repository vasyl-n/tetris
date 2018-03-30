import React from 'react';
import Header from './Header.jsx';
import Board from './Board.jsx';
import Piece from './Piece.jsx';
import Left from './Left.jsx';
import Right from './Right.jsx';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  gameOver() {
    console.log('gameOver');
    var node =  ReactDOM.findDOMNode(Board);
    ReactDOM.unmountComponentAtNode(node);
  }

  render() {
    return (
      <div className='app-container'>
        <Header />
        <div className='main-container'> 
          <Left />
          <Board gameOver={this.gameOver} />
          <Right />
        </div>
      </div>
    );
  }
};




export default App;
