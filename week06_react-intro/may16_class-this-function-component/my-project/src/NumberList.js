import React, { Component } from 'react';

// Class Component because NumberList has it's own state of "useBig"
export default class NumberList extends Component {
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
                <button onClick={() => this.props.addNumber()}>
                    Add a Number
                </button>
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
