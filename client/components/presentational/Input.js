import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

import {
  primary,
  white10,
  white,
  white40,
  white80
} from "../constants/colours";

function inputProps(props) {
  return `
    font-size: ${props.isTitle ? "64px !important" : "30px"};
    color: ${white} !important;
    border-radius: 4px;
    height: 4rem;
    width: ${props.width || "90%"};
    padding: 8px;
    transition: background-color,border 300ms ease;
    border: ${
      props.isTitle || props.isDescription
        ? "none"
        : `1px solid ${props.editing ? white80 : white40}`
    };
    background-color: ${props.editing ? white10 : "transparent"};
    &:focus {
      box-shadow: none;
      outline: none;
    }
`;
}

export const Input = styled.input`
  ${props => inputProps(props)};
`;

export const TextField = styled.textarea`
  ${props => inputProps(props)};
  resize: none;
`;

const Search = styled.input`
  font-size: 48px;
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

export const SearchInput = ({ innerRef, onChange }) => (
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
  </SearchWrapper>
);
