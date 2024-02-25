// Question-41:  Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicianNames) {
    for (let i = 0; i < magicianNames.length; i++) {
        console.log(magicianNames[i]);
    }
}
show_magicians(["Ali", "Faisal", "Waleed", "Zameer", "Toseef"]);
export {};
