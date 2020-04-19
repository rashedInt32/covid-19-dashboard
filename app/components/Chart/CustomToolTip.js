import React from 'react';
import { bool, array, string } from 'prop-types';
import styled from 'styled-components';

const ToolTipWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 15px;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  p {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    padding-bottom: 5px;

    &.cases {
      color: ${({ color }) => color};
    }
    span {
      color: ${({ theme }) => theme.colors.secondary};
      padding-right: 4px;
    }
  }
`;

const CustomTooltip = ({ active, payload, color, name }) => {
  if (active) {
    return (
      <ToolTipWrapper color={color}>
        <p className="label date">
          <span>Date: </span>
          {payload[0].payload.name}
        </p>
        <p className="label cases">
          <span>{name}: </span>
          {payload[0].value}
        </p>
      </ToolTipWrapper>
    );
  }

  return null;
};

CustomTooltip.propTypes = {
  active: bool,
  payload: array,
  color: string,
  name: string,
};

export default CustomTooltip;
