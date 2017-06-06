import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Albums from './albums/AlbumsContainer';
import AlbumDetail from './album-detail/AlbumDetailContainer';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Gallery of Albums</h2>
          </div>
          <Switch> 
              <Route exact path="/albums" render={() => <Albums/>}/>;
              <Route path="/albums/:id" render={({ match }) => <AlbumDetail id={match.params.id}/>}/>;
              <Redirect to="/albums"/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
