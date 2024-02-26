/* Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
 Most ordinal numbers end in th, except 1, 2, and 3. */
 
 let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 for (let i = 0; i < numbers.length; i++) {
     let number = numbers[i];
     let ordinalEnding: string;
 
     if (number === 1) {
         ordinalEnding = "st";
     } else if (number === 2) {
         ordinalEnding = "nd";
     } else if (number === 3) {
         ordinalEnding = "rd";
     } else {
         ordinalEnding = "th";
     }
 
     console.log(`${number}${ordinalEnding}`);
 }
 