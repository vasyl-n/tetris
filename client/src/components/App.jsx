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
      key: 0,
    };
    this.updateKey = this.updateKey.bind(this);
  }

  updateKey() {
    this.setState({key: this.state.key + 1})
  }

  render() {
    return (
      <div className='app-container'>
        <Header />
        <div className='main-container'> 
          <Left key={this.state.key}/>  
          <Right updateKey={this.updateKey} />
        </div>
      </div>
    );
  }
};




export default App;
