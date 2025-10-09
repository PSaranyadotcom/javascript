let variable=_=>console.log('hi')
variable();
let m=(function(a,b){
    return a+b;
})(2,5);
console.log(m)
function calc(a,b=0){
    return (2*(a+b));
    
}
console.log(calc(3,6))