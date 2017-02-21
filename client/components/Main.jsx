import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createSelector } from "reselect";
import { createSearchAction, getSearchSelectors } from "redux-search";

import FloatingActionButton from "material-ui/FloatingActionButton";
import AddIcon from "material-ui/svg-icons/content/add";


import { Row, Col } from "react-flexbox-grid";

import { toggleEditMode, editActiveRecipeAction } from "../actions";
import Card from "./presentational/Card";
import { Input } from "./presentational/Input";

class RecipeList extends React.Component {

  componentWillMount() {
    this.props.dispatch(this.props.searchRecipes(""));
  }

  render() {
    return (
      <div>
        <Row center="xs">
          <Col sm={5} lg={5}>
            <Input
              onChange={event => {
                this.props.dispatch(this.props.searchRecipes(event.target.value));
              }}
              placeholder='Search..'
              defaultValue=""
            />
            {_.map(this.props.ids, (id) => {
              const recipe = this.props.recipes[id];
              return (
                  <Card
                    title
                    onClick={() => {
                      this.props.router.push({ pathname: "/edit" });
                      this.props.dispatch(editActiveRecipeAction(recipe));
                    }}
                    key={recipe.id}
                  >
                    {recipe.name}
                  </Card>
                );
            })}
          </Col>
        </Row>
        <FloatingActionButton
          style={{ bottom: "25px", right: "24px", position: "fixed" }}
          backgroundColor="#d4e157"
          onClick={() => {
            this.props.router.push({ pathname: "/edit" });
            this.props.dispatch(editActiveRecipeAction({}));
            this.props.dispatch(toggleEditMode(true));
          }}
        >
        <AddIcon />
        </FloatingActionButton>

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
