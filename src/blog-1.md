# Understanding the Four Pillars of OOP in TypeScript.

Object-Oriented Programming (OOP) is one of the most widely used programming paradigms in software development. But is also one of the most misunderstood. How these features naturally give rise to the four foundational principles: inheritance, polymorphism, encapsulation, and abstraction.

Explain Four pillar of OOP:

## 1.Inheritance:

Inheritance is a mechanism that allows a class to derive characteristics from another class. When a class B inherits from a class A, it means that B automatically acquires the attributes and methods of A without needing to redefine them.

You can visualize this relationship as a parent-child structure, where A is the superclass (base/parent class) and B is the subclass (derived/child class). A subclass can use inherited resources, add new behaviors, or override superclass methods to address specific needs.

```ts
class Animal {
  makeSound(): string {
    return "Animal makes a sound.........";
  }
}

class Dog extends Animal {
  bark(): string {
    return "Dog make sound gheu gheu ........";
  }
}

const dog = new Dog();

console.log(dog.makeSound());
console.log(dog.bark());
```

In this example:

- `Animal` is the superclass (parent class)
- `Dog` is the subclass (child class)

## 2.Polymorphism:

Polymorphism is a concept that often creates confusion in Object-Oriented Programming. But in practice, it is merely a natural consequence of using interfaces and inheritance.

The term polymorphism originates from Greek and means "many forms" (poly = many, morphos = forms). This concept allows objects from different classes to respond to the same method call but with distinct implementations, making code more flexible and reusable.

To clarify this concept, let's consider a practical example. Suppose you have a function named sendMoney, responsible for processing a financial transaction, transferring a certain amount from account A to account B. The only requirement is that both accounts follow a common contract, ensuring the methods withdraw and deposit are available.

```ts
class Person {
  getSleep() {
    console.log(`I am a Normal Happy Person.I sleep for 8 hours`);
  }
}

class Student extends Person {
  getSleep() {
    console.log(`I am a student. I sleep  7 hours`);
  }
}

class NextLevelDeveloper extends Person {
  getSleep() {
    console.log(`I am a Next Level developer . I sleep for 6 hours`);
  }
}

const getSleepingHours = (param: Person) => {
  param.getSleep();
};

const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();

getSleepingHours(person3);
```

## 3.Encapsulation:

Encapsulation is one of the fundamental principles of OOP, but its concept can be applied to any programming paradigm. It involves hiding the internal implementation details of a module, class, function, or any other software component, exposing only what is necessary for external use. This improves code security, maintainability, and modularity by preventing unauthorized access and ensuring controlled interactions.

```ts
class BankAccount {
  public readonly userId: number;
  public userName: string;
  private _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  addBalance(balance: number) {
    this._userBalance = this._userBalance + balance;
  }
}

const marufBankAccount = new BankAccount(111, "maruf", 20);

marufBankAccount.addBalance(100);
marufBankAccount.addBalance(50);

console.log(marufBankAccount);
```

## 4.Abstraction:

In TypeScript, an interface is a powerful way to define the shape of an object, specifying the properties and methods it must have. Normally, interfaces extend other interfaces. However, TypeScript also allows an interface to extend a class.

Abstract keyword is used for both the class and its abstract methods.
The subclass must implement all abstract methods otherwise, it will cause an error.
Now let's understand this with the help of example:

```ts
abstract class Animal {
  abstract makeSound(): void;

  move(): void {
    console.log("The animal is moving.");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meow!");
  }
}

const dog = new Dog();
dog.makeSound();
dog.move();

const cat = new Cat();
cat.makeSound();
```

`Conclusion`
The four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help break a large TypeScript project into smaller, reusable, and well-structured parts. Inheritance reduces code duplication, polymorphism makes code flexible, abstraction hides unnecessary complexity, and encapsulation protects data from unwanted changes. Together, they make code easier to manage, scale, debug, and maintain in large applications.
