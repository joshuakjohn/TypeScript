class Vehicle {
    public start(): void {
      console.log("Vehicle started");
    }
  }
  
  class Car extends Vehicle {
    public drive(): void {
      console.log("Car is driving");
    }
  }
  
  const car = new Car();
  car.start(); // Inherited from Vehicle
  car.drive(); // Method of Car
  