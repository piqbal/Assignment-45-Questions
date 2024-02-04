// Question=17:  Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
const friends = ["Ali", "Waleed", "Toseef"];
for (let i = 0; i < friends.length; i++) {
    console.log(`Hello ${friends[i]}, I invite you to dinner with me tonight.`);
}
friends.pop();
friends.push("Asim");
for (let i = 0; i < friends.length; i++) {
    console.log(`Hello ${friends[i]}, I am inviting you to dinner with me tonight.`);
}
friends.unshift("Shakeel");
friends.splice(2, 0, "Bilal");
friends.push("Faizan");
for (let i = 0; i < friends.length; i++) {
    console.log(`Hello ${friends[i]}, Now i am inviting to all of you to dinner tonigh.`);
}
console.log("Unfortunately, i can invite only two peoples for dinner tonight.");
// friends.pop()
console.log("Sorry i couldn't invite you to dinnder due to some reason.", friends.pop);
export {};
