/*
// Define a tuple with two elements: a string and a number
let person: [string, number];

// Initialize the tuple
person = ["John", 25];

console.log(person);           // Output: ["John", 25]
console.log(person[0]);        // Output: "John"  (string)
console.log(person[1]);        // Output: 25      (number)
*/
/*
let optionalTuple: [string, number?, boolean?];

// You can initialize it with fewer elements
optionalTuple = ["Bob"];
console.log(optionalTuple);    // Output: ["Bob"]

optionalTuple = ["Bob", 30];
console.log(optionalTuple);    // Output: ["Bob", 30]

optionalTuple = ["Bob", 30, false];
console.log(optionalTuple);    // Output: ["Bob", 30, false]
*/
/*
let numbersTuple: [string, ...number[]];

// The first element must be a string, and the rest are numbers
numbersTuple = ["Numbers", 1, 2, 3, 4, 5];
console.log(numbersTuple);     // Output: ["Numbers", 1, 2, 3, 4, 5]
*/

// Function returning a tuple
function getPersonInfo(): [string, number] {
    return ["Jane", 28];
  }
  
  const personInfo = getPersonInfo();
  console.log(personInfo);       // Output: ["Jane", 28]
  