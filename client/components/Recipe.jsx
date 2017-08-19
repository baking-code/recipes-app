import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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

function mapStateToProps(state) {
  const activeRecipe = state.activeRecipe;
  return {
    recipe: activeRecipe,
    isEdit: state.editMode
  };
}
const wrap = connect(mapStateToProps);
export default wrap(Recipe);
