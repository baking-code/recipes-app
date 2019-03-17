import React from "react";
import styled from "styled-components";

import { shaded, white40, white, white10 } from "../constants/colours";

const Card = styled.div`
  transition: background-color 300ms ease;
  padding: ${props => (props.isTitle ? "15px 20px 20px" : "10px 10px 10px")};
  cursor: ${props => (props.onClick ? "pointer" : "default")};
  background-color: ${props => (props.editing ? white10 : "transparent")};
  margin: 24px auto;
  text-align: center;
  font-size: ${props => (props.isTitle ? "2.5em" : "1em")};
  border: 1px solid ${white40};
  border-radius: 2px;
`;

export default Card;

export const RecipeCard = styled(Card)`
  background-color: rgba(0, 0, 0, 0);
  width: 40vw;
  margin: 24px auto;
  text-align: center;
  font-size: 2em;
  border: 1px solid ${white40};
  &:hover {
    border: 1px solid ${white};
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
