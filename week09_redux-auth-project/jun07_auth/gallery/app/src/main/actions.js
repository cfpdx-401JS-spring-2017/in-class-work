import * as actions from './constants';
import authApi from '../api/authApi';

const getUser = (promise, dispatch) => promise.then(() => authApi.getUser())
  .then(user => {
    dispatch({ type: actions.FETCHED_USER, payload: user });
  })
  .catch(error => {
    dispatch({ type: actions.AUTH_FAILED });
  });
  
export function checkForToken() {
  return dispatch => {
    const token = localStorage.token;
    if(!token) return;

    dispatch({ type: actions.GOT_TOKEN, payload: token });

    authApi.verify()
      .then(() => authApi.getUser())
      .then(user => {
        dispatch({ type: actions.FETCHED_USER, payload: user });
      })
      .catch(error => {
        dispatch({ type: actions.AUTH_FAILED });
      });
  };
}

export function signin(credentials) {
  return dispatch => {
    authApi.signin(credentials)
      .then(({ token }) => {
        dispatch({ type: actions.GOT_TOKEN, payload: token });
      })
      .then(() => authApi.getUser())
      .then(user => {
        dispatch({ type: actions.FETCHED_USER, payload: user });
      })
      .catch(error => {
        dispatch({ type: actions.AUTH_FAILED });
      });
  };
}

export function signup(user) {
  return dispatch => {
    authApi.signup(user)
      .then(({ token }) => {
        dispatch({ type: actions.GOT_TOKEN, payload: token });
      })
      .then(() => authApi.getUser())
      .then(user => {
        dispatch({ type: actions.FETCHED_USER, payload: user });
      })
      .catch(error => {
        dispatch({ type: actions.AUTH_FAILED });
      });
  };
}