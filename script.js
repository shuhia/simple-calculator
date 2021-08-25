// Operations
const ADDITION = "+";
const SUBSTRACTION = "-";
const DIVISION = "/";
const MULTIPLICATION = "*";
const EQUAL = "=";

// user input
const userInput = document.getElementById("input");
const userOperations = document.querySelectorAll(".operation");
const userInputs = document.querySelectorAll(".number");
const btnClear = document.getElementById("clear");

let currentNumber = 0;
let nextNumber = 0;
let previousOperation = null;

// functions: add, substract

userInput.oninput = (event) => {
  const value = event.target.value;
  inputValue = value;
  // console.log(value);
};

userOperations.forEach((userOperation) =>
  userOperation.addEventListener("click", (event) => {
    const operation = event.target.value;
    console.log("operation:" + operation);
    switch (operation) {
      case "+":
        currentNumber += nextNumber;

        userInput.value = currentNumber;
        break;
      case "-":
        currentNumber -= nextNumber;

        userInput.value = currentNumber;
        break;
      case "x":
        currentNumber *= nextNumber;

        userInput.value = currentNumber;
        break;

      case "=":
        if (previousOperation !== null && previousOperation !== "=") {
          switch (previousOperation) {
            case "+":
              currentNumber += nextNumber;
              nextNumber = 0;
              userInput.value = 0;
              break;
            case "-":
              currentNumber -= nextNumber;
              nextNumber = 0;
              userInput.value = 0;
              break;
            case "x":
              currentNumber *= nextNumber;
              nextNumber = 0;
              userInput.value = 0;
              break;
          }
        }
        userInput.value = currentNumber;
        break;
    }
    previousOperation = operation;
  })
);

btnClear.addEventListener("click", () => {
  userInput.value = 0;
  currentNumber = 0;
  nextNumber = 0;
  previousOperation = null;
  console.log("Clear");
});

userInputs.forEach((input) => {
  input.addEventListener("click", (event) => {
    const value = event.target.value;
    if (userInput.value == "0") {
      userInput.value = value;
    } else {
      userInput.value += value;
    }
    nextNumber = parseInt(userInput.value);
    console.log(value);
  });
});

function add() {
  currentNumber += nextNumber;
  nextNumber = 0;
}
