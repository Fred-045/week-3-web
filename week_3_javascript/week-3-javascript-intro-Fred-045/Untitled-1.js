// Declare variables of different data types
let name = "FredICK";      // String
let age = 23;           // Number
let isStudent = true;   // Boolean

// Function to add two numbers
function add(x, b) {
    return x + b;
}

// Function to subtract two numbers
function subtract(x, b) {
    return x - b;
}

// Function to divide two numbers
function divide(x, b) {
    if (b === 0) {
        console.log("Division by zero is not allowed.");
        return null;
    }
    return x / b;
}

// Function to multiply two numbers
function multiply(x , b) {
    return x * b;
}

// Test the functions and log the output
console.log("Addition of 5 and 3:", add(5, 3));
console.log("Subtraction of 5 from 10:", subtract(10, 5));
console.log("Division of 10 by 2:", divide(10, 2));
console.log("Multiplication of 4 and 3:", multiply(4, 3));

// Log the variables
console.log("Name:", name);
console.log("Age:", age);
console.log("Is student:", isStudent);
