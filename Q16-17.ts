
let guestList:Array<string> = ["Smith", "stamen","Juleyat","Robert"];

guestList.map((name: string) => {
  console.log(`Hi ${name}, I am inviting you today on dinner at my Home`);
})
/*Q16:More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner. */

console.log(`------Bigger list for  dinner------`);

guestList.unshift("Herry");  // Herry added at 0 index of an Array
guestList.splice(3, 0, "Jack"); //Here "Jack" added at 3rd index(means after stamen) of an array with 0 deletion 
guestList.push("James"); // James added at the end of array.
console.log(guestList);
guestList.map((name: string) => {
  console.log(`Hi ${name}, I am inviting you today on dinner at my Home`);
});
/*Q:17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
 and you have space for only two guests.
 */ 
console.log(`----When you have space only for two guests.----`);

console.log(`Sorry, ${guestList.pop()} can't make it to dinner.`);
console.log(`Sorry, ${guestList.pop()} can't make it to dinner.`);
console.log(`Sorry, ${guestList.pop()} can't make it to dinner.`);
console.log(`Sorry, ${guestList.pop()} can't make it to dinner.`);
console.log(`Sorry, ${guestList.pop()} can't make it to dinner.`);

guestList.map((name: string) => {
  console.log(`Hi ${name}, you are still inviting on dinner at my Home`);
});

guestList.pop();
guestList.pop();
//After popping: we have null result because last two names are also popped out.
guestList.map((name:string) => {
  console.log(`Hi ${name}, you are still inviting on dinner at my Home`);
});
