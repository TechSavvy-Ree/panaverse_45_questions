/*22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
to produce an index error. Make sure you correct the error before closing the program.
*/
let myArray: number[] = [1, 2, 3, 4, 5];
 // 'myArray' has 5 elements, indexed from 0 to 4. 

// Try to access an element
let index = 10; 
console.log(myArray[index]); // This line will produce an index error

// Correct the error by ensuring the index is within bounds
if (index >= 0 && index < myArray.length) {
    console.log("Element at index", index, "is", myArray[index]);
} else {
    console.log("Index", index, "is out of bounds.");
}
