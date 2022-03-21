class Calculator {
  static PI = 3.14;

  constructor(private num1: number, private num2: number) {
    console.log(Calculator.PI);
  }

  static add(num1: number, num2: number) {
    return num1 + num2;
  }

  static sub(num1: number, num2: number) {
    return num1 - num2;
  }

  static mul(num1: number, num2: number) {
    return num1 - num2;
  }

  static div(num1: number, num2: number) {
    return num1 / num2;
  }

  findLastAngle(): number {
    return 180 - this.num1 - this.num2;
  }

  areaOfRectangle(): number {
    return this.num1 * this.num2;
  }
}

const calc = new Calculator(5, 4);
console.log(calc.areaOfRectangle());
console.log(calc.findLastAngle());

const pi = Calculator.PI;
console.log(pi);
const add = Calculator.add(10, 20);
console.log(add);
