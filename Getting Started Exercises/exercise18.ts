// 18. Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

var favoritePlaces: string[] = [
  "Taj Mahal",
  "Istanbul",
  "Bora Bora",
  "Baku",
  "Maldives",
];

// • Print your array in its original order.

console.log(favoritePlaces);

// • Print your array in alphabetical order without modifying the actual list.

var sortedPlaces: string[] = [...favoritePlaces].sort();

console.log(sortedPlaces.join(", "));

// • Show that your array is still in its original order by printing it.

console.log(favoritePlaces);

// • Print your array in reverse alphabetical order without changing the order of the original list.

var reverseSortedPlaces: string[] = [...favoritePlaces].sort((a, b) =>
  b.localeCompare(a)
);

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


