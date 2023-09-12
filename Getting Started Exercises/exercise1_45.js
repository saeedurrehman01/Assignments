"use strict";
// 1. Install [Node.js](https://nodejs.org/en/), [TypeScript](https://www.typescriptlang.org/download)  and [VS Code](https://code.visualstudio.com/) on your computer.
/*********************************************************************************************************************
2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as,
“Hello Eric, would you like to learn some Python today?”
********************************************************************************************************************* */
var name1 = "Eric";
console.log(`Hello ${name1}, would you like to learn some Python today?`);
/**********************************************************************************************************************
3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
********************************************************************************************************************* */
var name2 = "Saeed ur rehman";
console.log(name2.toUpperCase());
console.log(name2.toLowerCase());
const titleCaseName = name2
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
console.log(titleCaseName);
/*********************************************************************************************************************
4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something
like the following, including the quotation marks:  Albert Einstein once said, “A person who never made a mistake never tried anything new.”
********************************************************************************************************************* */
console.log(`Albert Einstein once said, “A person who never made a mistake never tried anything new.”`);
/*********************************************************************************************************************
5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
*********************************************************************************************************************/
var name3 = "Albert Einstein";
var message1 = `${name3} once said, “A person who never made a mistake never tried anything new.”`;
console.log(message1);
/*********************************************************************************************************************
6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
********************************************************************************************************************* */
const personNameWithWhitespace = "\t\n   John Doe   \t\n";
console.log("Name with Whitespace:");
console.log(personNameWithWhitespace);
const strippedName = personNameWithWhitespace.trim();
console.log("Name after Stripping Whitespace:");
console.log(strippedName);
/*********************************************************************************************************************
7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
********************************************************************************************************************* */
const addition1 = 4 + 4;
console.log(addition1);
const subtraction1 = 16 - 8;
console.log(subtraction1);
const multiplication1 = 4 * 2;
console.log(multiplication1);
const division1 = 32 / 4;
console.log(division1);
/*********************************************************************************************************************
8. You should create four lines that look like this:
_____________________________________________
console.log(5 + 3)
_____________________________________________
Your output should simply be four lines with the number 8 appearing once on each line.
********************************************************************************************************************* */
console.log(4 + 4);
console.log(16 - 8);
console.log(4 * 2);
console.log(32 / 4);
/*********************************************************************************************************************
9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
********************************************************************************************************************* */
const favoriteNumber = 8;
const message2 = `${favoriteNumber} is my Favorite Number`;
console.log(message2);
/*********************************************************************************************************************
10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
because your programs are too simple at this point, just add your name and the current date at the top of each program file.
Then write one sentence describing what the program does.
********************************************************************************************************************* */
/*********************************************************************************************************************
11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
********************************************************************************************************************* */
var friendNames = ["Ali", "Zain", "Saeed", "Talha", "Hassan"];
for (let name of friendNames) {
    console.log(name);
}
/*********************************************************************************************************************
12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
********************************************************************************************************************* */
friendNames.forEach((data) => console.log(`Hey ${data}, How are you doing?`));
/*********************************************************************************************************************
13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
********************************************************************************************************************* */
var transportList = [
    "Tesla Model S",
    "Harley-Davidson",
    "Private Jet",
    "Kawasaki Ninja H2",
];
transportList.forEach((data) => console.log(`I would like to own a ${data}`));
/*********************************************************************************************************************
14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
********************************************************************************************************************* */
var guestList = ["Ali", "Zain", "Saeed", "Talha", "Hassan"];
guestList.forEach((data) => console.log(`Hey ${data}, I would like to invite you to dinner tonight.`));
/**********************************************************************************************************************************

15. Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.
**********************************************************************************************************************/
var guestWhoCantMakeIt = "Talha";
var indexofGuestWhoCantMakeIt = guestList.indexOf(guestWhoCantMakeIt);
if (indexofGuestWhoCantMakeIt !== -1) {
    guestList[indexofGuestWhoCantMakeIt] = "Irzam";
}
guestList.forEach((data) => console.log(`Hey ${data}, I would like to invite you to dinner tonight.`));
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
console.log(`Sorry everyone! ${guestWhoCantMakeIt} can't make it to the dinner tonight!`);
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.
// Already Done this above
/*********************************************************************************************************************
16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
**********************************************************************************************************************/
guestList.forEach((data) => console.log(`Hey ${data}, I've found a bigger table`));
guestList.unshift("Sayyam");
guestList.splice(Math.floor((guestList.length - 1) / 2), 0, "Usman");
guestList.push("Arsalan");
guestList.forEach((data) => console.log(`Hey ${data}, You're invited to the dinner tonight`));
/*********************************************************************************************************************
17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
********************************************************************************************************************* */
console.log(`Hey guys! I Can only invite two persons to the dinner`);
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Hey ${removedGuest}, I am Sorry I cannot invite you to dinner`);
}
guestList.forEach((data) => console.log(`Hey ${data}, you're invited to the dinner`));
while ((guestList.length = 0)) {
    guestList.pop();
}
console.log(`Guest List: ${guestList}`);
/********************************************************************************************************

// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
**********************************************************************************************************************/
// • Store the locations in a array. Make sure the array is not in alphabetical order.
var favoritePlaces = [
    "Taj Mahal",
    "Istanbul",
    "Bora Bora",
    "Baku",
    "Maldives",
];
// • Print your array in its original order.
console.log(favoritePlaces);
// • Print your array in alphabetical order without modifying the actual list.
var sortedPlaces = [...favoritePlaces].sort();
console.log(sortedPlaces.join(", "));
// • Show that your array is still in its original order by printing it.
console.log(favoritePlaces);
// • Print your array in reverse alphabetical order without changing the order of the original list.
var reverseSortedPlaces = [...favoritePlaces].sort((a, b) => b.localeCompare(a));
console.log(reverseSortedPlaces.join(", "));
// • Show that your array is still in its original order by printing it again.
console.log(favoritePlaces);
// • Reverse the order of your list. Print the array to show that its
// order has changed.
favoritePlaces.reverse();
console.log(favoritePlaces);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
favoritePlaces.reverse();
console.log(favoritePlaces);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
favoritePlaces.sort();
console.log(favoritePlaces);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
favoritePlaces.sort((a, b) => b.localeCompare(a));
console.log(favoritePlaces);
/**********************************************************************************************************************
19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
/**********************************************************************************************************************/
console.log(`Number of Guests is ${guestList.length}`);
/**********************************************************************************************************************
20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages,
or anything else you’d like. Write a program that creates a list containing these items.
**********************************************************************************************************************/
var itemsArray = [
    "Rakaposhi",
    "Nanga Parbat",
    "Ravi River",
    "Pakistan",
    "Faisalabad",
    "Urdu",
];
for (let item of itemsArray) {
    console.log(item);
}
/*****************************************************************************************
 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
*******************************************************************************************/
var obj = {
    name: "Saeed Ur Rehman",
    city: "Faisalabad",
    age: "25",
    isStudent: true,
};
console.log(obj);
/***************************************************************************

22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
Change an index in one of your programs to produce an index error.Make sure you correct the error before closing the program.
*******************************************************************************/
// Create an array with some elements
const myArray = [1, 2, 3, 4, 5];
// Attempt to access an element at an invalid index (out of bounds)
const invalidIndex = 10;
try {
    const element = myArray[invalidIndex];
    console.log(`Element at index ${invalidIndex}: ${element}`);
}
catch (error) {
    console.error(`Error: ${error.message}`);
}
// Correct the error by accessing a valid index
const validIndex = 2;
const validElement = myArray[validIndex];
console.log(`Element at index ${validIndex}: ${validElement}`);
/***************************************************************************

23. Conditional Tests: Write a series of conditional tests. Print a statement
describing each test and your prediction for the results of each test. Your code
should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*************************************************************************************/
let age1 = 25;
// true
console.log("Is age == 25 ? I predict true.");
console.log(age1 == 25);
// false
console.log("Is age == 25 ? I predict true.");
console.log(age1 == 24);
//true
console.log("Is age == 25 ? I predict true.");
console.log(age1 <= 25);
// false
console.log("Is age == 25 ? I predict true.");
console.log(age1 < 25);
// false
let job = "yes";
console.log("Is job == true ? I predict true");
console.log(job == "No");
// true
console.log("Is job == true ? I predict true");
console.log(job == "yes");
let month = "September";
// true
console.log("Is Month == September ? I predict true");
console.log(month == "September");
// False
console.log("Is Month == September ? I predict true");
console.log(month == "December");
let glass = "empty";
// true
console.log("Is glass == empty ? I predict true");
console.log(glass == "empty");
// false
console.log("Is glass == empty ? I predict true");
console.log(glass == "full");
/*************************************************************

24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
Have at least one True and one False result for each of the following:
**************************************************************/
// • Tests for equality and inequality with strings
// True
let strng1 = "Mouse";
let strng2 = "Mourse";
console.log("Is strng1 == strng2 ? I predict true");
console.log(strng1 == strng2);
// False
let strng3 = "Mouse";
let strng4 = "Keyboard";
console.log("Is strng3 == strng4 ? I predict true");
console.log(strng3 == strng4);
// • Tests using the lower case function
// True
let strng5 = "MOUSE";
let strng6 = "mouse";
console.log("Is strng5.toLowerCase() == strng6 ? I predict true");
console.log(strng5.toLowerCase() == strng6);
// False
let strng7 = "MOUSE";
let strng8 = "Mouse";
console.log("Is strng7.toLowerCase() == strng8 ? I predict true");
console.log(strng7.toLowerCase() == strng8);
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// Done on Line 365 - 380
// • Tests using "and" and "or" operators
let isHot = true;
let isSummer = true;
console.log("Is it hot or summer ? I predict true");
console.log(isHot || isSummer);
// • Test whether an item is in a array
let items = ["eggs", "bottle", "toothbrush", "chips"];
console.log("Is bottle in items array ? I predict true");
console.log(items.includes("bottle"));
// • Test whether an item is not in a array
console.log("Is battery in items array ? I predict true");
console.log(items.includes("battery"));
/*******************************************************************************

// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
// variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)

*******************************************************************************/
var alien_color = "green";
// Passes the test
if (alien_color == "green") {
    console.log("Congratulations! You've just earned 5 points");
}
// Fails the test
if (alien_color == "red") {
}
/************************************************************************************
 *
 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
write an if-else chain.

• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.

 *************************************************************************************/
