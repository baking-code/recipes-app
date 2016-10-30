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
import Tag from "./presentational/Tag";


class ViewRecipe extends Component {

  render() {
    const { recipe, dispatch } = this.props;
    return (
      <div>
        <Row >
          <Col sm={6} smOffset={2}>
            <Card title>
              <Input disabled title value={recipe.name}/>
              <InputText disabled value={recipe.description}/>
            </Card>
          </Col>
          <Col sm={4} >
            <img src={recipe.image} width={250} height={250}/>
          </Col>
        </Row>
        <Row >
          <Col sm={3} smOffset={2}>
            <List items={recipe.ingredients} title="Ingredients" />
          </Col>
          <Col sm={5}>
            <List items={recipe.method} title="Method" />
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col sm={10} smOffset={2}>{_.map(recipe.tags, tag => <Tag key={tag.id}>{tag.text}</Tag>)}</Col>
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
