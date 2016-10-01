import React from "react";
import { connect } from "react-redux";
import { Button } from "react-materialize";

import { editRecipeAction, toggleEditMode } from "../actions";

const ViewButtons = props => (
  <div>
    <Button
      floating
      icon="save"
      className="lime lighten-1"
      large
      style={{ bottom: "90px", right: "24px", position: "absolute" }}
      onClick={() => { props.dispatch(editRecipeAction(props.recipe)); }}
    />
    <Button
      floating
      icon="cancel"
      className="purple darken-1"
      large
      style={{ bottom: "25px", right: "24px", position: "absolute" }}
      onClick={() => { props.dispatch(toggleEditMode()); }}
    />
  </div>
);

const wrap = connect();
export default wrap(ViewButtons);
