console.clear();

/*
Update the content and style of the page based on the current day and time.

- Write a function `getGreeting` that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: You can get the current hour with `new Date().getHours()`)

- Write a function `getDayColor` that returns a different color depending on the current weekday:
  - Monday: "darkgray"
  - Tuesday - Friday: "lightblue"
  - Saturday - Sunday: "hotpink"

(HINT: You can get the current weekday with `new Date().getDay()`)

*/

const display = document.querySelector('[data-js="display"]');

const time = new Date().getHours();

function getGreeting() {
  if (time >= 6 && time <= 12) {
    console.log("Good Morning");
  } else if (time >= 13 && time <= 18) {
    console.log("Good Afternoon");
  } else if (time >= 19 && time <= 22) {
    console.log("Good Evening");
  } else {
    console.log("Goodnight");
  }
}

const day = new Date().getDay();

function getDayColor() {
  if (day === 1) {
    return "darkgray";
  } else if (day === 6 || day === 0) {
    return "hotpink";
  } else {
    return "lightblue";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
