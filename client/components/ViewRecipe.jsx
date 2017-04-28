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
        <Row center="xs">
          <Col lg={5} xs={8}>
            <Card title>
              <Input disabled title value={recipe.name}/>
              <InputText disabled value={recipe.description}/>
            </Card>
          </Col>
          <Col lg={3} xs={4}>
            <ImageArea><img src={recipe.image} width={240} height={200}/></ImageArea>
          </Col>
        </Row>
        <Row center="xs">
          <Col lg={3} xs={8}>
            <List items={recipe.ingredients} title="Ingredients" />
          </Col>
          <Col lg={5} xs={8}>
            <List items={recipe.method} title="Method" />
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col xsOffset={1} xs={9}>{_.map(recipe.tags, tag => <Tag key={tag.id}>{tag.text}</Tag>)}</Col>
          <Col xs={1}>
            <Duration time={recipe.time} disabled/>
          </Col>
        </Row>
          <ActionButton
            onClick={() => { dispatch(toggleEditMode(true)); }}
          >
            Edit
          </ActionButton>
      </div>
    );
  }
}
const wrap = connect();
export default wrap(ViewRecipe);
