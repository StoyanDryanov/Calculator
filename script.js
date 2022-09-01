let operator = "";
let firstNum = "";
let secondNum = "";
// here will be stored the values for each expression e.g. a - b

//buttons
const numbers = document.querySelectorAll(".number");
const deleteBtn = document.querySelector(".delete");
const opreations = document.querySelectorAll(".operation");
const calculate = document.querySelector(".calculate");
const percentage = document.querySelector(".percentage");
const signChange = document.querySelector(".sign-change");
const decimalPoint = document.querySelector(".decimal");
const allBtns = document.querySelectorAll(".btn"); // will be used for mousedown event

//screen
const screen = document.querySelector(".screen");

//operate function
function operate(operator, numberOne, numberTwo) {
    if (numberOne.includes('.') && numberOne.indexOf('.') === numberOne.length - 1) {
        numberOne += '0';
    }
    if (numberTwo.includes('.') && numberTwo.indexOf('.') === numberTwo.length - 1) {
        numberTwo += '0';
    }
  return eval(`${numberOne} ${operator} ${numberTwo}`);
}

// changes button opacity to 0.8
allBtns.forEach((btn) =>
  btn.addEventListener("mousedown", (e) => {
    btn.classList.add("darker");
  })
);

//reverts opacity changes
allBtns.forEach((btn) =>
  btn.addEventListener("mouseup", (e) => {
    btn.classList.remove("darker");
  })
);

//displays nums
numbers.forEach((num) =>
  num.addEventListener("mouseup", (e) => {
    if (screen.textContent.length === 8) {
      return;
    }
    screen.textContent += num.textContent;
  })
);

opreations.forEach((operation) =>
  operation.addEventListener("click", () => {
    if (operator === "" && firstNum === "") {
      firstNum = screen.textContent;
    }
    if (screen.textContent === "" || firstNum === "") {
      return;
    }

    operator = operation.textContent;
    screen.textContent = "";
  })
);

calculate.addEventListener("click", () => {
  if (operator === "" && firstNum === "") {
    return;
  }
  secondNum = screen.textContent;
  screen.textContent = operate(operator, firstNum, secondNum);
  firstNum = screen.textContent;
});

deleteBtn.addEventListener("click", () => {
  operator = "";
  firstNum = "";
  secondNum = "";
  screen.textContent = "";
});

signChange.addEventListener('click', () => {
    screen.textContent = `${-(+screen.textContent)}`;
})

percentage.addEventListener('click', () => {
    screen.textContent = `${(+screen.textContent)/100}`;
});

decimalPoint.addEventListener('click', () => {
    if (screen.textContent.includes('.')) {
        return;
    }
    screen.textContent += '.';
});

