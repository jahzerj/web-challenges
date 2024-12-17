console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  pizzaInput.value = pizzaSize1;
});

pizzaInput2.addEventListener("input", () => {
  pizzaInput2.value = pizzaSize2;
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  const area1 = Math.PI * (diameter1 / 2) ** 2;
  const area2 = Math.PI * (diameter2 / 2) ** 2;
  const pizzaGain = ((area2 - area1) / area1) * 100;
  document.querySelector('data-js="output"').innerHTML = Math.round(pizzaGain);
}

calculatePizzaGain(diameter1, diameter2);
// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
