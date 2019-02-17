import React, { Fragment } from "react";
import { map } from "lodash";
import styled from "styled-components";

import { Input } from "./presentational/Input";
import withTitle from "./presentational/Title";

import { shaded, white40, white } from "./constants/colours";
import { ITEM_WIDTH } from "./constants/variables";

const Wrapper = styled.div`
  min-width: ${ITEM_WIDTH}px;
  margin: 0 auto;
  text-align: center;
  font-size: 2em;
  border: 1px solid ${white40};
  border-radius: 2px;
`;

const Item = styled.li`
  font-size: 1em;
  list-style: none;
  text-align: left;
  padding-bottom: 24px;
`;

const Ingredients = ({ items }) => (
  <Wrapper>
    <ul>
      {map(items, (item, index) => (
        <Item key={index}>{item}</Item>
      ))}
    </ul>
  </Wrapper>
);

export default withTitle(Ingredients);
