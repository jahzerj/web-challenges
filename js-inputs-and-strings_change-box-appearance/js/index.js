console.clear();

const inputColor = document.querySelector('[data-js="input-color"]');
const inputRotation = document.querySelector('[data-js="input-rotation"]');
const inputRadius = document.querySelector('[data-js="input-radius"]');
const box = document.querySelector('[data-js="box"]');

inputColor.addEventListener("input", () => {
  box.style.background = `hsl(${inputColor.value} 60% 50%)`;
});

// inputRotation.addEventListener("input", () => {
//   box.style.PROPERTY = rotate(inputRotation.value);
// });

inputRadius.addEventListener("input", () => {
    box.style.borderRadius = `${inputRadius.value}%`
  });

