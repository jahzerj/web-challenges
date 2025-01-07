console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

// const bodyElement = document.querySelector('[data-js="root"]');
const addButton = document.querySelector('[data-js="dark-mode-button"]');
const removeButton = document.querySelector('[data-js="light-mode-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

addButton.addEventListener("click", () => {
    bodyElement.classList.add("dark");
});

removeButton.addEventListener("click", () => {
    bodyElement.classList.remove("dark");
});

toggleButton.addEventListener("click", () => {
    bodyElement.classList.toggle("dark");
});