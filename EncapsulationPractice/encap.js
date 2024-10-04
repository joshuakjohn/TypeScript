"use strict";
class Employee {
    constructor(name, role, salary) {
        this.name = name;
        this.role = role;
        this.salary = salary;
    }
    // Public method to get salary (read access to private property)
    getSalary() {
        return this.salary;
    }
    // Public method to update salary (write access to private property)
    setSalary(newSalary) {
        if (newSalary > 0) {
            this.salary = newSalary;
        }
        else {
            console.log("Invalid salary amount");
        }
    }
    // Protected method - accessible in this class and derived classes
    getRole() {
        return this.role;
    }
}
const emp = new Employee("John Doe", "Developer", 50000);
// Accessing public properties and methods
console.log(emp.name); // John Doe
console.log(emp.getSalary()); // 50000
// Modifying the salary using the setter method
emp.setSalary(55000);
console.log(emp.getSalary()); // 55000
// Trying to access a private property directly will throw an error
// console.log(emp.salary); // Error: Property 'salary' is private and only accessible within class 'Employee'
// Trying to access a protected property directly will also throw an error
// console.log(emp.role); // Error: Property 'role' is protected and only accessible within class 'Employee' and its subclasses
