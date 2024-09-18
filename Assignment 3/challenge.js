// asking the user for a number between 1-7
let dayNumber = parseInt(prompt("Enter a number between 1 and 7:"), 10);

// using switch case to determine the day
let dayOfWeek;

switch (dayNumber) {
    case 1:
        dayOfWeek = "Sunday";
        break;
    case 2:
        dayOfWeek = "Monday";
        break;
    case 3:
        dayOfWeek = "Tuesday";
        break;
    case 4:
        dayOfWeek = "Wednesday";
        break;
    case 5:
        dayOfWeek = "Thursday";
        break;
    case 6:
        dayOfWeek = "Friday";
        break;
    case 7:
        dayOfWeek = "Saturday";
        break;
    default:
        dayOfWeek = "Invalid input. Please enter a number between 1 and 7.";
        break;
}

// Display the users result
console.log("Day of the week: " + dayOfWeek);
alert("Day of the week: " + dayOfWeek);
