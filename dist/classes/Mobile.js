"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobile = void 0;
class Mobile {
    // Access Modifier && Properties
    // private brand: string;
    // private color: string;
    // private price: number;
    // Constructor
    // Shorhand Initializantion
    constructor(brand, color, price) {
        this.brand = brand;
        this.color = color;
        this.price = price;
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
    set setBrand(brand) {
        this.brand = brand;
    }
    set setColor(color) {
        this.color = color;
    }
    set setPrice(price) {
        this.price = price;
    }
}
exports.Mobile = Mobile;
