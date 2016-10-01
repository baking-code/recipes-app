import React, { Component, PropTypes } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { v4 as uuid } from "node-uuid";

import { Card, Col, Row, Collection, CollectionItem, Tag } from "react-materialize";

import ViewButtons from "./ViewButtons.jsx";

class ViewRecipe extends Component {

  render() {
    const { recipe } = this.props;
    return (
      <div>
        <Row>
          <Col s={6} offset="s2">
            <Card title={recipe.name} >
              {recipe.description}
            </Card>
          </Col>
          <Col s={4} >
            <img src="data:image/jpeg;base64,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" />
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
        <ViewButtons />
      </div>
    );
  }
}
const wrap = connect();
export default wrap(ViewRecipe);
