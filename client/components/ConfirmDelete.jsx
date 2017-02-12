import React from "react";
import styled from "styled-components";

import { danger } from "./constants/colours";

export default styled.div`
  background-color: ${danger};
  padding: 12px;
  color: white;
  cursor: pointer;
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,.15);
  &:hover {
    opacity: 0.9;
  }
`;
