export interface Person {
  name: string;
  age: number;

  describe(): string;
}

interface Unisex extends Person {
  gender: string;
  hasWife?: boolean;
}

class Man implements Unisex {
  constructor(
    public name: string,
    public age: number,
    public gender: string,
    public hasWife?: boolean
  ) {}

  describe(): string {
    return "This is comming from Rahul and he is " + this.age + " years old";
  }

  wife(): string {
    return `${this.name} has a wife: ${this.hasWife}`;
  }
}

const rahul = new Man("Rahul", 24, "male");
console.log(rahul);

const santuBetal = new Man("Santu Betal", 28, "male", true);
console.log(santuBetal.wife());
