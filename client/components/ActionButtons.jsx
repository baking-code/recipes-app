import React from "react";
import { Button } from "react-materialize";

const ActionButtons = (props) => (
  <div>
    <Button
      floating
      icon="mode_edit"
      className="lime lighten-1"
      large
      style={{bottom: "90px", right: "24px", position: "absolute"}}
      onClick={() => { console.log("Edit")}}
    />
    <Button
      floating
      icon="add"
      className="purple darken-1"
      large
      style={{bottom: "25px", right: "24px", position: "absolute"}}
      onClick={() => { console.log("Add")}}
    />
  </div>
)

export default ActionButtons;
