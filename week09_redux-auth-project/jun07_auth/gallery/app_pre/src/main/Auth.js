import React from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin, signup } from './actions';
import styled from 'styled-components';

const CenteredDiv = styled.div`
  text-align: center;
`;

const Form = styled.form`
  text-align: center;
  label {
    display: block;
  }
  label, button {
    padding: 5px;
  }
`;

const Credentials = ({ submit, allowName = false }) => (
  <Form onSubmit={e => {
    e.preventDefault();
    const { elements } = e.target;
    const data = Object.keys(elements).reduce((obj, key) => {
      obj[key] = elements[key].value;
      return obj;
    }, {});
    submit(data);
  }}>
    { allowName && <label>name: <input name="name"/></label>}
    <label>email: <input name="email"/></label>
    <label>password: <input type="password" name="password"/></label>
    <button>Log In</button>
  </Form>
);

function Auth({ signin, signup, error }) {

  return (
    <div>
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
    </div>
  );
}


export default withRouter(connect(
  state => ({ 
    error: state.userError 
  }),
  dispatch => ({ 
    signup(user) { dispatch(signup(user)); },
    signin(credentials) { dispatch(signin(credentials)); } 
  })
)(Auth));