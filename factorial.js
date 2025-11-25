
// function factorial(n){
    
//     if (n === 0) {
//         return 1;
//     }
//      else {
        
//         return n * factorial(n - 1);
//     }
// }


// //let num = prompt("enter no:"); 
// var num = prompt("Enter no:");
// var fact = factorial(num);
// // Using prompt to get user input


// // Displaying the user input



// console.log(`The factorial of ${num} is: ${fact}`);
const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));

function factorial(n) {
  if (n < 0) {
    return "Factorial not possible for negative numbers";
  }
  if (n === 0 || n === 1) {
    return 1; // base case
  }
  return n * factorial(n - 1); // recursive call
}

console.log("Factorial of " + num + " is: " + factorial(num));
//npm install prompt-sync u need to run this command to install prompt to run in node.js environment
