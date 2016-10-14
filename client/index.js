import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as searchReducer, reduxSearch } from "redux-search";
import { Provider } from "react-redux";
import io from "socket.io-client";
import { composeWithDevTools } from "redux-devtools-extension";

import { recipesReducer, editReducer, activeRecipeReducer } from "./reducer";
import { loadRecipesAction } from "./actions";
import remoteActionMiddleware from "./remoteActionMiddleware";
import App from "./app/App";
import RecipeList from "./components/RecipeList";
import Recipe from "./components/Recipe";

const socket = io("http://localhost:3331");
socket.on("state", state => {
  store.dispatch(loadRecipesAction(state));
}
);

const enhancers = composeWithDevTools(
  applyMiddleware(remoteActionMiddleware(socket)),
  reduxSearch({
    resourceIndexes: {
      recipes: ["title"]
    },
    resourceSelector: (resourceName, state) => {
      return state[resourceName];
    }
  })
);

const store = createStore(
  combineReducers({
    recipes: recipesReducer,
    editMode: editReducer,
    activeRecipe: activeRecipeReducer,
    search: searchReducer
  }),
  enhancers
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="recipes" component={RecipeList} />
        <Route path="edit" component={Recipe} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("app")
);
