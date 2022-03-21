"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Man {
    constructor(name, age, gender, hasWife) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.hasWife = hasWife;
    }
    describe() {
        return "This is comming from Rahul and he is " + this.age + " years old";
    }
    wife() {
        return `${this.name} has a wife: ${this.hasWife}`;
    }
}
const rahul = new Man("Rahul", 24, "male");
console.log(rahul);
const santuBetal = new Man("Santu Betal", 28, "male", true);
console.log(santuBetal.wife());
