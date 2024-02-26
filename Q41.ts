/* Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array. */
let show_magicians=(magicians: string[]) => {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

let magiciansArray: string[] = ["Rick Jay", "Teller", "David Copperfield"];

show_magicians(magiciansArray);
