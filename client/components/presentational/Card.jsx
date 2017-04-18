import React from "react";
import styled from "styled-components";

import { shaded } from "../constants/colours";

const Card = styled.div`
  position: relative;
  background-color: #fff;
  align-items: center;
  display: block;
  padding: ${props => props.title ? "15px 20px 20px" : "10px 10px 10px"};
  background-color: ${props => props.shaded ? shaded : "#FFF"};
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,.15);
  border-radius: 2px;
  margin: .5rem;
  cursor: ${props => props.onClick ? "pointer" : "default"};
`;

export default Card;

export const RecipeCard = styled(Card)`
  width: 400px;
  margin: 24px auto;
  text-align: center;
`;
