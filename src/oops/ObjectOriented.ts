interface Animal {
  name: string;
  age: number;

  walking(): void;
  running(): void;
}

abstract class Pet implements Animal {
  constructor(public name: string, public age: number) {}

  walking(): void {
    console.log(`The ${this.name} of age ${this.age} can walk`);
  }

  running(): void {
    console.log(`The ${this.name} of age ${this.age} can run`);
  }

  abstract bite(): string;
}

class Dog extends Pet {
  constructor(public name: string, public age: number, private color: string) {
    super(name, age);
  }
  bite(): string {
    return `${this.name} of ${this.color} color can bite`;
  }
}

const dog = new Dog("Tommy", 6, "black");
console.log(dog);
dog.walking();
dog.running();
console.log(dog.bite());
