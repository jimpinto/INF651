// Asking the user to enter a number 
let userNumber = parseInt(prompt("Enter a number:"), 10);

// Checking if the number is valid 
if (isNaN(userNumber)) {
    alert("Please enter a valid number.");
} else {
    // for loop for 1-10 
    for (let i = 1; i <= 10; i++) {
        let result = userNumber * i; // Multiplying the users number
        console.log(userNumber + " x " + i + " = " + result); // Displaying the result on the console
    }
}
