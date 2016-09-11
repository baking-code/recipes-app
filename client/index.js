import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import { createStore } from 'redux';
import { syncHistoryWithStore } from "react-router-redux";
import { Provider } from "react-redux";

import reducer from './reducer';
import App from "./app/App";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/recipes" component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
