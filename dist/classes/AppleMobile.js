"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppleMobile = void 0;
const Mobile_1 = require("./Mobile");
class AppleMobile extends Mobile_1.Mobile {
    constructor(brand, color, price, os, model) {
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
    set setOs(os) {
        this.os = os;
    }
    set setModel(model) {
        this.model = model;
    }
}
exports.AppleMobile = AppleMobile;
