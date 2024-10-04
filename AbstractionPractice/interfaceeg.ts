interface Shape {
    // Abstract-like method declarations
    area(): number;
    perimeter(): number;
  }
  
  class Circle implements Shape {
    constructor(private radius: number) {}
  
    // Implementing methods from the Shape interface
    public area(): number {
      return Math.PI * this.radius * this.radius;
    }
  
    public perimeter(): number {
      return 2 * Math.PI * this.radius;
    }
  }
  
  class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}
  
    // Implementing methods from the Shape interface
    public area(): number {
      return this.width * this.height;
    }
  
    public perimeter(): number {
      return 2 * (this.width + this.height);
    }
  }
  
  const circle = new Circle(5);
  console.log("Circle Area:", circle.area());           // Circle Area: 78.53981633974483
  console.log("Circle Perimeter:", circle.perimeter()); // Circle Perimeter: 31.41592653589793
  
  const rectangle = new Rectangle(10, 20);
  console.log("Rectangle Area:", rectangle.area());           // Rectangle Area: 200
  console.log("Rectangle Perimeter:", rectangle.perimeter()); // Rectangle Perimeter: 60
  