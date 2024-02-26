/*reat Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.*/
let show_magicians=(magicians: string[]) => {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}

const magiciansArray: string[] = ["Rick Jay", "Teller", "David Copperfield"];

make_great(magiciansArray);
show_magicians(magiciansArray);

export{}