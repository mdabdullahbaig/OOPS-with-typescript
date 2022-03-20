class Encapsulation {
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

// Instatiation
const encapsulation = new Encapsulation("Encap", 20, "encap@gmail.com", "IT");
console.log(encapsulation);
