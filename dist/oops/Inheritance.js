"use strict";
class Parent {
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
class Child extends Parent {
    // Constructor
    constructor(name, age, email, department, color, height) {
        super(name, age, email, department);
        this.color = color;
        this.height = height;
    }
    // Getter && Setter
    getColor() {
        return this.color;
    }
    getHeight() {
        return this.height;
    }
    setColor(color) {
        this.color = color;
    }
    setHeight(height) {
        this.height = height;
    }
}
// Instatiation
const parentObject = new Parent("Parent", 10, "parent@email.com", "Software");
console.log(parentObject);
const childObject = new Child("Child", 5, "child@email.com", "IT", "Reddish Black", 5.6);
console.log(childObject);
