import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentCreate from "material-ui/svg-icons/content/create";

import { Row, Col } from "react-flexbox-grid";

import List from "./List";
import { toggleEditMode } from "../actions";
import Card from "./presentational/Card";
import { Input, InputText } from "./presentational/Input";
import { ImageArea } from "./presentational/Image";
import Tag from "./presentational/Tag";


class ViewRecipe extends Component {

  render() {
    const { recipe, dispatch } = this.props;
    return (
      <div>
        <Row center="xs">
          <Col lg={4} xs={8}>
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
          <Col lg={4} xs={8}>
            <List items={recipe.method} title="Method" />
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }} center="xs">
          <Col xs={7} lg={7}>{_.map(recipe.tags, tag => <Tag key={tag.id}>{tag.text}</Tag>)}</Col>
        </Row>
          <FloatingActionButton
            style={{ bottom: "25px", right: "24px", position: "absolute" }}
            backgroundColor="#d4e157"
            onClick={() => { dispatch(toggleEditMode()); }}
          >
          <ContentCreate/>
          </FloatingActionButton>
      </div>
    );
  }
}
const wrap = connect();
export default wrap(ViewRecipe);
