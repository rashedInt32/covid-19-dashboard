import React from 'react';
import { string, number } from 'prop-types';
import styled from 'styled-components';

import Loader from './Loader';

const Main = styled.div`
  position: relative;
  flex: 0 0 25%;
  display: flex;
  padding-right: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  padding: 15px 20px;
  text-align: center;
  box-shadow: 0 0 15px 1px rgba(189, 189, 189, 0.1);
  width: 100%;
`;

const Title = styled.h5`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
  padding-bottom: 10px;
`;

const Count = styled.h2`
  font-size: 35px;
  line-height: 40px;
  font-weight: bold;
  padding-bottom: 10px;
  color: ${({ color, theme }) => color || theme.colors.primary};
`;

const PercentText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grey};
`;

const Card = ({ title, value, percent, color }) => {
  const formatedNumber = value ? (
    new Intl.NumberFormat('en-IN', {
      maximumSignificantDigits: 3,
    }).format(value)
  ) : (
    <Loader color={color} size={25} borderWidth={4} />
  );

  return (
    <Main>
      <Wrapper>
        <Title>{title}</Title>
        <Count color={color}>{formatedNumber}</Count>
        <PercentText>{percent}%</PercentText>
      </Wrapper>
    </Main>
  );
};

Card.propTypes = {
  title: string,
  value: number,
  percent: number,
  color: string,
};

export default Card;
