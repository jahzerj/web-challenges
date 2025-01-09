console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
  for (i= 1; i <= 5; i++) {
    let star = document.createElement("img");
    star.setAttribute("src", "./assets/star-empty.svg")
    starContainer.append(star)
    
    if (filledStars <= i) {
      star.setAttribute("src", "/ass")
    } 

  }
  // --^-- write or modify code above this line --^--
}

renderStars();
