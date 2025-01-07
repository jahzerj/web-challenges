import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  event.preventDefault();
  container.innerHTML = "";
  
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data)


  const searchString = event.target.value;

  const foundCountry = null;

  if (foundCountry) {
    const countryElement = Country(foundCountry);
    container.append(countryElement);
  }
});

