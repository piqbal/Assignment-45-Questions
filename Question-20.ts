// Question-20:  Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let citiesList:string[]=["Lahore", "Amsterdam", "Hamburg", "Houston", "Montreal", ]

console.log("List of cities.")

// for(let i=0; i<citiesList.length; i++){
//     console.log(citiesList[i])
// }

for(let city of citiesList){
    console.log(city)
}