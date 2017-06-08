import * as actions from './constants';

export function music(state = { items: [] }, action) {
  switch(action.type) {
    case actions.FETCHED_MUSIC:
      return action.payload;
    default:
      return state;
  }
}

export function musicError(state = null, action) {
  switch(action.type) {
    case actions.FETCHED_MUSIC_ERROR:
      return action.payload;
    case actions.FETCHING_MUSIC:
      return null;
    default:
      return state;
  }
}

export function musicLoading(state = false, action) {
  switch(action.type) {
    case actions.FETCHING_MUSIC:
      return true;
    case actions.FETCHED_MUSIC:
    case actions.FETCHED_MUSIC_ERROR:
      return false;
    default:
      return state;
  }
}