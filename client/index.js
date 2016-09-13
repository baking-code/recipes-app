import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import io from 'socket.io-client';

import reducer from './reducer';
import { loadRecipesAction } from "./actions";
import remoteActionMiddleware from "./remoteActionMiddleware";
import App from "./app/App";
import RecipeList from "./components/RecipeList";
import Recipe from "./components/Recipe";


const socket = io("http://localhost:3331");
socket.on("state", state =>
  store.dispatch(loadRecipesAction(state))
);

const store = createStore(
  reducer,
  applyMiddleware(remoteActionMiddleware(socket))
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="recipes" component={RecipeList} />
        <Route path="(:id)" component={Recipe} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
