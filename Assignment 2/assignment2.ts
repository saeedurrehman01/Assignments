// Assignment 2

// Exercise 1:  Write a program that calculates the area of a rectangle.

var length1: number = 5;
var width1: number = 10;

var area: number = length1 * width1;

console.log(area);

// ---------------------------------------------------------------------------------------

// Exercise 2: Write a program that takes input and calculates the volume of a cube.

var length2: number = 5;
var width2: number = 5;
var height2: number = 5;

var areaOfCube: number = length2 * width2 * height2;

console.log(areaOfCube);

// ---------------------------------------------------------------------------------------

// Exercise 3:  Write a program that checks if a given number is positive, negative, or zero.

var num1: number = -5;

if (num1 > 0) {
  console.log("The given number is positive");
} else if (num1 < 0) {
  console.log("The given number is negative");
} else console.log("The given number is Zero");

// ---------------------------------------------------------------------------------------

// Exercise 4:   Write a program that checks if a given number is even or odd.

var num2: number = 4;

if (num2 % 2 == 0) {
  console.log("The given number is Even");
} else console.log("The given number is Odd");

// ---------------------------------------------------------------------------------------

// Exercise 5:  Write a program that determines if a person is eligible to vote based on their age.

var age1: number = 17;

if (age1 >= 18) {
  console.log("You are eligible to Vote");
} else console.log("You are not eligible to Vote");

// ---------------------------------------------------------------------------------------

// Exercise 6:  Write a program that calculates the result of a mathematical expression.	((10 + 5) * 3 - 2) / (4 % 3)  - 7)

var result1: number = ((10 + 5) * 3 - 2) / (4 % 3) - 7;

console.log(result1);
