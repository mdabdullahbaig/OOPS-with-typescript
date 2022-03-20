import { Department } from "./Department";

export class Employee {
  //Properties
  id: number;
  name: string;
  age: number;
  email: string;
  isHead: boolean;
  department: Department;

  //Construtor
  constructor(
    id: number,
    name: string,
    age: number,
    email: string,
    isHead: boolean,
    department: Department
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
    this.isHead = isHead;
    this.department = department;
  }

  //Methods
  // get id() {
  //   return this.id
  // }
}
