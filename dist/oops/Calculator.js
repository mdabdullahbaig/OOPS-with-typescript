"use strict";
class BasicCalc {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
        this.result = 0;
    }
    add() {
        console.log("From BasicCalc");
        return (this.result = this.num1 + this.num2);
    }
    sub() {
        return (this.result = this.num1 - this.num2);
    }
    get getNum1() {
        return this.num1;
    }
    get getNum2() {
        return this.num2;
    }
    get getResult() {
        return this.result;
    }
    set setNum1(num1) {
        this.num1 = num1;
    }
    set setNum2(num2) {
        this.num2 = num2;
    }
}
class AdvCalc extends BasicCalc {
    constructor(num1, num2) {
        super(num1, num2);
    }
    //   Method Overriding
    add() {
        console.log("From AdvCalc");
        return (this.result = this.getNum1 + this.getNum2);
    }
    mul() {
        return (this.result = this.getNum1 * this.getNum2);
    }
    div() {
        return (this.result = this.getNum1 / this.getNum2);
    }
}
const basicCalc = new BasicCalc(10, 5);
console.log(basicCalc);
const { getNum1, getNum2 } = basicCalc;
console.log(getNum1, getNum2);
let { setNum1, setNum2 } = basicCalc;
setNum1 = 20;
setNum2 = 10;
console.log(basicCalc);
console.log(basicCalc.add());
console.log(basicCalc.sub());
console.log(basicCalc.getResult);
const advCalc = new AdvCalc(60, 20);
console.log(advCalc);
console.log(advCalc.add());
console.log(advCalc.sub());
console.log(advCalc.mul());
console.log(advCalc.div());
console.log(advCalc.getResult);
