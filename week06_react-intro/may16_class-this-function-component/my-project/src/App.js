import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            size: 20,
            color: '#aaaaaa',
            numbers: []
        };

        this.changeFontSize = this.changeFontSize.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }

    changeFontSize({ target }) {
        this.setState({ size: target.value });
    }

    changeColor(color) {
        this.setState({ color });
    }
  
    addNumber() {
      const number = Math.floor(Math.random() * 10);
      // Immumtable "way"
      // const numbers = this.state.numbers.slice();
      // numbers.push(number);
      // But, for today...
      const numbers = this.state.numbers;
      numbers.push(number);
      this.setState({ numbers });
    }

    render() {
        const { size, color, numbers } = this.state;

        return (
            <div className="App">
                <div className="App-header">
                    <h2>Numbers and Editor</h2>
                </div>
                <NumberList numbers={numbers} />
                <button onClick={() => this.addNumber()}>Add a Number</button>
                <div>
                    size is {size}
                    <input
                        type="range"
                        value={size}
                        onChange={this.changeFontSize}
                    />
                    <br />
                    <input
                        type="color"
                        value={color}
                        onChange={this.changeColor}
                    />
                </div>

                <p
                    style={{
                        fontSize: `${size}px`,
                        color
                    }}
                >
                    Here is some very nice text
                </p>
            </div>
        );
    }
}

function NumberList({ numbers }) {
    return (
        <ul>
            {numbers.map((number, i) => <Number key={i} number={number}/>)}
        </ul>
    );
}

function Number({ number }) {
  const Component = number > 5 ? BigNumber : SmallNumber;
  return <li><Component number={number}/></li>;
}

function SmallNumber({ number }) {
  return <super>{number}</super>;
}

function BigNumber({ number }) {
  return <strong>{number}</strong>;
}

export default App;
// module.exports = App;
