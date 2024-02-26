/*Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.
 */
let show_magicians=(magicians: string[]) =>{
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push("The Great " + magicians[i]);
    }
    return greatMagicians;
}

const magiciansArray: string[] = ["Rick Jay", "Teller", "David Copperfield"];

const greatMagiciansArray: string[] = make_great([...magiciansArray]); 

show_magicians(magiciansArray); // Original array remains unchanged
console.log("\n");
show_magicians(greatMagiciansArray); 

export{}