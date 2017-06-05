import { createStore } from 'redux';

// reducer
function albumsReducer(state, action) {
    // do something with add album
    
    return state;
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
store.dispatch({
  type: 'ADD_ALBUM',
  name: 'Cute Lizards'
});