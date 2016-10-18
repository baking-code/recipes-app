import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { Card, Chip, Button } from "react-materialize";
import { Row, Col } from "react-flexbox-grid";

import List from "./List";
import { toggleEditMode } from "../actions";

class ViewRecipe extends Component {

  render() {
    const { recipe, dispatch } = this.props;
    return (
      <div>
        <Row >
          <Col sm={6} smOffset={2}>
            <Card title={recipe.name} >
              {recipe.description}
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
        <Row >
          <Col sm={10} smOffset={2}>{_.map(recipe.tags, tag => <Chip key={tag.id}>{tag.text}</Chip>)}</Col>
          </Row>
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
