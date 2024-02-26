/*Album: Write a function called make_album() that builds a Object describing a music album. 
The function should take in an artist name and an album title, and it should return a 
Object containing these two pieces of information*/
type Album={
    artist_name:string;
    album_title:string;
    tracks?:number;
}
let make_album=(artist:string, title:string, tracks?:number)=>{
    let album: Album = {
        artist_name: artist,
        album_title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Creating  albums
let album1: Album = make_album("Junaid Jamshaid", "Badr_ud_Duja");
let album2: Album = make_album("Owais Raza Qadri", "Mein Madine chala",16);

// Printing the albums
console.log(album1);
console.log(album2);;