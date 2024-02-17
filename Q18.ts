/* Q18: Seeing the World: Think of at least five places in the world you’d like to visit.
*/
// Step-1: Printing a simple Array
let locationsList: string[] = [
    "Saudia Arabia","Paris","Tokyo","Iraq", "America"
  ];
// Step-2:
console.log("---Original Array---"); 
  locationsList.map((location: string) => {
  console.log(location);
  }); //Print all elements of Array through it's key value.
// Step-3:
console.log("---Alphabetic order---")
  locationsList.sort().map((location: string) => {
   console.log(location);
  }); //Print in Alphabetic order. 
// Step-4:
console.log(`---is still in its original order---`);
  locationsList.map((location: string) => {
    console.log(location);
  }); 
// Step-5
console.log(`---Reverse ordered, Alphabetically---`)
  locationsList.reverse().map((location: string) => {
    console.log(location);
  });
  console.log(`---is still in its original order---`);
  locationsList.map((location: string) => {
    console.log(location);
  });
  console.log(`---Again reverse to show that in its original order---`);
  locationsList.reverse();
  locationsList.map((location: string) => {
    console.log(location);
  });
  console.log(`---Again reverse---`);
  locationsList.reverse();
  locationsList.map((location: string) => {
    console.log(location);
  });
  console.log(`---By sorting: its order has been changed.---`)
  locationsList.sort();
  locationsList.map((location: string) => {
    console.log(location);
  });
  console.log(`---Again sorting & Reverse---`)
  locationsList.reverse().sort();
  locationsList.map((location: string) => {
    console.log(location);
  })