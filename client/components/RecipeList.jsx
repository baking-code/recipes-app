import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { Row, Col, Collection, CollectionItem } from "react-materialize";
import ActionButtons from "./ActionButtons";


class RecipeList extends React.Component {

  render() {
    return (
      <div>
        <Row>
          <Col s={6} className='grid-example' offset="s3">
            <Collection className="lime lighten-4 black-text">
              {_.map(this.props.recipes, recipe => {
                return (
                  <CollectionItem
                    onClick={() => this.props.router.push({ pathname: `/${recipe.id}` })}
                    key={recipe.id}
                  >
                    {recipe.name}
                  </CollectionItem>
                )
              })}
            </Collection>
          </Col>
        </Row>
        <ActionButtons />
      </div>
    )
  }
};

function mapStateToProps(state) {
  return { recipes: state.toJS() || {} };
}

const wrap = connect(mapStateToProps);
export default withRouter(wrap(RecipeList));
