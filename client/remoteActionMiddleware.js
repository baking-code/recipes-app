import firebase from "firebase";
import * as Types from "./actions";

export default () => store => next => action => {
  if (action.meta && action.meta.remote) {
    switch (action.type) {
      case Types.ADD_RECIPE:
        firebase.database().ref(action.newRecipe.id).set({ ...action.newRecipe });
        break;
      case Types.EDIT_RECIPE:
        firebase.database().ref(action.editedRecipe.id).set({ ...action.editedRecipe });
        break;
      case Types.REMOVE_RECIPE:
        firebase.database().ref(action.newRecipe.id).remove();
        break;
      default:
        break;
    }
  }
  return next(action);
};
