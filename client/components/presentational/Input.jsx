import React from "react";
import styled from "styled-components";

import { primary, shaded } from "../constants/colours";

function inputProps(props) {
  return `
    font-size: ${props.title ? "3em !important" : "1em"};
    color: black !important;
    border: none;
    border-bottom: 1px solid ${props.disabled ? "transparent" : shaded} !important;
    border-radius: 3px;
    height: 3rem;
    width: 90% !important;
    margin: 0 0 5px 0;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: initial;
    transition-delay: initial;
    padding: 0px;
    outline: none;

    &:hover {
      cursor: ${props.disabled ? "normal" : "pointer"};
    }
    &:focus {
      box-shadow: 0 2px 0 0 ${primary} !important;
    }
`;
}

export const Input = styled.input`
  ${props => inputProps(props)}
`;

export const InputText = styled.textarea`
  ${props => inputProps(props)}
  resize: none;
  border-top: none;
  border-left: none;
  border-right: none;
  height: 60px !important;
`;
