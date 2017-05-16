import React, { Component } from 'react';
import NumberList from './NumberList';
import './App.css';

class App extends Component {
    constructor() {
        super();
        // this state needs to be owned by App,
        // because both child Components NumberList and
        // Show Numbers share that data
        this.state = {
            numbers: [3, 7]
        };
      
        // bind the "addNumber" function, so we can use short format
        // addNumber={this.addNumber} in our JSX
        this.addNumber = this.addNumber.bind(this);
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
                    {/* pass this.addNumber to be the handler for when NumberList wants
                    to let App know time to add a number */}
                    <NumberList numbers={this.state.numbers} addNumber={this.addNumber}/>
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

export default App;
// module.exports = App;
