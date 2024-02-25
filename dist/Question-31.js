// Question-31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let usernames = ["Admin", "Pervaiz", "Hassan", "Ali", "Huzaifa"];
if (usernames.length == 0) {
    console.log("You need to find some users.");
}
else {
    for (let i = 0; i < usernames.length; i++) {
        if (usernames[i] == "Admin") {
            console.log("Hello Admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
        }
    }
}
// Remove all of the usernames from your array
let usernames1 = [];
if (usernames1.length == 0) {
    console.log("You need to find some users.");
}
else {
    for (let i = 0; i < usernames1.length; i++) {
        if (usernames1[i] == "Admin") {
            console.log("Hello Admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${usernames1[i]}, thank you for logging in again.`);
        }
    }
}
export {};
