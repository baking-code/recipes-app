import React from "react";
import { omit } from "lodash";
import styled from "styled-components";
import Popover from '@material-ui/core/Popover';
import { danger, dangerHover, white80 } from "./constants/colours";

const Inner = styled.div`
  background-color: ${danger};
  color: white;
  cursor: pointer;
  height: 68px;
  width: 108px;
  border-radius: 1px;
  line-height: 70px;
  text-align: center;
  font-size: 1em;
  border: 1px solid ${white80};
  &:hover {
    background-color: ${dangerHover};
  }
`;

export default props => {
  const { message, onClickConfirm } = props;
  const popoverProps = omit(props, ["message", "onClickConfirm"]);
  return (
    <Popover {...popoverProps} className="confirm-delete__popover" style={popoverStyle}>
      <Inner onClick={onClickConfirm}>
        {message}
      </Inner>
    </Popover>
  );
};

const popoverStyle = {
  borderRadius: "1px",
  transition: "width 2s"
};
