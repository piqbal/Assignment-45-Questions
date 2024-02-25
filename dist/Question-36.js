// Question-36:  T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, text) {
    console.log(`The size of shirt is ${size} and ${text}`);
}
make_shirt(21, "this is a small size shirt.");
make_shirt(22, "this is a medium size shirt.");
make_shirt(23, "this is a large size shirt.");
export {};
