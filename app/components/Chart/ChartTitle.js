import React from 'react';
import { element } from 'prop-types';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  position: relative;
  padding: 0px 20px 15px;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid #f3f3f3;
  margin: 0 -20px 15px;
  display: flex;
  align-items: flex-end;
`;

const Sub = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-weight: normal;
  padding-left: 10px;
  font-size: 12px;
  line-height: 15px;
`;

const ChartTitle = ({ children }) => (
  <TitleWrapper>
    <h4>{children}</h4>
    <Sub>Last 30 days.</Sub>
  </TitleWrapper>
);

ChartTitle.propTypes = {
  children: element,
};

export default ChartTitle;
