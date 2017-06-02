import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterContainer from './containers/CounterContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Redux</h2>
        </div>
        <CounterContainer/>
      </div>
    );
  }
}

export default App;
