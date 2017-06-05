import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// mock API class
const api = {
  getAlbums() {
    //fetch('/api/albums').then(res => res.json())
    return Promise.resolve([
      { id: '123', title: 'album one' },
      { id: '234', title: 'album two' },
      { id: '456', title: 'album three' },
    ]);
    
    // return Promise.reject('OMG!');
  }
}

// action creator
function getAlbums() {
  return dispatch => {
    dispatch({ type: 'ALBUMS_LOADING' });
    api.getAlbums()
      .then(albums => {
        dispatch({ type: 'FETCHED_ALBUMS', payload: albums });
      })
      .catch(error => {
        dispatch({ type: 'FETCHED_ALBUMS_ERROR', payload: error });
      })
  }
}

function albums(state = [], action) {
    
    switch (action.type) {
        case 'FETCHED_ALBUMS':
            return action.payload;
        default:
            return state;
    }
}

function albumsLoading(state = false, action) {
    
    switch (action.type) {
        case 'ALBUMS_LOADING':
            return true;
        case 'FETCHED_ALBUMS':
        case 'FETCHED_ALBUMS_ERROR':
            return false;
        default:
            return state;
    }
}

function albumsError(state = null, action) {
    switch (action.type) {
        case 'FETCHED_ALBUMS':
        case 'ALBUMS_LOADING':
            return null;
        case 'FETCHED_ALBUMS_ERROR':
            return action.payload;
        default:
            return state;
    }
}

const store = createStore(
  combineReducers({ albums, albumsLoading, albumsError }),
  applyMiddleware(logger, thunk)
);

store.dispatch(getAlbums());
