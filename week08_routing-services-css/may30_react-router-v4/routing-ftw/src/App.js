import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Nav from './header/Nav';
import Home from './home/Home';
import Stores from './stores/Stores';
import Pets from './pets/Pets';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = { foo: 'FOO' };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React Router</h2>
            <Route component={Nav}/>
          </div>
          <main>
            <Switch> 
              <Route exact path="/" component={Home}/>;
              <Route path="/stores" component={Stores}/>
              <Route path="/pets" component={Pets}/>
              <Redirect to="/foo"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
