import React from "react";
import _ from "lodash";
import { Input } from "./presentational/Input";
import Card from "./presentational/Card";
import { CancelButton, AddButton } from "./presentational/Buttons";


export default ({ items, title, editRecipeCollection, removeFromCollection, addToCollection }) => (
  <div>
    <h4>{title}</h4>
    {_.map(items, (item, index) => (
        <Card
          key={`ing-${index}`}
        >
        <Input
          listItem
          value={item}
          placeholder="Enter value"
          onChange={(evt) => editRecipeCollection(title.toLowerCase(), index, evt.target.value)}
        />
      <CancelButton onClick={() => removeFromCollection(title.toLowerCase(), index)}/>
      </Card>
      )
    )}
    <AddButton onClick={() => addToCollection(title.toLowerCase())}/>
  </div>
);
