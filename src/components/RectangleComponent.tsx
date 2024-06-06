import React from 'react';
import { Rectangle } from '../geometry/geometry';

interface RectangleProps {
  rectangle: Rectangle;
}

const RectangleComponent: React.FC<RectangleProps> = ({ rectangle }) => {
  const { topLeft, width, height, color } = rectangle;
  return (
    <rect
      x={topLeft.x}
      y={topLeft.y}
      width={width}
      height={height}
      fill={color}
      stroke="black"
    />
  );
};

export default RectangleComponent;