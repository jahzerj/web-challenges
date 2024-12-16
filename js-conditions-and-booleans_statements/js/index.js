console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword=== SUPER_SECRET_PASSWORD) {
    console.log('Welcome! You are logged in as Brunhilde1984.')
} else {
    console.log('Access denied!')
}
// Part 2: Even / Odd
const number = 6;
if (number % 2 === 0) {
    console.log('even number') 
} else {
    console.log('odd number')
}
// Part 3: Hotdogs
const numberOfHotdogs = 99;
let price = 0;

if (numberOfHotdogs >= 1000000) {
    price = numberOfHotdogs * 0.1;
    console.log(price);
} else if (numberOfHotdogs >= 100) {
    price = numberOfHotdogs * 1;
    console.log(price);
} else if (numberOfHotdogs >= 5) {
    price = numberOfHotdogs * 1.5;
    console.log(price);
} else { 
    price = numberOfHotdogs * 2;
    console.log(price);
}

// Part 4: Daytime
const currentHour = 120;

let statement = "";

currentHour > 17 ?  statement = "Partytime!!!": statement = "Still need to learn...";
console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);
