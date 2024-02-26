/*Pizzas: Think of at least three kinds of your favorite pizza. Store these
pizza names in a array, and then use a for loop to print the name of each pizza.*/

let favorite_pizzas:string[]=["Fajita", "Margherita", "BBQ Chicken"];
console.log("List of favorite pizzas:");
for (let i = 0; i < favorite_pizzas.length; i++) {
    console.log(favorite_pizzas[i]);
}

// Printing a sentence for each pizza
console.log("\nStatements about favorite pizzas:");
for (let pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log("\nI really love pizza!");