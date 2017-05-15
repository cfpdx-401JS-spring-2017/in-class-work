import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      message: 'hello world',
      color: '#5a76aa'
    };
  }

  changeMessage(message) {
    this.setState({ message });
  }

  changeColor(color) {
    this.setState({ color });
  }

  render() {
    return (
      <div className="editor">
        <h2>Welcome to React Editor</h2>
        <div className="settings">
          <label>
            Message:
            <input
              value={this.state.message}
              onChange={e => this.changeMessage(e.target.value)}/>
          </label>
          <label>
            Color:
            <input
              type="color"
              value={this.state.color}
              onChange={e => this.changeColor(e.target.value)}/>
          </label>
        </div>
        <div className="display"
          style={{ color: this.state.color }}>
          {this.state.message}
        </div>
      </div>
    );
  }
}

export default App;
