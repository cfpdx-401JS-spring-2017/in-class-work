import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() { 
    super();

    this.state = {
      size: 20,
      color: '#aaaaaa'
    }    

    this.changeFontSize = this.changeFontSize.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  changeFontSize({ target }) {
    this.setState({ size: target.value });
  }

  changeColor(color) {
    this.setState({ color });
  }

  render() {
    const name = 'Ivy';
    const numbers = [1, 3, 8];
    const { size, color } = this.state;
    // const size = this.state.size;
    // const color = this.state.color;

    return (
        <div className="App">
          <div className="App-header">
                <h2>{name}</h2>
          </div>
          <ul>
          {numbers.map((number, i) => <li key={i}>{number}</li>)}
          </ul>
          <div>
          size is {size}
          <input type="range"
            value={size}
            onChange={this.changeFontSize} />
          <br/>
            <input type="color" 
              value={color}
              onChange={this.changeColor} />
          </div>
        
          <p style={{
                  fontSize: `${size}px`,
                  color
              }}>
              Here is some very nice text
          </p>
        </div>
    );
  }
}

export default App;
// module.exports = App;
