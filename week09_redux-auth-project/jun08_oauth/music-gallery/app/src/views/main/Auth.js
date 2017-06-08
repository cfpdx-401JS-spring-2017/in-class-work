import React from 'react';
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin, signup } from './actions';
import styled from 'styled-components';
import Credentials from './Credentials';

const CenteredDiv = styled.div`
  text-align: center;
`;

const Error = styled.pre`
  color: red;
  white-space: pre-wrap;
  text-align: left;
`;

function Auth({ user, signin, signup, error, location }) {
  const redirect = location.state ? location.state.from : '/';

  if(user) return <Redirect to={redirect}/>;
  
  return (
    <CenteredDiv>
        <Switch>
          <Route path="/auth/signin" component={() => (
            <div>
              <p>Not yet registered? <Link to="/auth/signup">Sign Up</Link></p>
              <Credentials submit={signin}/>
            </div>
          )}/>
          <Route path="/auth/signup" render={() => (
            <div>
              <p>Already have an account? <Link to="/auth/signin">Sign In</Link></p>
              <Credentials submit={signup} allowName={true}/>
            </div>
          )}/>
        </Switch>
        {error && <Error>{ error }</Error>}
    </CenteredDiv>
  );
}

export default withRouter(connect(
  state => ({ 
    error: state.authError,
    user: state.user 
  }),
  dispatch => ({ 
    signup(user) { dispatch(signup(user)); },
    signin(credentials) { dispatch(signin(credentials)); } 
  })
)(Auth));