// Using If Statement
var alien_color_1 = "green";
if (alien_color === "green") {
    console.log(`Player just earned 5 points`);
}
if (alien_color !== "green") {
    console.log(`Player just earned 10 points`);
}
// Using If-else Statement
if (alien_color === "red") {
    console.log(`Player just earned 5 points`);
}
else {
    console.log(`Player just earned 10 points`);
}
/************************************************************************************************************

27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.


****************************************************************************************************************/
var alien_color_2 = "red";
// 15 points
if (alien_color_2 == "green") {
    console.log("Player just earned 5 points");
}
else if (alien_color_2 == "yellow") {
    console.log("Player just earned 10 points");
}
else if (alien_color_2 == "red") {
    console.log("Player just earned 15 points");
}
// 10 points
var alien_color_3 = "yellow";
if (alien_color_3 == "green") {
    console.log("Player just earned 5 points");
}
else if (alien_color_3 == "yellow") {
    console.log("Player just earned 10 points");
}
else if (alien_color_3 == "red") {
    console.log("Player just earned 15 points");
}
// 5 Points
var alien_color_4 = "green";
if (alien_color_4 == "green") {
    console.log("Player just earned 5 points");
}
else if (alien_color_4 == "yellow") {
    console.log("Player just earned 10 points");
}
else if (alien_color_4 == "red") {
    console.log("Player just earned 15 points");
}
/*****************************************************************************
28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.
*********************************************************************************/
var personAge = 1;
if (personAge < 2) {
    console.log("Person is a baby");
}
else if (personAge < 4) {
    console.log("Person is a toddler");
}
else if (personAge < 13) {
    console.log("Person is a kid");
}
else if (personAge < 20) {
    console.log("Person is a teenager");
}
else if (personAge < 65) {
    console.log("Person is an adult");
}
else
    console.log("Person is an elder");
