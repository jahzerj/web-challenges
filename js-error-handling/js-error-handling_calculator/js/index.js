console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");
const errorMessage = document.querySelector('.error');

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    try {
      if (b === 0) {
        throw new Error();
      }
      return a / b;
    } catch (error) {
      const errorElement = document.querySelector(".error");
      errorElement.textContent = "Cannot divide by zero!";
    }
  },
};

form.addEventListener("submit", (event) => {
  errorMessage.textContent = "";
  event.preventDefault();
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;
  try {
    output.innerText = operations[operation](firstNumber, secondNumber);
  } catch (error) {
    console.error(error);
    // console.log(error) also an option
    errorMessage.textContent = error.message;
  }
});
