import React, { Component } from 'react';
import logo from './logo.svg';
import { Greetings } from './Greetings';

class App extends Component {
  render() {
    return <Greetings people={['Marty', 'David']}/>;
  }
}

export default App;