 const score=100
//  console.log(score) //this give 100 as output but not give its type

 const balance=  new Number(100)
//  console.log(balance) // this give 100 as output but also tells us about thier type
 //now similar things in number like string now first i inspect it on brave
// so as we see on brave that it has less number of prototypes

//now study one by one

//convert into string
// console.log(balance.toString())
// console.log(balance.toString().length)
// console.log(balance.toFixed(2)) //this decide how many decimal places will be present

const otherNumber=1123.3956
// console.log(otherNumber.toPrecision(4))

const nestNum=1000000
// console.log(nestNum.toLocaleString()) //it gives commas according to US rule but
// console.log(nestNum.toLocaleString('en-IN')); //it gives commas according to india rule



// +++++++++++++    Maths  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
console.log(Math) //it give empty bracket which means it has multipleprotoypes as we can see in browser  by inspect it
// console.log(Math.sqrt(4))
// console.log(Math.floor(4.2))
// console.log(Math.ceil(4.8))
// console.log(Math.min(2,5,6,7)) //dont forget what kind f bracket use here
// console.log(Math.max(2,5,6,7))

console.log(Math.random())

//If i want random value from 1 to infinity thenn we use this function 
console.log((Math.random()*10)+1) 

//if i want number between two numbers then we use this important formula

//Important Formula
let max=20
let min=10
console.log((Math.random()*(max-min+1))+min)



