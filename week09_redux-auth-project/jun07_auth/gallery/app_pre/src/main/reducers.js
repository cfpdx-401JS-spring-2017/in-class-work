import * as actions from './constants';

export function token(state = null, action) {
  switch(action.type) {
    case actions.AUTHED: {
      return action.payload;
    }
    case actions.AUTH_FAILED:
    case actions.LOGOUT:
      return null;
    default:
      return state;
  }
}

export function user(state = null, action) {
  switch(action.type) {
    case actions.FETCHED_USER:
      return action.payload;
    case actions.AUTH_FAILED:
    case actions.LOGOUT:
      return null;
    default:
      return state;
  }
}

export function userError(state = null, action) {
  switch(action.type) {
    case actions.AUTH_FAILED:
      return action.payload.error ? action.payload.error : action.payload;
    case actions.AUTHED:
    case actions.FETCHED_USER:
      return null;
    default:
      return state;
  }
}