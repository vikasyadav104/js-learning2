let score="33"
let valueInNumber=Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

//most important thing is they all give number as its type
//"33"=> 33
//"33aqbc"=>NaN
//"true"=> 1 alse "false"=>0
//null=> 0
//undefined=>NaN

let isLoggedIn="33abc"

let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn)

//important thing is type =booolean
//"33"=> true
//"33aqbc"=>true
//null=> false
//undefined=>false

let finalScore
let stringconverter=String(finalScore)
console.log(typeof stringconverter)
console.log(stringconverter)

//important thing is type =string
//33=> "33"
//33aqbc=>"33abs"
//null=> null
//undefined=>undefined

// addd string
let str1="vikas"
let str2="yadav"
console.log(str1.concat(str2))

// code that we should not do

// console.log("1"+2+2)
// console.log(2+3+"4")
// console.log(3+"5"+4)
// console.log(3+2+3)

console.log(+true)
console.log(+"")

// pre incresment and post increament

let sum=5;
let sum1=sum++
let sum2=++sum
console.table([sum,sum1,sum2])