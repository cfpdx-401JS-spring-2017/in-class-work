import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        // this state needs to be owned by App,
        // because both child Components NumberList and
        // Show Numbers share that data
        this.state = {
            numbers: []
        };
    }

    // componentDidMount() {}

    // "react" to click event and change the numbers state
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
        // main render function for whole App

        return (
            <div className="App">
                <div className="App-header">
                    <h2>Numbers and Some Fetched Data</h2>
                </div>
                <div>
                    {/* pass the "numbers" state of App, as props for NumberList */}
                    <NumberList numbers={this.state.numbers} />
                    <button onClick={() => this.addNumber()}>
                        Add a Number
                    </button>
                </div>
                <div>
                    {/* pass the "numbers" state of App, as props for ShowNumbers */}
                    <ShowNumbers numbers={this.state.numbers} />
                </div>
            </div>
        );
    }
}

// "Dumb" Component - gimme the props!
function ShowNumbers(props) {
    return <div>{props.numbers.join(', ')}</div>;
}

// Class Component because NumberList has it's own state of "useBig"
class NumberList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            useBig: true
        };
    }

    render() {
        return (
            <div className="numbers-list">
                <div>
                    <input
                        type="checkbox"
                        checked={this.state.useBig}
                        onChange={({ target }) =>
                            this.setState({ useBig: target.checked })}
                    />
                    Show Big Number as Bold
                </div>
                <ul>
                    {this.props.numbers.map((number, i) => (
                        <Number
                            key={i}
                            number={number}
                            useBig={this.state.useBig}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

// more "Dumb" Components. Just functions that take props and return JSX
function Number({ number, useBig }) {
    let Component = SmallNumber;
    if (useBig) Component = number > 5 ? BigNumber : SmallNumber;
    return <li><Component number={number} /></li>;
}

function SmallNumber({ number }) {
    return <super>{number}</super>;
}

function BigNumber({ number }) {
    return <strong>{number}</strong>;
}

export default App;
// module.exports = App;
