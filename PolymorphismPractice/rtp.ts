class Animal {
    // Method to be overridden
    public makeSound(): void {
      console.log("The animal makes a sound");
    }
  }
  
  class Dog extends Animal {
    // Overriding the base class method
    public makeSound(): void {
      console.log("The dog barks");
    }
  }
  
  class Cat extends Animal {
    // Overriding the base class method
    public makeSound(): void {
      console.log("The cat meows");
    }
  }
  
  function animalSound(animal: Animal) {
    // At runtime, the correct `makeSound` method is called based on the object type
    animal.makeSound();
  }
  
  const dog = new Dog();
  const cat = new Cat();
  
  // These calls are determined at runtime
  animalSound(dog); // The dog barks
  animalSound(cat); // The cat meows
  