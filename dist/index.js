"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Department_1 = require("./Department");
const Employee_1 = require("./Employee");
// Instantiation
const dep = new Department_1.Department(1, "CSE", "Bangalore");
const emp = new Employee_1.Employee(1, "Abdul", 24, "abdul@gmail.com", false, dep);
console.log(emp);
