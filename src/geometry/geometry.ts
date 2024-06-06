export class Point {
    constructor(public x: number, public y: number) {}
  
    move(dx: number, dy: number): void {
      this.x += dx;
      this.y += dy;
    }
  
    rotate(center: Point, angle: number): void {
      const radians = (angle * Math.PI) / 180;
      const cos = Math.cos(radians);
      const sin = Math.sin(radians);
  
      let x = this.x - center.x;
      let y = this.y - center.y;
  
      const xNew = x * cos - y * sin;
      const yNew = x * sin + y * cos;
  
      this.x = xNew + center.x;
      this.y = yNew + center.y;
    }
  }
  
  export interface Shape {
    move(dx: number, dy: number): void;
    resize(scale: number): void;
    rotate(center: Point, angle: number): void;
    setColor(color: string): void;
  }
  
  export class Rectangle implements Shape {
    public color: string = 'black';
  
    constructor(public topLeft: Point, public width: number, public height: number) {}
  
    move(dx: number, dy: number): void {
      this.topLeft.move(dx, dy);
    }
  
    resize(scale: number): void {
      this.width *= scale;
      this.height *= scale;
    }
  
    rotate(center: Point, angle: number): void {
      this.topLeft.rotate(center, angle);
    }
  
    setColor(color: string): void {
      this.color = color;
    }
  }
  
  export class Square extends Rectangle {
    constructor(topLeft: Point, size: number) {
      super(topLeft, size, size);
    }
  
    resize(scale: number): void {
      this.width *= scale;
      this.height = this.width; // Keep the square's properties
    }
  }
  
  
  export class Rhombus implements Shape {
    public color: string = 'black';
  
    constructor(public center: Point, public diagonal1: number, public diagonal2: number) {}
  
    move(dx: number, dy: number): void {
      this.center.move(dx, dy);
    }
  
    resize(scale: number): void {
      this.diagonal1 *= scale;
      this.diagonal2 *= scale;
    }
  
    rotate(center: Point, angle: number): void {
      this.center.rotate(center, angle);
    }
  
    setColor(color: string): void {
      this.color = color;
    }
  }