// Question-22:  Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let arr1 = [1, 2, 3, 4, 5];
let index = 7;
console.log(arr1[index]); // Intentional error and it will return an index error.
if (index >= 0 && index < arr1.length) {
    console.log(arr1[index]);
}
else {
    console.log("Your index is out of range.");
}
export {};
