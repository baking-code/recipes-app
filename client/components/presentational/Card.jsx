import React from "react";
import styled from "styled-components";

import { shaded, white40, white } from "../constants/colours";

const Card = styled.div`
  padding: ${props => (props.title ? "15px 20px 20px" : "10px 10px 10px")};
  cursor: ${props => (props.onClick ? "pointer" : "default")};
  background-color: rgba(0, 0, 0, 0);
  width: 40vw;
  margin: 24px auto;
  text-align: center;
  font-size: ${props => (props.title ? "2.5em" : "2m")};
  border: 1px solid ${white40};
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
