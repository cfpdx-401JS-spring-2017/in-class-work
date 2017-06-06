/* eslint no-console: off */
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


// albums reducer
function albumsReducer(state = [], action) {
  switch(action.type) {
    case 'FETCHING_ALBUMS':
      return { ...state, loading: true };
    case 'FETCHED_ALBUMS':
      return { ...state, albums: action.payload, loading: false };
    case 'FETCHED_ALBUMS_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'ADD_ALBUM':
      return [...state.albums, action.payload];
    case 'REMOVE_ALBUM': {
      const index = state.albums.findIndex(a => a === action.payload);
      return [...state.albums.slice(0, index), ...state.albums.slice(index + 1)];
    }
    default:
      return state;
  }
}


// Use createStore to create a redux "store"
const store = createStore(
  albumsReducer, // root reducer
  {
    albums: [],
    loading: false,
    error: null,
  }, // initial state
  // middlewares
  applyMiddleware(
      logger,
      thunk
  )
);


const api = {
  getAlbums() {
    //fetch('/api/albums').then(res => res.json())
    // return Promise.resolve([
    //   { id: '123', title: 'album one' },
    //   { id: '234', title: 'album two' },
    //   { id: '456', title: 'album three' },
    // ]);
    
    return Promise.reject('OMG!');
  }
};

//thunk style action
const getAlbums = dispatch => {
  dispatch({ type: 'FETCHING_ALBUMS' });
  
  api.getAlbums()
    .then(albums => {
      dispatch({ type: 'FETCHED_ALBUMS', payload: albums });
    })
    .catch(error => {
      dispatch({ type: 'FETCHED_ALBUMS_ERROR', payload: error });
    });
};

// pass in a FUNCTION, not an object as our action.
// because we added thunk middleware, our function will be called with dispatch
store.dispatch(getAlbums);

// // 3. store.dispatch(action)
// store.dispatch({ type: 'ADD_ALBUM', payload: 'Cute Lizards' });
// store.dispatch({ type: 'ADD_ALBUM', payload: 'Cute Guinea Pigs' });
// store.dispatch({ type: 'REMOVE_ALBUM', payload: 'Cute Lizards' });