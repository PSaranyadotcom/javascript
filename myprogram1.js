function funct1(x,cbf){
  console.log("i am f1");
  console.log(x);

}
function funct2(){
  console.log(" i am f2");
}
function cbf(){
  console.log("hi")
}
funct1("hello",funct2);
setTimeout(funct2,5000);