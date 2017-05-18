import React, { Component } from 'react';

export function Greeter ({ name }) {
  return <div>Hello <span>{name}</span></div>;
}

export class Greetings extends Component {
  render() {
    const { people } = this.props;
    return (
      <ul>
        {people.map((person, i) => <Greeter key={i} name={person}/>)}
      </ul>
    );
  }
}