import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as searchReducer, reduxSearch } from "redux-search";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { recipesReducer, editReducer, activeRecipeReducer } from "./reducer";
import { loadRecipesAction } from "./actions";
import remoteActionMiddleware from "./remoteActionMiddleware";
import App from "./components/App";

const config = {
  apiKey: "AIzaSyAP4jPCm2k95KUBf0tEznvoZ0SE4EAo_o8",
  authDomain: "recipesapp-3d38b.firebaseapp.com",
  databaseURL: "https://recipesapp-3d38b.firebaseio.com",
  projectId: "recipesapp-3d38b",
  storageBucket: "recipesapp-3d38b.appspot.com",
  messagingSenderId: "279594077217"
};
firebase.initializeApp(config);

const enhancers = composeWithDevTools(
  applyMiddleware(remoteActionMiddleware()),
  reduxSearch({
    resourceIndexes: {
      recipes: ({ resources, indexDocument, state }) => {
        resources.forEach(recipe => {
          indexDocument(recipe.id, recipe.name);
          indexDocument(recipe.id, recipe.description);
          recipe.ingredients.concat(recipe.method).forEach(element => {
            indexDocument(recipe.id, element);
          });
          if (recipe.tags) {
            recipe.tags.forEach(element => {
              indexDocument(recipe.id, element.text);
            });
          }
        });
      }
      // recipes: ["name", "description", "method", "tags", "ingredients"]
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
const ref = firebase.database().ref();

ref.once("value").then(data => {
  store.dispatch(loadRecipesAction(data.val()));
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    </Provider>,
    document.getElementById("app")
  );
});
