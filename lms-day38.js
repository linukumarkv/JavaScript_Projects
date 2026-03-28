//Write a program that checks if a number is positive, negative, or zero.
//2. Create a switch statement to display the grade description based on a letter grade (A, B, C, D, F).

let number =30

if (number > 0){
    console.log(" The number is positive")    
} else if (number < 0){
    console.log("The number is negative")    
} else{
    console.log("The number is zero")
}


//Create a switch statement to display the grade description based on a letter grade (A, B, C, D, F).

let grade = 'C'

switch (grade){
    case 'A':
        console.log("Excellent - Outstanding perfromance!");
        break;
    case 'B':
        console.log("Good - performance!");
        break;
    case 'C':
        console.log("Met the Expectations!");
        break;
    case 'D':
        console.log("eeds Improvement!");
        break;
    case 'F':
        console.log("Did not meet the minimum requirements");
        break;
    default:
    console.log("Invalid Grade - Please enter A, B, C, D, or F");
}
   