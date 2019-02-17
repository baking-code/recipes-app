import styled, { css } from "styled-components";
import { ITEM_WIDTH } from "../constants/variables";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? "column" : "row")};
  align-items: ${props => props.align || "center"};
  padding: ${props => props.padding || "8px"};
  margin: ${props => props.margin || "24px auto"};
  ${props =>
    props.isWrapped &&
    css`
      flex-wrap: wrap;
    `}
`;

export const FlexItem = styled.div`
  flex: ${props => props.ratio || 0};
  margin: 24px;
  ${props =>
    props.itemWidth &&
    css`
      width: ${props.itemWidth}px;
    `}
  ${props =>
    !props.ratio &&
    css`
      min-width: ${ITEM_WIDTH}px;
    `}
`;
