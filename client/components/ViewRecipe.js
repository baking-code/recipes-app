import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import _ from "lodash";
import { FlexContainer, FlexItem } from "./presentational/FlexHelpers";

import List from "./IngredientList";
import Card from "./presentational/Card";
import { Input, TextField } from "./presentational/Input";
import { ImageArea } from "./presentational/Image";
import Duration from "./presentational/Duration";
import Tag from "./presentational/Tag";
import Tags from "./Tags";
import Method from "./Method";
import ConfirmDelete from "./ConfirmDelete";
import EditList from "./EditList";

import { ActionButton } from "./presentational/Buttons";

import {
  editActiveRecipeAction,
  editRecipeAction,
  toggleEditMode,
  removeRecipeAction
} from "../actions";

class ViewRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = { popoverOpen: false };
    this.editRecipeCollection = this.editRecipeCollection.bind(this);
    this.removeFromCollection = this.removeFromCollection.bind(this);
    this.addToCollection = this.addToCollection.bind(this);
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this._title).focus();
  }

  handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      popoverOpen: true,
      anchorEl: event.currentTarget
    });
  }

  handleRequestClose() {
    this.setState({
      popoverOpen: false
    });
  }

  editRecipe(recipe) {
    const { dispatch } = this.props;
    dispatch(editActiveRecipeAction(recipe));
  }

  editRecipeCollection(collectionName, index, value) {
    const recipe = { ...this.props.recipe };
    recipe[collectionName][index] = value;

    this.editRecipe(recipe);
  }

  addToCollection(collectionName) {
    const recipe = { ...this.props.recipe };
    recipe[collectionName].push("");

    this.editRecipe(recipe);
  }

  addImage(image) {
    getDataUri(image, encoded => {
      const recipe = {
        ...this.props.recipe,
        image: encoded
      };
      this.editRecipe(recipe);
    });
  }

  removeFromCollection(collectionName, index) {
    const recipe = { ...this.props.recipe };
    const arr = recipe[collectionName];
    const modified = [...arr.slice(0, index), ...arr.slice(index + 1)];
    recipe[collectionName] = modified;
    this.editRecipe(recipe);
  }

  removeImage() {
    const recipe = {
      ...this.props.recipe,
      image: ""
    };
    this.editRecipe(recipe);
  }

  saveRecipe(recipe) {
    const { dispatch } = this.props;
    dispatch(editRecipeAction(recipe));
  }

  deleteRecipe(recipe) {
    const { dispatch } = this.props;
    dispatch(removeRecipeAction(recipe.id));
    this.context.router.push("/recipes");
  }

  updateTags(tags) {
    const recipe = { ...this.props.recipe };
    recipe.tags = tags;
    this.editRecipe(recipe);
  }

  render() {
    const { recipe, dispatch, editing } = this.props;
    return (
      <div>
        <Card isTitle editing={editing}>
          <Input
            isTitle
            placeholder="title..."
            onChange={evt =>
              editing && this.editRecipe({ ...recipe, name: evt.target.value })
            }
            ref={r => (this._title = r)}
            defaultValue={recipe.name}
            disabled={!editing}
          />
        </Card>
        <FlexContainer align="flex-start" isWrapped>
          <FlexItem ratio={2}>
            <Card editing={editing}>
              <TextField
                defaultValue={recipe.description}
                placeholder="description..."
                onChange={evt =>
                  editing &&
                  this.editRecipe({
                    ...recipe,
                    description: evt.target.value
                  })
                }
                disabled={!editing}
              />
            </Card>
          </FlexItem>
          <FlexItem ratio={1}>
            <Card>
              <FlexContainer column align="flex-start">
                <Duration time={recipe.time} disabled={!editing} />
                <FlexContainer margin="0">
                  {editing ? (
                    <Tags
                      tags={recipe.tags}
                      updateTags={tags => this.updateTags(tags)}
                    />
                  ) : (
                    _.map(recipe.tags, tag => (
                      <Tag key={tag.id}>{tag.text}</Tag>
                    ))
                  )}
                </FlexContainer>
              </FlexContainer>
            </Card>
          </FlexItem>
        </FlexContainer>
        <div className="recipe__list-container">
          <List
            items={recipe.ingredients}
            title="Ingredients"
            editing={editing}
            editRecipeCollection={this.editRecipeCollection}
            removeFromCollection={this.removeFromCollection}
            addToCollection={this.addToCollection}
          />

          <Method methods={recipe.method} title="Method" />
        </div>

        {editing ? (
          <Fragment>
            <ActionButton index={2} onClick={e => this.handleTouchTap(e)}>
              Delete
            </ActionButton>
            <ActionButton
              index={1}
              onClick={() => {
                this.saveRecipe(recipe);
                toggleEditMode();
              }}
            >
              Save
            </ActionButton>
            <ActionButton onClick={() => dispatch(toggleEditMode())}>
              Cancel
            </ActionButton>
            <ConfirmDelete
              open={this.state.popoverOpen}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{ horizontal: "left", vertical: "center" }}
              targetOrigin={{ horizontal: "left", vertical: "center" }}
              onClose={() => this.handleRequestClose()}
              animated={false}
              message="Are you sure?"
              onClickConfirm={() => this.deleteRecipe(recipe)}
            />
          </Fragment>
        ) : (
          <ActionButton
            onClick={() => {
              dispatch(toggleEditMode(true));
            }}
          >
            Edit
          </ActionButton>
        )}
      </div>
    );
  }
}
const wrap = connect();
export default wrap(ViewRecipe);
