import React from 'react';
import { bool, array } from 'prop-types';
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
      color: ${({ theme }) => theme.colors.danger};
    }
    span {
      color: ${({ theme }) => theme.colors.secondary};
      padding-right: 4px;
    }
  }
`;

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <ToolTipWrapper>
        <p className="label date">
          <span>Date: </span>
          {payload[0].payload.name}
        </p>
        <p className="label cases">
          <span>Cases: </span>
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
};

export default CustomTooltip;
