console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible.

HINT: You can find more information about arrow functions and implicit returns in the handout.
*/

// function getCurrentHour() {
//   const now = new Date();
//   const currentHour = now.getHours();
//   if (currentHour === 0) {
//     return "12am";
//   } else if (currentHour === 12) {
//     return "12pm";
//   } else if (currentHour <= 11) {
//     return currentHour + "am";
//   } else {
//     return currentHour - 12 + "pm";
//   }
// }

const getCurrentHour = () => {
  const now = new Date();
  const currentHour = now.getHours();

  return currentHour === 0
    ? "12am"
    : currentHour === 12
    ? "12pm"
    : currentHour <= 11
    ? `${currentHour}am`
    : `${currentHour - 12}pm`;
};

// const getCurrentHour = () => {
//   const now = new Date();
//   const currentHour = now.getHours();
//   return currentHour === 0
//     ? "12am"
//     : currentHour === 12
//     ? "12pm"
//     : currentHour <= 11
//     ? currentHour + "am"
//     : currentHour - 12 + "pm";
// };
const getCurrentHour = () => {
  const currentHour = new Date().getHours();
  return currentHour === 0
    ? "12am"
    : currentHour === 12
    ? "12pm"
    : currentHour <= 11
    ? `${currentHour}am`
    : `${currentHour - 12}pm`;
};


// function getVectorLength(x, y, z) {
//   return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
// }
const getVectorLength = (x, y, z) => ((x ** 2 + y ** 2 + z ** 2) ** 0.5);


// function cleanInput(string) {
//   return string.toLowerCase().trim();
// }
const cleanInput = (string) => string.toLowerCase().trim();

/*
Rewrite the following arrow functions as classic functions.
*/

// const isOddAndSmall = (number) => {
//   if (number > 10) {
//     return false;
//   }

//   if (number % 2 === 0) {
//     return false;
//   }

//   return true;
// };
function isOddAndSmall(number) {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
}

// const add3 = (a, b, c) => a + b + c;

function add3(a, b, c) {
  return a + b + c;
}

// const repeat10 = (string) => string.repeat(10);
function repeat10(string) {
  return string.repeat(10);
}
