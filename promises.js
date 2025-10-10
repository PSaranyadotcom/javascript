let MyPromise = new Promise((resolve, reject) => {
    let x = 10;
   
    setTimeout(function () {  
        if (x % 2 === 0) {
            resolve("True");
        } else {
            reject("False");  
        }
    }, 2000);
 
    console.log("Success")
});
MyPromise
    .then((message) => {
        console.log(message);
        console.log("Successfully running")
   
    })
    .catch((error) => {  
        console.log(error);
    });
 
let prom= new Promise((resolve,reject)=>{
     let x=20;
     setTimeout(function(){
        if(x%2==0){
            resolve("True")
        }else{
            reject("False")
        }
     },2000);
     console.log("Success")
})
prom
.then((message)=>{
    console.log("Successfully running: ",message)
})
.catch((error)=>{
    console.error("Error message: ",error)
})
 
 
function doSomething(){
    console.log("Hello World")
}
setTimeout(doSomething,3000)
 
 
 
 
 
 
 
 
 
let word="World"
let Prom = new Promise((resolve,reject)=>{
    if(word=="World"){
        resolve("Pass")
    }else{
        reject("Fail")
    }
})
Prom
.then((result)=>{
     console.log(result)
})
.catch((error)=>{
     console.error("Error message : ",error)
})
 
 
 
 
 
 
 
