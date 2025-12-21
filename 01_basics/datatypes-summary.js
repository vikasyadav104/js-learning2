//primitive

/// 7 types: string, NUmber, Boolean, null, undefined, Symbol, BigInt

//Referrence(Non primitive)

// Array, objects, fuction 

// Most important javascript is dynamic language it is bcoz we have not define variable for differnet type of data 
//for exmple let a=5
//a="hello"
//a=true 

//SYMBOLLLLL

const id=Symbol('123')
// const anotherId=Symbol('123')
// console.log(id)    //output is Symbol(123)
/*console.log(anotherId)*/
// console.log(typeof id)
// console.log(id===anotherId)   // Here both are not same this is important thing that we should remember
 // type of symbol is symbol

// New thing 
const num =37437947398987484377632752868677n // this is bigint so attach n at ending of number
// console.log(num)

// console.log(typeof num)  // it give bigint as output
// //but if we remove n from the end of num then lets see what we find
// console.log(typeof num)  //it give number


//this is how we define object
let myObj={  //this is how we define object
    name: "vikas",
    age:22,
}
const heros=["Vikas","Atul","Anmol"]; //this is how we define arrray in javascritp
const myFunction=  function(){ //this is how we define a function
    console.log("vikasyadav");
}
console.log(typeof myFunction)
// conclusion is when type of non primitive is always object only function give function but it is actually said to be object function
console.log(typeof myObj)
 console.log(myObj)