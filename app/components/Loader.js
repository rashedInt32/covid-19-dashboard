import React from 'react';
import styled, { keyframes } from 'styled-components';
import { string, number } from 'prop-types';

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
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
    border: ${({ borderWidth }) => `${borderWidth}px` || `8px`} solid
      ${({ color }) => color || '#000'};
    border-radius: 50%;
    animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ color }) => color || '#000'} transparent transparent
      transparent;
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


const Loader = ({ color, size, borderWidth }) => (
  <Main color={color} size={size} borderWidth={borderWidth}>
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
};

export default Loader;
