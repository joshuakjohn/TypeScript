class Animal {
    public move(): void {
      console.log("Animal is moving");
    }
  }
  
  class Mammal extends Animal {
    public feedMilk(): void {
      console.log("Mammal is feeding milk");
    }
  }
  
  class Dog extends Mammal {
    public bark(): void {
      console.log("Dog is barking");
    }
  }
  
  const dog = new Dog();
  dog.move();      // Inherited from Animal
  dog.feedMilk();  // Inherited from Mammal
  dog.bark();      // Defined in Dog
  