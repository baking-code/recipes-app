import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

import { primary, white10, white, white40, white80 } from "../constants/colours";

function inputProps(props) {
  console.log(props.isTitle);
  return `
    font-size: ${props.isTitle ? "2em !important" : "24px"};
    color: ${white} !important;
    border: none;
    border-radius: 4px;
    height: 3rem;
    width: ${props.width || "90%"};
    padding: 8px;
    background-color: transparent;
    &:focus {
      box-shadow: none;
      outline: none;
    }
`;
}

export const Input = styled.input`${props => inputProps(props)};`;

export const TextField = styled.textarea`
  ${props => inputProps(props)} resize: none;
  border-top: none;
  border-left: none;
  border-right: none;
  height: 60px !important;
`;

const Search = styled.input`
  font-size: 3em;
  background-color: transparent;
  color: ${white} !important;
  border: none;
  border-radius: 3px;
  height: 4rem;
  width: 100%;
  padding: 0;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: initial;
  transition-delay: initial;
  outline: none;

  &:hover {
    cursor: ${props => (props.disabled ? "normal" : "text")};
  }

  width: 480px;
  flex: 1;
  padding-left: 12px;
`;

const SearchWrapper = styled.div`
  display: flex;
  width: 40vw;
  margin: 0 auto;
  border-bottom: 1px solid ${white40};
`;

export const SearchInput = ({ innerRef, onChange }) =>
  <SearchWrapper>
    <SearchIcon
      style={{
        color: `${white80}`,
        paddingTop: "24px",
        minWidth: "24px",
        minHeight: "24px"
      }}
    />
    <Search ref={innerRef} onChange={onChange} />
  </SearchWrapper>;
