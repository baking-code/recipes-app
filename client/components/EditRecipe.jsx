import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import { v4 as uuid } from "node-uuid";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

import FloatingActionButton from "material-ui/FloatingActionButton";
import Cancel from "material-ui/svg-icons/navigation/cancel";
import AddIcon from "material-ui/svg-icons/content/add";
import Save from "material-ui/svg-icons/content/save";
import Delete from "material-ui/svg-icons/action/delete";

import { Row, Col } from "react-flexbox-grid";

import Tags from "./Tags";
import EditList from "./EditList";
import ConfirmDelete from "./ConfirmDelete";
import { Input, InputText } from "./presentational/Input";
import { Image } from "./presentational/Image";
import Duration from "./presentational/Duration";
import { danger } from "./constants/colours";

import Card from "./presentational/Card";
import { editActiveRecipeAction, editRecipeAction, toggleEditMode, removeRecipeAction } from "../actions";


class EditRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = { popoverOpen: false };
    this.editRecipeCollection = this.editRecipeCollection.bind(this);
    this.removeFromCollection = this.removeFromCollection.bind(this);
    this.addToCollection = this.addToCollection.bind(this);
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

  deleteRecipe(recipe) {
    const { dispatch } = this.props;
    dispatch(removeRecipeAction(recipe.id));
    this.context.router.push("/recipes");
  }

  updateTags(tags) {
    const recipe = {...this.props.recipe};
    recipe.tags = tags;
    this.editRecipe(recipe);
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this._title).focus();
  }

  render() {
    const { recipe, dispatch } = this.props;

    return (
      <div>
        <Row center="xs">
          <Col lg={5} xs={8}>
            <Card title>
              <Input
                title
                value={recipe.name}
                placeholder="Enter title"
                onChange={(evt) => (this.editRecipe({...recipe, name: evt.target.value }))}
                ref={(r) => (this._title = r)}
              />
              <InputText
                defaultValue={recipe.description}
                placeholder="Enter description"
                onChange={(evt) => (this.editRecipe({...recipe, description: evt.target.value }))}
                rows={4}
              />
            </Card>
          </Col>
          <Col lg={3} xs={4}>
            <Image
              recipe={recipe}
              removeImage={() => this.removeImage()}
              addImage={(image) => this.addImage(image)}
            />
          </Col>
        </Row>
        <Row center="xs">
          <Col lg={3} xs={8}>
            <EditList
              items={recipe.ingredients}
              title="Ingredients"
              editRecipeCollection={this.editRecipeCollection}
              removeFromCollection={this.removeFromCollection}
              addToCollection={this.addToCollection}
            />
          </Col>
          <Col lg={5} xs={8}>
            <EditList
              items={recipe.method}
              title="Method"
              editRecipeCollection={this.editRecipeCollection}
              removeFromCollection={this.removeFromCollection}
              addToCollection={this.addToCollection}
            />
          </Col>
        </Row>
        <Row center="xs">
          <Col lg={7} xs={7}>
            <Tags tags={recipe.tags} updateTags={(tags) => this.updateTags(tags)}/>
          </Col>
          <Col xs={1} lg={1}>
            <Duration time={recipe.time} onChange={(evt) => (this.editRecipe({...recipe, time: evt.target.value }))}
/>
          </Col>
        </Row>
        <FloatingActionButton
            style={{ bottom: "155px", right: "32px", position: "fixed", ...shadow }}
            backgroundColor={danger}
            onTouchTap={(e) => this.handleTouchTap(e)}
            mini
          >
          <Delete/>
        </FloatingActionButton>
        <FloatingActionButton
          style={{ bottom: "90px", right: "24px", position: "fixed" }}
          backgroundColor="#8E24AA"
          onClick={() => {this.saveRecipe(recipe); toggleEditMode(); }}
          >
          <Save/>
        </FloatingActionButton>
        <FloatingActionButton
          style={{ bottom: "25px", right: "24px", position: "fixed" }}
          backgroundColor="#d4e157"
          onClick={() => dispatch(toggleEditMode())}
          >
          <Cancel/>
        </FloatingActionButton>

        <ConfirmDelete
            open={this.state.popoverOpen}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{ horizontal: "left", vertical: "center" }}
            targetOrigin={{ horizontal: "left", vertical: "center" }}
            onRequestClose={() => this.handleRequestClose()}
            animated={false}
            message="Are you sure?"
            onClickConfirm={() => this.deleteRecipe(recipe)}
        />
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

EditRecipe.contextTypes = {
    router: React.PropTypes.object
};

const shadow = {
  "boxShadow": "rgba(0, 0, 0, 0.156863) 0px 1px 3px, rgba(0, 0, 0, 0.227451) 0px 1px 3px"
}

const wrap = connect();
export default wrap(EditRecipe);
