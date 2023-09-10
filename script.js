let numbers = document.querySelectorAll(".num-keys");

Array.from(numbers).map((number) => {
  number.addEventListener("click", (event) => {
    console.log(event.target.textContent);
  });
});
console.log(numbers);
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
