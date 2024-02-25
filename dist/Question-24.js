// Question-24:  More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// • Tests for equality and inequality with strings
// Test 1 [True]
let name1 = "Pervaiz Iqbal";
name1 == "Pervaiz Iqbal" ? console.log("True") : console.log("False");
// Test 2 [False]
let name2 = "Hassan Iqbal";
name2 == "hassan" ? console.log("True") : console.log("False");
// // • Tests using the lower case function
// Test 1 [True]
let city = "LAHORE";
city.toLowerCase() == "lahore" ? console.log("True") : console.log("False");
// Test 2 [False]
let city1 = "LAHOR";
city1.toLowerCase() == "lahore" ? console.log("True") : console.log("False");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//Test 1 [True]
let num1 = 10;
num1 <= 15 ? console.log("True") : console.log("False");
// Test 2 [False]
let num2 = 30;
num2 > 50 || num2 < 20 ? console.log("True") : console.log("False");
//// • Tests using "and" and "or" operators
// Test1 [True]
let num3 = 40;
num3 <= 40 || num3 > 50 ? console.log("True") : console.log("False");
// Test2 [False]
let num4 = 40;
num4 <= 40 && num4 > 50 ? console.log("True") : console.log("False");
// • Test whether an item is in a array
// Test 1 [True]
let cars = ["Honda", "Ford", "General Motors",];
cars.includes("Honda") ? console.log("True") : console.log("False");
// Test 1 [False]
cars.includes("Ferrari") ? console.log("True") : console.log("False");
export {};
