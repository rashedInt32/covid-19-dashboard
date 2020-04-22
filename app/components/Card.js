import React from 'react';
import { string, number } from 'prop-types';
import styled from 'styled-components';
import Grid from './Grid';
import Loader from './Loader';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ color }) => color};
  border-radius: ${({ theme }) => theme.borderRadiusBase};
  padding: 15px 20px;
  text-align: center;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  width: 100%;
  min-height: 110px;
  @media (min-width: 576px) {
    min-height: 128px;
    background: ${({ theme }) => theme.colors.white};
  }
`;

const Title = styled.h5`
  font-size: 14px;
  color: #f9f9f9;
  padding-bottom: 2px;
  font-weight: bold;
  @media (min-width: 576px) {
    color: ${({ theme }) => theme.colors.secondary};
    padding-bottom: 10px;
    font-size: 18px;
  }
`;

const Count = styled.h2`
  font-size: 20px;
  line-height: 40px;
  font-weight: bold;
  padding-bottom: 5px;
  color: ${({ theme }) => theme.colors.white};
  @media (min-width: 576px) {
    color: ${({ color, theme }) => color || theme.colors.primary};
    font-size: 35px;
    padding-bottom: 10px;
  }

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
  @media (max-width: 576px) {
    color: #f9f9f9;
    &.increase:before {
      border-bottom: 6px solid ${({ theme }) => theme.colors.white};
    }
    &.decrease:before {
      border-top: 6px solid ${({ theme }) => theme.colors.white};
    }
  }
`;

// eslint-disable-next-line react/prop-types
const Card = ({ title, value, percent, color }) => {
  const formatedNumber = value ? (
    new Intl.NumberFormat('en-IN').format(value)
  ) : (
    <Loader card color={color} size={25} borderWidth={4} />
  );

  const isPositive = percent > 0;

  return (
    <Grid className="lg-3">
      <Wrapper color={color}>
        <Title>{title}</Title>
        <Count color={color}>{value !== 0 ? formatedNumber : 0}</Count>
        <PercentText className={isPositive ? 'increase' : 'decrease'}>
          {percent} %
        </PercentText>
      </Wrapper>
    </Grid>
  );
};

Card.propTypes = {
  title: string,
  value: number,
  color: string,
};

export default Card;
