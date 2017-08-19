import React from "react";
import _ from "lodash";
import styled from "styled-components";

import { Input } from "./presentational/Input";
import Card from "./presentational/Card";

import { shaded, white40, white } from "./constants/colours";

const Wrapper = styled.fieldset`
  background-color: rgba(0, 0, 0, 0);
  min-width: 480px;
  margin: 24px auto;
  text-align: center;
  font-size: 2em;
  border: 1px solid ${white40};
`;

const Item = styled.li`
  font-size: 1em;
  list-style: none;
  text-align: left;
  padding-bottom: 24px;
`;

const Legend = styled.legend`
  padding: 0px 6px;
  font-size: 0.8em;
`;

export default ({ items, title }) =>
  <Wrapper>
    <Legend>
      {title}
    </Legend>
    <ul>
      {_.map(items, (item, index) =>
        <Item key={index}>
          {item}
        </Item>
      )}
    </ul>
  </Wrapper>;
