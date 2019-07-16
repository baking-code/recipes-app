import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ViewRecipe from "./ViewRecipe.js";

class Recipe extends Component {
  render() {
    const { recipe, isEdit } = this.props;
    return <ViewRecipe recipe={recipe} editing={isEdit} />;
  }
}

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  isEdit: PropTypes.bool
};

function mapStateToProps(state) {
  const activeRecipe = state.activeRecipe;
  return {
    recipe: activeRecipe,
    isEdit: state.editMode
  };
}
const wrap = connect(mapStateToProps);
export default wrap(Recipe);
