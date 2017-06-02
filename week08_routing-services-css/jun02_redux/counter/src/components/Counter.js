import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { amount: 1 };
  }

  render() {
    const { count, increment, decrement } = this.props;
    const { amount } = this.state;

    return (
      <div>
        Current counter value: {count}
        <div><button onClick={e => increment(amount)}>Increment</button></div>
        <div><button onClick={e => decrement(amount)}>Decrement</button></div>
        <div>
          <input
            type="range"
            min="1"
            max="5"
            value={amount}
            onChange={({ target }) => this.setState({ amount: +target.value })}
          />
          {amount}
        </div>
      </div>
    );
  }
}
