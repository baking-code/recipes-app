import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { FlexContainer, FlexItem } from "./presentational/FlexHelpers";

import List from "./List";
import { toggleEditMode } from "../actions";
import Card from "./presentational/Card";
import { Input, InputText } from "./presentational/Input";
import { ImageArea } from "./presentational/Image";
import Duration from "./presentational/Duration";
import Tag from "./presentational/Tag";
import Method from "./Method";
import { ActionButton } from "./presentational/Buttons";

class ViewRecipe extends Component {
  render() {
    const { recipe, dispatch } = this.props;
    return (
      <div>
        <Card title>{recipe.name}</Card>
        <FlexContainer align="flex-start">
          <FlexItem ratio={2}>
            <Card>{recipe.description}</Card>
          </FlexItem>
          <FlexItem ratio={1}>
            <Card>
              <FlexContainer column align="flex-start">
                <Duration time={recipe.time} disabled />
                <FlexContainer>
                  {_.map(recipe.tags, tag => (
                    <Tag key={tag.id}>{tag.text}</Tag>
                  ))}
                </FlexContainer>
              </FlexContainer>
            </Card>
          </FlexItem>
        </FlexContainer>
        <div className="recipe__list-container">
          <List items={recipe.ingredients} title="Ingredients" />
          <Method methods={recipe.method} />
        </div>

        <ActionButton
          onClick={() => {
            dispatch(toggleEditMode(true));
          }}
        >
          Edit
        </ActionButton>
      </div>
    );
  }
}
const wrap = connect();
export default wrap(ViewRecipe);
