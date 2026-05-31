class Calculator {
  constructor(initialValue) {
    this.initialValue = initialValue;
  }

  add(num) {
    this.initialValue += num;
    return this; //თუ გვინდა რომ chaining ავაწყოთ
  }

  substract(num) {
    this.initialValue -= num;
    return this;
  }

  multiply(num) {
    this.initialValue *= num;
    return this;
  }

  division(num) {
    this.initialValue /= num;
    return this;
  }

  getInitialValue() {
    console.log("Initial Value: ", this.initialValue);
  }

  getResult() {
    console.log("Calculated Value: ", this.initialValue);
  }
}

let calculatedNum = new Calculator(5);
calculatedNum.getInitialValue();
calculatedNum.add(13).multiply(3).division(4).substract(6);
calculatedNum.getResult();
