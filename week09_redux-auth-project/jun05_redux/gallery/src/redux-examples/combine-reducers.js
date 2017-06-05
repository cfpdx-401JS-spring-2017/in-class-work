import { createStore, combineReducers } from 'redux';

// albums reducer (state is just "albums" key of store)
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

const initialState = {
  views: ['Gallery', 'List', 'Thumbnail'],
  view: 'Gallery'
};

function viewsReducer(state = initialState, action) {
  switch(action.type) {
    case 'CHANGE_VIEW':
      return { 
        ...state, 
        view: action.payload
      };
    default:
      return state;
  }
}

const reducers = combineReducers({
  albums: albumsReducer,
  views: viewsReducer,
});

// Use createStore to create a redux "store"
const store = createStore(
  reducers
);

// "Store" API
// 1. store.subscribe(listener) -> listens for changes to the state of the store
store.subscribe(() => {
  // 2. store.getState() -> returns the current state of the store
  console.log(store.getState());
});

// 3. store.dispatch(action)
store.dispatch({ type: 'ADD_ALBUM', payload: 'Cute Lizards' });
store.dispatch({ type: 'ADD_ALBUM', payload: 'Cute Bunnies' });
store.dispatch({ type: 'CHANGE_VIEW', payload: 'Thumbnail' });