abstract class Vehicle {
    // Abstract method - no implementation here, must be implemented in derived classes
    abstract startEngine(): void;
  
    // Non-abstract method - can have a default implementation
    public stopEngine(): void {
      console.log("Engine stopped.");
    }
  
    // A concrete method that can be shared across all derived classes
    public drive(): void {
      console.log("Driving the vehicle.");
    }
  }
  
  class Car extends Vehicle {
    // Implementing the abstract method from the parent class
    public startEngine(): void {
      console.log("Car engine started.");
    }
  }
  
  class Bike extends Vehicle {
    // Implementing the abstract method from the parent class
    public startEngine(): void {
      console.log("Bike engine started.");
    }
  }
  
  const myCar = new Car();
  myCar.startEngine(); // "Car engine started."
  myCar.drive();       // "Driving the vehicle."
  myCar.stopEngine();  // "Engine stopped."
  
  const myBike = new Bike();
  myBike.startEngine(); // "Bike engine started."
  myBike.drive();       // "Driving the vehicle."
  myBike.stopEngine();  // "Engine stopped."
  