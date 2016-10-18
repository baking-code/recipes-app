import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createSelector } from "reselect";
import { createSearchAction, getSearchSelectors } from "redux-search";

import { Collection, CollectionItem, Button } from "react-materialize";
import { Row, Col } from "react-flexbox-grid";

import { toggleEditMode, editActiveRecipeAction } from "../actions";

class RecipeList extends React.Component {

  render() {
    return (
      <div>
        <Row >
          <Col sm={6} className="grid-example" smOffset={3}>
	    <input
              onChange={event => {
                this.props.dispatch(this.props.searchRecipes(event.target.value));
              }}
              placeholder='Search..'
            />
          <Collection className="lime lighten-4 black-text">
            {_.map(this.props.ids, (id) => {
              const recipe = this.props.recipes[id];
		return (
                  <CollectionItem
                    onClick={() => {
                      this.props.router.push({ pathname: "/edit" });
                      this.props.dispatch(editActiveRecipeAction(recipe));
                    }}
                    key={recipe.id}
                  >
                    {recipe.name}
                  </CollectionItem>
                );
            })}
            </Collection>
          </Col>
        </Row>
        <Button
          floating
          icon="add"
          className="purple darken-1"
          large
          style={{ bottom: "25px", right: "24px", position: "absolute" }}
          onClick={() => {
            this.props.dispatch(toggleEditMode());
            this.props.router.push({ pathname: "/new" });
            this.props.dispatch(editActiveRecipeAction());
          }}
        />
      </div>
    );
  }
}


const recipes = state => state.recipes.toJS();

const {
  text, // search text
  result // ids
} = getSearchSelectors({
  resourceName: "recipes",
  resourceSelector: (resourceName, state) => state[resourceName]
});

const mapStateToProps = createSelector(
  [result, recipes, text],
  /* eslint-disable no-shadow */
  (ids, recipes, searchText) => ({
    ids,
    recipes,
    searchText
  })
);

const mapDispatchToProps = (dispatch) => ({
  searchRecipes: createSearchAction("recipes"),
  dispatch });

const wrap = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(wrap(RecipeList));
