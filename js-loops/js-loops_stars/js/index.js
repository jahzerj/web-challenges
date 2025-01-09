console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
  for ( let i = 1; i <= 5; i++) {
    let star = document.createElement("img");
    star.setAttribute("src", "./assets/star-empty.svg");
    star.addEventListener("click", (event) => {
      renderStars(i);
      console.log(i);
    });
    starContainer.append(star);

    star.setAttribute(
      "src",
      i <= filledStars ? "./assets/star-filled.svg" : "./assets/star-empty.svg"
    );
    // --^-- write or modify code above this line --^--
  }
}
renderStars();
