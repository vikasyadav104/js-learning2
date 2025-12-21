 const score=100
 console.log(score) //this give 100 as output but not give its type

 const balance=  new Number(100)
 console.log(balance) // this give 100 as output but also tells us about thier type
 //now similar things in number like string now first i inspect it on brave
// so as we see on brave that it has less number of prototypes

//now study one by one

//convert into string
console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2)) //this decide how many decimal places will be present

const otherNumber=1123.3956
console.log(otherNumber.toPrecision(4))

const nestNum=1000000
console.log(nestNum.toLocaleString()) //it gives commas according to us rule but
console.log(nestNum.toLocaleString('en-IN')); //it gives comamas according to india rule



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//