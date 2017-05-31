import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Header from './header/Header';
import Home from './home/Home';
import WithStores from './stores/WithStores';
import Stores from './stores/Stores';
import Pets from './pets/Pets';

import './App.css';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <main>
            <Switch> 
              <Route exact path="/" component={Home}/>;
              <Route path="/stores" render={({ match }) => {
                return (
                  <WithStores>
                   {stores => <Stores stores={stores} match={match}/>}
                  </WithStores>
                );
              }}/>
              <Route path="/pets" component={Pets}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
