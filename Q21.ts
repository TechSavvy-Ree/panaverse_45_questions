/* They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items. */
let cars:{
    brand:string;
    model:string;
    color:string;
    year:number;
}
let car1={
   brand:"Honda",
   model:"Civic",
   year:2004,
   color:"White"
}
console.log("Information about cars:");
console.log(car1);
car1.color="green";
console.log(car1);

