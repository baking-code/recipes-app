import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { v4 as uuid } from 'node-uuid';
import { connect } from 'react-redux';

import EditRecipe from './EditRecipe';
import ViewRecipe from './ViewRecipe';

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
  isEdit: PropTypes.bool,
};

function mapStateToProps(state, ownProps) {
  const recipes = state.recipes.toJS() || {};
  const { id } = ownProps.routeParams;
  return {
    recipe: recipes[id],
    isEdit: state.editMode,
  };
}
const wrap = connect(mapStateToProps);
export default wrap(Recipe);
