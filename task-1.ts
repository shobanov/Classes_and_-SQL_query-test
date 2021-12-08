abstract class Aclass {
  Numbers: Array<number>;

  constructor(n: number) {
    this.fill(n);
  };

  private fill(n: number): void {
    const arr = []
    for (let i = 0; i < n; i++ ) {
      arr.push(Math.round( Math.random() * 10 ));
    };
    this.Numbers = arr
  };

  factorial(): Array<number> {
    return this.Numbers.map(item => factorialOfNumber(item));

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
    return this.factorial();
  };
};

class Class2 extends Aclass {
  sort(): Array<number> {
    this.Numbers.sort().reverse();
    return this.factorial();
  };
};