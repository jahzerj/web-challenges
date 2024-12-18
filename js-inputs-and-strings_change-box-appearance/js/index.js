console.clear();

const inputColor = document.querySelector('[data-js="input-color"]');
const inputRotation = document.querySelector('[data-js="input-rotation"]');
const inputRadius = document.querySelector('[data-js="input-radius"]');
const box = document.querySelector('[data-js="box"]');

inputColor.addEventListener("input", () => {
  box.style.backgroundColor = `hsl(${inputColor.value} 50% 50%)`;
  console.log(inputColor.value);
});

console.log(typeof inputColor);

console.log("number", number);
