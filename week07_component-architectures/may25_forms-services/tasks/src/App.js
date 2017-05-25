import React, { Component } from 'react';
import './App.css';
import Tasks from './components/Tasks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My Tasks</h2>
        </div>
        <div>
          <Tasks />
        </div>  
      </div>
    );
  }
}

export default App;
