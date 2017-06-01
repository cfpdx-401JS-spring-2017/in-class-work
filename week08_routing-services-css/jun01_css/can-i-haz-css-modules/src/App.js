import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';

console.log('STYLES', styles);

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
