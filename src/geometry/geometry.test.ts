import { Point, Rectangle, Square, Rhombus } from './geometry';

describe('Point', () => {
  it('should move by the given offset', () => {
    const point = new Point(5, 5);
    point.move(3, 4);
    expect(point.x).toBe(8);
    expect(point.y).toBe(9);
  });

  it('should rotate around the origin by 90 degrees', () => {
    const point = new Point(0, 1);
    point.rotate(new Point(0, 0), 90);
    expect(point.x).toBeCloseTo(-1);
    expect(point.y).toBeCloseTo(0);
  });
});

describe('Rectangle', () => {
    it('should initialize correctly', () => {
      const rect = new Rectangle(new Point(0, 0), 10, 5);
      expect(rect.topLeft.x).toBe(0);
      expect(rect.topLeft.y).toBe(0);
      expect(rect.width).toBe(10);
      expect(rect.height).toBe(5);
    });
  
    it('should move correctly', () => {
      const rect = new Rectangle(new Point(1, 1), 10, 5);
      rect.move(2, 3);
      expect(rect.topLeft.x).toBe(3);
      expect(rect.topLeft.y).toBe(4);
    });
  
    it('should resize correctly', () => {
      const rect = new Rectangle(new Point(0, 0), 10, 5);
      rect.resize(2);
      expect(rect.width).toBe(20);
      expect(rect.height).toBe(10);
    });
  
    it('should rotate around the origin', () => {
      const rect = new Rectangle(new Point(1, 1), 2, 2);
      rect.rotate(new Point(0, 0), 90);
      expect(rect.topLeft.x).toBeCloseTo(-1);
      expect(rect.topLeft.y).toBeCloseTo(1);
    });
  
    it('should change color', () => {
      const rect = new Rectangle(new Point(0, 0), 10, 5);
      rect.setColor('red');
      expect(rect.color).toBe('red');
    });
  });

  describe('Square', () => {
    it('should initialize correctly', () => {
      const square = new Square(new Point(0, 0), 5);
      expect(square.topLeft.x).toBe(0);
      expect(square.topLeft.y).toBe(0);
      expect(square.width).toBe(5);
      expect(square.height).toBe(5);
    });
  
    it('should move correctly', () => {
      const square = new Square(new Point(1, 1), 5);
      square.move(2, 3);
      expect(square.topLeft.x).toBe(3);
      expect(square.topLeft.y).toBe(4);
    });
  
    it('should resize correctly', () => {
      const square = new Square(new Point(0, 0), 5);
      square.resize(3);
      expect(square.width).toBe(15);
      expect(square.height).toBe(15);
    });
  
    it('should rotate around the origin', () => {
      const square = new Square(new Point(1, 1), 2);
      square.rotate(new Point(0, 0), 90);
      expect(square.topLeft.x).toBeCloseTo(-1);
      expect(square.topLeft.y).toBeCloseTo(1);
    });
  
    it('should change color', () => {
      const square = new Square(new Point(0, 0), 5);
      square.setColor('blue');
      expect(square.color).toBe('blue');
    });
  });

  describe('Rhombus', () => {
    it('should initialize correctly', () => {
      const rhombus = new Rhombus(new Point(0, 0), 8, 10);
      expect(rhombus.center.x).toBe(0);
      expect(rhombus.center.y).toBe(0);
      expect(rhombus.diagonal1).toBe(8);
      expect(rhombus.diagonal2).toBe(10);
    });
  
    it('should move correctly', () => {
      const rhombus = new Rhombus(new Point(1, 1), 8, 10);
      rhombus.move(3, 4);
      expect(rhombus.center.x).toBe(4);
      expect(rhombus.center.y).toBe(5);
    });
  
    it('should resize correctly', () => {
      const rhombus = new Rhombus(new Point(0, 0), 8, 10);
      rhombus.resize(1.5);
      expect(rhombus.diagonal1).toBe(12);
      expect(rhombus.diagonal2).toBe(15);
    });
  
    it('should rotate around the origin', () => {
      const rhombus = new Rhombus(new Point(2, 2), 8, 10);
      rhombus.rotate(new Point(0, 0), 90);
      expect(rhombus.center.x).toBeCloseTo(-2);
      expect(rhombus.center.y).toBeCloseTo(2);
    });
  
    it('should change color', () => {
      const rhombus = new Rhombus(new Point(0, 0), 8, 10);
      rhombus.setColor('green');
      expect(rhombus.color).toBe('green');
    });
  });