import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { Row, Col } from "react-flexbox-grid";

import List from "./List";
import { toggleEditMode } from "../actions";
import Card from "./presentational/Card";
import { Input, InputText } from "./presentational/Input";
import { ImageArea } from "./presentational/Image";
import Duration from "./presentational/Duration";
import Tag from "./presentational/Tag";
import { ActionButton } from "./presentational/Buttons";

class ViewRecipe extends Component {
  render() {
    const { recipe, dispatch } = this.props;
    return (
      <div>
        <Card title>
          {recipe.name}
        </Card>
        <Card>
          {recipe.description}
        </Card>
        <div className="recipe__list-container">
          <List items={recipe.ingredients} title="Ingredients" />
          <List items={recipe.method} title="Method" />
        </div>
        <Row style={{ marginTop: "20px" }}>
          <Col xsOffset={1} xs={9}>
            {_.map(recipe.tags, tag => <Tag key={tag.id}>{tag.text}</Tag>)}
          </Col>
          <Col xs={1}>
            <Duration time={recipe.time} disabled />
          </Col>
        </Row>
        <ActionButton
          onClick={() => {
            dispatch(toggleEditMode(true));
          }}
        >
          Edit
        </ActionButton>
      </div>
    );
  }
}
const wrap = connect();
export default wrap(ViewRecipe);
