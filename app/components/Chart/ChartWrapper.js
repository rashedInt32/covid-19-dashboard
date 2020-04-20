import React from 'react';
import styled from 'styled-components';
import { string, element, array } from 'prop-types';
import _ from 'lodash';

import ChartTitle from './ChartTitle';
import Loader from '../Loader';

const ChartContainer = styled.div`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
  padding: 20px 20px 50px;
  width: 100%;
  height: 250px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.colors.shadow};
`;

const LoaderContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
`;

const ChartWrapper = ({ title, loaderColor, data, children }) => (
  <ChartContainer>
    <ChartTitle>{title}</ChartTitle>
    {!_.isEmpty(data) ? (
      children
    ) : (
      <LoaderContent>
        <Loader size={30} color={loaderColor} borderWidth={4} />
      </LoaderContent>
    )}
  </ChartContainer>
);

ChartWrapper.propTypes = {
  title: string,
  loaderColor: string,
  data: array,
  children: element,
};

export default ChartWrapper;
