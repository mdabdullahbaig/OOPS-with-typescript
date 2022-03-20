class Person {
  constructor(
    private name: string,
    private age: number,
    private email: string
  ) {}

  greet(): string {
    return "Hello Person";
  }

  // Method OverLoading
  // we can't overload method in Typescript
  // if we want overload in Typescript the we need to explicitly check the type
  // And according to type we can return the value
  add(num1: number | string, num2: number | string): number | string {
    if (typeof num1 === "number" && typeof num2 === "number") {
      return num1 + num2;
    }
    return `${num1} ${num2}`;
  }
}

class Programmer extends Person {
  private isPerson: string = "Programmer";
  constructor(name: string, age: number, email: string) {
    super(name, age, email);
  }

  // Method OverRiding
  greet(): string {
    return "Hello Programmer";
  }

  //Calling Parent greet() method
  greetToParent(): string {
    return super.greet();
  }
}

const person: Person = new Person("Rahul", 24, "rahul@gmail.com");
console.log(person);
console.log(person.greet());

const programmer: Programmer = new Programmer("Monal", 23, "monal@gmail.com");
console.log(programmer);
console.log(programmer.greet());
console.log(programmer.greetToParent());

const programmer1: Person = new Programmer("Saurav", 25, "saurav@gmail.com");
console.log(programmer1.greet());
