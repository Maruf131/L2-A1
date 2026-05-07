// <-------Problem:1 --------->

const filterEvenNumbers = (number: number[]): number[] => {
  return number.filter((num) => num % 2 === 0);
};

// <-------Problem:2 --------->
const reverseString = (value: string): string => {
  return value.split("").reverse().join("");
};

// <-------Problem:3 --------->
type stringOrNumber = string | number;
const checkType = (value: stringOrNumber): string => {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
};

// <-------Problem:4 --------->
const user = {
  id: 1,
  name: "John Doe",
  age: 21,
};
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

// <-------Problem:5 --------->
interface book {
  title: string;
  author: string;
  publishedYear: number;
}

const books: book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

const toggleReadStatus = (obj: book) => {
  return {
    ...obj,
    isRead: true,
  };
};

// <-------Problem:6 --------->
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
// Subclass
class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student1 = new Student("Alice", 20, "A");

// <-------Problem:7 --------->
const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter((num) => arr2.includes(num));
};
