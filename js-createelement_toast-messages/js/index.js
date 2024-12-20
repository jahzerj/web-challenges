console.clear();

// const toastMessage = document.querySelector('[data-js="toast-message"]');
const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  // Exercise: Append a new entry to the toast messages container
  // const formData = new FormData(event.target);
  // const data = Object.fromEntries(formData);
  const toastMessage = document.createElement('li');
  toastMessage.textContent = "I'm a toast message."
  toastMessage.setAttribute('class',"toast-container__message");
  toastContainer.append(toastMessage);
  

});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});

