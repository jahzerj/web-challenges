import { getRandomColor } from "./utils/randomColor.js";
import Circle from "./components/Circle/Circle.js";

console.clear();

const root = document.getElementById("root");



const circleElement = Circle();
const pentagonElement = Pentagon();


function Pentagon() {
  const pentagon = document.createElement("div");
  pentagon.classList.add("pentagon");
  pentagon.addEventListener("click", () => {
    pentagon.style.backgroundColor = getRandomColor();
  });
  return pentagon;
}

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  square.style.backgroundColor = getRandomColor();
});


root.append(circleElement, square, pentagonElement);
