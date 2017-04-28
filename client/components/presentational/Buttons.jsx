import React from "react";
import styled from "styled-components";
import Cancel from "material-ui/svg-icons/navigation/cancel";
import Add from "material-ui/svg-icons/content/add-circle";

import { primary, secondary, white80 } from "../constants/colours";

const CancelButtonSvg = styled(Cancel)`
  height: ${props => (props.size ? props.size + 4 : 18)}px !important;
  width:  ${props => (props.size ? props.size + 4 : 18)}px !important;
  fill: ${primary} !important;
  cursor: pointer !important;
  transform: translate(-2px, -2px) !important;
`;

const AddButtonSvg = styled(Add)`
  height: ${props => (props.size ? props.size + 4 : 18)}px !important;
  width:  ${props => (props.size ? props.size + 4 : 18)}px !important;
  fill: ${secondary} !important;
  cursor: pointer !important;
  transform: translate(-2px, -2px) !important;
  position: relative;
`;

const ButtonWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.156863) 0px 1px 5px, rgba(0, 0, 0, 0.227451) 0px 1px 5px;
  border-radius: 50%;
  height: ${props => props.size || 14}px !important;
  width:  ${props => props.size || 14}px !important;
  float: right;
  margin-right: ${props => props.marginRight || 0}px;
  margin-top: ${props => props.marginTop || 0}px;
  &:hover {
    opacity: 0.4;
  }
`;

export const AddButton = props => (
  <ButtonWrapper {...props}>
    <AddButtonSvg size={props.size} />
  </ButtonWrapper>
);

export const CancelButton = props => (
  <ButtonWrapper {...props}>
    <CancelButtonSvg size={props.size} />
  </ButtonWrapper>
);

export const ActionButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  width: 110px;
  height: 70px;
  font-size: 2em;
  color: ${white80};
  border: 1px solid ${white80};
  text-align: center;
  line-height: 35px;
  bottom: ${props => (props.index || 0) * 80 + 25}px;
  right: 25px;
  position: fixed;
  outline: none;
  border-radius: 1px;
  user-select: none;

  &:hover {
    background-color: ${white80};
    border: none;
    color: ${primary};
    cursor: pointer;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

// rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px
