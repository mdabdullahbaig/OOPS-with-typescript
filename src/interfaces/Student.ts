interface IStudent {
  firstName: string;
  lastName: string;
  age: number;
  course: string;

  fullName: () => string;
  bioGraphy: () => string;
}

class Student implements IStudent {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public course: string
  ) {}

  fullName(): string {
    return this.firstName + " " + this.lastName;
  }

  bioGraphy(): string {
    return `Full Name: ${this.fullName()}, Age: ${this.age}, Course: ${
      this.course
    }`;
  }

  anotherMethod(): string {
    return "This is comming from anotherMethod";
  }
}

const std: IStudent = new Student("Abdullah", "Baig", 24, "Computer");

const std1 = new Student("Arshad", "Baig", 22, "Commerce");
console.log(std.fullName());
console.log(std.bioGraphy());
console.log(std1.anotherMethod());
