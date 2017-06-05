import { createStore } from 'redux';

// reducer
function albumsReducer(state, action) {
    // do something with add album
  switch(action.type) {
    case 'ADD_ALBUM':
      return [...state, action.payload];
    case 'REMOVE_ALBUM': {
      const index = state.findIndex(a => a === action.payload);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    default:
      return state;
  }
}

// Use createStore to create a redux "store"
const store = createStore(
  albumsReducer,
  [ 'Cute Bunnies' ]
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
store.dispatch({ type: 'REMOVE_ALBUM', payload: 'Cute Lizards' });