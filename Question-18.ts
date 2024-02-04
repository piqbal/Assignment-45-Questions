// // Question-18:  Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.




let seeingWorld:string[]=["USA", "Japan", "Switzerland", "Israel", "Netherland"]
console.log(seeingWorld)  // (Print array in its original order.)


let sortedArray:string[]= [...seeingWorld].sort()
console.log(sortedArray)   //( Print your array in alphabetical order without modifying the actual list)

console.log(seeingWorld)  //(Show that your array is still in its original order by printing it.)


let reverseSorted:string[]=[...seeingWorld].sort().reverse()
console.log(reverseSorted)  // (Print your array in reverse alphabetical order without changing the order of the original list.)

console.log(seeingWorld)  //(Show that your array is still in its original order by printing it again.)

let reverseList:string[]=[...seeingWorld].reverse()
console.log(reverseList)  //(Reverse the order of your list. Print the array to show that its order has changed.)


let againReverseList:string[]=[...reverseList].reverse()
console.log(againReverseList) //( Reverse the order of your list again. Print the list to show it’s back to its original order.)

let alphabetical:string[]=seeingWorld.sort()
console.log(seeingWorld)  //(Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.)

let reverseAlphabatical:string[]=seeingWorld.reverse()
console.log(seeingWorld)  //(Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.)