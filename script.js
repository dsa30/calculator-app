let numbers = document.querySelectorAll(".num-keys");
const screen = document.querySelector(".screen");

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

Array.from(numbers).map((number) => {
  number.addEventListener("click", (event) => {
    if (screen.textContent === "0") {
      screen.textContent = "";
    }
    screen.textContent += event.target.textContent;
  });
});
