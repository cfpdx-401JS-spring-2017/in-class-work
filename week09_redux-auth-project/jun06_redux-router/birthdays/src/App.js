import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Birthdays from './Birthdays';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My Friends and Their Birthdays</h2>
        </div>
        <Birthdays/>
      </div>
    );
  }
}

export default App;
