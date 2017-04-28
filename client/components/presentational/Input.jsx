import React from "react";
import styled from "styled-components";
import SearchIcon from "material-ui/svg-icons/action/search";

import { primary, shaded } from "../constants/colours";

function inputProps(props) {
  return `
    font-size: ${props.title ? "3em !important" : "1em"};
    background-color: transparent;
    color: black !important;
    border: none;
    border-bottom: 1px solid ${props.disabled ? "transparent" : shaded};
    border-radius: 3px;
    height: 3rem;
    width: ${props.width || "100%"};
    padding: ${props.title ? "0 0 10px 0" : "0"};
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: initial;
    transition-delay: initial;
    outline: none;

    &:hover {
      cursor: ${props.disabled ? "normal" : "text"};
    }
    &:focus {
      box-shadow: 0 2px 0 0 ${primary};
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

const Search = styled.input`
  font-size: 2em;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.9) !important;
  border: none;
  border-radius: 3px;
  height: 3rem;
  width: 100%;
  padding: 0;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: initial;
  transition-delay: initial;
  outline: none;

  &:hover {
    cursor: ${props => props.disabled ? "normal" : "text"};
  }

  width: 480px;
  flex: 1;
  padding-left: 12px;
`;

const SearchWrapper = styled.div`
  display: flex;
  width: 500px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`;

export const SearchInput = ({ innerRef, onChange }) => (
  <SearchWrapper>
    <SearchIcon style={{
      color: "rgba(255, 255, 255, 0.9)",
      paddingTop: "12px"
    }}/>
  <Search innerRef={innerRef} onChange={onChange} />
  </SearchWrapper>
);
