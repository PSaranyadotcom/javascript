function div(a,b,cf){
    var z;
    z=a/b;
    cf(z);
}
div(10,3,function(x){
    console.log(x);
})