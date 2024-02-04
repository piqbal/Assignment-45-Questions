// Question-15:  Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.


const friends:string[]=["Ali", "Waleed", "Toseef"]

for(let i=0; i<friends.length; i++){
    console.log(`Hello ${friends[i]}, I invite you to dinner with me today.`)}


 friends.pop()
 friends.push("Asim")


 for(let i=0; i<friends.length; i++){
    console.log(`Hello ${friends[i]}, I am inviting you to dinner with me today.`)}
