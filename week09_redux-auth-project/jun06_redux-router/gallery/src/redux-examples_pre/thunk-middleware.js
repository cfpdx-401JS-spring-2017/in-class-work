import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const api = {
  getAlbums() {
    //fetch('/api/albums').then(res => res.json())
    return Promise.resolve([
      { id: '123', title: 'album one' },
      { id: '234', title: 'album two' },
      { id: '456', title: 'album three' },
    ]);
    
    //return Promise.reject('OMG!');
  }

}

function getAlbums() {
  return dispatch => {
    dispatch({ type: 'LOADING', payload: true });
    api.getAlbums()
      .then(albums => {
        dispatch({ type: 'FETCHED_ALBUMS', payload: albums });
      })
      .catch(error => {
        dispatch({ type: 'FETCHED_ALBUMS_ERROR', payload: error });
      })
  }
}

function reducer(state, action) {
    
    switch (action.type) {
        case 'LOADING':
            return { ...state, loading: action.payload };
        case 'FETCHED_ALBUMS':
            return { ...state, albums: action.payload, loading: false };
        case 'FETCHED_ALBUMS_ERROR':
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}

const store = createStore(
  reducer,
  {
    loading: false,
    albums: [],
    error: null
  },
  applyMiddleware(logger, thunk)
);

store.dispatch(getAlbums());
