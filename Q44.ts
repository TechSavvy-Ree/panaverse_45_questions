/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call
provides, and it should print a summary of the sandwich that is being ordered. 
Call the function three times, using a different number of arguments each time.*/

let makeSandwich=(...ingredients: string[]) =>{
    console.log("Making a sandwich with the following ingredients:");
    ingredients.forEach(ingredient => {
        console.log("- " + ingredient);
    });
    console.log("Enjoy your sandwich!");
}

// Call the function
makeSandwich("Bread", "Ham", "Cheese");
makeSandwich("Baguette", "Lettuce", "Tomato", "Mayonnaise");
makeSandwich("Whole wheat bread", "Turkey", "Avocado");
