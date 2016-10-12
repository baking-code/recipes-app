import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { v4 as uuid } from "node-uuid";

import EditRecipe from "./EditRecipe.jsx";
import ViewRecipe from "./ViewRecipe.jsx";

class Recipe extends Component {

  render() {
    const { recipe, isEdit } = this.props;
    if (isEdit) {
      return <EditRecipe recipe={recipe} />;
    } else {
      return <ViewRecipe recipe={recipe} />;
    }
  }
}

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  isEdit: PropTypes.bool
};

const DEFAULT_RECIPE = {
  name: "",
  description: "",
  tags: [],
  method: [""],
  ingredients: [""],
  id: uuid()
};

function mapStateToProps(state, ownProps) {
  const recipes = state.recipes.toJS() || {};
  const { id } = ownProps.routeParams;
  // should be undefined if new
  const activeRecipe = recipes[id] || DEFAULT_RECIPE;
  return {
    recipe: activeRecipe,
    isEdit: state.editMode
  };
}
const wrap = connect(mapStateToProps);
export default wrap(Recipe);
