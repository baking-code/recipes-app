import React from "react";
import styled from "styled-components";
import Schedule from "material-ui/svg-icons/action/schedule";


const TimeIcon = styled(Schedule)`
  transform: translateY(6px);
  height: 28px !important;
  width: 28px !important;
`;

const TimeArea = styled.input`
  display: inline-block;
  background-color: transparent;
  color: black !important;
  border: none;
  font-size: 24px;
  padding: 4px 0px 0px 0px;
  outline: none;
`;

const Wrapper = styled.div`
  display: inline-flex;
  position: relative;
  bottom: 6px;
`;

const Duration = ({ time, disabled, onChange }) => (
  <Wrapper>
    <TimeIcon />
    <TimeArea disabled={disabled} type="number" min="0" max="1000" step="10" defaultValue={time} onChange={onChange}/>
  </Wrapper>
);

export default Duration;
