"use strict";
class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    walking() {
        console.log(`The ${this.name} of age ${this.age} can walk`);
    }
    running() {
        console.log(`The ${this.name} of age ${this.age} can run`);
    }
}
class Dog extends Pet {
    constructor(name, age, color) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.color = color;
    }
    bite() {
        return `${this.name} of ${this.color} color can bite`;
    }
}
const dog = new Dog("Tommy", 6, "black");
console.log(dog);
dog.walking();
dog.running();
console.log(dog.bite());
