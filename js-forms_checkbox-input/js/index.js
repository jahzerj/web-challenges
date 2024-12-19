console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const success = document.querySelector('[data-js="tos-error"]')
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (tosCheckbox.checked === true) {
    hideTosError();
    return;
  } else {
    showTosError();
  }

  console.log(tosCheckbox.checked);
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});

// tosCheckbox.addEventListener("input", (event) => {
//   console.log(event.target.checked);
// });
