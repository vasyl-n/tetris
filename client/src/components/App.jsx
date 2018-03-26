import React from 'react';
import Header from './Header.jsx';
import Board from './Board.jsx';
import Piece from './Piece.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='app-container'>
        <Header />
        <div className='main-container'> 
          {/* <Piece /> */}
          <Board />
        </div>
      </div>
    );
  }
};




export default App;
