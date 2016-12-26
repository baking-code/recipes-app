import React from "react";
import styled from "styled-components";
import Cancel from "material-ui/svg-icons/navigation/cancel";
import Add from "material-ui/svg-icons/content/add-circle";

import { primary, secondary } from "../constants/colours";

const CancelButtonSvg = styled(Cancel)`
  height: ${props => props.size ? props.size + 4 : 18}px !important;
  width:  ${props => props.size ? props.size + 4 : 18}px !important;
  fill: ${primary} !important;
  cursor: pointer !important;
  transform: translate(-2px, -2px) !important;
`;

const AddButtonSvg = styled(Add)`
  height: ${props => props.size ? props.size + 4 : 18}px !important;
  width:  ${props => props.size ? props.size + 4 : 18}px !important;
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
`;

export const AddButton = (props) => (
  <ButtonWrapper {...props}>
    <AddButtonSvg size={props.size} />
  </ButtonWrapper>
);

export const CancelButton = (props) => (
  <ButtonWrapper {...props}>
    <CancelButtonSvg size={props.size} />
  </ButtonWrapper>
);


// rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px
