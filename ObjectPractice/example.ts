/*
const person: {name:string, age:number} = {
    name: "josh",
    age: 23
}

//Type inference
const car = {
    type: "Toyota",
  };
  car.type = "Ford"; // no error
  //car.type = 2; // Error: Type 'number' is not assignable to type 'string'.
*/

  const car: { type: string, mileage?: number } = { // no error
    type: "Toyota"
  };
  car.mileage = 2000;