import React from 'react';
import { number } from 'prop-types';

const CustomBar = ({ x, y, width, height }) => (
  <>
    <linearGradient id="gradient" gradientTransform="rotate(90)">
      <stop offset="10%" stopColor="#f9345e" />
      <stop offset="90%" stopColor="#f9345e82" />
    </linearGradient>
    <rect
      rx="4"
      height={height}
      width={width}
      y={y - 1}
      x={x}
      strokeWidth="0"
      stroke="#000"
      fill="url(#gradient)"
    />
  </>
);

CustomBar.propTypes = {
  x: number,
  y: number,
  height: number,
  width: number,
};

export default CustomBar;
