class Singleton {
  private static instance: Singleton;
  private constructor(private name: string) {}

  public static getInstance(name: string) {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(name);
    }

    return Singleton.instance;
  }
}

const instance1 = Singleton.getInstance("Abdul");
const instance2 = Singleton.getInstance("Tahir");

console.log(instance1 === instance2);
