/*Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.*/

let animals: string[]=["Dog","Cat","Rabbit"];
console.log("List of animals:");

for (let i= 0; i < animals.length; i++) {
    const element = animals[i];    
}
console.log("\nStatements about animals:");
for(let animal of animals){
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}
console.log("\nAny of these animals would make a great pet!");