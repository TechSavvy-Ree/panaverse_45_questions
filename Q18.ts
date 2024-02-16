/* Q18: Seeing the World: Think of at least five places in the world you’d like to visit.
*/
// Step-1: Printing a simple Array
let locationsList: string[] = [
    "Saudia Arabia","Paris","Tokyo","Iraq", "America"
  ];
// Step-2:
console.log("Original Array"); 
console.log(`----------------------`);
  locationsList.map((location: string) => {
  console.log(location);
  }); //Print 

  console.log(`----------------------`)
// Step-3:
  locationsList.sort().map((location: string) => {
   console.log(location);
  });
  console.log(`----------------------`)
// Step-4:
  locationsList.map((location: string) => {
    console.log(location);
  });
  console.log(`----------------------`)
// Step-5
  locationsList.reverse().map((location: string) => {
    console.log(location);
  });
  console.log(`----------------------`)

  locationsList.map((location: string) => {
    console.log(location);
  });
  console.log(`----------------------`)

  locationsList.reverse();
  locationsList.map((location: string) => {
    console.log(location);
  });
  console.log(`----------------------`)

  locationsList.reverse();
  locationsList.map((location: string) => {
    console.log(location);
  });
  console.log(`----------------------`)
  locationsList.sort();
  locationsList.map((location: string) => {
    console.log(location);
  });
  console.log(`----------------------`)
  locationsList.reverse().sort();
  locationsList.map((location: string) => {
    console.log(location);
  })