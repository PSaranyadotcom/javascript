
function anagram(str1,str2){
let boolean="true"
let a=str1.toLocaleLowerCase()
let b=str2.toLocaleLowerCase()
if(str1.length!=str2.length){
    boolean="false"
}
let p=a.split(' ').sort().join('')
let m=b.split(' ').sort().join('')
if(p===m){
console.log("anagram")
}
else{
    console.log("not anogram")
}
}
let str1="JOIN"
let str2="NOIJ"
anagram(str1,str2)