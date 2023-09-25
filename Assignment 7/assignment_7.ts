// Write a program that uses filter to remove all negative numbers from an array of numbers

let array1: number[] = [0, 1, -2, -4, -6, 2, 4, 6, -7, -8, 7, 8, -9, 9];

let updatedArray1 = array1.filter((data) => {
  if (data >= 0) {
    return true;
  }
});

console.log(updatedArray1);

//--------------------------------------------------------------------------------------------

// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.

let array2: number[] = [1, 2, 3, 4, 5];

let updatedArray2 = array2.map((data) => data * 2);

console.log(updatedArray2);

//--------------------------------------------------------------------------------------------

// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array
// containing only the fruits with more than 5 characters.

let fruits: string[] = ["apple", "banana", "cherry", "date", "grape"];

let updatedFruits = fruits.filter((fruit) => fruit.length > 5);

console.log(updatedFruits);

//--------------------------------------------------------------------------------------------

// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array
// containing the squares of even numbers.

// 1st Method

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenArray = numbers.filter((data) => {
  if (data % 2 == 0) {
    return true;
  }
});

let squareArray = evenArray.map((data) => data ** 2);

console.log(squareArray);

//2nd Method

let evenSquares: number[] = numbers
  .filter((number) => number % 2 === 0) // Filter even numbers
  .map((evenNumber) => evenNumber * evenNumber); // Map to their squares

console.log(evenSquares); // Output: [4, 16, 36, 64, 100]

//--------------------------------------------------------------------------------------------

// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array
// where each temperature is converted to Fahrenheit using the formula(Celsius * 9 / 5) + 32.

let celsiusArray: number[] = [0, 10, 20, 30, 40];

let fahrenheitArray = celsiusArray.map((celsius) => (celsius * 9) / 5 + 32);

console.log(fahrenheitArray);

//--------------------------------------------------------------------------------------------

// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array
// containing the doubled values of odd numbers.


let numbers2: number[] = [3, 6, 9, 12, 15, 18];

let doubledOddArray = numbers2
  .filter((data) => data % 2 !== 0)
  .map((data) => data * 2);

console.log(doubledOddArray);

//--------------------------------------------------------------------------------------------

// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name
// with an exclamation mark at the end, e.g., "Alice!".

let nameArray: string[] = ["Alice", "Bob", "Charlie", "David", "Emily"];

nameArray.forEach((data) => console.log(`${data}!`));

console.log("ABC");

