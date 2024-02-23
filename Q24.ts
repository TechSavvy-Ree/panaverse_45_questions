
/* More Conditional Tests: You don’t have to limit the number of tests you create to 10.
 If you want to try more comparisons, write more tests*/

// Tests for equality and inequality with strings
let fruit1: string = 'apple';
let fruit2: string = 'orange';
console.log("Are fruit1 and fruit2 equal?");
console.log(fruit1 == fruit2);

// Tests using the lower case function
let word1: string = 'Hello';
let word2: string = 'hello';
console.log("Are word1 and word2 equal after converting to lowercase? I predict True.");
console.log(word1.toLowerCase() == word2.toLowerCase());

// Numerical tests
let num1: number = 10;
let num2: number = 5;
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2);

console.log("Is num1 less than or equal to num2? I predict False.");
console.log(num1 <= num2);

// Tests using "and" and "or" operators
let cold: boolean = true;
let warm: boolean = false;
console.log("Is it cold and warm? I predict False.");
console.log(cold && warm);

console.log("Is it cold or warm? I predict True.");
console.log(cold || warm);

// Test whether an item is in an array
let colors: string[] = ['red', 'blue', 'green'];
let colorToCheck: string = 'blue';
console.log(`Is ${colorToCheck} in the colors array? I predict True.`);
console.log(colors.includes(colorToCheck));

// Test whether an item is not in an array
let colors1: string[] = ['red', 'blue', 'green'];
let colorToCheck2: string = 'yellow';
console.log(`Is ${colorToCheck2} in the colors array? I predict False.`);
console.log(colors1.includes(colorToCheck2));

export{}