abstract class AbstractClass {
  constructor(protected name: string, protected age: number) {}
  abstract yourDescription(): string;

  myDescription(): string {
    return `My name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Description extends AbstractClass {
  constructor(protected name: string, protected age: number) {
    super(name, age);
  }
  yourDescription(): string {
    return `Your are the one who called me last night.`;
  }
}

const description = new Description("Abdul", 24);
console.log(description.yourDescription());
console.log(description.myDescription());
