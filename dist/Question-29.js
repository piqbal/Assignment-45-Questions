// Question-29:  Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["Apple", "Banana", "Grapes", "Plum", "Strawberry"];
if (favorite_fruits.includes("Apple")) {
    console.log("I like Apple.");
}
else {
    console.log("Apple is not in your list of favorite fruits.");
}
if (favorite_fruits.includes("Banana")) {
    console.log("I like Banana.");
}
else {
    console.log("Banana is not in your list of favorite fruits.");
}
if (favorite_fruits.includes("Grapes")) {
    console.log("I like Grapes.");
}
else {
    console.log("Grapes is not in your list of favorite fruits.");
}
if (favorite_fruits.includes("Plum")) {
    console.log("I like Plum.");
}
else {
    console.log("plum is not in your list of favorite fruits.");
}
if (favorite_fruits.includes("Strawberry")) {
    console.log("I like Strawberry.");
}
else {
    console.log("Strawberry is not in your list of favorite fruits.");
}
export {};
