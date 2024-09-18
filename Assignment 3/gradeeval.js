// asking user to enter their score
let score = parseInt(prompt("Enter your score (0-100):"), 10);

// Checking if the input is valid and a score 1-100 
if (isNaN(score) || score < 0 || score > 100) {
    alert("Please enter a valid score between 0 and 100.");
} else {
    // Determining the letter grade by the score.
    let grade;
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    
    // showing the user their grade 
    console.log("Your grade is: " + grade);
    alert("Your grade is: " + grade);
}
