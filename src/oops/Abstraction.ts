// Acheiving Abstraction using abstract class
abstract class Saurav {
  constructor(public name: string, public age: number) {}
  abstract runnig(): string;
  abstract walking(): string;

  taking(): string {
    return "He can talk also.";
  }
}

class SonOfSaurav extends Saurav {
  constructor(public name: string, public age: number) {
    super(name, age);
  }
  runnig(): string {
    return "Saurav's son can run.";
  }

  walking(): string {
    return "Saurav's son can walk";
  }
}

const saurav = new SonOfSaurav("Gaurav", 8);
console.log(saurav.runnig());
console.log(saurav.walking());
console.log(saurav.taking());

// Acheiving Abstraction using interface
interface Monal {
  running(): string;
  walking(): string;
  taking(): string;
}

class SonOfMonal implements Monal {
  constructor(private name: string, private age: number) {}
  running(): string {
    return "Son of Monal is " + this.name + " and he can run.";
  }

  walking(): string {
    return (
      "Son of Monal is " +
      this.name +
      " and he is " +
      this.age +
      " years old" +
      " also he can run."
    );
  }

  taking(): string {
    return "Son of Monal can talk.";
  }
}

const monal = new SonOfMonal("Raju", 4);
console.log(monal.running());
console.log(monal.walking());
console.log(monal.taking());
