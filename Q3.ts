//q3 
//Name cases: To lower case,Upper case &Title case
let Name: string = "Eric lious";
// for lower case: 
console.log(
    `Hello ${Name.toLowerCase()}, would you like to learn some Python today?`
);
// for UPPER case:
console.log(
    `Hello ${Name.toUpperCase()}, would you like to learn some Python today?`
);
// For Title case:
const subName:Array<string>=Name.split(" ")
 console.log(subName)
 const modifyarry=subName.map((value)=>{
  const temp=value[0].toUpperCase();
  console.log(temp);
  return temp + value.slice(1)
 })
 console.log(modifyarry.join(" "))
 export{}

/*.MAP: It allows us to store data in a key-value pair and remembers the
 original insertion order of the keys  */