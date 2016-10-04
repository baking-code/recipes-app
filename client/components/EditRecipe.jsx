import React, { Component, PropTypes } from "react";
import _ from "lodash";
import { v4 as uuid } from "node-uuid";
import { connect } from "react-redux";
import ContentEditable from "react-contenteditable";

import { Card, Col, Row, Collection, CollectionItem, Tag, Icon, Button } from "react-materialize";
import EditButtons from "./EditButtons.jsx";
import { editRecipeAction, toggleEditMode } from "../actions";


class EditRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {...props.recipe};
  }

  // shouldComponentUpdate(nextProps) {
  //   const truth = this.state.method.length !== nextProps.recipe.method.length;
  //   console.log(truth);
  //   return truth ;
  // }


  onEdit(recipe) {
    const { dispatch } = this.props;
    dispatch(editRecipeAction(recipe));
  }

  onEditCollection(collectionName, index, value) {
    const recipe = {...this.props.recipe}
    recipe[collectionName][index] = value;

    this.onEdit(recipe);
  }

  addToCollection(collectionName) {
    const recipe = {...this.props.recipe}
    recipe[collectionName].push("");

    this.onEdit(recipe);
  }

  removeFromCollection(collectionName, index) {
    const recipe = {...this.props.recipe};
    const arr = recipe[collectionName];
    const modified = [...arr.slice(0, index), ...arr.slice(index + 1)];
    recipe[collectionName] = modified;
    this.onEdit(recipe);
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
                  onChange={(evt) => (this.onEdit({...recipe, name: evt.target.value }))}
                />
              }
            >
              <input
                defaultValue={recipe.description}
                placeholder="Enter description"
                onChange={(evt) => (this.onEdit({...recipe, description: evt.target.value }))}
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
                    onChange={(evt) => this.onEditCollection("ingredients", index, evt.target.value)}
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
                      onChange={(evt) => this.onEditCollection("method", index, evt.target.value)}
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
          <div>
            {_.map(recipe.tags, tag => <Tag key={tag}>{tag}</Tag>)}
          </div>
        </Col></Row>
      <EditButtons saveEdit={() => this.onEdit()} toggleEdit={() => dispatch(toggleEditMode())}/>
      </div>
    );
  }
}

EditRecipe.propTypes = {
  recipe: PropTypes.object.isRequired
};

const wrap = connect();
export default wrap(EditRecipe);
