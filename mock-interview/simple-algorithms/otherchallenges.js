// Challenge 1

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function isIntegerEvenOrOdd(integer) {
  if (Number.isInteger(integer)) {
    if (integer % 2 === 0) {
      return `${integer}` + 'is Even';
    } else {
      return `${integer}` + 'is Odd';
    }
  } else {
    console.log('Input is not an integer');
  }
}

// Challenge 2

// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

scores = ['3:1', '2:2', '0:1', '0:2', '0:1', '2:1', '4:1', '1:1', '2:3', '4:1'];

function footballSeasonPoints(scores) {
  seasonScore = 0;
  const parsedScores = scores.map((game) => {
    return game.split(':').map(Number); //splitting the numbers x and y, converting to number
  });
  for (let i = 0; i < parsedScores.length; i++) {
    if (parsedScores[i][0] > parsedScores[i][1]) {
      seasonScore += 3;
    } else if (parsedScores[i][0] === parsedScores[i][1]) {
      seasonScore += 1;
    }
  }
  return seasonScore;
}

console.log('Season Score:', footballSeasonPoints(scores));

// const footballSeasonPoints = (scores) => {
//     let seasonScore = 0;

//     const parsedScores = scores.map((game) => game.split(":").map(Number));

//     for (const [x,y] of parsedScores) {
//         if (x > y) {
//             seasonScore += 3;
//         } else if (x===y) {
//             seasonScore += 1;
//         }
//     }
//     reutrn seasonScore;
// };

// Challenge 3

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples

// [2, 4, 0, 100, 4, 11, 2602, 36] --> 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

function findOutlier(integers) {
  let evenCount = 0;
  const firstThree = integers.slice(0, 3);

  //Count the number of even in the first 3
  for (let i = 0; i < firstThree.length; i++) {
    if (firstThree[i] % 2 === 0) {
      evenCount++;
    }
  }
  const isMostlyEven = evenCount >= 2;

  for (const num of integers) {
    if (isMostlyEven && num % 2 !== 0) {
      return num;
    }
    if (!isMostlyEven && num % 2 === 0) {
      return num;
    }
  }
}

// function findOutlier(integers) {
//     // Determine the majority type (odd or even) based on the first three numbers
//     const firstThree = integers.slice(0, 3);
//     const isEvenMajority =
//       firstThree.filter((num) => num % 2 === 0).length >= 2;

//     // Filter for the outlier (opposite of the majority type)
//     const outlier = integers.filter((num) =>
//       isEvenMajority ? num % 2 !== 0 : num % 2 === 0
//     );

//     // Return the single outlier
//     return outlier[0];
//   }

Challenge 4

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
