import React from "react";
import "./index.css";
export interface Props {
  header: string;
}

export default ({ header }: Props) => (
  <header className="App-header">{header}</header>
);
