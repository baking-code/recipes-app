import { Map } from "immutable";
import { v4 as uuid } from "node-uuid";

import { ADD_RECIPE, REMOVE_RECIPE, EDIT_RECIPE, LOAD_RECIPES, TOGGLE_EDIT_MODE } from "./actions";

export const INITIAL_STATE = Map();

function addRecipe(state, recipe) {
  const id = recipe.id || uuid();
  return state.set(id, recipe);
}

function removeRecipe(state, id) {
  return state.delete(id);
}

function editRecipe(state, recipe) {
  return state.update(recipe.id, recipe);
}

function loadRecipes(state, recipes) {
  // assumes an empty store
  return Map(recipes);
}

export function recipesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_RECIPE:
      return addRecipe(state, action.newRecipe);
    case EDIT_RECIPE:
      return editRecipe(state, action.editedRecipe);
    case REMOVE_RECIPE:
      return removeRecipe(state, action.id);
    case LOAD_RECIPES:
      return loadRecipes(state, action.recipes);
    default:
      return state;
  }
}

export function editReducer(state = false, action) {
  switch (action.type) {
    case TOGGLE_EDIT_MODE:
      return !state;
    default:
      return state;
  }
}
