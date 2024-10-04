class Calculator {
    // Overloaded signatures
    add(a: number, b: number): number;
    add(a: string, b: string): string;
  
    // Single implementation that handles both types
    add(a: any, b: any): any {
      if (typeof a === "number" && typeof b === "number") {
        return a + b;
      } else if (typeof a === "string" && typeof b === "string") {
        return a + b;
      }
      throw new Error("Invalid arguments");
    }
  }
  
  const calculator = new Calculator();
  
  // Compile-time selection of method signatures based on the input types
  console.log(calculator.add(5, 10));       // 15 (number + number)
  console.log(calculator.add("Hello, ", "World!")); // "Hello, World!" (string + string)
  
  // If you try passing incompatible types, you'll get a compile-time error
  // console.log(calculator.add(5, "World!"));  // Error: No overload matches this call
  