/**************************************************************************************
29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array,
the if block should print a statement,
such as You really like bananas!
************************************************************************************/
var favorite_fruits = ["Mango", "Apple", "Strawberry"];
for (let fruit of favorite_fruits) {
    if (fruit == "Mango") {
        console.log("You really like Mangoes");
    }
    if (fruit == "Banana") {
        console.log("You really like Banana");
    }
    if (fruit == "Apple") {
        console.log("You really like Apple");
    }
    if (fruit == "Strawberry") {
        console.log("You really like Strawberry");
    }
    if (fruit == "Watermelon") {
        console.log("You really like Watermelon");
    }
}
/***************************************************************************
30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
after they log in to a website. Loop through the array, and print a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*******************************************************************************/
var userName = ["admin", "saeed01", "zain01", "ali1", "saad"];
for (let name of userName) {
    if (name == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else
        console.log(`Hello ${name}, thank you for logging in again`);
}
/***************************************************************************
31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
****************************************************************************/
if (userName.length == 0) {
    console.log("We need to find some users");
}
else {
    userName.length = 0;
}
if (userName.length == 0) {
    console.log("We need to find some users!");
}
/*********************************************************************************************************************
32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that
  the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
***************************************************************************************************************************/
var current_users = ["Saeed", "Ali", "Zain", "Talha", "Saad"];
var new_users = ["Irzam", "Haroon", "Bilal", "Zain", "Raza"];
for (let name of new_users) {
    var usernameExists = current_users.some((currentUsername) => currentUsername.toLowerCase() === name.toLowerCase());
    if (usernameExists) {
        console.log(`The username '${name}' is not available. Please choose a different one.`);
    }
    else {
        console.log(`The username '${name}' is available.`);
    }
}
/*********************************************************************************************************************
33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
 • Store the numbers 1 through 9 in a array.
 • Loop through the array.
 • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th",
   and each result should be on a separate line.
***************************************************************************************************************************/
var ordianArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num of ordianArray) {
    if (num == 1) {
        console.log("1st");
    }
    else if (num == 2) {
        console.log("2nd");
    }
    else if (num == 3) {
        console.log("3rd");
    }
    else
        console.log(num + "th");
}
/*********************************************************************************************************************
34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
 • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
   For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
 • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or
   more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
***************************************************************************************************************************/
var favPizza = ["Tikka", "Pepperoni", "Bihari Kebab", "Special"];
for (let pizza of favPizza) {
    console.log(`${pizza} is my favorite pizza`);
}
console.log(`I like Pizza. I like desi flavor Pizza as well as English flavor Pizza. I really Love Pizza`);
/*********************************************************************************************************************
 35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list,
     and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as
  Any of these animals would make a great pet!
***************************************************************************************************************************/
var animalsArray = ["cat", "dog", "parrot"];
for (let animal of animalsArray) {
    console.log(animal);
    console.log(`A ${animal} would make a great pet.`);
}
console.log(`All these animals would make a great pet.`);
/*********************************************************************************************************************
36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
    The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
***************************************************************************************************************************/
function make_shirt(size = "Large", message = "I love typescript.") {
    console.log(`The size of the shirt is ${size}. The message to be printed on the shirt is as following "${message}"`);
}
make_shirt("Large", "No Pain, No Gain");
/*********************************************************************************************************************
37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
    Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
***************************************************************************************************************************/
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Hello World");
/*********************************************************************************************************************
38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence,
    such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities,
    at least one of which is not in the default country.
***************************************************************************************************************************/
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi");
describe_city("Faisalabad");
describe_city("Istanbul", "Turkey");
/*********************************************************************************************************************
39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string
    formatted like this:
 
"Lahore, Pakistan"
 
Call your function with at least three city-country pairs, and print the value that’s returned.
***************************************************************************************************************************/
function city_country(city, country) {
    console.log(`${city}, ${country}`);
}
city_country("Faisalabad", "Pakistan");
city_country("Istanbul", "Turkey");
city_country("Paris", "France");
function make_album(artist, Title, tracks) {
    var album = {
        artistName: artist,
        albumTitle: Title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Atif Aslam", "Doorie"));
console.log(make_album("Jal", "Sajni", 3));
console.log(make_album("Faris Shafi", "Introduction"));
/*********************************************************************************************************************
41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
***************************************************************************************************************************/
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
var magicians = [
    "Harry Houdini",
    "David Copperfield",
    "Penn Jillette (of Penn & Teller)",
    "Criss Angel",
    "Dynamo",
];
show_magicians(magicians);
/*********************************************************************************************************************
42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians
    by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
***************************************************************************************************************************/
function make_great(magicians) {
    return magicians.map((magician) => `The Great ${magician}`);
}
make_great(magicians);
/*********************************************************************************************************************
43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
    Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show
    that you have one array of the original names and one array with the Great added to each magician’s name.
***************************************************************************************************************************/
var modifiedMagicians = make_great(magicians);
show_magicians(magicians);
show_magicians(modifiedMagicians);
/*********************************************************************************************************************
44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that
    collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
    Call the function three times, using a different number of arguments each time.
***************************************************************************************************************************/
function make_sandwich(itemsOnSandwich) {
    console.log(`Ingredients are as following:`);
    for (let item of itemsOnSandwich) {
        console.log(` ${item}`);
    }
}
make_sandwich(["Cheese", "Chicken", "BBQ Sauce"]);
make_sandwich(["Peanut Butter"]);
make_sandwich(["Lettuce", "Mayonnaise", "Grilled Chicken"]);
function make_car(manufacturer, modelName, color, modelNumber) {
    var carDetails = {
        Manufacturer: manufacturer,
        Model_Name: modelName,
    };
    if (color !== undefined) {
        carDetails.Color = color;
    }
    if (modelNumber !== undefined) {
        carDetails.Model_Number = modelName;
    }
    return carDetails;
}
console.log(make_car("Corolla", "GLI"));
console.log(make_car("Honda", "City", "White", 2021));
