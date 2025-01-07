console.clear();

const inputElement = document.querySelector('[data-js="first-input"]');
const buttonElement = document.querySelector('[data-js="button-uppercase"]');

buttonElement.addEventListener("click", () => {
    inputElement.value = inputElement.value.toUpperCase();
});
