"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    // Implementing methods from the Shape interface
    area() {
        return Math.PI * this.radius * this.radius;
    }
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    // Implementing methods from the Shape interface
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(5);
console.log("Circle Area:", circle.area()); // Circle Area: 78.53981633974483
console.log("Circle Perimeter:", circle.perimeter()); // Circle Perimeter: 31.41592653589793
const rectangle = new Rectangle(10, 20);
console.log("Rectangle Area:", rectangle.area()); // Rectangle Area: 200
console.log("Rectangle Perimeter:", rectangle.perimeter()); // Rectangle Perimeter: 60
