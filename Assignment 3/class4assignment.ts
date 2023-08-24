// 1-  Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.

var tempCel: number = 37;
var tempFar: number = tempCel * (9 / 5) + 32;
console.log(tempFar);

// --------------------------------------------------------------------------------------------------

// 2 - Write a program that calculates the percentage.

var marksInFsc: number = 903;
var totalMarks: number = 1100;
var percent: number = Math.floor((marksInFsc / totalMarks) * 100);
console.log(`Percentage of marks is ${percent}%`);

// --------------------------------------------------------------------------------------------------

// 3 - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.

let days = 17;

let weeks = Math.floor(days / 7);
let remainingDays = days % 7;

let result = "";

if (weeks > 0 && remainingDays > 0) {
  result = `${weeks} week${weeks > 1 ? "s" : ""} and ${remainingDays} day${
    remainingDays > 1 ? "s" : ""
  }`;
} else if (weeks > 0) {
  result = `${weeks} week${weeks > 1 ? "s" : ""}`;
} else {
  result = `${remainingDays} day${remainingDays > 1 ? "s" : ""}`;
}

console.log(`${days} days = ${result}`);

// --------------------------------------------------------------------------------------------------

// 4 - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.

var priceOfProduct: number = 100;
if (priceOfProduct > 100) {
  var discountApplied1: number = priceOfProduct - priceOfProduct * 0.1;
  console.log(`Your discounted price is ${discountApplied1}`);
} else {
  var discountApplied2: number = priceOfProduct - priceOfProduct * 0.05;
  console.log(`Your discounted price is ${discountApplied2}`);
}

// --------------------------------------------------------------------------------------------------

// 5 - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."

var age: number = 12;
if (age <= 12) {
  console.log(`Child`);
} else if (age < 19) {
  console.log(`Teen`);
} else {
  console.log(`Adult`);
}

// --------------------------------------------------------------------------------------------------

// 6 - Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.

var temp1: number = 10;
if (temp1 >= 20) {
  console.log(`Please Wear warm clothes`);
} else {
  console.log(`Please wear normal clothes`);
}

// --------------------------------------------------------------------------------------------------

// 7 - Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.

var num11: number = 15;
if (num11 % 3 == 0) {
  console.log(`${num11} is divisible by 3`);
} else {
  console.log(`${num11} is not divisible by 3`);
}
if (num11 % 5 == 0) {
  console.log(`${num11} is divisible by 5`);
} else {
  console.log(`${num11} is not divisible by 5`);
}
if (num11 % 3 == 0 && num11 % 5 == 0) {
  console.log(`${num11} is divisible by 3 & 5`);
} else {
  console.log(`${num11} is not divisible by 3 & 5`);
}

// 8 - Write a program that checks if the given year is leap year or not.

var giveYear: number = 2024;

if (giveYear % 4 !== 0 && giveYear % 200 !== 0 && giveYear % 400 !== 0) {
  console.log(`${giveYear} is not leap year.`);
} else {
  console.log(`${giveYear} is a leap year.`);
}

// 9 - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.

var dayOfWeek: number = 4;
if (dayOfWeek == 1) {
  console.log("Monday");
} else if (dayOfWeek == 2) {
  console.log("Tuesday");
} else if (dayOfWeek == 3) {
  console.log("Wednesday");
} else if (dayOfWeek == 4) {
  console.log("Thursday");
} else if (dayOfWeek == 5) {
  console.log("Friday");
} else if (dayOfWeek == 6) {
  console.log("Saturday");
} else if (dayOfWeek == 7) {
  console.log("Sunday");
} else {
  console.log("Given number is not valid.");
}
/* - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax 
Where the tax amount will be calculated by the amount of bill.*/

var bill: number = 200;
var bill10: number = (bill / 100) * 10;
var bill15: number = (bill / 100) * 15;
var bill20: number = (bill / 100) * 20;
var bill25: number = (bill / 100) * 25;

if (bill < 200) {
  console.log(`Your total bill is ${bill + bill10}`);
} else if (bill < 300) {
  console.log(`Your total bill is ${bill + bill15}`);
} else if (bill < 400) {
  console.log(`Your total bill is ${bill + bill20}`);
} else {
  console.log(`Your total bill is ${bill + bill25}`);
}
