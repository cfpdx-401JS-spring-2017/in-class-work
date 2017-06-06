import * as actions from './constants';

export function albums(state = [], action) {
  switch(action.type) {
    case actions.FETCHED_ALBUMS:
      return action.payload;
    case actions.ADDED_ALBUM:
      return [...state, action.payload];
    default:
      return state;
  }
}

export function albumsError(state = null, action) {
  switch(action.type) {
    case actions.FETCHED_ALBUMS_ERROR:
    case actions.ADDED_ALBUM_ERROR:
      return action.payload;
    case actions.FETCHING_ALBUMS:
    case actions.ADDING_ALBUM:
      return null;
    default:
      return state;
  }
}

export function albumsLoading(state = false, action) {
  switch(action.type) {
    case actions.FETCHING_ALBUMS:
    case actions.ADDING_ALBUM:
      return true;
    case actions.FETCHED_ALBUMS:
    case actions.ADDED_ALBUM:
    case actions.FETCHED_ALBUMS_ERROR:
    case actions.ADDED_ALBUM_ERROR:
      return false;
    default:
      return state;
  }
}