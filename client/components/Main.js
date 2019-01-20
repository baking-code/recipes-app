import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { createSelector } from "reselect";
import { createSearchAction, getSearchSelectors } from "redux-search";

import { toggleEditMode, editActiveRecipeAction } from "../actions";
import { RecipeCard } from "./presentational/Card";
import { SearchInput } from "./presentational/Input";
import { ActionButton } from "./presentational/Buttons";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  componentWillMount() {
    this.props.dispatch(this.props.searchRecipes(""));
    this.props.dispatch(toggleEditMode(false));
  }

  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  }

  componentDidUpdate() {
    if (this.input) {
      this.input.focus();
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/edit" />;
    }
    return (
      <div>
        <SearchInput
          onChange={event => {
            this.props.dispatch(this.props.searchRecipes(event.target.value));
          }}
          placeholder="Search.."
          defaultValue=""
          innerRef={r => (this.input = r)}
        />
        {_.map(this.props.ids, id => {
          const recipe = this.props.recipes[id];
          return (
            <RecipeCard
              onClick={() => {
                this.setState({
                  redirect: true
                });
                this.props.dispatch(editActiveRecipeAction(recipe));
              }}
              key={recipe.id}
            >
              {recipe.name}
            </RecipeCard>
          );
        })}
        <ActionButton
          onClick={() => {
            this.props.router.push({ pathname: "/edit" });
            this.props.dispatch(editActiveRecipeAction());
            this.props.dispatch(toggleEditMode(true));
          }}
        >
          New
        </ActionButton>
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

const mapDispatchToProps = dispatch => ({
  searchRecipes: createSearchAction("recipes"),
  dispatch
});

const wrap = connect(mapStateToProps, mapDispatchToProps);

export default wrap(Main);
