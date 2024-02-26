/*No Users: Add an if test to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/

let usernames: string[] = ["Eric","Smith","John"]; 
if (usernames.length > 0) {
    // If not empty, print each username
    console.log("List of users:");
    usernames.map((user: string)=>{
        console.log(user);
    })
} else {
    // If empty, print the message
    console.log("We need to find some users!");
}

// Clear the array
usernames = [];

// Check if the list of users is not empty after clearing
if (usernames.length > 0) {
    console.log("List of users:");
    usernames.map((user: string)=>{
        console.log(user);
    })
 } else {
    console.log("We need to find some users!");
}

export{}
