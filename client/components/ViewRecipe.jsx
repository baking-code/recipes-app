import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { v4 as uuid } from "node-uuid";

import { Card, Col, Row, Collection, CollectionItem, Tag } from "react-materialize";

import ViewButtons from "./ViewButtons.jsx";

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
            <img src={recipe.image} />
          </Col>
        </Row>
        <Row>
          <Col s={3} offset="s2">
            <Collection header="Ingredients">
              {_.map(recipe.ingredients, (ing) => {
                return (
                  <CollectionItem
                    key={uuid()}
                  >
                    {ing}
                  </CollectionItem>
                );
              })}
            </Collection>
          </Col>
          <Col s={5}>
            <Collection header="Method">
              {_.map(recipe.method, (m) => {
                return (
                  <CollectionItem
                    key={uuid()}
                  >
                    {m}
                  </CollectionItem>
                );
              })}
            </Collection>
          </Col>
        </Row>
        <Row><Col s={10} offset="s2">{_.map(recipe.tags, tag => <Tag key={tag}>{tag}</Tag>)}</Col></Row>
        <ViewButtons dispatch={dispatch} />
      </div>
    );
  }
}
const wrap = connect();
export default wrap(ViewRecipe);
