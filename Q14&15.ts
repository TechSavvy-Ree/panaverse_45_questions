/* Q14:Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
Make a list that includes at least three people you’d like to invite to dinner.
 Then use your list to print a message to each person, inviting them to dinner.*/

 let guestList: Array<string> = ["Eric", "stamen","Juleyat","Robert"];
guestList.map((name: string) => {
  console.log(`Hi ${name}, I am inviting you on dinner at my Home`);
});
/* Q15: Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.
*/

console.log("--------------Eric can't come on dinner-------");
guestList = ["Smith", "stamen","Juleyat","Robert"];

guestList.map((name: string) => {
  console.log(`Hi ${name}, I am inviting you today on dinner at my Home`);
});


export {};