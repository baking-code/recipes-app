import React from "react";
import styled from "styled-components";

function inputProps(props) {
  return `
    font-size: ${props.title ? "2em !important" : "1em"};
    color: black !important;
    background: ${props.shaded ? "red" : "#FFF"};
    border-bottom: ${props.disabled ? "none !important" : "1px solid #9e9e9e !important"};
    border-radius: 3px;

    &:hover {
      pointer: ${props.disabled ? "normal" : "pointer"};
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
`;
