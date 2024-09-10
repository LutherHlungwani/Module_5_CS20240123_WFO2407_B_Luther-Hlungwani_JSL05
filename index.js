// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Don't Stop Me Now", artist: "Queen", genre: "Rock"},
    { title: "Fool Me", artist: "Kelvin Momo", genre: "Amapiano"},
    { title: "Billy Jean", artist: "Michael Jackson", genre: "Pop"},
    { title: "Hade", artist: "Mr Jazziq", genre:"Amapiano"},
    { title: "East & South", artist: "Kelvin Momo", genre: "Amapiano"}
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Rock",
    "Rocket": "Pop",
    "Groot": "Amapiano",
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    const playlists = {};

    for (const[guardian, genre]of Object.entries(guardians)) {
        playlists[guardian] = songs
        .filter(song => song.genre === genre)
        .map(song => `${song.title} by ${song.artist}`);
    }
    
    return playlists;
}


// Call generatePlaylist and display the playlists for each Guardian
const playlists = generatePlaylist(guardians, songs);


