// Question=6:  Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let personName_with_whitespace:string="\t   Hassan    \n";
console.log(personName_with_whitespace)

let personName_without_whitespace:string= personName_with_whitespace.trim()
console.log(personName_without_whitespace)