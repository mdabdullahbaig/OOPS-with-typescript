"use strict";
class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
        console.log(Calculator.PI);
    }
    static add(num1, num2) {
        return num1 + num2;
    }
    static sub(num1, num2) {
        return num1 - num2;
    }
    static mul(num1, num2) {
        return num1 - num2;
    }
    static div(num1, num2) {
        return num1 / num2;
    }
    findLastAngle() {
        return 180 - this.num1 - this.num2;
    }
    areaOfRectangle() {
        return this.num1 * this.num2;
    }
}
Calculator.PI = 3.14;
const calc = new Calculator(5, 4);
console.log(calc.areaOfRectangle());
console.log(calc.findLastAngle());
const pi = Calculator.PI;
console.log(pi);
const add = Calculator.add(10, 20);
console.log(add);
