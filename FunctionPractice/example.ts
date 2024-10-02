//normal function
function person(name: string,age: Number): string{
    return name+" is "+age+" years old";
}

const temp = person("josh",23);
console.log(temp);

//arrow function
const ar = (): string => {
    return "hello josh";
}

console.log(ar())

//iife
let message: string = "welcome to world" ;
const hello: string = (function(): string {
    return message;
})()
console.log(hello);