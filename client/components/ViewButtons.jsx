import React from "react";
import { Button } from "react-materialize";

import { toggleEditMode } from "../actions";

const ViewButtons = props => (
  <div>
    <Button
      floating
      icon="mode_edit"
      className="lime lighten-1"
      large
      style={{ bottom: "90px", right: "24px", position: "absolute" }}
      onClick={() => { props.dispatch(toggleEditMode()); }}
    />
    <Button
      floating
      icon="add"
      className="purple darken-1"
      large
      style={{ bottom: "25px", right: "24px", position: "absolute" }}
      onClick={() => { }}
    />
  </div>
);

export default ViewButtons;
