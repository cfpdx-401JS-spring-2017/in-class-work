import React, { Component } from 'react';

export function Greeter({ name }) {
  return <div><span>Hello</span> <span>{name}</span></div>;
}

export class Greetings extends Component {
  constructor() {
    super();
    this.state = {
      people: ['Jane', 'Jill', 'Joey']
    };
  }

  render() {
    const { people } = this.state;
    return (
      <ul>
        {people.map((person, i) => <Greeter key={i} name={person} />)}
      </ul>
    );
  }
}
