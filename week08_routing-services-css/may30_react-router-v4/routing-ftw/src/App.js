import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './home/Home';
import Stores from './stores/Stores';
import Pets from './pets/Pets';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React Router</h2>
            <ul className="nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/stores">Stores</Link></li>
              <li><Link to="/pets">Pets</Link></li>
            </ul>
          </div>
          <main>
            {/*<Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/stores" component={Stores}/>
              <Route path="/pets" component={Pets}/>
              <Redirect to="/"/>
            </Switch>*/}
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
