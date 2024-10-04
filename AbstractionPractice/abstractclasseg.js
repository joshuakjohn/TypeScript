"use strict";
class Vehicle {
    // Non-abstract method - can have a default implementation
    stopEngine() {
        console.log("Engine stopped.");
    }
    // A concrete method that can be shared across all derived classes
    drive() {
        console.log("Driving the vehicle.");
    }
}
class Car extends Vehicle {
    // Implementing the abstract method from the parent class
    startEngine() {
        console.log("Car engine started.");
    }
}
class Bike extends Vehicle {
    // Implementing the abstract method from the parent class
    startEngine() {
        console.log("Bike engine started.");
    }
}
const myCar = new Car();
myCar.startEngine(); // "Car engine started."
myCar.drive(); // "Driving the vehicle."
myCar.stopEngine(); // "Engine stopped."
const myBike = new Bike();
myBike.startEngine(); // "Bike engine started."
myBike.drive(); // "Driving the vehicle."
myBike.stopEngine(); // "Engine stopped."
