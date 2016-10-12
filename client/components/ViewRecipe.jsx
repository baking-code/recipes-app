import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { v4 as uuid } from "node-uuid";

import { Card, Col, Row, Collection, CollectionItem, Chip, Button } from "react-materialize";
import List from "./List";
import { toggleEditMode } from "../actions";

class ViewRecipe extends Component {

  render() {
    const { recipe, dispatch } = this.props;
    return (
      <div>
        <Row>
          <Col s={6} offset="s2">
            <Card title={recipe.name} >
              {recipe.description}
            </Card>
          </Col>
          <Col s={4} >
            <img src={recipe.image} width={250} height={250}/>
          </Col>
        </Row>
        <Row>
          <Col s={3} offset="s2">
            <List items={recipe.ingredients} title="Ingredients" />
          </Col>
          <Col s={5}>
            <List items={recipe.method} title="Method" />
          </Col>
        </Row>
        <Row><Col s={10} offset="s2">{_.map(recipe.tags, tag => <Chip key={tag.id}>{tag.text}</Chip>)}</Col></Row>
          <Button
            floating
            icon="mode_edit"
            className="lime lighten-1"
            large
            style={{ bottom: "25px", right: "24px", position: "absolute" }}
            onClick={() => { dispatch(toggleEditMode()); }}
          />
      </div>
    );
  }
}
const wrap = connect();
export default wrap(ViewRecipe);
