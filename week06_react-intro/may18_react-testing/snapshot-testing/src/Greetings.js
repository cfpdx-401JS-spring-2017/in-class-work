import React, { Component } from 'react';

export function Greeter({ salutation, name }) {
  return <div>{salutation || 'Hello'} {name}</div>;
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
    return this.state.salutation === 'Hello' ? 'Goodbye' : 'Hello'
  }

  render() {
    const { salutation } = this.state;
    const { people } = this.props;
    return (
      <div>
        <ul>
          {people.map((person, i) => (
            <Greeter key={i} salutation={salutation} name={person} />
          ))}
        </ul>
        <button onClick={() => this.changeSalutation()}>
          Say {this.getOppositeSalutation()}
        </button>
      </div>
    );
  }
}
