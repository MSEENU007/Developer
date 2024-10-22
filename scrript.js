console.log("Hello, World!");
let myVariable = "Hello!";
let userName = prompt("Please enter your name:");
let userAge = prompt("Please enter your age:");
if (userAge >= 18) {
    console.log(`${userName}, you are eligible to vote.`);
} else {
    console.log(`${userName}, you are not eligible to vote.`);
}
function calculateFactorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}
let number = 5; 
console.log(`The factorial of ${number} is: ${calculateFactorial(number)}`);
