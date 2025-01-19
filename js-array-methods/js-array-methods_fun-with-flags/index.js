import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

// queryInput.addEventListener("input", (event) => {
//   container.innerHTML = "";

//   const searchString = event.target.value;

//   const foundCountry = countries.find(function(country) {
//     return country.name.toLowerCase().startsWith(searchString);

//   })
//   console.log(foundCountry)

//   if (foundCountry) {
//     const countryElement = Country(foundCountry);
//     container.append(countryElement);
//   }
// });

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value.toLowerCase();

  const foundCountries = countries.filter(function (country) {
    return country.name.toLowerCase().startsWith(searchString);
  });
  console.log(foundCountries);

  foundCountries.forEach(function (country) {
    const countryElement = Country(country);
    container.append(countryElement);
  });
});
