import React from "react";
import styled from "styled-components";
import Cancel from "material-ui/svg-icons/navigation/cancel";

import { primary } from "../constants/colours";

const CancelButton = styled(Cancel)`
  height: 18px !important;
  width: 18px !important;
  fill: ${primary} !important;
  cursor: pointer !important;
  transform: translateY(4px) !important;
`;

export default CancelButton;
