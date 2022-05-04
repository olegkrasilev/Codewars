// https://www.codewars.com/kata/534fcca5edb124cfe6000f60
class Singleton {

  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;
  }
}
