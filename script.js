let numbers = document.querySelectorAll(".num-keys");
const screen = document.querySelector(".screen");
const operators = document.querySelectorAll(".operators");
const equals = document.querySelector(".equals");

const calculator = {
  firstNumber: null,
  secondNumber: null,
  operator: null,
  result() {
    let answer;
    if (this.operator === "+") {
      answer = Number(this.secondNumber) + Number(this.firstNumber);
      return answer;
    } else if (this.operator === "-") {
      answer = Number(this.secondNumber) - Number(this.firstNumber);
      return answer;
    } else if (this.operator === "/") {
      answer = Number(this.secondNumber) / Number(this.firstNumber);
      return answer;
    } else if (this.operator === "x") {
      answer = Number(this.secondNumber) * Number(this.firstNumber);
      return answer;
    } else {
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
    calculator.firstNumber = screen.textContent;
  });
});

Array.from(operators).map((operator) => {
  operator.addEventListener("click", (event) => {
    console.log(operator.textContent);
    calculator.secondNumber = calculator.firstNumber;
    calculator.firstNumber = null;
    calculator.operator = operator.textContent;
    // screen.textContent = "";
  });
});

equals.addEventListener("click", () => {
  calculator.firstNumber = screen.textContent;
  screen.textContent = calculator.result();
  calculator.firstNumber = calculator.result();
});
