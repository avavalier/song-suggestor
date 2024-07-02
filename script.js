
const songSuggestions = {
    // Try to style link to not look like link
    rock: ["<a href= 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>Click to reveal number one suggestion</a>",
        "Wonderwall - Oasis", 
        "While my Guitar Gently Weeps - The Beatles",
        "Snow - Red Hot Chili Peppers", 
        "Song For Someone - U2",
        "Crazy Little Thing Called Love - Queen",
        "Pyro - Kings of Leon",
        "She - Green Day",
        "All the Small Things - Blink-182",
        "Learn To Fly - Foo Fighters",
        "How Far We've Come - Matchbox Twenty (Ava's Top Pick)"],
    pop: ["<a href= 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>Click to reveal number one suggestion</a>",
        "All My Love - Noah Kahan", 
        "Send My Love - Adele",
        "Daylight - Maroon 5",
        "Drive By - Train",
        "Haley's Comet - Billie Eilish",
        "Sweet Creature - Harry Styles",
        "Lego House - Ed Sheeran",
        "Can't Catch Me Now - Olivia Rodrigo", 
        "Supercut - Lorde",
        "loml - Taylor Swift (Ava's Top Pick)"],
    folk: ["Flowers in Your Hair - The Lumineers", 
        "Roslyn - Bon Iver", 
        "I Will Wait - Mumford & Sons",
        "Wasteland, Baby! - Hozier",
        "Home - Edward Sharpe",
        "A Life Where We Work Out - Flatland Calvary",
        "End of the Earth - Lord Huron",
        "Budapest - George Ezra",
        "You're Gonna Go Far - Noah Kahan",
        "Work Song - Hozier (Ava's Top Pick)"],
    worship: ["O' Come to the Alter - Elevation Worship", 
        "Honey In the Rock - Brooke Ligertwood", 
        "Holy Spirit - Francesca Battistelli",
        "Greater - MercyMe",
        "Gratitude - North Point Worship",
        "Firm Foundation - Cody Carnes",
        "Living Hope - Phil Wickham",
        "Graves Into Gardens - Elevation Worship",
        "Monday Morning Faith - SEU Worship",
        "Thank God I Do - Lauren Daigle (Ava's Top Pick"],
    rap: ["Sandra's Rose - Drake", 
        "151 Rum - JID", 
        "COFFEE BEAN - Travis Scott",
        "The World Is Yours - Nas",
        "BURN - Kanye West",
        "Rigamortus - Kendrick Lamar",
        "Neighbors - J. Cole",
        "Kenanu Reeves - Logic",
        "THAT'S THAT - MF DOOM",
        "Missed Calls - Mac Miller  (Ava's Top Pick)",],
    country: ["Ragweed - Koe Wetzel", 
         "The Bull - Kip Moore",
         "Feathered Indians - Tyler Childers",
         "Wondering Why - The Red Clay Strays",
         "Drowning - Sam barber",
         "Springsteen - Eric Church",
         "Gettin' By - Flatland Calvary",
         "America's Sweetheart - Elle King",
         "Shotgun Rider - Tim McGraw",
         "East Side of Sorrow - Zach Bryan (Ava's Top Pick)"],
    misc: ["Blackbird - The Beatles", 
        "Saint Ferdinand - Lauren Daigle",
         "Sparks - Coldplay",
         "Ivy - Frank Ocean",
         "Summer Friends - Chance The Rapper",
         "You Are In Love - Taylor Swift",
         "Stop In Nevada - Billy Joel",
         "Jackie and Wilson - Hozier",
         "Look What You've Done - Drake",
         "Rebels - Matchbox Twenty"]
};

document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('getSuggestionsButton');
    button.addEventListener('click', getSuggestions);
});

function getSuggestions() {
    let genreInput = document.getElementById('genreInput');
    let genre = genreInput.value.toLowerCase();
    let suggestionsDiv = document.getElementById('suggestions');
    suggestionsDiv.innerHTML = '';

    if (genre in songSuggestions) {
        let suggestions = songSuggestions[genre].map(song => `<li>${song}</li>`).join('');
        suggestionsDiv.innerHTML = `<ul>${suggestions}</ul>`;
    } else {
        suggestionsDiv.innerHTML = '<p>No suggestions available for this genre.</p>';
    }
}