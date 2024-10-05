// starting with an empty array to store the watchlist

let watchlist = [];

// Function to add a movie to the watchlist

function addMovie() {
    // Getting the name of the movie
    const movieInput = document.getElementById('movie-name');
    // this is to trim any whitespace 
    const movieTitle = movieInput.value.trim();

    // Check if they put an empty value 
    if (movieTitle) {
        //adding the movie to the watchlist
        watchlist.push(movieTitle);
        // Clearing the input field after user adds the movie
        movieInput.value = '';
        // updating the watchlist display
        displayWatchlist();
    } else {
        // Asking the user to enter a title if they left it empty
        alert('Please enter a movie title.'); // Simple alert for user feedback
    }
}
// Function to show the most current watchlist on the webpage
function displayWatchlist() {
    // pretty clear container element of where the list will be displated
    const movieListContainer = document.getElementById('movie-list');
    // This is to clear any existing movie items in the container
    movieListContainer.innerHTML = '';


    watchlist.forEach((movie, index) => {
        // Create a new list item for each movie 
        const listItem = document.createElement('li');
        listItem.className = 'collection-item';

        // Setting the HTML to include the movie title and a button to remove
        listItem.innerHTML = `
            <span class="movie-title">${movie}</span>
            <a class="remove-btn secondary-content" onclick="removeMovie(${index})">
                <i class="material-icons">delete</i>
            </a>
        `;

        
        movieListContainer.appendChild(listItem);
    });
}


// This function removes a movie from the watchlist
function removeMovie(index) {
    // Remove the movie at specific index 
    watchlist.splice(index, 1);
    // Update the watchlist after removal 
    displayWatchlist();
}

// Listener for the add movie button
document.getElementById('add-movie-btn').addEventListener('click', addMovie);

// Optional but it allows pressing the enter key to add a movie
document.getElementById('movie-name').addEventListener('keypress', (event) => {
   // Check if the pressed key is "Enter"
    if (event.key === 'Enter') {
        // addmovie function
        addMovie();

    }
});
