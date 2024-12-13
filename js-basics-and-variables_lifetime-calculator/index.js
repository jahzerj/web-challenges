console.clear();

/*
Let's calculate some interesting facts based on a user's age! 
The program expects the user to provide their age as a numerical input. 
The code for receiving this input is provided below.

Calculate the following:
1. The total number of days the person has lived.
2. The estimated number of remaining days, assuming an average life span of 80 years.
3. The percentage of life already lived, in relation to the expected life span.
4. The cumulative number of days the person has spent sleeping, assuming an average of 8 hours of sleep per day.

Log each result with a clear and descriptive message. 
Hint: You can combine text and variables using the `+` operator.

💡 For simplicity, ignore leap years.
*/

const currentAge = Number(process.argv[2]); // This takes the `<age>` entered in the command `node index.js <age>`.

console.log("Your current age is: " + currentAge);

const daysSoFar = 365 * currentAge;
const daysRemain = 80 * 365 - daysSoFar;
const averageDays = 80 * 365;
const percentageLived = (daysSoFar / averageDays) * 100;
const daysSlept = (daysSoFar * 8) / 24;

console.log("You have lived: ", daysSoFar, "days so far.");
console.log(
  "You have : ",
  daysRemain,
  " days left in your life based on the average life expectancy of 80 years old."
);
console.log("You have lived for: ", percentageLived, " % of your expected days.");
console.log(
  "You have slept for ",
  daysSlept,
  "days, based on an average of 8 hours of sleep per night."
);
