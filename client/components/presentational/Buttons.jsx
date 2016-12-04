import React from "react";
import styled from "styled-components";
import Cancel from "material-ui/svg-icons/navigation/cancel";
import Add from "material-ui/svg-icons/content/add-circle";

import { primary, secondary } from "../constants/colours";

export const CancelButton = styled(Cancel)`
  height: ${props => props.image ? "inherit" : "18px !important"};
  width:  ${props => props.image ? "inherit" : "18px !important"};
  fill: ${primary} !important;
  cursor: pointer !important;
  transform: translateY(4px) !important;
`;

export const AddButton = styled(Add)`
  fill: ${secondary} !important;
  cursor: pointer !important;
  transform: translate(-4px, 4px) !important;
  float: right;
`;

export const RemoveImage = styled(Cancel)`
  fill: ${primary} !important;
  cursor: pointer !important;
  transform: translateY(4px) !important;
  position: absolute;
  top: 0px;
  right: 0px;
`;
