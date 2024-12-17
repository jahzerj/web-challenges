console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

let pizzaSize1;
let pizzaSize2;

pizzaInput1.addEventListener("input", () => {
  pizzaSize1 = pizzaInput1.value;
});

pizzaInput2.addEventListener("input", () => {
  pizzaSize2 = pizzaInput2.value;
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  const area1 = Math.PI * (diameter1 / 2) ** 2;
  const area2 = Math.PI * (diameter2 / 2) ** 2;
  const pizzaGain = ((area2 - area1) / area1) * 100;
  output.innerHTML = Math.round(pizzaGain);
}

calculatePizzaGain(pizzaSize1, pizzaSize2);

// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
