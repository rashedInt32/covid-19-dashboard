import React from 'react';
import { string, number } from 'prop-types';
import styled from 'styled-components';

import Loader from './Loader';

const Main = styled.div`
  position: relative;
  display: flex;
  padding-right: 20px;
  min-width: 25%;
  margin-bottom: 20px;

  @media (max-width: 992px) {
    min-width: 25%;
  }
  @media (max-width: 768px) {
    min-width: 50%;
  }
  @media (max-width: 576px) {
    min-width: 100%;
  }

`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  padding: 15px 20px;
  text-align: center;
  box-shadow: 0 0 15px 3px rgba(189, 189, 189, 0.1);
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
  position: relative;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  &:before {
    content: '';
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    margin-left: 10px;
  }
  &.increase {
    &:before {
      border-top: 6px solid transparent;
      border-bottom: 6px solid ${({ theme }) => theme.colors.danger};
      margin-top: -6px;
    }
  }
  &.decrease {
    &:before {
      border-top: 6px solid ${({ theme }) => theme.colors.success};
      border-bottom: 6px solid transparent;
      margin-top: 6px;
    }
  }
`;

// eslint-disable-next-line react/prop-types
const Card = ({ title, value, percent, color }) => {
  const formatedNumber = value ? (
    new Intl.NumberFormat('en-IN').format(value)
  ) : (
    <Loader color={color} size={25} borderWidth={4} />
  );

  const isPositive = percent > 0;

  return (
    <Main>
      <Wrapper>
        <Title>{title}</Title>
        <Count color={color}>{formatedNumber}</Count>
        <PercentText className={isPositive ? 'increase' : 'decrease'}>
          {percent} %
        </PercentText>
      </Wrapper>
    </Main>
  );
};

Card.propTypes = {
  title: string,
  value: number,
  color: string,
};

export default Card;
