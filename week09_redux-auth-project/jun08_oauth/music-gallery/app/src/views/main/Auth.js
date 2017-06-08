import React from 'react';
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin, signup, userFromToken } from './actions';
import styled from 'styled-components';
import Credentials from './Credentials';
import qs from 'qs';

const CenteredDiv = styled.div`
  padding: 10px;
  text-align: center;
`;

const Error = styled.pre`
  color: red;
  white-space: pre-wrap;
  text-align: left;
`;

function Auth({ user, signin, signup, fromToken, spotify, error, location }) {
  const redirect = location.state ? location.state.from : '/';

  if(location.search) {
    const { token } = qs.parse(location.search.slice(1));
    if(token) {
      fromToken(token);
      return <Redirect to={redirect}/>;
    }
  }

  if(user) return <Redirect to={redirect}/>;
  
  return (
    <CenteredDiv>
        <Switch>
          <Route path="/auth/signin" component={() => (
            <div>
              <p>Not yet registered? <Link to="/auth/signup">Sign Up</Link></p>
              <Credentials submit={signin} callToAction="Sign in"/>
            </div>
          )}/>
          <Route path="/auth/signup" render={() => (
            <div>
              <p>Already have an account? <Link to="/auth/signin">Sign In</Link></p>
              <Credentials submit={signup} callToAction="Sign up" allowName={true}/>
            </div>
          )}/>
        </Switch>
        {error && <Error>{ error }</Error>}
        <CenteredDiv>
          <button onClick={spotify}>Sign in with Spotify</button>
        </CenteredDiv>
    </CenteredDiv>
  );
}

export default withRouter(connect(
  state => ({ 
    error: state.authError,
    user: state.user 
  }),
  dispatch => ({ 
    signup(user){ dispatch(signup(user)); },
    signin(credentials) { dispatch(signin(credentials)); },
    fromToken(token) { dispatch(userFromToken(token)); },
    spotify() { window.location = `/api/auth/spotify/login?origin=${window.location}`; } 
  })
)(Auth));