import React from "react";
import _ from "lodash";
import { v4 as uuid } from "node-uuid";
import { Collection, CollectionItem, Button, Icon } from "react-materialize";

export default ({ items, title, editRecipeCollection, removeFromCollection, addToCollection }) => (
  <Collection header={title}>
    {_.map(items, (item, index) => {
      return (
        <CollectionItem
          key={`ing-${index}`}
        >
        <input
          defaultValue={item}
          placeholder="Enter value"
          onChange={(evt) => editRecipeCollection(title.toLowerCase(), index, evt.target.value)}
        />
      <Button onClick={() => removeFromCollection(title.toLowerCase(), index)} icon="cancel"/>
        </CollectionItem>
      );
    })}
    <Button onClick={() => addToCollection(title.toLowerCase())}><Icon>add</Icon></Button>
  </Collection>
);
