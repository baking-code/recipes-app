import React, { Component, PropTypes } from "react";
import _ from "lodash";
import { v4 as uuid } from "node-uuid";
import { connect } from "react-redux";
import ContentEditable from "react-contenteditable";

import { Card, Col, Row, Collection, CollectionItem, Icon, Button } from "react-materialize";
import Tags from "./Tags";
import { editRecipeAction, toggleEditMode } from "../actions";


class EditRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {...props.recipe};
  }


  editRecipe(recipe) {
    const { dispatch } = this.props;
    dispatch(editRecipeAction(recipe));
  }

  editRecipeCollection(collectionName, index, value) {
    const recipe = {...this.props.recipe}
    recipe[collectionName][index] = value;

    this.editRecipe(recipe);
  }

  addToCollection(collectionName) {
    const recipe = {...this.props.recipe}
    recipe[collectionName].push("");

    this.editRecipe(recipe);
  }

  removeFromCollection(collectionName, index) {
    const recipe = {...this.props.recipe};
    const arr = recipe[collectionName];
    const modified = [...arr.slice(0, index), ...arr.slice(index + 1)];
    recipe[collectionName] = modified;
    this.editRecipe(recipe);
  }

  updateTags(tags) {
    const recipe = {...this.props.recipe};
    recipe.tags = tags;
    this.editRecipe(recipe);
  }

  render() {
    const { recipe, dispatch } = this.props;

    return (
      <div className="lime lighten-4">
        <Row>
          <Col s={6} offset="s2">
            <Card
              title={
                <input
                  defaultValue={recipe.name}
                  placeholder="Enter title"
                  onChange={(evt) => (this.editRecipe({...recipe, name: evt.target.value }))}
                />
              }
            >
              <input
                defaultValue={recipe.description}
                placeholder="Enter description"
                onChange={(evt) => (this.editRecipe({...recipe, description: evt.target.value }))}
              />
            </Card>
          </Col>
          <Col s={4} >
            <img src={recipe.image} />
          </Col>
        </Row>
        <Row>
          <Col s={3} offset="s2">
            <Collection header="Ingredients">
              {_.map(recipe.ingredients, (ing, index) => {
                return (
                  <CollectionItem
                    key={`ing-${index}`}
                  >
                  <input
                    defaultValue={ing}
                    placeholder="Enter ingredient"
                    onChange={(evt) => this.editRecipeCollection("ingredients", index, evt.target.value)}
                  />
                <Button onClick={() => this.removeFromCollection("ingredients", index)} icon="cancel"/>
                  </CollectionItem>
                );
              })}
              <Button onClick={() => this.addToCollection("ingredients")}><Icon>add</Icon></Button>
            </Collection>
          </Col>
          <Col s={5}>
            <Collection header="Method">
              {_.map(recipe.method, (m, index) => {
                return (
                  <CollectionItem
                    key={`method-${index}`}
                  >
                    <input
                      defaultValue={m}
                      placeholder="Enter method"
                      onChange={(evt) => this.editRecipeCollection("method", index, evt.target.value)}
                    />
                  <Button onClick={() => this.removeFromCollection("method", index)} icon="cancel"/>
                  </CollectionItem>
                );
              })}
              <Button onClick={() => this.addToCollection("method")}><Icon>add</Icon></Button>
            </Collection>
          </Col>
        </Row>
        <Row><Col s={10} offset="s2">
          <Tags tags={recipe.tags} updateTags={(tags) => this.updateTags(tags)}/>
        </Col></Row>
        <Button
          floating
          icon="save"
          className="lime lighten-1"
          large
          style={{ bottom: "90px", right: "24px", position: "absolute" }}
          onClick={() => {this.editRecipe(recipe); toggleEditMode(); }}
        />
        <Button
          floating
          icon="cancel"
          className="purple darken-1"
          large
          style={{ bottom: "25px", right: "24px", position: "absolute" }}
          onClick={() => dispatch(toggleEditMode())}
        />
      </div>
    );
  }
}

EditRecipe.propTypes = {
  recipe: PropTypes.object.isRequired
};

EditRecipe.defaultProps = {
  recipe: {
    name: "",
    description: "",
    tags: [],
    method: [""],
    ingredients: [""],
    id: uuid()
  }
}

const wrap = connect();
export default wrap(EditRecipe);
