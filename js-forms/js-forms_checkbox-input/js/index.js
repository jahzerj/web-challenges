console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const successMessage = document.querySelector('[data-js="success"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function showSuccessMessage() {
 successMessage.style.display = "block";
}
function hideSuccessMessage() {
  successMessage.style.display = "none";
}

hideTosError();
hideSuccessMessage();

// Invalid submit
form.addEventListener("submit", (event) => {
  if (tosCheckbox.checked === false) {
    event.preventDefault();
    showTosError();
    hideSuccessMessage();
    return;
  }
// Valid submit
  if (tosCheckbox.checked === true) {
    hideTosError();
    showSuccessMessage();
    alert("Complaint successfully submitted");
  }
});

