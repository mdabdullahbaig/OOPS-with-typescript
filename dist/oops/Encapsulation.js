"use strict";
class Encapsulation {
    // Constructor
    constructor(name, age, email, department) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.department = department;
    }
    // Getter && Setter
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getEmail() {
        return this.email;
    }
    getDepartment() {
        return this.department;
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
    setEmail(email) {
        this.email = email;
    }
    setDepartment(department) {
        this.department = department;
    }
}
// Instatiation
const encapsulation = new Encapsulation("Encap", 20, "encap@gmail.com", "IT");
console.log(encapsulation);
