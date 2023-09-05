// 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

var friendNames: string[] = ["Ali", "Zain", "Saeed", "Talha", "Hassan"];
for (let name of friendNames) {
  console.log(name);
}

// ******************************************************************************

// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
// The text of each message should be the same, but each message should be personalized with the person’s name.

friendNames.forEach((data) => console.log(`Hey ${data}, How are you doing?`));

// ******************************************************************************

// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

var transportList: string[] = [
  "Tesla Model S",
  "Harley-Davidson",
  "Private Jet",
  "Kawasaki Ninja H2",
];
transportList.forEach((data) => console.log(`I would like to own a ${data}`));

// ******************************************************************************

// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes
// at least three people you’d like to invite to dinner.Then use your list to print a message to each person, inviting them to dinner.

var guestList: string[] = ["Ali", "Zain", "Saeed", "Talha", "Hassan"];
guestList.forEach((data) =>
  console.log(`Hey ${data}, I would like to invite you to dinner tonight.`)
);

// ******************************************************************************

// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.

var guestWhoCantMakeIt: string = "Talha";

var indexofGuestWhoCantMakeIt: number = guestList.indexOf(guestWhoCantMakeIt);

if (indexofGuestWhoCantMakeIt !== -1) {
  guestList[indexofGuestWhoCantMakeIt] = "Irzam";
}

guestList.forEach((data) =>
  console.log(`Hey ${data}, I would like to invite you to dinner tonight.`)
);

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

console.log(
  `Sorry everyone! ${guestWhoCantMakeIt} can't make it to the dinner tonight!`
);

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.

// Already Done this above

// ******************************************************************************

// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

guestList.forEach((data) =>
  console.log(`Hey ${data}, I've found a bigger table`)
);

guestList.unshift("Sayyam");
guestList.splice(Math.floor((guestList.length - 1) / 2), 0, "Usman");
guestList.push("Arsalan");

guestList.forEach((data) =>
  console.log(`Hey ${data}, You're invited to the dinner tonight`)
);

// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.

console.log(`Hey guys! I Can only invite two persons to the dinner`);

while (guestList.length > 2) {
  let removedGuest: any = guestList.pop();
  console.log(`Hey ${removedGuest}, I am Sorry I cannot invite you to dinner`);
}

guestList.forEach((data) =>
  console.log(`Hey ${data}, you're invited to the dinner`)
);

while ((guestList.length = 0)) {
  guestList.pop();
}

console.log(`Guest List: ${guestList}`);
