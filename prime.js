var prompt = require("prompt");

function prime(n){
    var count=0;
    for(let i=0;i<=n;i++){
    if(n%i==0){
        count++;
    }
}
    if(count==2){

        console.log(num+"is prime number")
    }
    else{
        console.log(num+"is not prime no")
    }
}
var num=prompt("enter no");
prime(num)

