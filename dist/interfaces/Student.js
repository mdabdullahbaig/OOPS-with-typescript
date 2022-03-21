"use strict";
class Student {
    constructor(firstName, lastName, age, course) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.course = course;
    }
    fullName() {
        return this.firstName + " " + this.lastName;
    }
    bioGraphy() {
        return `Full Name: ${this.fullName()}, Age: ${this.age}, Course: ${this.course}`;
    }
    anotherMethod() {
        return "This is comming from anotherMethod";
    }
}
const std = new Student("Abdullah", "Baig", 24, "Computer");
const std1 = new Student("Arshad", "Baig", 22, "Commerce");
console.log(std.fullName());
console.log(std.bioGraphy());
console.log(std1.anotherMethod());
