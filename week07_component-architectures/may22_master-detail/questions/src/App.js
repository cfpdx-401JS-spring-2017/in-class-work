import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './scenes/Welcome';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      CurrentScene: Welcome,
      user: {
        name: '',
        items: []
      }
    };

    this.changeScene = this.changeScene.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  changeScene(Scene = Welcome, data) {
    this.setState({ CurrentScene: Scene, data });
  }

  addItem(item) {
    const user = this.state.user;
    const items = user.items.slice();
    items.push(item);
    this.setState({
      user: { name: user.name, items }
    });
  }
  
  render() {
    const { CurrentScene } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Adventure Time!</h2>
          <div>{this.state.user.items.join()}</div>
        </div>
        <CurrentScene changeScene={this.changeScene}
          items={this.state.user.items}  
          addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
