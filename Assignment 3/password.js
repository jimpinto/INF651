// Function for users password 
function setPassword() {
    let password;
    let confirmPassword;

    do {
        // so the user can see we need their password 
        password = prompt("Enter your password:");

        // telling the user to re-enter their password 
        confirmPassword = prompt("Re-enter your password:");

        // Checking if it matches 
        if (password === confirmPassword) {
            alert("Password set successfully!");
            return; // the function exits if the passwords are the same
        } else {
            alert("Passwords do not match. Please try again.");
        }
    } while (password !== confirmPassword); // This is to see if the passwords match
}

setPassword();
