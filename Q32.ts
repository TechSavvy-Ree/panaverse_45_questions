/* Checking Usernames to ensure that everyone has a unique username */
let current_users:string[]=["John", "Alice", "Bob", "Jane", "Mike"];
let new_users:string[] = ["Kate", "Bob", "Sam", "ALICE", "Tom"];
new_users.map((name: string) => {
    let usernameExists = current_users.some(current_user => current_user.toLowerCase() === name.toLowerCase());
    if (usernameExists){           
      console.log("username", name, "already in use. Please enter a new username ");
    } else {
      console.log("username", name, "is available");
    }
  });