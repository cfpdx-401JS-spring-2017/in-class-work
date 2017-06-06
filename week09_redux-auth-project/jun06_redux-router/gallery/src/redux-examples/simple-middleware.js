/* eslint no-console: off */
import { createStore, applyMiddleware } from 'redux';

// albums reducer
function albumsReducer(state = [], action) {
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

const logger = store => next => action => {
  console.log('action', action);

  console.log('state before dispatch', store.getState());

  const returnValue = next(action);
  //typically, returnValue this is just the action

  console.log('state after dispatch', store.getState());

  return returnValue;
};


// Use createStore to create a redux "store"
const store = createStore(
  albumsReducer, // root reducer
  [], // initial state
  // middlewares
  applyMiddleware(
      logger
  )
);

// // "Store" API
// // 1. store.subscribe(listener) -> listens for changes to the state of the store
// store.subscribe(() => {
//   // 2. store.getState() -> returns the current state of the store
//   console.log('SUBSCRIBE', store.getState());
// });

// 3. store.dispatch(action)
store.dispatch({ type: 'ADD_ALBUM', payload: 'Cute Lizards' });
// store.dispatch({ type: 'ADD_ALBUM', payload: 'Cute Guinea Pigs' });
// store.dispatch({ type: 'REMOVE_ALBUM', payload: 'Cute Lizards' });