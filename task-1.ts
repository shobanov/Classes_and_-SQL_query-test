abstract class Aclass {
  Numbers: Array<number>;

  constructor(n: number) {
    const numbers = this.fill(n);
    this.Numbers = numbers;
  };

  private fill(length: number): number[] {
    return Array.from({ length }, () => Math.floor(Math.random() * 10));
  };

  factorial(): Array<number> {
    return this.Numbers.map(factorialOfNumber);

    function factorialOfNumber(num: number) {
      if (num === 0 || num === 1) {
        return 1;
      };
      return num * factorialOfNumber(num - 1);
    };
  };

  abstract sort(): Array<number>;
};

class Class1 extends Aclass {
  sort(): Array<number> {
    this.Numbers.sort();
    console.log(this.factorial());
    return this.factorial();
  };
};

class Class2 extends Aclass {
  sort(): Array<number> {
    this.Numbers.sort().reverse();
    return this.factorial();
  };
};
