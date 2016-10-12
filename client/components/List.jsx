import React from "react";
import _ from "lodash";
import { v4 as uuid } from "node-uuid";
import { Collection, CollectionItem } from "react-materialize";

export default ({ items, title }) => (
  <Collection header={title}>
    {_.map(items, (item) => (
        <CollectionItem
          key={uuid()}
        >
          {item}
        </CollectionItem>
      )
    )}
  </Collection>
);
