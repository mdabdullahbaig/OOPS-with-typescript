class Parent {
  // These are properties and we made properties as private
  // Because we want all the properties encapsulated
  private name: string;
  private age: number;
  private email: string;
  private department: string;

  // Constructor
  constructor(name: string, age: number, email: string, department: string) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.department = department;
  }

  // Getter && Setter
  getName(): string {
    return this.name;
  }
  getAge(): number {
    return this.age;
  }
  getEmail(): string {
    return this.email;
  }
  getDepartment(): string {
    return this.department;
  }

  setName(name: string): void {
    this.name = name;
  }
  setAge(age: number): void {
    this.age = age;
  }
  setEmail(email: string): void {
    this.email = email;
  }
  setDepartment(department: string): void {
    this.department = department;
  }
}

class Child extends Parent {
  private color: string;
  private height: number;

  // Constructor
  constructor(
    name: string,
    age: number,
    email: string,
    department: string,
    color: string,
    height: number
  ) {
    super(name, age, email, department);
    this.color = color;
    this.height = height;
  }

  // Getter && Setter
  getColor(): string {
    return this.color;
  }
  getHeight(): number {
    return this.height;
  }

  setColor(color: string): void {
    this.color = color;
  }
  setHeight(height: number): void {
    this.height = height;
  }
}

// Instatiation
const parentObject = new Parent("Parent", 10, "parent@email.com", "Software");
console.log(parentObject);

const childObject = new Child(
  "Child",
  5,
  "child@email.com",
  "IT",
  "Reddish Black",
  5.6
);
console.log(childObject);
