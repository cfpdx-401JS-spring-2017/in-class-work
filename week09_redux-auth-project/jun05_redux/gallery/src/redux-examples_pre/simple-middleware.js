import { createStore, applyMiddleware } from 'redux';

function todos(state, action) {
    
    switch (action.type) {
        case 'ADD_STORE':
            return [...state, action.text];
        default:
            return state;

    }
}

// middleware is passed the store
// function logger(store) {
//   return (next) => (action) => {

const logger = store => next => action => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action)

    console.log('state after dispatch', store.getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
};

const store = createStore(
  todos,
  [ 'Pearl' ],
  applyMiddleware(logger)
);

store.dispatch({
  type: 'ADD_STORE',
  text: 'Downtown'
});