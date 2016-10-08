import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { Row, Col, Collection, CollectionItem, Button } from "react-materialize";

import { toggleEditMode } from "../actions";

class RecipeList extends React.Component {

  render() {
    return (
      <div>
        <Row>
          <Col s={6} className="grid-example" offset="s3">
            <Collection className="lime lighten-4 black-text">
              {_.map(this.props.recipes, (recipe) => {
                return (
                  <CollectionItem
                    onClick={() => this.props.router.push({ pathname: `/${recipe.id}` })}
                    key={recipe.id}
                  >
                    {recipe.name}
                  </CollectionItem>
                );
              })}
            </Collection>
          </Col>
        </Row>
        <Button
          floating
          icon="add"
          className="purple darken-1"
          large
          style={{ bottom: "25px", right: "24px", position: "absolute" }}
          onClick={() => { this.props.dispatch(toggleEditMode()); this.props.router.push({ pathname: "/new" }); }}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { recipes: state.recipes.toJS() || {} };
}

const wrap = connect(mapStateToProps);
export default withRouter(wrap(RecipeList));