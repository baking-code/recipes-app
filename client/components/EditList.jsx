import React from "react";
import _ from "lodash";
import { Button, Icon } from "react-materialize";
import { Input } from "./presentational/Input";
import Card from "./presentational/Card";
import Cancel from "./presentational/Cancel";


export default ({ items, title, editRecipeCollection, removeFromCollection, addToCollection }) => (
  <div>
    <h4>{title}</h4>
    {_.map(items, (item, index) => {
      return (
        <Card
          key={`ing-${index}`}
        >
        <Input
          defaultValue={item}
          placeholder="Enter value"
          onChange={(evt) => editRecipeCollection(title.toLowerCase(), index, evt.target.value)}
        />
      <Cancel onClick={() => removeFromCollection(title.toLowerCase(), index)} translate={(-5, 0)}/>
      </Card>
      );
    })}
    <Button onClick={() => addToCollection(title.toLowerCase())}><Icon>add</Icon></Button>
  </div>
);
