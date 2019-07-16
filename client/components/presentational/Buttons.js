import React from "react";
import Cancel from "@material-ui/icons/Cancel";
import Plus from "@material-ui/icons/Add";

import styled from "styled-components";

import {
  primary,
  secondary,
  white,
  white80,
  white40
} from "../constants/colours";
import { ITEM_WIDTH } from "../constants/variables";

const ButtonWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.156863) 0px 1px 5px,
    rgba(0, 0, 0, 0.227451) 0px 1px 5px;
  border-radius: 50%;
  height: ${props => props.size || 28}px !important;
  width: ${props => props.size || 28}px !important;
  path:first-child {
    fill: ${white40};
  }
  &:hover {
    path:first-child {
      fill: ${white80};
    }
  }
`;

const AddWrapper = styled.div`
  border: 1px dashed ${white40};
  height: 4rem;
  min-width: 400px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    border: 1px dashed ${white80};
  }
`;

export const AddButton = props => (
  <AddWrapper {...props}>
    <Plus />
  </AddWrapper>
);

export const CancelButton = props => (
  <ButtonWrapper {...props}>
    <Cancel />
  </ButtonWrapper>
);

export const ActionButton = styled.button`
  background-color: ${primary};
  width: 140px;
  height: 70px;
  font-size: 36px;
  color: ${white};
  border: 1px solid ${white40};
  text-align: center;
  line-height: 35px;
  bottom: ${props => (props.index || 0) * 80 + 25}px;
  right: 25px;
  position: fixed;
  outline: none;
  border-radius: 1px;
  user-select: none;
  z-index: 5;
  &:hover {
    border: 1px solid ${white};
    color: ${white};
    cursor: pointer;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

// rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px
