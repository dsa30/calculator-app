const calculator = {
  firstNumber: null,
  secondNumber: null,
  operator(operation) {
    let result;
    switch (operation) {
      case "+":
        result = Number(this.firstNumber) + Number(this.secondNumber);
        break;
      case "-":
        result = Number(this.firstNumber) - Number(this.secondNumber);
        break;
      case "/":
        result = Number(this.firstNumber) / Number(this.secondNumber);
        break;
      case "*":
        result = Number(this.firstNumber) * Number(this.secondNumber);
        break;
      default:
        return;
    }
  },
};
