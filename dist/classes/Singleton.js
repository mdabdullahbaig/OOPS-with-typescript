"use strict";
class Singleton {
    constructor(name) {
        this.name = name;
    }
    static getInstance(name) {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(name);
        }
        return Singleton.instance;
    }
}
const instance1 = Singleton.getInstance("Abdul");
const instance2 = Singleton.getInstance("Tahir");
console.log(instance1 === instance2);
