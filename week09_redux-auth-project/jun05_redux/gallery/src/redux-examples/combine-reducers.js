import { createStore } from 'redux';

// reducer
function albumsReducer(state, action) {
    // do something with add album
  switch(action.type) {
    case 'ADD_ALBUM':
      return { 
        ...state, 
        albums: [...state.albums, action.payload]
      };
    case 'REMOVE_ALBUM': {
      const { albums } = state;
      const index = albums.findIndex(a => a === action.payload);
      if(index === -1) {
        return {
          ...state,
          albumsError: `Cannot remove non-existent album ${action.payload}`
        };
      }
      return {
        ...state,
        albums: [...albums.slice(0, index), ...albums.slice(index + 1)]
      };
    }
    case 'CLEAR_ERROR':
      return { ...state, albumsError: null };
    default:
      return state;
  }
}

// Use createStore to create a redux "store"
const store = createStore(
  albumsReducer,
  {
    albums: [ 'Cute Bunnies' ],
    albumsError: null
  }
);

// "Store" API
// 1. store.subscribe(listener) -> listens for changes to the state of the store
store.subscribe(() => {
  // 2. store.getState() -> returns the current state of the store
  console.log(store.getState());
});

// 3. store.dispatch(action)
store.dispatch({ type: 'ADD_ALBUM', payload: 'Cute Lizards' });
store.dispatch({ type: 'ADD_ALBUM', payload: 'Cute Guinea Pigs' });
store.dispatch({ type: 'REMOVE_ALBUM', payload: 'Cute Nothings' });
store.dispatch({ type: 'REMOVE_ALBUM', payload: 'Cute Lizards' });
store.dispatch({ type: 'CLEAR_ERROR' });