import React from "react";
import styled, { css } from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? "column" : "row")};
  align-items: ${props => (props.align || "center")};
  padding: ${props => (props.padding || "8px")};
  ${props =>
    props.wrap &&
    css`
      flex-wrap: wrap;
    `}
`;

export const FlexItem = styled.div`
  flex: ${props => props.ratio || 0};
  width: ${props => props.width || "100%"};
`;
