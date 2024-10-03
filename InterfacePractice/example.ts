interface Person {
    name: string;
    age: number;
    email?: string;  // Optional property
  }
  
  const person1: Person = {
    name: "John",
    age: 30,
    email: "john@example.com",
  };
  
  const person2: Person = {
    name: "Jane",
    age: 25,
    // email is optional, so it's not provided here
  };
  