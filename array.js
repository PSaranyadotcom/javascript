let sum=0,sqr=1
function a(arr){

for(let i of arr){
    if(arr.lenght%i==0){
       
        sqr= i*i
    }
    sum=sum+sqr
}
console.log(sum)
}
let arr=[3,6,8]
a(arr)
