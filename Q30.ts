/* Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
after they log in to a website. */
let usernames:string[]=["Eric","Smith", "Admin Stamen","Juleyat","Robert"]
for(let name of usernames){
    if(name=="Admin Stamen"){
        console.log("Hello Admin, would you like to see a status report?");
    }else{
        console.log(`Hello ${name}, thank you for logging in again.`);
    }
}