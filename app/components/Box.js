import React from 'react';
import { element, string } from 'prop-types';
import styled from 'styled-components';

const BoxContainer = styled.div`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
  padding: 15px 20px 20px;
  width: 100%;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  margin: 16px 0 50px;
  @media (max-width: 576px) {
    display: none;
  }
`;

const Title = styled.h4`
  position: relative;
  padding: 0px 20px 15px;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid #f3f3f3;
  margin: 0 -20px 15px;
`;

const Box = ({ title, children }) => (
  <BoxContainer>
    {title && <Title>{title}</Title>}
    {children}
  </BoxContainer>
);

Box.propTypes = {
  title: string,
  children: element,
};

export default Box;
