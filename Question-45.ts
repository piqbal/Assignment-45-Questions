// Question-45:  Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

interface car{
    manufacturer: string
    model: string
    color?: string
    year?:number
    
}

function creatcar(manufacturer:string, model:string, options?:{}):car{
    let car:car={
        manufacturer,
        model,
        ...options
    }
        return car
}
let result1=creatcar("Honda", "Civic")
let result2=creatcar("Toyota", "LandCruiser", {color: "Black", year:2024})
let result3=creatcar("Toyota", "Prado", {color: "Black", year:2024, features: ["Leather Seats", "Alloy Rim"]})

console.log(result1)
console.log(result2)
console.log(result3)


