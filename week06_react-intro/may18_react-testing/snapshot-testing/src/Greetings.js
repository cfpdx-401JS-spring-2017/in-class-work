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

  render() {
    const { people } = this.props;
    return (
      <div>
        <ul>
          {people.map((person, i) => <Greeter
            key={i}
            salutation={this.state.salutation}
            name={person} />)}
        </ul>
        
      </div>
    );
  }
}
