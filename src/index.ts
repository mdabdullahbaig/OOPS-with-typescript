import { Department } from "./Department";
import { Employee } from "./Employee";

// Instantiation
const dep = new Department(1, "CSE", "Bangalore");
const emp = new Employee(1, "Abdul", 24, "abdul@gmail.com", false, dep);

console.log(emp);
