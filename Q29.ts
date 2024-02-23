/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements 
that check for certain fruits in your array.
 */
let favorite_fruits:string[]=["Banana", "Mango","Apple"]
if(favorite_fruits.includes("Mango")){
    console.log("You really like Mangoes!");
}
if(favorite_fruits.includes("Banana")){
    console.log("You really like Bananas!");
}
if(favorite_fruits.includes("Apple")){
    console.log("You really like Apples!");
}
if (favorite_fruits.includes("Orange")) {
    console.log("You really like Oranges!");
} else {
    console.log("Oranges are not in your list of favorite fruits.");
}

if (favorite_fruits.includes("Strawbery")) {
    console.log("You really like Strawberry!");
} else {
    console.log("Strawberry are not in your list of favorite fruits.");
}



