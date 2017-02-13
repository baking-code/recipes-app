import React from "react";
import _ from "lodash";
import styled from "styled-components";
import Popover from "material-ui/Popover";

import { danger } from "./constants/colours";

const Inner = styled.div`
  background-color: ${danger};
  padding: 12px;
  color: white;
  cursor: pointer;
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,.15);
  border-radius: 30px;
  &:hover {
    opacity: 0.9;
  }
`;

export default (props) => {
  const { message, onClickConfirm } = props;
  const popoverProps = _.omit(props, ["message", "onClickConfirm"]);
  return (
    <Popover {...popoverProps} className="confirm-delete__popover" style={popoverStyle}>
      <Inner onClick={onClickConfirm}>
        {message}
      </Inner>
    </Popover>
  );
};

const popoverStyle = {
  borderRadius: "30px",
  transition: "width 2s"
};
