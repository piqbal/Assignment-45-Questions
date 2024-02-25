// Question-42:  Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(magicianNames) {
    for (let i = 0; i < magicianNames.length; i++) {
        console.log(`The Great ${magicianNames[i]}`);
    }
}
make_great(["Ali", "Faisal", "Waleed", "Zameer", "Toseef"]);
export {};
