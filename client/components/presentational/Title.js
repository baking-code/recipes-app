import React from "react";
import styled from "styled-components";
import { FlexContainer } from "./FlexHelpers";

const Title = styled.legend`
  padding: 8px;
  font-size: 64px;
  margin: 0 auto;
`;

export default Component => ({ title, ...other }) => (
  <FlexContainer column>
    <Title>{title}</Title>
    <Component {...other} />
  </FlexContainer>
);
