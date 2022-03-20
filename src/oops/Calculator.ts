class BasicCalc {
  private num1: number;
  private num2: number;
  protected result: number;

  constructor(num1: number, num2: number) {
    this.num1 = num1;
    this.num2 = num2;
    this.result = 0;
  }

  add(): number {
    console.log("From BasicCalc");
    return (this.result = this.num1 + this.num2);
  }

  sub(): number {
    return (this.result = this.num1 - this.num2);
  }

  get getNum1(): number {
    return this.num1;
  }
  get getNum2(): number {
    return this.num2;
  }

  get getResult(): number {
    return this.result;
  }

  set setNum1(num1: number) {
    this.num1 = num1;
  }

  set setNum2(num2: number) {
    this.num2 = num2;
  }
}

class AdvCalc extends BasicCalc {
  constructor(num1: number, num2: number) {
    super(num1, num2);
  }

  //   Method Overriding
  add(): number {
    console.log("From AdvCalc");
    return (this.result = this.getNum1 + this.getNum2);
  }

  mul(): number {
    return (this.result = this.getNum1 * this.getNum2);
  }

  div(): number {
    return (this.result = this.getNum1 / this.getNum2);
  }
}

const basicCalc: BasicCalc = new BasicCalc(10, 5);
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

const advCalc: AdvCalc = new AdvCalc(60, 20);

console.log(advCalc);

console.log(advCalc.add());
console.log(advCalc.sub());
console.log(advCalc.mul());
console.log(advCalc.div());
console.log(advCalc.getResult);
