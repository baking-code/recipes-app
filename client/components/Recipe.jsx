import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

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

function mapStateToProps(state, ownProps) {
  const recipes = state.recipes.toJS() || {};
  const { id } = ownProps.routeParams;
  // should be undefined if new
  const activeRecipe = recipes[id];
  return {
    recipe: activeRecipe,
    isEdit: state.editMode
  };
}
const wrap = connect(mapStateToProps);
export default wrap(Recipe);
