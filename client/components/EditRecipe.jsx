import React, { Component, PropTypes } from "react";
import _ from "lodash";
import { v4 as uuid } from "node-uuid";
import { connect } from "react-redux";
import ContentEditable from "react-contenteditable";

import { Card, Col, Row, Collection, CollectionItem, Tag } from "react-materialize";
import EditButtons from "./EditButtons.jsx";

class EditRecipe extends Component {

  render() {
    const { recipe } = this.props;
    // for refs use something like
    //     render: function() {
    //   return <TextInput ref={(c) => this._input = c} />;
    // },
    // componentDidMount: function() {
    //   this._input.focus();
    // },
    // instead
    return (
      <div className="lime lighten-4">
        <Row>
          <Col s={6} offset="s2">
            <Card
              title={
                <ContentEditable
                  html={recipe.name}
                  ref="name"
                />
              }
            >
              <ContentEditable
                html={recipe.description}
                ref="description"
              />
            </Card>
          </Col>
          <Col s={4} >
            <img src={recipe.img} />
          </Col>
        </Row>
        <Row>
          <Col s={3} offset="s2">
            <Collection header="Ingredients" ref="ingredients">
              {_.map(recipe.ingredients, (ing) => {
                return (
                  <CollectionItem
                    key={uuid()}
                  >
                  <ContentEditable
                    html={ing}
                  />
                  </CollectionItem>
                );
              })}
            </Collection>
          </Col>
          <Col s={5}>
            <Collection header="Method" ref="method">
              {_.map(recipe.method, (m) => {
                return (
                  <CollectionItem
                    key={uuid()}
                  >
                    <ContentEditable
                      html={m}
                    />
                  </CollectionItem>
                );
              })}
            </Collection>
          </Col>
        </Row>
        <Row><Col s={10} offset="s2">{_.map(recipe.tags, tag => <Tag key={tag}>{tag}</Tag>)}</Col></Row>
        <EditButtons />
      </div>
    );
  }
}

EditRecipe.propTypes = {
  recipe: PropTypes.object.isRequired
};

const wrap = connect();
export default wrap(EditRecipe);
