//adds functionality to calculator operations
document.addEventListener("DOMContentLoaded", function () {
  const calculatorScreen = document.querySelector(".calculator-screen");
  const buttons = document.querySelectorAll("button");
  let actualInput = "";
  let operator = "";
  let previousInput = "";

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = button.value;

      if (button.classList.contains("operator")) {
        if (actualInput !== "") {
          operator = value;
          previousInput = actualInput;
          actualInput = "";
        }
      } else if (value === "all-clear") {
        actualInput = "";
        previousInput = "";
        operator = "";
        updateScreen("");
      } else if (value === "=") {
        if (actualInput !== "" && previousInput !== "") {
          calculate();
          operator = "";
        }
      } else {
        actualInput += value;
        updateScreen(actualInput);
      }
    });
  });

  function updateScreen(value) {
    calculatorScreen.value = value;
  }

  function calculate() {
    let result = 0;
    const actual = parseFloat(actualInput);
    const prev = parseFloat(previousInput);

    if (operator === "+") {
      result = prev + actual;
    } else if (operator === "-") {
      result = prev - actual;
    } else if (operator === "*") {
      result = prev * actual;
    } else if (operator === "/") {
      result = prev / actual;
    }

    actualInput = result.toString();
    updateScreen(actualInput);
  }
});
