import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <h2>Hello</h2>
  </Provider>,
  document.getElementById('app')
);
