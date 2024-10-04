interface CanFly {
    fly(): void;
  }
  
  interface CanFloat {
    float(): void;
  }
  
  class Airplane implements CanFly {
    public fly(): void {
      console.log("Airplane is flying");
    }
  }
  
  class Boat implements CanFloat {
    public float(): void {
      console.log("Boat is floating");
    }
  }
  
  class Seaplane implements CanFly, CanFloat {
    public fly(): void {
      console.log("Seaplane is flying");
    }
  
    public float(): void {
      console.log("Seaplane is floating");
    }
  }
  
  const seaplane = new Seaplane();
  seaplane.fly();   // Implemented from CanFly
  seaplane.float(); // Implemented from CanFloat
  