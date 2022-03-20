import { Mobile } from "./Mobile";

export class AppleMobile extends Mobile {
  private os: string;
  private model: string;

  constructor(
    brand: string,
    color: string,
    price: number,
    os: string,
    model: string
  ) {
    super(brand, color, price);
    this.os = os;
    this.model = model;
  }

  get getOs() {
    return this.os;
  }
  get getModel() {
    return this.model;
  }

  set setOs(os: string) {
    this.os = os;
  }
  set setModel(model: string) {
    this.model = model;
  }
}
