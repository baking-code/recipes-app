import React from "react";
import { Button } from "react-materialize";

const ViewButtons = props => (
  <div>
    <Button
      floating
      icon="save"
      className="lime lighten-1"
      large
      style={{ bottom: "90px", right: "24px", position: "absolute" }}
      onClick={props.saveEdit}
    />
    <Button
      floating
      icon="cancel"
      className="purple darken-1"
      large
      style={{ bottom: "25px", right: "24px", position: "absolute" }}
      onClick={props.toggleEdit}
    />
  </div>
);

export default ViewButtons;
