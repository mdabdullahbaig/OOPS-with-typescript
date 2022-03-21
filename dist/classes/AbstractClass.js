"use strict";
class AbstractClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    myDescription() {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
}
class Description extends AbstractClass {
    constructor(name, age) {
        super(name, age);
        this.name = name;
        this.age = age;
    }
    yourDescription() {
        return `Your are the one who called me last night.`;
    }
}
const description = new Description("Abdul", 24);
console.log(description.yourDescription());
console.log(description.myDescription());
