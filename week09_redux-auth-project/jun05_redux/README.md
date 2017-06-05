<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Redux
===

## Questions/Issues

* Don't use Symbol for action types 
    * Not serializable
* ?

## Redux

* Why?
    * Avoid bugs in complex apps
    * State maintenance enforced as separate layer than view
    * Simplified data model (single store)
    * Enforce "Smart" vs "Dumb" Components 
    * Redux goodies: time travel, undo, etc.

* Redux is simple, moving parts are complex
* Not part of react, just an app state management library

### Core API

#### Store

1. Combination of state and reducers (which take actions)
1. State is immutable

* `createStore(reducer[, initialState, applyMiddleware])`
    * optional: `initialState`, `applyMiddleware`
* Store methods are generally handled by adapter to the view (`react-redux`):
    * `dispatch` - send an action to the store reducer
    * `subscribe(listener)` - be notified when store state "changes"
    * `getState()` - get the current store state

So, we need a reducer...

#### Reducers

Perform discrete change of store (by creating a new state) based on an action. 

Best practice in react/redux is immutability: Create a new state object.

```js
function reducer(state, action) {
    // choose based on action
    switch(action.type) {

    }
    // best practice (and for multiple reducers) return state
    return state // or use default on switch
}
```

Very simple `counter` example

#### Actions

Must use `type`, other props are up to you, but "standard" is to use `payload`)

#### Back to Reducers

Don't need to be in one file. Use `combineReducers`. These are "segmented" by part of the
store that you need. They don't have access (by default) to rest of store. 

(Typically this is a good thing, but we'll see with thunks and async where it makes sense, and then provide a way to pass more data from store if needed.)

**BUT**, all actions still flow through all reducers because one action may require changes to multiple parts of the state.

```js
// file: ./reducers/index.js

import { combineReducers } from 'redux';
// sibling files in "./reducers":
import stores from './stores';
import store from './store';
import pets from './pets';

export default combineReducers({
  stores,
  store,
  pets
});

// file: ./index.js
import { createStore } from 'redux';
import reducer from './reducers/index';

const store = createStore(reducer);

```

Multiple reducers can respond to the same action. 

TODO Example `HIDE_COMPLETED`:
1. `settings` reducer creates new state of `setting.showCompleted`
1. `todos` reducer creates new state of `visibleTodos`

#### Middleware

Use `applyMiddleware` to add middleware to your dispatch

* middleware can intercept or modify each action
* you probably won't create, but use via `npm i <middleware>`

Three levels of "functions":
1. middleware definition (`store`)
1. returned function for chaining (`next`)
1. function that takes each action (`action`)
    
* `logger` example
* `thunk` middleware is the answer for async!
    * Allows us to specify a function `dispatch => {}` as an action
    * That function gets called with dispatch and then we can do 
    multiple calls at multiple times
    * Full signature is `(dispatch, getState) => {}`

