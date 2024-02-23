/*Alien Colors #3:If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points. */

let alien_color3 = (color: string) => {
    if(color === "green")
       console.log("Congrats! you earned 5 points!")
      else if (color === "yellow")
       console.log("Congrats! you earned 10 points!")
      else if (color === "red") 
       console.log("Congrats! you earned 15 points!");
  };
  alien_color3("green");
  alien_color3("red");
  alien_color3("yellow");
