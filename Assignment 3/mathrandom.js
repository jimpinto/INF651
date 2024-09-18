// Generating a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// a variable to save the users guess 
let userGuess = 0;

// asking the user to guess until they get it right
while (userGuess !== randomNumber) {
    // asking the user for a their guess 
    userGuess = parseInt(prompt("Guess a number between 1 and 10:"), 10);

    // Checking if the guess is correct
    if (userGuess === randomNumber) {
        alert("Congratulations! You guessed the correct number!");
    } else {
        alert("Wrong guess. Try again.");
    }
}
