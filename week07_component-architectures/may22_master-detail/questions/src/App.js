import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './scenes/Welcome';
import Lost from './scenes/Lost';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      CurrentScene: Welcome,
      user: {
        name: '',
        alcohol: 0,
        items: []
      }
    };

    this.changeScene = this.changeScene.bind(this);
    this.addItem = this.addItem.bind(this);
    this.addAlcohol = this.addAlcohol.bind(this);
  }

  changeScene(Scene = Welcome, data) {
    this.addAlcohol(-2);
    this.setState({ CurrentScene: Scene, data });
  }

  addItem(item) {
    const user = this.state.user;
    const items = user.items.slice();
    items.push(item);
    this.setState({
      user: Object.assign(user, { items })
    });
  }

  addAlcohol(alcohol) {
    const user = this.state.user;
    alcohol = Math.max(user.alcohol + alcohol, 0);

    // if over 10, look out too much fun
    if (alcohol > 10) {
        this.changeScene(Lost);
    }

    this.setState({
      user: Object.assign(user, { alcohol })
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
          user={this.state.user}  
          addItem={this.addItem}  
          addAlcohol={this.addAlcohol}/>
      </div>
    );
  }
}

export default App;
