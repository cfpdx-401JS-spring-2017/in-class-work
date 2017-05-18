import React, { Component } from 'react';

export function Greeter({ salutation, name }) {
  return <div>{salutation} <span>{name}</span></div>;
}

export class Greetings extends Component {
  constructor() {
    super();
    this.state = {
      salutation: 'Hello'
    };
  }

  changeSalutation() {
    this.setState({
      salutation: this.getOppositeSalutation()
    });
  }

  getOppositeSalutation() {
    return this.state.salutation === 'Hello' ? 'Goodbye' : 'Hello';
  }

  render() {
    const { people } = this.props;
    const { salutation } = this.state;
    return (
      <div>
        <ul>
          {people.map((person, i) => <Greeter
            key={i}
            salutation={salutation}
            name={person} />)}
        </ul>
        <button onClick={() => this.changeSalutation()}>
          Say {this.getOppositeSalutation()}
        </button>
      </div>
    );
  }
}
