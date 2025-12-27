//  const userName=""
//  if(userName){
//     console.log("yes this person has their name")
//  }
//  else{
//     console.log("no,this person has not their name")
//  }

//but on the ther hand
 
 const userName=[] //empty array
 if(userName){
    console.log("yes this person has their name")
 }
 else{
    console.log("no,this person has not their name")
 }

 //this value work as truthy value

 //lets see some value 

 //1-False Values
// false, 0,-0,BigInt (On),"",null,undefined, NaN

//2-True Values

//true,"0",'false'," ",[],{},function(){}

//how to check the array length is  emoty or not
if(userName.length===0){
   console.log("array is empty")
}

//how to check object is empty or not
const emptyObj={}
if(Object.keys(emptyObj).length==0){
   console.log("object is empty")
}

//Object.keys(emptyObj) gives array in which all key is present in array format 


//Null Coalescing Iperator (??) : null undefined
//this operator simply for null and undefined 

let val1;

// val1=5 ?? 10 //it print 5
// val1=null ?? 10 //it print 10 bcoz it neglet null
val1=undefined ?? 15 //it also neglet undefined

console.log(val1) //it print val1


 //Ternary Operator

 //condition ? true: false

 //for example

 const icePrice= 100
 icePrice>=80 ?console.log("less than 80") :  console.log("more than 80")                                               

