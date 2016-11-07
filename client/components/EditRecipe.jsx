import React, { Component, PropTypes } from "react";
import _ from "lodash";
import { v4 as uuid } from "node-uuid";
import { connect } from "react-redux";

import FloatingActionButton from "material-ui/FloatingActionButton";
import Cancel from "material-ui/svg-icons/navigation/cancel";
import AddIcon from "material-ui/svg-icons/content/add";
import Save from "material-ui/svg-icons/content/save";

import { Row, Col } from "react-flexbox-grid";

import Tags from "./Tags";
import EditList from "./EditList";
import { Input, InputText } from "./presentational/Input";
import { Image } from "./presentational/Image";

import Card from "./presentational/Card";
import { editActiveRecipeAction, editRecipeAction, toggleEditMode } from "../actions";


class EditRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {...props.recipe};
    this.editRecipeCollection = this.editRecipeCollection.bind(this);
    this.removeFromCollection = this.removeFromCollection.bind(this);
    this.addToCollection = this.addToCollection.bind(this);
  }


  editRecipe(recipe) {
    const { dispatch } = this.props;
    dispatch(editActiveRecipeAction(recipe));
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

  addImage(image) {
    getDataUri(image, (encoded) => {
      const recipe = {
        ...this.props.recipe,
        image: encoded
      };
      this.editRecipe(recipe);
    })
  }

  removeFromCollection(collectionName, index) {
    const recipe = {...this.props.recipe};
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

  updateTags(tags) {
    const recipe = {...this.props.recipe};
    recipe.tags = tags;
    this.editRecipe(recipe);
  }

  render() {
    const { recipe, dispatch } = this.props;

    return (
      <div>
        <Row center="lg">
          <Col lg={4}>
            <Card title>
              <Input
                title
                defaultValue={recipe.name}
                placeholder="Enter title"
                onChange={(evt) => (this.editRecipe({...recipe, name: evt.target.value }))}
              />
              <InputText
                defaultValue={recipe.description}
                placeholder="Enter description"
                onChange={(evt) => (this.editRecipe({...recipe, description: evt.target.value }))}
                rows={4}
              />
            </Card>
          </Col>
          <Col lg={3}>
            <Image
              recipe={recipe}
              removeImage={() => this.removeImage()}
              addImage={(image) => this.addImage(image)}
            />
          </Col>
        </Row>
        <Row center="lg">
          <Col lg={3}>
            <EditList
              items={recipe.ingredients}
              title="Ingredients"
              editRecipeCollection={this.editRecipeCollection}
              removeFromCollection={this.removeFromCollection}
              addToCollection={this.addToCollection}
            />
          </Col>
          <Col lg={4}>
            <EditList
              items={recipe.method}
              title="Method"
              editRecipeCollection={this.editRecipeCollection}
              removeFromCollection={this.removeFromCollection}
              addToCollection={this.addToCollection}
            />
          </Col>
        </Row>
        <Row center="lg"><Col lg={7}>
          <Tags tags={recipe.tags} updateTags={(tags) => this.updateTags(tags)}/>
        </Col></Row>
        <FloatingActionButton
          style={{ bottom: "90px", right: "24px", position: "absolute" }}
          backgroundColor="#8E24AA"
          onClick={() => {this.saveRecipe(recipe); toggleEditMode(); }}
          >
          <Save/>
          </FloatingActionButton>
        <FloatingActionButton
          style={{ bottom: "25px", right: "24px", position: "absolute" }}
          backgroundColor="#d4e157"
          onClick={() => dispatch(toggleEditMode())}
          >
          <Cancel/>
          </FloatingActionButton>
      </div>
    );
  }
}

const getDataUri = (files, callback) => {
  if (files && files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
         callback(e.target.result)
    };
    reader.onerror = function(e) {
         callback(null);
    };
    reader.readAsDataURL(files[0]);
  }
}

EditRecipe.propTypes = {
  recipe: PropTypes.object.isRequired
};

const wrap = connect();
export default wrap(EditRecipe);
