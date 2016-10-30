import React from "react";
import _ from "lodash";
import { Input } from "./presentational/Input";
import Card from "./presentational/Card";


export default ({ items, title }) => (
  <div>
    <h4>{title}</h4>
    {_.map(items, (item, index) => (
        <Card
          key={`ing-${index}`}
        >
        <Input
          disabled
          value={item}
        />
      </Card>
      )
    )}
  </div>
);
