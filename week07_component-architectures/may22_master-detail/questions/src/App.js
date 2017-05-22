import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './scenes/Welcome';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      currentScene: Welcome
    };

    this.changeScene = this.changeScene.bind(this);
  }

  changeScene(Scene = Welcome) {
    this.setState({ currentScene: Scene });
  }
  
  render() {
    const CurrentScene = this.state.currentScene;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Adventure Time!</h2>
        </div>
        <CurrentScene changeScene={this.changeScene}/>
      </div>
    );
  }
}

export default App;
