import React from "react";
import _ from "lodash";
import { connect } from "react-redux";

import { Row, Col, Collection, CollectionItem } from "react-materialize";
import ActionButtons from "./ActionButtons";


const RecipeList = (props) => {
  return (
    <div>
      <Row>
        <Col s={6} className='grid-example' offset="s3">
          <Collection className="lime lighten-4 black-text">
            {_.map(props.recipes, recipe => {
              return (
                <CollectionItem>{recipe.name}</CollectionItem>
              )
            })}
          </Collection>
        </Col>
      </Row>
      <ActionButtons />
    </div>
  )
};


function mapStateToProps(state) {
  return { recipes: state.toJS() || {} };
}

const wrap = connect(mapStateToProps);
export default wrap(RecipeList);
