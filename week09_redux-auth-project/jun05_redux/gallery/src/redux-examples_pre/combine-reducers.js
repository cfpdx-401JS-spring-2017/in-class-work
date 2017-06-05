import { createStore, combineReducers } from 'redux';

const albums = (state = [], action) => {
    switch(action.type) {
        case 'ADD_ALBUM':
            return [...state, action.payload];
        default:
            return state;
    }
}

const album = (state = {}, action) => {
    switch(action.type) {
        case 'SELECT_ALBUM':
            return action.payload;
        default:
            return state;
    }
}

const reducers = combineReducers({
  albums,
  album,
});

const store = createStore(reducers);

store.subscribe(() => console.log(store.getState()));

store.dispatch({
  type: 'ADD_ALBUM',
  payload: { title: 'Buildings' }
});

store.dispatch({
  type: 'ADD_ALBUM',
  payload: { title: 'Bridges' }
});

store.dispatch({
  type: 'SELECT_ALBUM',
  payload: { title: 'Buildings' }
});