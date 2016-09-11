export const ADD_RECIPE = "ADD_RECIPE";
export const REMOVE_RECIPE = "REMOVE_RECIPE";
export const EDIT_RECIPE = "REMOVE_RECIPE";
export const LOAD_RECIPES = "LOAD_RECIPES";

export function addRecipeAction(newRecipe) {
  return {
    meta: {remote: true},
    type: ADD_RECIPE,
    newRecipe
  };
}

export function editRecipeAction(editedRecipe) {
  return {
    meta: {remote: true}
    type: EDIT_RECIPE,
    editedRecipe
  };
}

export function removeRecipeAction(id) {
  return {
    meta: {remote: true},
    type: REMOVE_RECIPE,
    id
  }
}

export function loadRecipesAction(recipes) {
  return {
    type: LOAD_RECIPES,
    recipes
  }
}

/*
recipe = {
  id: string,
  name: string,
  category: string,
  description: string,
  method: list(string),
  ingredients: list(string),
  image: string,
  tags: list(string)
}
*/
