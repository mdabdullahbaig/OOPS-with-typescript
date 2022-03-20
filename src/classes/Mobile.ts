export class Mobile {
  // Access Modifier && Properties
  private brand: string;
  private color: string;
  private price: number;

  // Constructor
  constructor(brand: string, color: string, price: number) {
    this.brand = brand;
    this.color = color;
    this.price = price;
  }

  // Getter && Setter
  // if you use get and set keywords then you don't need to execute the get and set method
  get getBrand() {
    return this.brand;
  }
  get getColor() {
    return this.color;
  }
  get getPrice() {
    return this.price;
  }

  set setBrand(brand: string) {
    this.brand = brand;
  }
  set setColor(color: string) {
    this.color = color;
  }
  set setPrice(price: number) {
    this.price = price;
  }
}
