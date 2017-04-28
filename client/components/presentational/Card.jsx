import React from "react";
import styled from "styled-components";

import { shaded } from "../constants/colours";

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
  width: 40vw;
  margin: 24px auto;
  text-align: center;
  font-size: 2em;
`;
