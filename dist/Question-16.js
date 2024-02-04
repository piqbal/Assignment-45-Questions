//  Question-16:  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
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
export {};
