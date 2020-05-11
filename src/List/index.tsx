import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

interface item {
  title: string;
}
export interface Props {
  items: Array<item>;
}
export default ({ items }: Props) => (
  <List>
    {items.map((item: item, i: number) => (
      <ListItem key={i}>
        <ListItemText primary={item.title} />
      </ListItem>
    ))}
  </List>
);
