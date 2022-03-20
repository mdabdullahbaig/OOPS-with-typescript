"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    //Construtor
    constructor(id, name, age, email, isHead, department) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
        this.isHead = isHead;
        this.department = department;
    }
}
exports.Employee = Employee;
