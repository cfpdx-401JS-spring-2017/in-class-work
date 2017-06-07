import * as actions from './constants';
import api from '../api/authApi';

export function checkForToken() {

  return dispatch => {
    const token = localStorage.token;
    if(!token) return;
    
    dispatch({ type: actions.AUTHED, payload: token });

    api.verify()
      .then(() => api.getUser())
      .then(
        user => {
          dispatch({ type: actions.FETCHED_USER, payload: user });
        },
        (err) => {
          dispatch({ type: actions.AUTH_FAILED, payload: err });
        }
      );

  };
}

export function signin(credentials) {

  return dispatch => {
    
    api.signin(credentials)
      .then(({ token }) => dispatch({ type: actions.AUTHED, payload: token }))
      .then(() => api.getUser())
      .then(
        user => {
          dispatch({ type: actions.FETCHED_USER, payload: user });
        },
        (err) => {
          dispatch({ type: actions.AUTH_FAILED, payload: err });
        }
      );

  };
}

export function signup(user) {

  return dispatch => {
    
    api.signup(user)
      .then(({ token }) => dispatch({ type: actions.AUTHED, payload: token }))
      .then(() => api.getUser())
      .then(
        user => {
          dispatch({ type: actions.FETCHED_USER, payload: user });
        },
        (err) => {
          dispatch({ type: actions.AUTH_FAILED, payload: err });
        }
      );

  };
}


export function signout() {
  return { type: actions.LOGOUT };
}