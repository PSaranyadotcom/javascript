var p=new Promise(function(resolve,reject){
    var res=false;
    if(res){
    console.log('this is true')
    resolve("prblm resolved")
}
else{
    console.log("this is false")
    reject("problem is there")
}
p.then(function(message){
    console.log(message)
})
.catch(function(message){
    console.log(message)
})
})