import React from 'react';
import styled, { keyframes } from 'styled-components';
import { string, number, bool } from 'prop-types';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Main = styled.div`
  display: inline-block;
  position: relative;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  &.center {
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
    border-width: ${({ borderWidth }) => `${borderWidth}px` || `8px`};
    border-style: solid;
    border-radius: 50%;
    animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ color, theme }) => color || theme.colors.primary}
      transparent transparent transparent;

    @media (max-width: 576px) {
      border-color: ${({ card, color }) => (card ? '#fff' : color)} transparent
        transparent transparent;
    }
    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;


const Loader = ({ color, size, borderWidth, card, className }) => (
  <Main color={color} className={className} card={card} size={size} borderWidth={borderWidth}>
    <div />
    <div />
    <div />
    <div />
  </Main>
);

Loader.propTypes = {
  color: string,
  size: number,
  borderWidth: number,
  card: bool,
  className: string,
};

export default Loader;
