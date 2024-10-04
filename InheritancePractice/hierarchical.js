"use strict";
// Base class
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
// Derived class: Manager
class Manager extends Employee {
    manageTeam() {
        console.log(`${this.name} is managing the team.`);
    }
}
// Derived class: Developer
class Developer extends Employee {
    writeCode() {
        console.log(`${this.name} is writing code.`);
    }
}
// Derived class: Designer
class Designer extends Employee {
    createDesigns() {
        console.log(`${this.name} is creating designs.`);
    }
}
// Creating objects for each specialized class
const manager = new Manager("Alice", 35);
const developer = new Developer("Bob", 28);
const designer = new Designer("Eve", 30);
// Accessing common method inherited from Employee
manager.getDetails(); // Output: Name: Alice, Age: 35
developer.getDetails(); // Output: Name: Bob, Age: 28
designer.getDetails(); // Output: Name: Eve, Age: 30
// Accessing specialized methods
manager.manageTeam(); // Output: Alice is managing the team.
developer.writeCode(); // Output: Bob is writing code.
designer.createDesigns(); // Output: Eve is creating designs.
