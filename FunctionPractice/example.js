"use strict";
//normal function
function person(name, age) {
    return name + " is " + age + " years old";
}
const temp = person("josh", 23);
console.log(temp);
//arrow function
const ar = () => {
    return "hello josh";
};
console.log(ar());
//iife
let message = "welcome to world";
const hello = (function () {
    return message;
})();
console.log(hello);
