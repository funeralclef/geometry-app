import React from 'react';
import { Square } from '../geometry/geometry';

interface SquareProps {
  square: Square;
}

const SquareComponent: React.FC<SquareProps> = ({ square }) => {
  const { topLeft, width, color } = square;
  return (
    <rect
      x={topLeft.x}
      y={topLeft.y}
      width={width}
      height={width}
      fill={color}
      stroke="black"
    />
  );
};

export default SquareComponent;