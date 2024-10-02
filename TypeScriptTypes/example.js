"use strict";
//String
const s = "hello world";
console.log(s);
//s = 2; wrong
//Number
let num = 36;
console.log(num);
//num = "hello"; wrong
//boolean
let b = true;
console.log(b);
//b = 12; wrong
//null & undefined
let u = undefined;
let n = null;
console.log(u); // Output: undefined
console.log(n); // Output: null
//any
let randomValue = 10;
randomValue = "A";
randomValue = true;
console.log(randomValue); // Output: true (could be anything)
//unknown
let value;
value = "Hello"; // OK
value = 123; // OK
value = true; // OK
// TypeScript won't allow you to perform operations on unknown
// The following lines would give errors:
// value.toUpperCase();  // Error: Object is of type 'unknown'
// value.someMethod();   // Error: Object is of type 'unknown'
// Type narrowing or type assertion is required
if (typeof value === "string") {
    value.toUpperCase(); // Now it's safe to use string methods
}
if (typeof value === "number") {
    console.log(value.toFixed(2)); // Safe to use number methods
}
