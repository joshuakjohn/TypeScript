/*
function identity<T>(arg: T): T {
    return arg;
  }
  
  const num = identity<number>(42);  // Works with number
  const str = identity<string>("Hello");  // Works with string
  */
 /*
  class Box<T> {
    content: T;
  
    constructor(content: T) {
      this.content = content;
    }
  
    getContent(): T {
      return this.content;
    }
  }
  
  const numberBox = new Box<number>(123);
  const stringBox = new Box<string>("TypeScript");
  
  console.log(numberBox.getContent());  // 123
  console.log(stringBox.getContent());  // "TypeScript"
  */
  interface Pair<T, U> {
    first: T;
    second: U;
  }
  
  const pair: Pair<number, string> = {
    first: 1,
    second: "one",
  };
  