"use strict";
//  1 - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse using functions.
// function tempConverter(tempCel: number, tempFar: number) {
//   var celsiusToFarenheit: number = tempCel * (9 / 5) + 32;
//   var fahrenheitToCelsius: number = (tempFar - 32) * (5 / 9);
//   console.log(celsiusToFarenheit, fahrenheitToCelsius);
// }
// tempConverter(37, 98);
//--------------------------------------------------------------------
//  2 - Write a program that calculates the percentage using functions.
// function percentageCalculator(totalMarks: number, obtainedMarks: number): number {
//   var numberPercentage: number = (obtainedMarks / totalMarks) * 100;
//   return numberPercentage;
// }
// console.log(percentageCalculator(1100, 904));
//--------------------------------------------------------------------
//  3 - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days using functions.
// function daysConverter(numOfDays: number): string {
//   let numOfWeeks: number = Math.floor(numOfDays / 7);
//   let days: number = numOfDays % 7;
//   let result: string = `${numOfWeeks} weeks and ${days} days`;
//   return result;
// }
// console.log(daysConverter(14));
//--------------------------------------------------------------------
//  4 - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount;
// otherwise, apply a 5 % discount using functions.
// function discountCalculator(price: number) :string {
//   if (price > 100) {
//     return `Your discounted price is ${price * 0.9}`;
//   } else return `Your discounted price is ${price * 0.95}`;
// }
// console.log(discountCalculator(105));
//--------------------------------------------------------------------
//  5 - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child."
// If it's between 13 and 19, print "Teenager." Otherwise, print "Adult" using functions.
// function ageCategory(age: number) {
//   if (age < 12) {
//     console.log(`You are a Child`);
//   } else if (age < 19) {
//     console.log(`You are a teenager`);
//   } else console.log(`You are an adult`);
// }
// ageCategory(23);
//--------------------------------------------------------------------
//  6 - Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on
// according to the weather using functions.
// function suggestUser(temp1: number) {
//   if (temp1 < 10) {
//     console.log(`It is chilly outside. Wear warm clothes`);
//   } else if (temp1 < 20) {
//     console.log(`It is a little cold outside, wear clothes accordingly`);
//   } else if (temp1 < 30) {
//     console.log(`The weather is normal. Wear normal clothes`);
//   } else console.log(`The weather is hot outside. Wear light clothes`);
// }
// suggestUser(30);
//--------------------------------------------------------------------
//  7 - Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly using functions.
// function chechDivisible(num1: number) {
//   if (num1 % 3 == 0) {
//     console.log(`${num1} is divisible by 3`);
//   } else {
//     console.log(`${num1} is not divisible by 3`);
//   }
//   if (num1 % 5 == 0) {
//     console.log(`${num1} is divisible by 5`);
//   } else {
//     console.log(`${num1} is not divisible by 5`);
//   }
//   if (num1 % 3 == 0 && num1 % 5 == 0) {
//     console.log(`${num1} is divisible by 3 & 5`);
//   } else {
//     console.log(`${num1} is not divisible by 3 & 5`);
//   }
// }
// chechDivisible(15);
//--------------------------------------------------------------------
//  8 - Write a program that checks if the given year is leap year or not using functions.
// function yearChecker(giveYear: number) {
//   if (giveYear % 4 !== 0 && giveYear % 200 !== 0 && giveYear % 400 !== 0) {
//     console.log(`${giveYear} is not leap year.`);
//   } else {
//     console.log(`${giveYear} is a leap year.`);
//   }
// }
// yearChecker(2024);
//--------------------------------------------------------------------
//  9 - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements
// to print the corresponding day's name using functions.
// function dayChecker(dayOfWeek: number) {
//   if (dayOfWeek == 1) {
//     console.log("Monday");
//   } else if (dayOfWeek == 2) {
//     console.log("Tuesday");
//   } else if (dayOfWeek == 3) {
//     console.log("Wednesday");
//   } else if (dayOfWeek == 4) {
//     console.log("Thursday");
//   } else if (dayOfWeek == 5) {
//     console.log("Friday");
//   } else if (dayOfWeek == 6) {
//     console.log("Saturday");
//   } else if (dayOfWeek == 7) {
//     console.log("Sunday");
//   } else {
//     console.log("Given number is not valid.");
//   }
// }
// dayChecker(5);
//--------------------------------------------------------------------
// 10 - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200
// then add 15 % of tax so on up to if greater than 500 then add 25 % of tax, Where the tax amount will be calculated by the amount of bill using functions.
// function unitsCheck(bill: number) {
//   if (bill < 200) {
//     let totalBill: number = (bill / 100) * 10;
//     console.log(`Your total bill is ${bill + totalBill}`);
//   } else if (bill < 300) {
//     let totalBill: number = (bill / 100) * 15;
//     console.log(`Your total bill is ${bill + totalBill}`);
//   } else if (bill < 400) {
//     let totalBill: number = (bill / 100) * 20;
//     console.log(`Your total bill is ${bill + totalBill}`);
//   } else {
//     let totalBill: number = (bill / 100) * 25;
//     console.log(`Your total bill is ${bill + totalBill}`);
//   }
// }
// unitsCheck(500);
