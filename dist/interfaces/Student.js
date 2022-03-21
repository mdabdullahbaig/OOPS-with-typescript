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
}
const std = new Student("Abdullah", "Baig", 24, "Computer");
console.log(std.fullName());
console.log(std.bioGraphy());
