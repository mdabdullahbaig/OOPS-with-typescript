"use strict";
// Acheiving Abstraction using abstract class
class Saurav {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    taking() {
        return "He can talk also.";
    }
}
class SonOfSaurav extends Saurav {
    constructor(name, age) {
        super(name, age);
        this.name = name;
        this.age = age;
    }
    runnig() {
        return "Saurav's son can run.";
    }
    walking() {
        return "Saurav's son can walk";
    }
}
const saurav = new SonOfSaurav("Gaurav", 8);
console.log(saurav.runnig());
console.log(saurav.walking());
console.log(saurav.taking());
class SonOfMonal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    running() {
        return "Son of Monal is " + this.name + " and he can run.";
    }
    walking() {
        return ("Son of Monal is " +
            this.name +
            " and he is " +
            this.age +
            " years old" +
            " also he can run.");
    }
    taking() {
        return "Son of Monal can talk.";
    }
}
const monal = new SonOfMonal("Raju", 4);
console.log(monal.running());
console.log(monal.walking());
console.log(monal.taking());
