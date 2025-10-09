
function factorial(n){
    
    if (n === 0) {
        return 1;
    }
     else {
        
        return n * factorial(n - 1);
    }
}


//let num = prompt("enter no:"); 
var num = prompt("Enter no:");
var fact = factorial(num);
// Using prompt to get user input


// Displaying the user input



console.log(`The factorial of ${num} is: ${fact}`);
