import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Home from './main/Home';
import Nav from './main/Nav';
import Auth from './main/Auth';
import User from './main/User';
import Albums from './albums/AlbumsContainer';
import AlbumDetail from './album-detail/AlbumDetailContainer';

import { connect } from 'react-redux';
import { checkForToken } from './main/actions';

import PrivateRoute from './PrivateRoute';

const Header = (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <Nav/>
  </div>
);

const Routes = (
  <Switch> 
    <Route exact path="/" render={() => <Home/>}/>;
    <Route path="/auth" render={() => <Auth/>}/>
    <PrivateRoute exact path="/albums" render={() => <Albums/>}/>;
    <PrivateRoute path="/user" render={() => <User/>}/>;
    <PrivateRoute path="/albums/:id" render={({ match }) => <AlbumDetail id={match.params.id}/>}/>;
    <Route path="/error" render={() => <div>Oh no, OAuth error</div>}/>
    <Redirect to="/"/>
  </Switch>  
);

class App extends Component {
  componentDidMount() {
    this.props.checkForToken();
  }

  render() {
    return (
      <div>
        <Router>
          <div className="App">
            {Header}
            <main>
              {Routes}
            </main>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  dispatch => ({ 
    checkForToken() { dispatch(checkForToken()); }  
  })
)(App);