import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import { createStore } from 'redux';
import { syncHistoryWithStore } from "react-router-redux";
import { Provider } from "react-redux";
import io from 'socket.io-client';

import reducer from './reducer';
import { loadRecipesAction } from "./actions";
import App from "./app/App";

const store = createStore(reducer);
const socket = io("http://localhost:3331");
socket.on("state", state =>
  store.dispatch(loadRecipesAction(state))
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/recipes" component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
