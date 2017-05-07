import React from "react";
import styled from "styled-components";

import { shaded, white40, white } from "../constants/colours";

const Card = styled.div`
  position: relative;
  background-color: rgba(255, 255, 255, 0.8);
  align-items: center;
  display: block;
  padding: ${props => props.title ? "15px 20px 20px" : "10px 10px 10px"};
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,.15);
  border-radius: 2px;
  margin: .5rem;
  cursor: ${props => props.onClick ? "pointer" : "default"};
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
