import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// install via `npm i react-redux redux -S`
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/counter.reducer';

// create a store based on our reducer(s)
const store = createStore(reducer);

ReactDOM.render(
  /* Wrap our App in a "Provider" that makes the whole thing work */
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();