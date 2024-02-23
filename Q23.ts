/*Conditional Tests: Write a series of conditional tests. Print a statement
describing each test and your prediction for the results of each test. */

let car: string = 'subaru';
let age: number = 25;
let isSunny: boolean = true;
let fruits: string[] = ['apple', 'banana', 'orange'];
let person: { name: string, age: number } = { name: 'John', age: 30 };

// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

// Test 2
console.log("Is age > 18? I predict True.");
console.log(age > 18);

// Test 3
console.log("Is isSunny == true? I predict True.");
console.log(isSunny == true);

// Test 4
console.log("Is 'banana' included in fruits? I predict True.");
console.log(fruits.includes('banana'));

// Test 5
console.log("Is person's age less than 40? I predict True.");
console.log(person.age < 40);

// Test 6
console.log("Is car == 'ford'? I predict False.");
console.log(car == 'ford');

// Test 7
console.log("Is age < 21? I predict False.");
console.log(age < 21);

// Test 8
console.log("Is isSunny != true? I predict False.");
console.log(isSunny != true);

// Test 9
console.log("Is 'grape' included in fruits? I predict False.");
console.log(fruits.includes('grape'));

// Test 10
console.log("Is person's age greater than 50? I predict False.");
console.log(person.age > 50);


export{}