import React from "react";
import styled from "styled-components";
import Schedule from "@material-ui/icons/Schedule";
import { white } from "../constants/colours";

const TimeIcon = styled(Schedule)`
  height: 24px !important;
  width: 24px !important;
`;

const TimeArea = styled.input`
  display: inline-block;
  background-color: transparent;
  color: ${white} !important;
  border: none;
  font-size: 24px;
  padding-left: 8px;
  outline: none;
  width: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 8px;
  color: ${white} !important;
`;

const Duration = ({ time = 0, disabled, onChange }) => (
  <Wrapper>
    <TimeIcon />
    <TimeArea
      disabled={disabled}
      type="number"
      min="0"
      max="1000"
      step="5"
      defaultValue={time}
      onChange={onChange}
    />
    {" "}(minutes)
  </Wrapper>
);

export default Duration;
