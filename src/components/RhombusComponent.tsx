import React from 'react';
import { Point, Rhombus } from '../geometry/geometry';

interface RhombusProps {
  rhombus: Rhombus;
}

const RhombusComponent: React.FC<RhombusProps> = ({ rhombus }) => {
  const { center, diagonal1, diagonal2, color } = rhombus;
  const halfD1 = diagonal1 / 2;
  const halfD2 = diagonal2 / 2;
  const points = [
    new Point(center.x, center.y - halfD2),
    new Point(center.x + halfD1, center.y),
    new Point(center.x, center.y + halfD2),
    new Point(center.x - halfD1, center.y),
  ].map(point => `${point.x},${point.y}`).join(' ');

  return (
    <polygon
      points={points}
      fill={color}
      stroke="black"
    />
  );
};

export default RhombusComponent;