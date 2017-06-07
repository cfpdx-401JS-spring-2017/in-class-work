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
// import Auth from './main/Auth';
import Albums from './albums/AlbumsContainer';
import AlbumDetail from './album-detail/AlbumDetailContainer';

// import { connect } from 'react-redux';
// import { checkForToken } from './main/actions';


class App extends Component {
  // componentDidMount() {
  //   this.props.checkForToken();
  // }

  render() {
    const { user } = this.props;
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Nav/>
          </div>
          <main>
            <Switch> 
              <Route exact path="/" render={() => <Home user={user}/>}/>;
              {/*<Route path="/auth" render={() => user ? <Redirect to="/"/> : <Auth/>}/>;*/}
              <Route exact path="/albums" render={() => <Albums/>}/>;
              <Route path="/albums/:id" render={({ match }) => <AlbumDetail id={match.params.id}/>}/>;
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
// export default connect(
//   state => ({ user: state.user }),
//   dispatch => ({ 
//     checkForToken() { dispatch(checkForToken()); }  
//   })
// )(App);