"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobile = void 0;
class Mobile {
    // Constructor
    constructor(brand, color, price) {
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
