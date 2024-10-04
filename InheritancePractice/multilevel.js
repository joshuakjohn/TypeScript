"use strict";
class Animal {
    move() {
        console.log("Animal is moving");
    }
}
class Mammal extends Animal {
    feedMilk() {
        console.log("Mammal is feeding milk");
    }
}
class Dog extends Mammal {
    bark() {
        console.log("Dog is barking");
    }
}
const dog = new Dog();
dog.move(); // Inherited from Animal
dog.feedMilk(); // Inherited from Mammal
dog.bark(); // Defined in Dog
