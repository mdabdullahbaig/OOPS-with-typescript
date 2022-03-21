"use strict";
class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    greet() {
        return "Hello Person";
    }
    // Method OverLoading
    // we can't overload method in Typescript
    // if we want overload in Typescript the we need to explicitly check the type
    // And according to type we can return the value
    add(num1, num2) {
        if (typeof num1 === "number" && typeof num2 === "number") {
            return num1 + num2;
        }
        return `${num1} ${num2}`;
    }
}
class Programmer extends Person {
    constructor(name, age, email) {
        super(name, age, email);
        this.isPerson = "Programmer";
    }
    // Method OverRiding
    greet() {
        return "Hello Programmer";
    }
    //Calling Parent greet() method
    greetToParent() {
        return super.greet();
    }
}
const person = new Person("Rahul", 24, "rahul@gmail.com");
console.log(person);
console.log(person.greet());
const programmer = new Programmer("Monal", 23, "monal@gmail.com");
console.log(programmer);
console.log(programmer.greet());
console.log(programmer.greetToParent());
const programmer1 = new Programmer("Saurav", 25, "saurav@gmail.com");
console.log(programmer1.greet());
